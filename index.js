let quantidadeTabelas = 0
let tabelas = []
const divContainerRaiz_01 = document.getElementById('containerRaiz_01')
const divContainerRaiz_02 = document.getElementById('containerRaiz_02')
const inputNomeColuna = document.getElementById('nomeColuna')
const inputTipo = document.getElementById('tipo')
const inputNomeTabela = document.getElementById('nomeTabela')
const divColunasAdicionadas = document.getElementById('colunasAdicionadas')
const divTabelasExistentes = document.getElementById('tabelasExistentes')

function adicionarColuna() {
    let containerDiv = document.createElement('div')
    containerDiv.style.display = 'flex'
    containerDiv.style.justifyContent = 'space-around'
    let div_1 = document.createElement('div')
    let div_2 = document.createElement('div')
    div_1.innerHTML = inputNomeColuna.value
    div_2.innerHTML = inputTipo.value
    div_1.style.marginTop = '10px'
    div_2.style.marginTop = '10px'
    containerDiv.appendChild(div_1)
    containerDiv.appendChild(div_2)
    divColunasAdicionadas.appendChild(containerDiv)
    inputNomeColuna.value = ''
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
    while(divColunasAdicionadas.firstChild != null) {
        divColunasAdicionadas.removeChild(divColunasAdicionadas.firstChild)
    }
}