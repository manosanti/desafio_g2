// Menu Acessibilidade - Modo Escuro

const btn = document.getElementById('btn');
const body = document.body;

btn.addEventListener('change', (e) => {
    // document.body.classList.toggle('dark', e.target.checked);

    if (e.target.checked) {
        body.classList.remove('light', 'high-contrast');        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }
})

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

// const btn = document.getElementById('btn');
// const body = document.body;

// Função para aplicar o tema salvo no cookie
function applyThemeFromCookie() {
    const theme = getCookie('theme');
    if (theme === 'dark') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
}

// Aplicar o tema salvo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    applyThemeFromCookie();
});

// Adicionar evento de mudança para alternar o tema e salvar no cookie
btn.addEventListener('change', (e) => {
    if (e.target.checked) {
        body.classList.add('dark');
        setCookie('theme', 'dark', 30); // Salvar o tema escuro no cookie por 30 dias
    } else {
        body.classList.remove('dark');
        setCookie('theme', 'light', 30); // Salvar o tema claro no cookie por 30 dias
    }
});
