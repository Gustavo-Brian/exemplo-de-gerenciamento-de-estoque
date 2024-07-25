let quantidadeTabelas = 0
let tabelas = []
const divContainerRaiz_01 = document.getElementById('containerRaiz_01')
const divContainerRaiz_02 = document.getElementById('containerRaiz_02')
const inputNomeColuna = document.getElementById('nomeColuna')
const inputTipo = document.getElementById('tipo')
const colunasAdicionadasSubparte_01 = document.getElementById('colunasAdicionadasSubparte_01')
const colunasAdicionadasSubparte_02 = document.getElementById('colunasAdicionadasSubparte_02')
const colunasAdicionadasSubparte_03 = document.getElementById('colunasAdicionadasSubparte_03')
const colunasAdicionadasSubparte_04 = document.getElementById('colunasAdicionadasSubparte_04')
const inputNomeTabela = document.getElementById('nomeTabela')
const tabelasExistentesSubparte_01 = document.getElementById('tabelasExistentesSubparte_01')
const tabelasExistentesSubparte_02 = document.getElementById('tabelasExistentesSubparte_02')

function adicionarColuna() {
    //Condição de criação
    if(inputNomeColuna.value == '') {
        return 0
    }

    //Criação dos elementos
    let p_1 = document.createElement('p')
    let p_2 = document.createElement('p')
    let btn_1 = document.createElement('button')
    let btn_2 = document.createElement('button')
    
    //Atribuição das classes aos respectivos elementos
    p_1.classList.add('p_1')
    p_2.classList.add('p_2')
    btn_1.classList.add('btn_1')
    btn_2.classList.add('btn_2')

    //Definição dos textos internos dos elementos
    p_1.innerHTML = inputNomeColuna.value
    p_2.innerHTML = inputTipo.value
    btn_1.innerHTML = 'del'
    btn_2.innerHTML = 'edit'

    //Atribuição das funções dos botões
    btn_1.addEventListener('click', removerElementoSelecionado(p_1, p_2, btn_1, btn_2))

    //Inserção dos elementos em seus respectivos containers
    colunasAdicionadasSubparte_01.appendChild(p_1)
    colunasAdicionadasSubparte_02.appendChild(p_2)
    colunasAdicionadasSubparte_03.appendChild(btn_1)
    colunasAdicionadasSubparte_04.appendChild(btn_2)

    //Redefinição do nome da coluna
    inputNomeColuna.value = ''
}   

function removerElementoSelecionado(el1, el2, el3, el4) {
    return function() {
        colunasAdicionadasSubparte_01.removeChild(el1)
        colunasAdicionadasSubparte_02.removeChild(el2)
        colunasAdicionadasSubparte_03.removeChild(el3)
        colunasAdicionadasSubparte_04.removeChild(el4)
    }
}

function criarTabela() {
    let tabela = document.createElement('table')
    tabela.style.color = 'white'
    let caption = document.createElement('caption')
    caption.innerHTML = inputNomeTabela.value
    divTabelasExistentes.innerHTML += inputNomeTabela.value + '\n'
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')
    let tfoot = document.createElement('tfoot')
    let linha = document.createElement('tr')
    Array.from(divColunasAdicionadas.children).map(
        (el) => {
            col = document.createElement('th')
            col.innerHTML = ' (' + el.children[1].innerHTML + ' | ' + el.children[0].innerHTML + ') '
            linha.appendChild(col)
        }
    )
    thead.appendChild(caption)
    thead.appendChild(linha)
    tabela.appendChild(thead)
    tabela.appendChild(tbody)
    tabela.appendChild(tfoot)
    divContainerRaiz_02.appendChild(tabela)
    tabelas.push(tabela)
    limparColunasAdicionadas()
    inputNomeTabela.value = ''
}

function adicionarElementoNaTabela() {

}

function limparColunasAdicionadas() {
    while(colunasAdicionadasSubparte_01.firstChild != null) {
        colunasAdicionadasSubparte_01.removeChild(colunasAdicionadasSubparte_01.firstChild)
        colunasAdicionadasSubparte_02.removeChild(colunasAdicionadasSubparte_02.firstChild)
        colunasAdicionadasSubparte_03.removeChild(colunasAdicionadasSubparte_03.firstChild)
        colunasAdicionadasSubparte_04.removeChild(colunasAdicionadasSubparte_04.firstChild)
    }
}