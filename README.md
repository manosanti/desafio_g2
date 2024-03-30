# 🪪 Cadastro de CPF ou CNPJ (Desafio - G2 Tecnologia)

Olá, seja bem-vindo ao desafio! Este projeto é um formulário dinâmico que registra CPF's e CNPJ's, com acessibilidade visual, dicas nos campos e responsividade completa.
Este projeto foi desenvolvolvido usando <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>jQuery</strong>.

## Você pode acessar o sistema por aqui:

<a href="https://desafio-g2.vercel.app/">![desafio-g2-apresentacao](https://github.com/manosanti/desafio_g2/assets/100389856/728d9d0f-542e-4d6e-b32e-44ad451b95b4)
</a>
*todos os dados emitidos são dados puramente fictícios sem vínculos com a realidade <br>
<a href="https://desafio-g2.vercel.app/">Clique aqui, ou na imagem acima para acessar o sistema ☝️.</a>

## 🌐 Tecnologias:
<div class="d-flex">
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
 <li>Para demonstrar proficiência em ambas as abordagens, decidi dividir a base em dois arquivos JavaScript distintos. Um deles contém as funcionalidades gerais do sistema, enquanto o outro trata exclusivamente do menu de acessibilidade. O motivo de eu optar por utilizar JavaScript com a biblioteca jQuery no primeiro arquivo e JavaScript puro (vanilla) no segundo foi exclusivamente para demonstrar proficiência e versatilidade em diferentes casos e contextos como desenvolvedor na linguagem JavaScript.</li>
 <li>O nome das classes estão todos em português (em alguns casos, utilizei poucos termos técnicos em inglês que são bem específicos, por exemplo "form") para melhor compreensão, entendimento e apuração do código. No geral, utilizo o inglês em todos os projetos, porém destaco a minha versatilidade para utilizar o idioma em qual o modelo se encaixar melhor.</li>
</ul>

## 🔎 O que temos no sistema?

<ul>
 <li>No sistema, temos um Input que recebe os valores de CPF e/ou CNPJ digitado pelo usuário, não possui um limite máximo de registro.</li>
<li>Todos os dados informados são salvos no LocalStorage do seu navegador, permitindo que você feche o seu navegador e quando retornar os dados continuem salvos.</li>
<li>Temos 3 temas para serem explorados pelos usuários: Tema Claro, Tema Escuro e Tema de Alto Contraste. Isso torna o nosso sistema acessível para todas as pessoas, garantindo para que todos, independentemente de suas capacidades, consigam utilizar o sistema sem dificuldades.</li>
 <li>Referente aos temas, todos são salvos nos cookies do seu navegador, portanto, ao acessar e/ou recarregar a página, o mesmo tema continuará.</li>
 <li>Temos também uma tabela na qual é renderizada todos os dados CPF ou CNPJ que foram registrado, com uma observação se o campo é referente a um CPF, ou um CNPJ. Dentro da tabela, também temos um ícone de lixeira, utilizado para remover um dado da lista.</li>
</ul>


## 🚫 Você não pode:

<ul>
 <li>Utilizar CPF/CNPJ repetidos, caso contrário retornará um alerta informado que o CPF/CNPJ já existe na lista.</li>
<li>Inserir letras e caracteres especiais no campo de registro, o formulário está formatado para receber apenas caracteres numéricos.</li>
</ul>

## 🌎 Menu de Acessibilidade:
O sistema oferece um menu de acessibilidade visual que permite aos usuários personalizar a experiência de acordo com suas necessidades.

<ul>
 <li><strong>Alternância entre Modo Claro/Escuro:</strong> Permite aos usuários escolher entre diferentes esquemas de cores para conforto visual e legibilidade em diferentes condições de iluminação.</li>
<li><strong>Modo de Alto Contraste:</strong> Oferece uma visualização de alto contraste para facilitar a identificação de elementos na interface, beneficiando usuários com deficiências visuais ou sensibilidade à luz.</li>
<li><strong>Ajuste do Tamanho da Fonte:</strong> Fornece opções para aumentar, diminuir ou restaurar o tamanho da fonte, permitindo aos usuários adaptar a legibilidade de acordo com suas preferências de leitura e necessidades visuais.</li>
</ul>

Todas as cores utilizadas no sistema foram verificadas e validadas através de simuladores de contraste, no meu caso, utilizado este site: <a href="https://corhexa.com/verificador-contraste">CorHexa</a>.
<table>
 <tr>
  <img src="https://github.com/manosanti/desafio_g2/assets/100389856/1c512cdc-3901-4914-b30c-7967f9f63e75" alt="imagem referente a um print do site corhexa, comprovando o teste válido de alto contraste" />
 </tr>
</table>

### 💻 Práticas de Desenvolvimento Web:
Este gráfico representa os resultados de uma análise detalhada do desempenho do sistema. Aqui estão os principais pontos:

## Versão Mobile e Desktop:

<table>
  <tr>
    <td><img src="https://github.com/manosanti/desafio_g2/assets/100389856/5cf2f5da-9534-4002-8171-8d471b27be30" alt="Imagem contendo um relatório de análise geral de desempenho do sistema em versão mobile criado para o desafio da G2 Tecnologia"></td>
    <td><img src="https://github.com/manosanti/desafio_g2/assets/100389856/fe8d3b03-7eb4-41e1-95b3-910c2206f0f4" alt="Imagem contendo um relatório de análise geral de desempenho do sistema em versão desktop criado para o desafio da G2 Tecnologia"></td>
  </tr>
</table>

Você pode acessar os relatórios gerados pelo Google PageSpeed por aqui:
<ul>
 <li><a href="https://pagespeed.web.dev/analysis/https-desafio-g2-vercel-app/gx90q5vbl4?form_factor=desktop">Versão Desktop/Computador:</a></li>
 <li><a href="https://pagespeed.web.dev/analysis/https-desafio-g2-vercel-app/gx90q5vbl4?form_factor=mobile">Versão Mobile/Celular:</a></li>
</ul>
<br>
<ul>
 <li><strong>Performance:</strong> O sistema obteve excelentes pontuações em várias métricas, incluindo velocidade de carregamento, acessibilidade, melhores práticas e SEO.</li>
 <li><strong>Acessibilidade:</strong> A pontuação de acessibilidade é alta, o que significa que o sistema é projetado para ser acessível a todos os usuários, independentemente de suas habilidades ou dispositivos.</li>
 <li><strong>Melhores Práticas:</strong> O sistema segue as melhores práticas recomendadas, garantindo uma experiência consistente e confiável para os usuários.</li>
 <li><strong>SEO:</strong> A otimização para mecanismos de busca (SEO) é sólida, o que pode ajudar a melhorar o ranqueamento nos resultados de pesquisa.</li>
</ul>

Por fim, registro aqui o meu imenso prazer em poder participar deste desafio, através do meu perfil encontra-se informações para contato. Qualquer dúvida, estou a pronta disposição!
