# 3ª Rodada

Seja bem vindo ao Nerdzão Coding Dojo 3ª Rodada! Se você está participando deste evento presencialmente já conhece as regras :)
Após a resolução dos desafios o time terá até o encerramento deste dojo para nos enviar seu `Pull Request`. Não precisa fazer todos, faça todos que puder.

Se chegou aqui depois do evento fique a vontade para resolver esses desafios, lá embaixo você vai encontrar as respostas, cuidado para não tomar spoilers ;)

### Boa sorte a todos e **Let the Games Begin!**

- [Como enviar seu código](#como-enviar-seu-código)
- [Desafios](#desafios)
	- [Resposta do Desafio 1](#resposta-1)
	- [Resposta do Desafio 2](#resposta-2)
	- [Resposta do Desafio 3](#resposta-3)
	- [Resposta do Desafio 4](#resposta-4)
	- [Resposta do Desafio 5](#resposta-5)

## Como enviar seu código

Para enviar seu código siga os seguintes passos:
 - Copie diretório `group-00` e renomeie com o número do seu grupo
 - Preencha os dados de seu grupo no `README`
 - Salve suas respostas no novo diretório de um jeito que a gente consiga saber de qual desafio é aquela resposta:
 - Agora é só fazer o `commit` e o `PR`

## Desafios

Para ter uma versão emd PDF [clique aqui](https://notepad.pw/markdown/vzhlz9ge)

### Desafio 1 - Buraco nas letras
Se você pensar em um papel como um plano e uma letra como uma marcação neste plano, então estas letras dividem o plano em regiões. Por exemplo, as letras A, D e O dividem o plano em 2 pois possuem um espaço confinado em seu desenho, ou um “buraco”. Outras letras como B possuem 2 buracos e letras como C e E não possuem buracos.
Deste modo podemos considerar que o número de buracos em um texto é igual a soma dos buracos nas palavras dele.
A sua tarefa é, dado um texto qualquer, encontre a quantidade de buracos nele.

### Resposta 1

Em breve...

### Desafio 2  - Problema de tradução Numérica
Você chegou em uma ilha há muito esquecida, chamada kwego. Após 3 dias nesta ilha, você percebeu que seu sistema numérico é o mesmo que o sistema romano, mas com nomes diferentes e criou a seguinte tabela de tradução kwegoniana para romana:
```
kil     I
jin     V
pol     X
kilow   L
jij     C
jinjin  D
polsx   M
```
Para facilitar sua vida, você vai criar um algoritmo que traduz os números kwegonianos em números decimais.

Aqui está um exemplo de uma entrada:
```
['polsx, 'polsx', 'pol', 'jin', 'kil']
```
E a saida de resposta é:
```
{
  success: true,
  decimal: 2016
}
```
No caso de números inválidos, a chave `success` deve ser `false`, e uma chave `error_msg` deve ser adicionada na resposta com uma mensagem de erro.

### Resposta 2

Em breve...

### Desafio 3 - Batalha Naval
Cada jogador deve dispor de uma área de 10x10 onde ele vai posicionar 5 navios de tamanhos diferentes: um porta-aviões (comprimento 5), um encouraçado (comprimento 4), um submarino e um destroyer (ambom de comprimento 3), e barco de patrulha (comprimento 2). Um jogador nunca deve saber a posição dos navios do oponente. Os navios de um mesmo jogador não podem se cruzar e devem estar dentro das fronteiras da sua área disponível.
Depois que todas as peças estão posicionadas, os jogadores se alternam em turnos para lançar bombas sobre o outro oponente especificando qual posição ele deseja atacar. Se algum dos navios do jogador que está sendo atacado estiver na posição atacada, considera-se que o navio foi atingido. O ataque falha se o atacante lançar uma bomba em um local onde não existe nenhum navio do oponente.
Caso todos as posições de um navio for atingida, o jogador atacado deve informar o oponente qual dos seus navios afundou. O jogo continua até que um jogador afunde todos os navios de seu oponente; este jogador é então considerado vencedor.
Você deve desenvolver um programa que jogue uma partida de batalha naval entre dois oponentes. Você precisa:
Definir uma maneira de indicar o estado inicial dos navios dos jogadores;
Exibir todos os movimentos dos jogadores, informando se os ataques foram bem sucedidos ou não;
Informar quando um navio é atingido e quando ele é afundado;
Exibir ao final do jogo um mapa final do posicionamento final dos navios dos jogadores.

### Resposta 3

Em breve...

### Desafio 4 - Efeito Magnético
Em vários programas gráficos baseados em vetores, uma ferramenta muito útil para auxiliar no desenho é o magneto. Resumidamente, uma pequena área da tela, ao redor de "pontos importantes" são magnéticos. Por exemplo, se movermos o cursor do mouse próximo o suficiente de um desses pontos e começarmos a desenhar, o desenho vai ser iniciado no ponto magnético ao invés do ponto onde o cursor se encontra. Porém, quando o cursor está distante de um desses pontos, o início do desenho é no próprio ponto.

Alguns exemplos:
Se existe um ponto magnético na coordenada (50, 50) e o raio de efeito magnético é 5, quando o curso é movido para a posição (49,50), o efeito magnético atua e força com que o desenho seja feito a partir do ponto (50,50);
Se existe um ponto magnético em (50, 50), o raio de efeito magnético é 5 e o cursor está em (0, 0), não ocorre o efeito magnético;
Se existem dois pontos magnéticos em (50, 50) e (100, 50), quando o mouse está em (101, 48), o efeito magnético faz com que você comece a desenhar em (100, 50);
Se os pontos magnéticos são (50, 50) e (51, 51) e o mouse está em (51, 52), o desenho se inicia em (51, 51)
Implemente este efeito magnético, informando a localização dos pontos magnéticos, o raio do efeito magnético e o ponto onde o cursor se encontra no momento. COm esses dados, seu programa deverá informar qual o ponto onde o desenho irá começar realmente.

### Resposta 4

Em breve...

### Desafio 5 - Karate Chop (Busca binária)
Um corte binário (às vezes chamado de busca binária) encontra a posição de valor em uma matriz ordenada de valores. Ele alcança certa eficiência reduzindo pela metade o número de itens em consideração cada vez que ele investiga os valores: na primeira passagem, ele determina se o valor requerido está na metade superior ou inferior da lista de valores. Na segunda passagem, considera apenas esta metade, dividindo-a novamente em duas. Ele para quando encontra o valor que está procurando ou quando fica sem array para pesquisar.
Implemente uma rotina de pesquisa binária (usando a especificação abaixo) na linguagem e técnica de sua escolha.
Escreva um método de busca binário que leva um alvo de pesquisa inteiro e uma matriz ordenada de inteiros. Ele deve retornar o índice inteiro do alvo na matriz ou -1 se o destino não estiver na matriz. A assinatura será logicamente:
`chop (int, array_of_int) -> int`
Você pode supor que a matriz tenha menos de 100.000 elementos. Para os propósitos deste Kata, tempo e desempenho de memória não são problemas (assumindo que o chop termina antes de você ficar entediado e matá-lo, e que você tenha RAM suficiente para executá-lo).

Alguns exemplos de entrada:
```
chop(3, [2, 3, 5, 10]) -> 1
chop(5, [1, 4, 6, 7]) -> -1
chop(2, [2, 3, 5, 7]) -> 0
```

### Resposta 5

Em breve...

## Feedback

[Queremos saber sua opinião!](https://docs.google.com/forms/d/e/1FAIpQLSc0veJbP5HzQyQt-3QZgabZvUroHY4wDEPy8wR6aDfSPG9DpQ/viewform?usp=sf_link)
