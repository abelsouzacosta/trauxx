## Traux challenge

### Excutando a aplicação

1. Baixe o repositorio com `git clone git@github.com:abelsouzacosta/trauxx.git`

2. `cd trauux`

3. `yarn` ou `npm install`

3. Renomeie o arquivo **ormconfig.example.json** para **ormconfig.json**, poreḿ mantenha todas as configurações internas.

4. Renomeie o arquivo `.env.example` para `.env` e também mantenha todas as configurações

Essa aplicação usa um banco de dados mysql, assim sendo é necessário haver um banco MySQL instalado na máquina.

## Criando um container docker de mysql

1. `docker pull mysql:latest`
2. `docker run --name mysql_container -e "MYSQL_ROOT_PASSWORD=docker" -e "MYSQL_DATABASE=traux" -e "MYSQL_USER=docker" -e "MYSQL_PASSWORD=localhost" -p 3306:3306 -d mysql:latest`

Depois dos passos acima, a aplicação pode ser executada com o comando `yarn dev`

## Endpoints da aplicação

Os endpoints da aplicação no insomnia podem ser obtidos abaixo:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Traux%20Challenge&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fabelsouzacosta%2Flibrary-content%2Fmaster%2Ftrauxx.json%3Ftoken%3DGHSAT0AAAAAABPOCJRWF7XVTWPXRLKOV6XOYPRPFUA)
