//Variáveis de controle
let quantidadeTabelas = 0
let tabelas = []

//Constantes que representam os elementos manipulados
const inputNomeColuna = document.getElementById('nomeColuna')
const inputTipo = document.getElementById('tipo')
const colunasAdicionadasSubparte_01 = document.getElementById('colunasAdicionadasSubparte_01')
const colunasAdicionadasSubparte_02 = document.getElementById('colunasAdicionadasSubparte_02')
const colunasAdicionadasSubparte_03 = document.getElementById('colunasAdicionadasSubparte_03')
const colunasAdicionadasSubparte_04 = document.getElementById('colunasAdicionadasSubparte_04')
const inputNomeTabela = document.getElementById('nomeTabela')
const tabelasExistentesSubparte_01 = document.getElementById('tabelasExistentesSubparte_01')
const tabelasExistentesSubparte_02 = document.getElementById('tabelasExistentesSubparte_02')

//Função para a adição de uma nova coluna
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

    //Atribuição de textos internos aos elementos
    p_1.innerHTML = inputNomeColuna.value
    p_2.innerHTML = inputTipo.value
    btn_1.innerHTML = 'del'
    btn_2.innerHTML = 'edit'

    //Atribuição das funções aos botões
    btn_1.addEventListener('click', () => removerLinhaSelecionada(p_1, p_2, btn_1, btn_2))
    btn_2.addEventListener('click', () => editarLinhaSelecionada(p_1, p_2, btn_1, btn_2))

    //Inserção dos elementos em seus respectivos containers
    colunasAdicionadasSubparte_01.appendChild(p_1)
    colunasAdicionadasSubparte_02.appendChild(p_2)
    colunasAdicionadasSubparte_03.appendChild(btn_1)
    colunasAdicionadasSubparte_04.appendChild(btn_2)

    //Redefinição do nome da coluna
    inputNomeColuna.value = ''
}   

//Função para remoção dos elementos de uma linha
function removerLinhaSelecionada(el1, el2, el3, el4) {
    //Remoção dos elementos
    colunasAdicionadasSubparte_01.removeChild(el1)
    colunasAdicionadasSubparte_02.removeChild(el2)
    colunasAdicionadasSubparte_03.removeChild(el3)
    colunasAdicionadasSubparte_04.removeChild(el4)
}

//Função para edição dos elementos de uma linha
function editarLinhaSelecionada(el1, el2, el3, el4) {
    //Atribuição dos valores aos inputs
    inputNomeColuna.value = el1.innerHTML
    inputTipo.value = el2.innerHTML   
    
    //Chamada de função, para remover os elementos da linha
    removerLinhaSelecionada(el1, el2, el3, el4)
}   

function criarTabela() {
   
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