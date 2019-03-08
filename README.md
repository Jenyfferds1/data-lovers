# Data Lovers

## Índice

* [Preâmbulo](#preâmbulo)
* [Descrição](#resumo-do-projeto)
* [Parte obrigatória](#parte-obrigatória)
* [Parte opcional](#parte-opcional-hacker-edition)
* [Primeiros passos](#primeiros-passos)
* [Conteúdo de referência](#conteúdo-de-referência)
* [Checklist](#checklist)

***

## Preâmbulo

Segundo um [estudo da IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
90% dos dados que existem hoje foram criados durante os últimos dois anos.
A cada dia geramos 2,5 trilhões de bytes de dados, uma cifra sem precedentes.
Apesar disso, os dados por sozinhos são de pouca utilidade. Para que essas
grandes quantidades de dados se convertam em **informação** fácil de ler para
os usuários, temos que entendê-los e processá-los. Uma maneira simples
de se fazer isso seria criando _interfaces_ e _visualizações_.
Na seguinte imagem, você pode ver de que forma, com os dados que vemos na parte
esquerda, é possível construir uma interface amigável e legível para o usuário.

![json-interface](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

Você pode ver os detalhes dos dados neste [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
e a interface construída neste [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## Resumo do projeto

Neste projeto **você desenvolverá uma _página web_ para visualizar um
_conjunto (set) de dados_** que se adeque ao que seu usuário necessita.
Fornecemos a vocês uma série de dados de diferentes _temáticas_
para que explore e decida com o que gostaria de trabalhar. Nós elegemos
especificamente estes sets de dados porque acreditamos que se adequem bem a esta
etapa de sua aprendizagem.
Uma vez definida sua área de interesse, entenda quem é seu usuario e o que ele
necessita saber ou ver exatamente; assim já poderá criar uma interface que o
ajude a interagir e entender melhor os dados.

* [Indicadores de desenvolvimento](src/data/worldbank/worldbank.json):
  Indicadores de desenvolvimento do Banco Mundial de alguns países (Brasil, Chile, México e Peru). Estes dados incluim indicadores
  demográficos, econômicos e comerciais.

Como produto final você terá que criar uma página web que permita **visualizar
os dados, filtrá-los, ordená-los e fazer algum cálculo agregado**. Como esclarecimento,
ao falar de cálculo agregado, nos referimos a diferentes cálculos que se pode fazer
com os dados e trazer informações ainda mais relevantes para o usuário. Uma opção
seriam cálculos estatísticos com média, mínimo e máximo. Por exepmplo, se temos
uma coleção que representa um grupo de pessoas e cada pessoa está representada
com um _objeto_ com uma _propriedade_ `altura`, poderíamos calcular a
altura média em um grupo, entre outras coisas.

Esperamos que cada set de dados esteja acompanhado de uma identidade gráfica
condizente. Você pode pesquisar na internet para ter referências sobre cada um
dos temas e trabalhar em uma identidade para sua página.


## Parte Obrigatória

Os critérios para considerar que você completou o projeto são:

### Definição do produto

* O desenvolvimento do projeto começou definindo o tema e os usuários e criando esboços e protótipos para que atendessem de melhor forma a necessidade do usuário
* Com o protótipo pronto e passando pelos testes de usuário começou o planejamento dos passos necessários para a realização do projeto
* O objetivo principal foi desenvolver interface prática e de fácil entedimento para o usuário com funções que realizassem suas necessidades
* Com o tema de indicadores de desenvolvimento foi trazido o foco na educação das mulheres na América Latina(com os países indicados no banco de dados disponível)
* Foram criadas abas: uma aba com a página inicial indicando o objetivo da página, uma aba com quantidade de mulheres na América Latina em gráfico, uma aba da América Latina com filtragem de pesquisa comparando qual o país com índice máximo e minímo nos índices de educação e outra filtragem na mesma aba mostrando de cada país disponível o valor dos últimos 10 anos do índice escolhido e, abas separadas por país trazendo o índice de cada ano e um botão para comparação com os outros países. 
* O usuário pode acessar apenas o país que quer visualizar, pode comparar com os outros países os índices e comparar o desenvolvimento daquele indicador nos últimos anos. 

### Desenho da interface de usuário

#### Protótipo
[Protótipo da Marvel](https://marvelapp.com/4f9e810)

#### Testes de usabilidade

O teste de usabilidade trouxe retorno positivo, porém durante a realização vimos a falta de necessidade de expor todos os índices na mesma página criando então uma caixa de seleção para exibir individualmente cada índice para mais clareza de visualização. 

### Implementação de Interface de Usuário (HTML/CSS/JS)

Logo após desenhar sua interface de usuário você deverá trabalhar em sua
implementação. Como mencionamos, **não** é necessário que desenvolva uma
interface tal como a desenhou. Você terá um tempo limitado para codar, então,
deverá priorizar. Como mínimo, sua implementação deve:

1. Mostrar os dados em uma interface: pode ser um card, uma tabela, uma
   lista, etc.
2. Permitir ao usuário filtrar e ordenar os dados.
3. Calcular estatísticas como média aritmética, máximo e/ou mínimo de algum
   atributo numérico, ou contar quantas vezes aparece um determinado valor,
   por exemplo.

## Parte Opcional (Hacker edition)

Features/características extras sugeridas:
* No lugar de consumir os dados de forma estática, você pode trabalhar com
  eles de forma dinâmica, carregando um arquivo JSON por meio de um `fetch`.
  A pasta `src/data` contém  uma versão `.js` e uma `.json` de cada set
  de dados.
* Agregar em sua interface de usuário visualizações gráficas. Para isso,
  recomendamos explorar bibliotecas de gráficos como [Chart.js](https://www.chartjs.org/) ou [Google Charts](https://developers.google.com/chart/).

[Vídeo do Dani usando o HighCharts](https://www.youtube.com/watch?v=MTXoCp2D7Ps)
[Vídeo da Ju usando o Google Charts](https://youtu.be/ueixcpZ65oc)

## Dicas de como começar a trabalhar no projeto

Antes de começar a escrever o código, você deve definir o que será feito
com base nos conhecimentos que você possa obter dos usuários do seu
produto. Essas perguntas podem te ajudar:

* Quem são os principais usuários de seu produto?
* Quais são os objetivos de seu usuário com relação ao seu produto?
* Quais os dados mais importantes que eles querem ver em sua interface?
* Quando utilizam ou utilizariam seu produto?

Quando já estiver pronta para codar, te recomendamos começar desta forma:

1. Uma das integrantes da dupla deve realizar um :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório.
   Seus _mentores_ compartilharão um _link_ que te dará acesso ao repo.
   A outra integrante deve fazer um **fork do repositório de sua companheira**
   e trabalharem juntas.
2. :arrow_down: [Clone](https://help.github.com/articles/cloning-a-repository/)
   seu _fork_ para seu computador (cópia local).
3. Let's code! :rocket:

***

## Conteúdo de referência

### Experiência de Usuário (UX Design)

* Entrevistas com usuários
* Princípios de usabilidade

### Desenvolvimento Front-end

* Unidade de arrays no curso de JavaScript no LMS.
* Unidade de objetos no curso de JavaScript no LMS.
* Unidade de funções no curso de JavaScript no LMS.
* Unidade de DOM no curso de Browser JavaScript no LMS.
* [Array no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries no MDN](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API no MDN](https://developer.mozilla.org/pt-br/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-pt.html)

***

## Checklist

* [ ] Usar VanillaJS.
* [ ] Inclui _Definição de produto_ clara e informativa no `README.md`.
* [ ] Inclui esboço da solução (protótipo de baixa fidelidade e de alta fidelidade, se houver) no
  `README.md`.
* [ ] Inclui a lista de problema detectados através dos testes de usabilidade
  no `README.md`.
* [ ] UI: Mostra lista e/ou tabela com dados e/ou indicadores.
* [ ] UI: Permite ordenar os dados por meio de um ou mais campos
  (asc e desc).
* [ ] UI: Permite filtrar os dados com base em uma condição.