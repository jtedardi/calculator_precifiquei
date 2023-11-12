// Função para alternar entre temas
function toggleTheme() {
    const body = document.body;

    // Verifica se o tema atual é dark ou light
    if (body.classList.contains('tema-escuro')) {
        // Se for dark, muda para light
        body.classList.remove('tema-escuro');
        body.classList.add('tema-claro');
    } else {
        // Se for light, muda para dark
        body.classList.remove('tema-claro');
        body.classList.add('tema-escuro');
    }
}
// Função para exibir informações ao passar o mouse sobre um campo
function exibirInfoCampo(idCampo, mensagem) {
    $(idCampo).after(`<button class="btn btn-info btn-interrogacao" data-bs-toggle="tooltip" title="${mensagem}"><i class="fas fa-question-circle"></i></button>`);
}

// Chamada da função exibir detalhes para cada campo
$(document).ready(function () {
    exibirInfoCampo('#custosDiretos', 'São considerados custos diretos, todo e qualquer gasto ocorrido diretamente na fabricação do serviço ou produto oferecido. Ex: Energia elétrica utilizada na fábrica; Matéria prima consumida.');
    exibirInfoCampo('#custosIndiretos', 'Sendo o oposto dos custos diretos, são considerados custos indiretos todo e qualquer gasto ocorrido indiretamente na fabricação do serviço ou produto oferecido. Ex: Salários de supervisores da produção; Material de limpeza utilizado na fábrica.');
    exibirInfoCampo('#custosFixos', 'São considerados custos fixos, todo e qualquer gasto cujo seu valor mensurável não possua variação em relação a quantidade produzida no período analisado.');
    exibirInfoCampo('#custosVariaveis', 'Sendo o oposto dos custos fixos, são considerados custos variáveis todo e qualquer gasto cujo seu valor mensurável possua variação em relação a quantidade produzida no período analisado.');
    exibirInfoCampo('#despesasFixas', 'São consideradas despesas fixas, todo e qualquer gasto cujo seu valor mensurável não possua variação em relação a quantidade produzida, ocorrido em ambiente que não esteja relacionado a fabricação do serviço ou produto oferecido. Ex: Energia elétrica utilizada em escritórios; Material de expediente.');
    exibirInfoCampo('#despesasVariaveis', 'Sendo o oposto das despesas fixas, são consideradas despesas variáveis todo e qualquer gasto cujo seu valor mensurável possua variação em relação a quantidade produzida, ocorrido em ambiente que não esteja relacionado a fabricação do serviço ou produto oferecido. Ex: Viagens corporativas; Bônus e comissões comerciais.');
    exibirInfoCampo('#tipoNegocio', 'O tipo de negócio está relacionado ao tipo de mercado/nicho cujo a sua empresa irá figurar.');
    exibirInfoCampo('#margemLucro', 'A margem de lucro está relacionada ao percentual desejado de lucro.');
    exibirInfoCampo('#regimeTribut', 'O regime tributário está relacionado ao regime adotado economicamente pela sua empresa para apuração e consequentemente, o recolhimento de impostos.');
    exibirInfoCampo('#margemTribut', 'A margem tributária é adotada para traduzir o percentual efetivamente pago de impostos sobre receitas, serviços prestados, mercadoria vendida e produto industrializado. Considere deduzir os créditos tributários sobre os valores de débitos tributários para apurar a tributação líquida sobre o preço desejado.');
    exibirInfoCampo('#quantidade', 'Neste campo, iremos inserir a quantidade para adotar um preço sobre uma cotação com mais de 1,00 item produzido, vendido e/ou serviço prestado.');
});

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
                margemLucroSelect.add(new Option(`${i.toFixed(2)}%`, i));
            }
            break;
        case "comercio":
            for (let i = 1; i <= 100; i++) {
                margemLucroSelect.add(new Option(`${i.toFixed(2)}%`, i));
            }
            break;
        case "industria":
            for (let i = 1; i <= 100; i++) {
                margemLucroSelect.add(new Option(`${i.toFixed(2)}%`, i));
            }
            break;
    }
}

// Função para atualizar as opções de margem tributária com base no regime tributário
function atualizarMargemTribut() {
    const regimeTributSelect = document.getElementById('regimeTribut');
    const margemTributSelect = document.getElementById('margemTribut');

    // Remove todas as opções atuais
    margemTributSelect.innerHTML = "";

    // Obtém o regime tributário selecionado
    const regimeTribut = regimeTributSelect.value;

    // Adiciona as novas opções com base no regime tributário selecionado
    switch (regimeTribut) {
        case "simplesnacional":
            for (let i = 1; i <= 100; i++) {
                margemTributSelect.add(new Option(`${i.toFixed(2)}%`, i));
            }
            break;
        case "lucropresumido":
            for (let i = 1; i <= 100; i++) {
                margemTributSelect.add(new Option(`${i.toFixed(2)}%`, i));
            }
            break;
        case "lucroreal":
            for (let i = 1; i <= 100; i++) {
                margemTributSelect.add(new Option(`${i.toFixed(2)}%`, i));
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
    const margemTributSelect = document.getElementById('margemTribut');
    const quantidadeInput = document.getElementById('quantidade');

    // Obtém os valores dos inputs como números ou define 0 se estiverem vazios
    const custosDiretos = parseFloat(custosDiretosInput.value) || 0;
    const custosIndiretos = parseFloat(custosIndiretosInput.value) || 0;
    const custosFixos = parseFloat(custosFixosInput.value) || 0;
    const custosVariaveis = parseFloat(custosVariaveisInput.value) || 0;
    const despesasFixas = parseFloat(despesasFixasInput.value) || 0;
    const despesasVariaveis = parseFloat(despesasVariaveisInput.value) || 0;
    const margemLucro = parseFloat(margemLucroSelect.value) || 0;
    const margemTribut = parseFloat(margemTributSelect.value) || 0;
    const quantidade = parseFloat(quantidadeInput.value) || 0;

    // Calcula a soma dos custos e despesas
    const somaCustosDespesas = ((custosDiretos + custosIndiretos + custosFixos + custosVariaveis + despesasFixas + despesasVariaveis) * (1 + margemTribut / 100));

    // Calcula o preço de venda com base na margem de lucro selecionada
    const precoVenda = (somaCustosDespesas * (1 + margemLucro / 100));

    // Calcula o preço total com a margem tributária selecionada
    const precoTotal = precoVenda * quantidade

    // Função para formatar um número para o formato BRL
    function formatarReal(numero) {
        return numero.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        });
    }

    // Adicione essas linhas antes da exibição dos resultados
    console.log('Custos e Despesas:', resultado);
    console.log('Soma dos Custos e Despesas:', somaCustosDespesas);
    console.log('Margem Tributária Selecionada:', margemTributResultado);
    console.log('Preço de Venda:', precoVenda);
    console.log('Preço Total:', precoTotal);

    // Exibe os resultados
    document.getElementById('resultado').textContent = `Margem de Lucro Selecionada: ${margemLucro}%`;
    document.getElementById('somaCustosDespesas').textContent = `Soma dos Custos e Despesas: ${formatarReal(somaCustosDespesas)}`;
    document.getElementById('margemTributResultado').textContent = `Margem Tributária Selecionada: ${margemTribut}%`;
    document.getElementById('precoVenda').textContent = `Preço Unitário Sugerido: ${formatarReal(precoVenda)}`;
    document.getElementById('precoTotal').textContent = `Preço Total Sugerido: ${formatarReal(precoTotal)}`;

    // Criar elementos para exibir resultados
    const resultadoElement = document.createElement('div');
    const somaCustosDespesasElement = document.createElement('div');
    const margemTributElement = document.createElement('div');
    const precoVendaElement = document.createElement('div');
    const precoTotalElement = document.createElement('div');

    // Atualizar o conteúdo dos elementos
    resultadoElement.textContent = `Margem de Lucro Selecionada: ${margemLucro}%`;
    somaCustosDespesasElement.textContent = `Soma dos Custos e Despesas: ${formatarReal(somaCustosDespesas)}`;
    margemTributElement.textContent = `Margem Tributária Selecionada: ${margemTribut}%`;
    precoVendaElement.textContent = `Preço Unitário Sugerido: ${formatarReal(precoVenda)}`;
    precoTotalElement.textContent = `Preço Total Sugerido: ${formatarReal(precoTotal)}`;

    // Limpar o conteúdo anterior
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('somaCustosDespesas').innerHTML = '';
    document.getElementById('margemTributResultado').innerHTML = '';
    document.getElementById('precoVenda').innerHTML = '';
    document.getElementById('precoTotal').innerHTML = '';

    // Anexar os novos elementos ao DOM
    document.getElementById('resultado').appendChild(resultadoElement);
    document.getElementById('somaCustosDespesas').appendChild(somaCustosDespesasElement);
    document.getElementById('margemTributResultado').appendChild(margemTributElement);
    document.getElementById('precoVenda').appendChild(precoVendaElement);
    document.getElementById('precoTotal').appendChild(precoTotalElement);
}

// Inicializa as opções de margem de lucro com base no tipo de negócio padrão
atualizarMargemLucro();

// Inicializa as opções de margem tributária com base no regime tributário padrão
atualizarMargemTribut();

// Obtém o botão de alternância de tema
const themeToggleBtn = document.getElementById('theme-toggle');

// Adicionar ou remover classe para alternar entre os temas
body.classList.toggle('tema-escuro');
body.classList.toggle('tema-claro');

// Adiciona um ouvinte de evento para o clique no botão
themeToggleBtn.addEventListener('click', toggleTheme);
