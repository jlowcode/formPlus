# Form Plus

<div align="center">
  <img src="./.github/jlowcodelogo.png" width="350" />
</div>

## Sobre

O plugin Form Plus permite transformar um formulário de cadastro padrão em um formulário no estilo [Typeform](https://www.typeform.com/) que nada mais é que um tipo de formulário separado por passos, onde o usuário segue um "passo-a-passo" até o fim do processo onde pode gravar todas as informações selecionadas.

## Passo-a-passo

A utilização do Form Plus é bem simples, não são necessárias muitas configurações para se obter o resultado final. Basicamente é necessário criar os elementos do formulário normalmente, utilizando elementos comuns como `Screen`, `Field`, `Dropdown`, `Date`, `Birthday`, `DataBaseJoin`, `CascadingDropdown` e etc. Logo após a ativação do Plugin na opção Formulário do Fabrik, será possível configurar mais alguns detalhes como por exemplo um trecho de CSS customizado que será aplicado ao formulário e a url de uma imagem que se cadastrada na parte administrativa do Fabrik será exibida como imagem de fundo do formulário. Após essas configurações ao acessar o formulário no ambiente de produção ele será renderizado em formato de passo-a-passo aplicando as configurações setadas (lembrando que essas configurações não são obrigatórias), cada campo será renderizado como uma página ou passo do cadastro e serão adicionados dois botões em cada tela "Anterior" e "Próximo".

## Validação de campos

Como ja foi dito, cada elemento se transformará em uma tela do passo a passo, então o usuário pode desejar ter alguns campos obrigatórios, o Form Plus consegue validar esse tipo de campo impedindo que o usuário passe para o próximo passo antes de preencher o campo atual, essa configuração é bem simples, basta definir o campo como obrigatório na configuração do elemento no `Fabrik` e até cadastrar uma mensagem de alerta para o usuário, o Form Plus identificará a obrigatoriedade deste campo e impedirá que o usuário passe para o próximo passo antes de preencher o campo em questão exibindo uma mensagem imformando ao usuário sobre a necessidade do preenchimento do campo em questão.

--> COLOCAR SCREENSHOTS EXEMPLIFICANDO ESSA CONFIGURAÇÃO E O FUNCIONAMENTO DESSE RECURSO

## Splash Screen

Assim como no TypeForm é possível acrescentar uma tela como primeiro passo do formulário onde podem ser cadastradas informações inportantes sobre o preenchimento do:

--> SCREENSHOT EXEMPLIFICANDO

Este tipo de tela nada mais é do que o elemento `Screen` onde é possível cadastrar um título e um texto nos padrões do `Fabrik`, o uso mais comum para este recurso é na primeira página dos passo-a-passo onde é possível configurar o texto usando os recursos do editor de texto do `Joomla`.

--> SCREENSHOT EXEMPLIFICANDO

Vale ressaltar que é possível acrescentar este tipo de tela em qualquer um dos passos do preenchimento do formulário, inclusive no último passo, o plugin se adaptará de acordo com o tamanho do texto cadastrado.

## Imagem de fundo

Como ja foi dito, é possível cadastrar a url de uma imagem para ser aplicada como plano de fundo do formulário, é aconselhável que esta imagem tenha no mínimo as dimensões de --->PESQUISAR DIMENSÕES<--- e no máximo --->PESQUISAR DIMENSÕES<--- . caso seja possível cadastrar uma imagem seguindo as dimensões descritas, a imagem aparecerá por inteiro como fundo do formulário, caso seja menor que o indicado, a imagem se repetirá como é feito no recurso `background-image` do css, para impedir esta repetição é possível incluir no campo de customização do CSS a propriedade `background-repeat` na classe --->PESQUISAR CLASSE<--- seguido da a propriedade `!important`.

Exemplo:

```css
.nome-da-classe {
  background-repeat: no-repeat !important;
}
```

## CSS customizado

Este recurso é bem interessante pois conhecendo as classes de estilos utilizadas pelo `Fabrik` é possível customizar divertos estilos dentro do fomrulário, pode acontecer de o `css` cadastrado não consiga ser aplicado, neste caso pode ser necessário o uso do recurso `!important` apresentado no tópico anterior que define a propriedade citada como prioridade na renderização.

Exemplo de estilo customizado:

```css
.fabrikForm {
  border: 1px #f0f0f0 solid !important;
  background-color: #f9f9f9 !important;
  color: #000 !important;
}
```

Com este recurso é possível customizar ainda mais o formulário, apenas aplicando estilos, um exemplo de aplicação interessante é ao invés de cadastrar uma imagem como plano de fundo no formulário, criar um Gradient utilizando apenas css como por exemplo os Gradients do site [Grabient](https://cssgradient.io/gradient-backgrounds/)

Exemplo:

```css
.fabrikForm {
  background-color: #8ec5fc;
  background-image: linear-gradient(
    62deg,
    #8ec5fc 0%,
    #e0c3fc 50%,
    #ffffff 100%
  );
}
```

### Estilizando o botão Submit do formulário
