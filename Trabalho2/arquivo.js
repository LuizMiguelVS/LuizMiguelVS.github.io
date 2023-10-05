//Algoritmos e Lógica de Prog.
//Luiz Miguel Vicente da Silva - RA 2161392323021
//O problema escolhido foi o cálculo automático dos impostos das Notas Fiscais de Serviço. 
//A solução trará o valor dos impostos retidos e o valor líquido a pagar ao prestador de serviço, de acordo com a tributação e o código de serviço.

function calculoimposto() {
    var brutonf; //Esta variável guarda o valor bruto da nota fiscal de serviço.
    var codserv; //Esta variável guarda o código de serviço prestado.
    var snoumei; //Esta variável guarda a forma de tributação do prestador de serviço.
    var irretido; //Esta variável guarda o valor de Imposto de Renda retido na fonte. Ao qual o tomador de serviço deve pagar ao fisco.
    var csrfretido; //Esta variável guarda o valor de CSRF retido na fonte. Ao qual o tomador de serviço deve pagar ao fisco.
    var inssretido; //Esta variável guarda o valor de INSS retido na fonte. Ao qual o tomador de serviço deve pagar ao fisco.
    var liquidonf; //Esta variável guarda o valor a ser pago ao prestador de serviço (valor bruto subtraindo os impostos retidos).

    window.alert("Informe o valor da NFS");
    brutonf = Number(window.prompt('Enter a value for brutonf'));
    window.alert("Informe se o prestador é optante pelo Simples Nacional ou MEI. (consultar no site https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes.aspx?id=21)");
    snoumei = window.prompt('Enter a value for snoumei');
    if (snoumei == "Sim" || snoumei == "sim" || snoumei == "SIM") {
        window.alert("Prestador optante pelo SN ou MEI. Valor a pagar ao prestador " + " R$ " + brutonf);
    } else {
        window.alert("Informe o número do serviço descrito na tabela");
        codserv = Number(window.prompt('Enter a value for codserv'));
        if (codserv == 7 || codserv == 11 || codserv == 27 || codserv == 34 || codserv == 38 || codserv == 40) {
            irretido = brutonf * 0.015;
            csrfretido = brutonf * 0.0465;
            inssretido = brutonf * 0.11;
            liquidonf = brutonf - irretido - csrfretido - inssretido;
            window.alert("IR retido 1,5% " + " R$ " + irretido);
            window.alert("CSRF retido 4,65% " + " R$ " + csrfretido);
            window.alert("INSS retido 11% " + " R$ " + inssretido);
            window.alert("Valor a pagar ao fornecedor " + " R$ " + liquidonf);
        } else {
            if (codserv == 1 || codserv == 2 || codserv == 4 || codserv == 5 || codserv == 8 || codserv == 17 || codserv == 30 || codserv == 36) {
                irretido = brutonf * 0.015;
                csrfretido = brutonf * 0.0465;
                liquidonf = brutonf - irretido - csrfretido;
                window.alert("IR retido 1,5% " + " R$ " + irretido);
                window.alert("CSRF retido 4,65% " + " R$ " + csrfretido);
                window.alert("Valor a pagar ao fornecedor " + " R$ " + liquidonf);
            } else {
                if (codserv == 10 || codserv == 33) {
                    irretido = brutonf * 0.01;
                    liquidonf = brutonf - irretido;
                    window.alert("IR retido 1% " + " R$ " + irretido);
                    window.alert("Valor a pagar ao fornecedor " + " R$ " + liquidonf);
                } else {
                    window.alert("Código de serviço sem imposto. Valor a pagar ao prestador " + " R$ " + brutonf);
                }
            }
        }
    }
}
