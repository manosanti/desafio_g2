class FormValidator {
    constructor() {
        const _this = this;

        $(document).ready(function(){
            _this.loop_cpfs();
        });

        $('#form').on('input', function() {
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
        

        $('#check').on('click', function(){
            const isChecked = $(this).prop('checked');
            
            $('.cnpjTips').hide();

            if (isChecked) {
                $('.cpfTips').hide();
                $('.cnpjTips').show();
                $('#form').attr('placeholder', 'CNPJ');
                $('#form').attr('maxlength', '18');
            } else {
                $('.cpfTips').show();
                $('.cnpjTips').hide();
                $('#form').attr('placeholder', 'CPF');
                $('#form').attr('maxlength', '14');
            }
        });

        $('#tableData').on('click', '.btnRemove', function(e){
            e.preventDefault();
            console.log('Você clicou em um botão');
            
            const id = $(this).data('id');

            let cpf_cnpj_array = JSON.parse(localStorage.getItem('cpf_cnpj')) || [];

            const newCpfCnpjArray = cpf_cnpj_array.filter((item) => item.id !== id);

            localStorage.setItem('cpf_cnpj', JSON.stringify(newCpfCnpjArray));

            _this.loop_cpfs();
        });
    }

    getCPFandCNPJ() {
        try {
            const items = localStorage.getItem('cpf_cnpj');
            return items;
        } catch {
            console.log('Erro ao recuperar os dados do localStorage');
        }
    }

    loop_cpfs() {
        let cpf_cnpj_array = JSON.parse(localStorage.getItem('cpf_cnpj')) || [];

        $('#tableData').html('');
        cpf_cnpj_array.forEach((cpf_cnpj) => {
            const html_cpf = this.templateTable(cpf_cnpj);
            $('#tableData').append(html_cpf);
        });
    }    

    validateCPForCNPJ() {
        const form = document.register_cpf_cnpj;
        let cpf_cnpj = form.cpf_cnpj.value.replace(/\D/g, ''); // Remove tudo o que não é dígito
    
        let cpf_cnpj_array = JSON.parse(localStorage.getItem('cpf_cnpj')) || [];
    
        const exists = cpf_cnpj_array.some(item => item.number === cpf_cnpj);
    
        if (exists) {
            alert('CPF/CNPJ já existe na lista.');
            form.reset();
            return;
        }
    
        if(cpf_cnpj.length === 11) {
            cpf_cnpj = cpf_cnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
            cpf_cnpj_array.push({id: cpf_cnpj_array.length + 1, number: cpf_cnpj, type: 'CPF'});
            console.log('CPF');
        } else if (cpf_cnpj.length === 14) {
            cpf_cnpj = cpf_cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
            cpf_cnpj_array.push({id: cpf_cnpj_array.length + 1, number: cpf_cnpj, type: 'CNPJ'});
            console.log('CNPJ');
        } else {
            alert('CPF ou CNPJ inválido.');
            return false;
        }
    
        location.reload();
        localStorage.setItem('cpf_cnpj', JSON.stringify(cpf_cnpj_array));
    }    

    templateTable({id, number, type}) {
        return `
            <tr>
                <td>${number}</td>
                <td>${type}</td>
                <td data-id="${id}" class="btnRemove"><a href="#!"><i class="fa-solid fa-trash"></i></a></td>
            </tr>
        `
    }
}

const validator = new FormValidator();