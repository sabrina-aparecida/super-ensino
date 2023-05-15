### Descrição

A aplicação tem por objetivo apresentar a lista de matérias disponíveis e suas respectivas questões. 
Ela permite que o usuário navegue entre as questões e .selecione a opção que julga correta


![Gravação de tela de 15-05-2023 00_49_43](https://github.com/sabrina-aparecida/super-ensino/assets/25768879/331984fc-7251-4549-9b66-964a834f9b6e)


### Utilização

Clone o repositorio:

```sh
git clone https://github.com/sabrina-aparecida/super-ensino
```

#### Instale:

npm:
```sh
npm install
```

docker:

```sh
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
obs: este é o comando para o Ubuntu, para outros sistemas operacionais consulte: https://docs.docker.com/engine/install/

execute os comandos:

```sh
docker build -t super-ensino .
```

```sh
docker run -p 3000:3000 super-ensino
```
