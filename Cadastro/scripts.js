function getById(id) {
    return document.getElementById(id)
}

const outratabela = getById('listas');
const seletorTema = getById('selecao');
const botaoadicionar = getById('botao1');
const botaoesvaziar = getById('esvaziar');
const mostrarmesagem = getById('resultado1');

botaoadicionar.addEventListener('click', () => {
    const inputnome = getById('nome');
    const inputcategoria = getById('categoria');
    const inputoutrodado = getById('outrodado');

    const nome = inputnome.value.trim();
    const categoria = inputcategoria.value.trim();
    const outrodado = inputoutrodado.value.trim();

    if (!nome && !categoria && !outrodado) {
        return;
    }

    if (botaoadicionar) {
        mostrarmesagem.style.display = 'block';
        mostrarmesagem.classList.add('mostrar');

        setTimeout(() => {
            mostrarmesagem.classList.remove('mostrar');
            setTimeout(() => {
                mostrarmesagem.style.display = 'none';
            }, 500);
        }, 3000);
    }

    const novaLinha = document.createElement('tr');

    const tdNome = document.createElement('td');
    tdNome.textContent = nome;
    novaLinha.appendChild(tdNome);

    const tdCategoria = document.createElement('td');
    tdCategoria.textContent = categoria;
    novaLinha.appendChild(tdCategoria);

    const tdOutroDado = document.createElement('td');
    tdOutroDado.textContent = outrodado;
    novaLinha.appendChild(tdOutroDado);

    const tdAcoes = document.createElement('td');
    tdAcoes.className = 'botoesacao';

    const botaoConcluir = document.createElement('button');
    botaoConcluir.className = 'concluir';
    botaoConcluir.textContent = 'Concluir';

    const botaoRemover = document.createElement('button');
    botaoRemover.className = 'remover';
    botaoRemover.textContent = 'Remover';

    tdAcoes.appendChild(botaoConcluir);
    tdAcoes.appendChild(botaoRemover);

    novaLinha.appendChild(tdAcoes);

    outratabela.appendChild(novaLinha);

    inputnome.value = '';
    inputcategoria.value = '';
    inputoutrodado.value = '';

    botaoRemover.addEventListener('click', () => {
        novaLinha.remove();
    });
    
    botaoConcluir.addEventListener('click', (e) => {
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

if (botaoesvaziar) {
    botaoesvaziar.addEventListener('click', () => {
        outratabela.innerHTML = '';
    });
}

seletorTema.addEventListener('change', (e) => {
    const tema = e.target.value;
    document.body.className = '';
    if (tema !== "padrao") {
        document.body.classList.add(`tema-${tema}`);
    }
});