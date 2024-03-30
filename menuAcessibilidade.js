// Aumentar, Diminuir e Restaurar o Tamanho da Fonte
window.onload = function () {
    let tamanhoFonte = 100;
    let tamanhDiferenca = 10;
    let btnAumentar = document.getElementById('btnAumentar');
    let numClicks = 0;
    let btnDiminuir = document.getElementById('btnDiminuir');
    let btnOriginal = document.getElementById('btnOriginal');

    // Adicionar eventos de clique para aumentar e diminuir o tamanho da fonte
    btnAumentar.addEventListener('click', function () {
        console.log('Apertou')
        if (numClicks < 4) {
            tamanhoFonte = tamanhoFonte + tamanhDiferenca;
            document.body.style.fontSize = tamanhoFonte + '%';
            numClicks++;
        } else {
            alert('Você atingiu o limite máximo de zoom');
        }
    });

    btnDiminuir.addEventListener('click', function () {
        if (numClicks > -4) {
            tamanhoFonte = tamanhoFonte - tamanhDiferenca;
            document.body.style.fontSize = tamanhoFonte + '%';
            numClicks--;
        } else {
            alert('Você atingiu o limite mínimo de zoom');
        }
    });

    btnOriginal.addEventListener('click', function(){
        numClicks = 0;
        tamanhoFonte = 100;
        document.body.style.fontSize = tamanhoFonte + '%';
    });

    // Função para definir um cookie
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
    }

    // Função para ler um cookie
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim().split('=');
            if (cookie[0] === name) {
                return cookie[1];
            }
        }
        return null;
    }

    // Função para aplicar o tema salvo no cookie
    function applyThemeFromCookie() {
        const theme = getCookie('theme');
        if (theme === 'dark') {
            body.classList.add('dark');
        } else if (theme === 'high-contrast') {
            body.classList.add('high-contrast');
        } else {
            body.classList.remove('dark', 'high-contrast'); // Remover outras classes de tema
        }
    }

    // Aplicar o tema salvo ao carregar a página
    applyThemeFromCookie();

    btnDark.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('dark');
            body.classList.remove('high-contrast');
            setCookie('theme', 'dark', 30);
        } else {
            body.classList.remove('dark');
            setCookie('theme', 'light', 30);
        }
    });

    btnHighContrast.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('high-contrast');
            body.classList.remove('dark');
            setCookie('theme', 'high-contrast', 30); // Salvar o tema high-contrast no cookie por 30 dias
        } else {
            body.classList.remove('high-contrast');
            setCookie('theme', 'light', 30); // Salvar o tema claro no cookie por 30 dias
        }
    });
}

let btnDark = document.getElementById('btnDark');
let btnHighContrast = document.getElementById('high-contrast');
let body = document.body;

btnDark.addEventListener('change', (e) => {
    if (e.target.checked) {
        body.classList.remove('light', 'high-contrast');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark', 'high-contrast');
        body.classList.add('light');
    }
});

btnHighContrast.addEventListener('change', (e) => {
    if (e.target.checked) {
        body.classList.remove('light', 'dark');
        body.classList.add('high-contrast');
    } else {
        body.classList.remove('high-contrast');
        body.classList.add('light');
    }
});

// Função para mostrar/arrastar o Menu de Acessibilidade
function toggleMenu() {
    let button = document.getElementById('btnAcessibilidade');
    let menu = document.getElementById('menuAcessibilidade');
    button.classList.toggle('active');
    menu.classList.toggle('active');
}

// Função para marcar apenas um checkbox de tema por vez
function desmarcarCheckbox(checkboxName) {
    let checkboxes = document.getElementsByName(checkboxName);
    checkboxes.forEach((item) => {
        if (item !== event.target) {
            item.checked = false;
        }
    });
}