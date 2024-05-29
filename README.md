# Player Teams

Projeto de uma aplicação para gerenciamento de times de jogadores em jogos diversos. Permite a adição de grupos baseado em um contexto desejado, como por exemplo um grupo de trabalho, da igreja, etc. Dentro de cada grupo criado é possível adicionar os jogadores dividos entre times A e B. É possível exluir e adicioanar jogados ou grupos livremente.

As tecnologias e ferramentas utilizadas foram:

- React Native
- Expo
- TypeScript
- Styled Components
- React Navigation

## Setup Inicial

- Clone o repositório: `git clone https://github.com/MatheusAmon12/player-teams.git`
- Rode `npm install` no diretorio raiz
- Rode `npx expo start` para iniciar a aplicação

## Estrutura do Projeto

- `src`
    - `@types` contém as tipagens do projeto
    - `assets` contém as imagens do projeto
    - `components` contém os componentes do projeto
    - `routes` define as rotas do projeto
    - `screens` contém as telas do projeto, `Groups`, `NewGroup` e `Players`
    - `storage` contém todas funções que interagem o  `AsyncStorage` da aplicação
    - `theme` define o tema do projeto com o `styled-components`
    - `utils` contém a classe que define erros personalizados
- `App.tsx` arquivo root do projeto