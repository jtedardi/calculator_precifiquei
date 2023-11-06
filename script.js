// Função para alternar entre temas
function toggleTheme() {
    const body = document.body;

    // Verifica se o tema atual é dark ou light
    if (body.classList.contains('dark-theme')) {
        // Se for dark, muda para light
        body.classList.remove('dark-theme');
    } else {
        // Se for light, muda para dark
        body.classList.add('dark-theme');
    }
}

// Função para atualizar as opções de margem de lucro com base no tipo de negócio
function atualizarMargemLucro() {
    const tipoNegocioSelect = document.getElementById('tipoNegocio');
    const margemLucroSelect = document.getElementById('margemLucro');

    // Remove todas as opções atuais
    margemLucroSelect.innerHTML = "";

    // Obtém o tipo de negócio selecionado
    const tipoNegocio = tipoNegocioSelect.value;

    // Adiciona as novas opções com base no tipo de negócio selecionado
    switch (tipoNegocio) {
        case "servicos":
            for (let i = 1; i <= 100; i++) {
                margemLucroSelect.add(new Option(i + "%", i));
            }
            break;
        case "comercio":
            for (let i = 1; i <= 100; i++) {
                margemLucroSelect.add(new Option(i + "%", i));
            }
            break;
        case "industria":
            for (let i = 1; i <= 100; i++) {
                margemLucroSelect.add(new Option(i + "%", i));
            }
            break;
    }

}

// Função para calcular
function calcular() {
    const custosDiretosInput = document.getElementById('custosDiretos');
    const custosIndiretosInput = document.getElementById('custosIndiretos');
    const custosFixosInput = document.getElementById('custosFixos');
    const custosVariaveisInput = document.getElementById('custosVariaveis');
    const despesasFixasInput = document.getElementById('despesasFixas');
    const despesasVariaveisInput = document.getElementById('despesasVariaveis');
    const margemLucroSelect = document.getElementById('margemLucro');
    const quantidadeInput = document.getElementById('quantidade');

    // Obtém os valores dos inputs como números ou define 0 se estiverem vazios
    const custosDiretos = parseFloat(custosDiretosInput.value) || 0;
    const custosIndiretos = parseFloat(custosIndiretosInput.value) || 0;
    const custosFixos = parseFloat(custosFixosInput.value) || 0;
    const custosVariaveis = parseFloat(custosVariaveisInput.value) || 0;
    const despesasFixas = parseFloat(despesasFixasInput.value) || 0;
    const despesasVariaveis = parseFloat(despesasVariaveisInput.value) || 0;
    const margemLucro = parseFloat(margemLucroSelect.value) || 0;
    const quantidade = parseFloat(quantidadeInput.value) || 0;

    // Calcula o preço de venda com base na margem de lucro selecionada
    const precoVenda = ((custosDiretos + custosIndiretos + custosFixos + custosVariaveis + despesasVariaveis + despesasFixas) * (1 + margemLucro / 100));

    // Calcula a soma dos custos e despesas
    const somaCustosDespesas = custosDiretos + custosIndiretos + custosFixos + custosVariaveis + despesasFixas + despesasVariaveis;

    // Calcula o preço total
    const precoTotal = precoVenda * quantidade;

    // Função para formatar um número para o formato BRL
    function formatarReal(numero) {
        return numero.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        });
    }

    // Exibe os resultados
    document.getElementById('resultado').textContent = `Margem de Lucro Selecionada: ${margemLucro}%`;
    document.getElementById('somaCustosDespesas').textContent = `Soma dos Custos e Despesas: R$ ${somaCustosDespesas.toFixed(2)}`;
    document.getElementById('precoVenda').textContent = `Preço Unitário Sugerido: R$ ${precoVenda.toFixed(2)}`;
    document.getElementById('precoTotal').textContent = `Preço Total Sugerido: R$ ${precoTotal.toFixed(2)}`;
}

// Inicializa as opções de margem de lucro com base no tipo de negócio padrão
atualizarMargemLucro();

// Obtém o botão de alternância de tema
const themeToggleBtn = document.getElementById('theme-toggle');

// Adiciona um ouvinte de evento para o clique no botão
themeToggleBtn.addEventListener('click', toggleTheme);
