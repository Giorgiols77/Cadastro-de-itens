function getById(id) {
    return document.getElementById(id)
}

const outratabela = getById('listas');
const seletorTema = getById('selecao');
const botaoadicionar = getById('botao1');

botaoadicionar.addEventListener('click', () => {
    const inputnome = getById('nome');
    const inputcategoria = getById('categoria');
    const inputoutrodado = getById('outrodado');

    const nome = inputnome.value.trim();
    const categoria = inputcategoria.value.trim();
    const outrodado = inputoutrodado.value.trim();

    if (!nome && !categoria && !outrodado) return;

    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${categoria}</td>
        <td>${outrodado}</td>
        <td class="botoesacao">
            <button class="concluir">Concluir</button>
            <button class="remover">Remover</button>
        </td>
    `;

    outratabela.appendChild(novaLinha);

    inputnome.value = '';
    inputcategoria.value = '';
    inputoutrodado.value = '';

    novaLinha.querySelector('.remover').addEventListener('click', () => {
        novaLinha.remove();
    });
    
    novaLinha.querySelector('.concluir').addEventListener('click', (e) => {
        const linha = e.target.closest('tr');
        linha.classList.toggle('concluido');

        const botao = e.target;
        if (linha.classList.contains('concluido')) {
            botao.textContent = 'Desfazer';
            botao.style.backgroundColor = '#ff9800';
        } else {
            botao.textContent = 'Concluir';
            botao.style.backgroundColor = '#4CAF50';
        }
    });
});

seletorTema.addEventListener('change', (e) => {
    const tema = e.target.value;
    document.body.className = ''; // limpar classes existentes corretamente
    if (tema !== "padrao") {
        document.body.classList.add(`tema-${tema}`);
    }
});