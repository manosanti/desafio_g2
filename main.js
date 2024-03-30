class FormValidator {
    constructor() {
        const _this = this;

        $(document).ready(function () {
            _this.loopCadastros();

            $('.dicasCPF').show();
            $('.dicasCNPJ').hide();
            $('#form').attr('placeholder', 'CPF');
            $('#form').attr('maxlength', '14');

            $('.icon').click(function () {
                $('.menu-items').toggle();
            });
        });

        // Evento para formatar CPF ou CNPJ
        $('#form').on('input', function () {
            let cpf_cnpj = $(this).val();
            cpf_cnpj = cpf_cnpj.replace(/\D/g, '');

            if ($('#check').prop('checked')) {
                cpf_cnpj = cpf_cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
                cpf_cnpj = cpf_cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
                cpf_cnpj = cpf_cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
                cpf_cnpj = cpf_cnpj.replace(/(\d{4})(\d)/, '$1-$2');
                
            } else {
                cpf_cnpj = cpf_cnpj.replace(/(\d{3})(\d)/, '$1.$2');
                cpf_cnpj = cpf_cnpj.replace(/(\d{3})(\d)/, '$1.$2');
                cpf_cnpj = cpf_cnpj.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            }

            $(this).val(cpf_cnpj);
        });

        // Evento para alternar entre CPF e CNPJ
        $('#check').on('click', function () {
            const isChecked = $(this).prop('checked');

            $('.dicasCNPJ').hide();

            if (isChecked) {
                $('.dicasCPF').hide();
                $('.dicasCNPJ').show();
                $('#form').attr('placeholder', 'CNPJ');
                $('#form').attr('maxlength', '18');
                $(this).next('label').attr('title', 'Selecionado: CNPJ');
            } else {
                $('.dicasCPF').show();
                $('.dicasCNPJ').hide();
                $('#form').attr('placeholder', 'CPF');
                $('#form').attr('maxlength', '14');
                $(this).next('label').attr('title', 'Selecionado: CPF');
            }
        });

        // Evento para adicionar CPF ou CNPJ
        $('#tableData').on('click', '.btnRemove', function (e) {
            e.preventDefault();

            const id = $(this).data('id');

            let cpf_cnpj_array = JSON.parse(localStorage.getItem('cpf_cnpj')) || [];

            const newCpfCnpjArray = cpf_cnpj_array.filter((item) => item.id !== id);

            localStorage.setItem('cpf_cnpj', JSON.stringify(newCpfCnpjArray));

            _this.loopCadastros();
        });
    }

    // Função para recuperar os CPF's e CNPJ's do localStorage
    recuperarCPFeCNPJ() {
        try {
            const items = localStorage.getItem('cpf_cnpj');
            return items;
        } catch {
            console.log('Erro ao recuperar os dados do localStorage');
        }
    }

    // Função para listar os CPF's e CNPJ's cadastrados
    loopCadastros() {
        let cpf_cnpj_array = JSON.parse(localStorage.getItem('cpf_cnpj')) || [];

        $('#tableData').html('');
        cpf_cnpj_array.forEach((cpf_cnpj) => {
            const html_cpf = this.templateTable(cpf_cnpj);
            $('#tableData').append(html_cpf);
        });
    }

    // Função para Vvalidar CPF ou CNPJ + Salvar lista Atualizada no localStorage
    validarCPFouCNPJ() {
        const form = document.cadastroCPFeCNPJ;
        let cpf_cnpj = form.cpf_cnpj.value.replace(/\D/g, '');
        let cpf_cnpj_array = JSON.parse(localStorage.getItem('cpf_cnpj')) || [];
        const exists = cpf_cnpj_array.some(item => item.number.replace(/\D/g, '') === cpf_cnpj);

        if (exists) {
            alert('CPF/CNPJ já existe na lista.');
            form.reset();
            return false;
        }

        if (cpf_cnpj.length === 11) {
            cpf_cnpj = cpf_cnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
            cpf_cnpj_array.push({
                id: cpf_cnpj_array.length + 1,
                number: cpf_cnpj,
                type: 'CPF'
            });
        } else if (cpf_cnpj.length === 14) {
            cpf_cnpj = cpf_cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
            cpf_cnpj_array.push({
                id: cpf_cnpj_array.length + 1,
                number: cpf_cnpj,
                type: 'CNPJ'
            });
        } else {
            alert('CPF ou CNPJ inválido.');
            return false;
        }

        location.reload();
        localStorage.setItem('cpf_cnpj', JSON.stringify(cpf_cnpj_array));
    }

    // Template para a tabela de cadastros (CPF's e CNPJ's)
    templateTable({ id, number, type }) {
        return `
            <tr>
                <td>${number}</td>
                <td>${type}</td>
                <td data-id="${id}" class="btnRemove" title="Remover Cadastro da Lista"><a href="#!"><i class="fa-solid fa-trash"></i></a></td>
            </tr>
        `
    }
}

const validator = new FormValidator();