# 🪪 Cadastro de CPF ou CNPJ (Desafio - G2 Tecnologia)

Olá, seja bem-vindo ao desafio! Este projeto é um formulário dinâmico que registra CPF's e CNPJ's, com acessibilidade visual, dicas nos campos e responsividade completa.
Este projeto foi desenvolvolvido usando <strong>Bootstrap 5.3</strong>, <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>jQuery</strong>.

## Você pode acessar o sistema por aqui:

<a href="https://tesla-finance-bank.vercel.app">![desafio-g2-apresentacao](https://github.com/manosanti/desafio_g2/assets/100389856/728d9d0f-542e-4d6e-b32e-44ad451b95b4)
</a>
*todos os dados emitidos são dados puramente fictícios sem vínculos com a realidade <br>
<a href="https://tesla-finance-bank.vercel.app">Clique aqui, ou na imagem acima para acessar o sistema ☝️.</a>

## 🌐 Tecnologias:
<div class="d-flex">
 <img src="https://camo.githubusercontent.com/c6a8e6bb10bfad37e21a5f9aa8cc365819a02ef8997972e10a333ed9be5f47e0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f626f6f7473747261702d2532333835313146412e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465" alt="bootstrap imagem" />
 <img src="https://camo.githubusercontent.com/5e7e215d9ff3a7c2e96d09232c11b2205565c841d1129dd2185ebd967284121f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" alt="html imagem" />
 <img src="https://camo.githubusercontent.com/6531a4161596e3d9fdab3d0499a7b7ce5c5c8b568be219f3e9707af042e575d2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" alt="css imagem" />
 <img src="https://camo.githubusercontent.com/53ec2e58e03ba275d9b3a386abd96a243cf744a1a7121bdf8262fc8ae6ebc335/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145" alt="javascript imagem" />
  <img src="https://camo.githubusercontent.com/a57a9d81e0d6ff9eb70a3ed5f41916038f384f1965688ddb4ccfeaf6da5c2eef/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a71756572792d2532333037363941442e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a7175657279266c6f676f436f6c6f723d7768697465" alt="jquery imagem" />
</div>

## 🛠️ Pré Requisitos:

Não é necessário ter nenhuma dependência externa para utilizar este sistema, você pode acessá-lo através do link compartilhado, ou então clonando este repositório, para isso, siga os seguintes passos:

```bash
git clone https://github.com/manosanti/desafio_g2.git
```

Execute o sistema em Localhost, pronto, aproveite!

## 📝 Sobre o código:

Antes de mais nada, gostaria de destacar algumas observações do sistema.

<ul>
 <li>Temos dois arquivos de código JavaScript separados. Em um, temos um código geral, associado a todas as funções gerais do sistema. Em outro, temos um código referente ao menu de acessibilidade. No geral, o código está escrito em JavaScript jQuery, enquanto o código de menu de acessibilidade está em javascript vanilla (puro)</li>
 <li>O nome das classes estão em português para melhor compreensão e entendimento do código. O meu padrão é utilizar todos os nomes de classes, funções e etc em inglês, estou apenas ressaltando o motivo do código estar em português-br.</li>
</ul>

# 🔎 O que temos no sistema?

<ul>
 <li>No sistema, temos um Input que recebe os valores de CPF e/ou CNPJ digitado pelo usuário, não possui um limite máximo de registro, nem minimo.</li>
<li>Todos os dados informados são salvos no LocalStorage do seu navegador, permitindo que você feche o seu navegador e quando retornar os dados continuam salvo.</li>
<li>Temos 3 temas para serem explorado pelo usuários: Tema Claro, Tema Escuro, Tema de Alto Contraste. Isso torna o nosso sistema acessível para todas as pessoas, garantindo para que todos, independentemente de suas capacidades, consigam utilizar o formulário sem dificuldades.</li>
</ul>


## 🚫 Você não pode:

Utilizar CPF/CNPJ repetidos, caso contrário retornará um alerta informado que o CPF/CNPJ já existe na lista;
