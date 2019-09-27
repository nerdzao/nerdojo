# Coding Dojo 5
Segue todos os desafios propostos para essa edição, e instruções de como submeter suas respostas.

Não se esqueça de:
  - Fazer Fork
  - Criar uma Branch com o número do seu grupo
  - Criar neste diretório um novo diretório com o nome `group-X`. Sendo X o número do seu grupo.
  - Dentro do diretório do seu grupo criar um `README.md`, e deixar disposto lá o nome e sobrenome dos participantes, o email para contato e quais os desafios e suas condições de finalização. Ex:
  ```
  # Grupo X

    - Participante Elegante <participante.elegante@gmail.com>
  
  ## Desafios entregues
    - Desafio 1 `<arquivo-des-1.txt>` - Completo
    - Desafio 2 `<arquivo-des-2.png>` - Incompleto
  ```
  - Ao terminar os desafios e concluir a edição do README, faça um Pull Request. Se tiver dúvidas, basta chamar alguém da equipe de apoio.
    - [IMPORTANTE] PRs que não seguirem essa organização serão negados.

Você é livre para usar as linguagens que preferir dentro do do seu time, e os desafios podem ter mais de uma versão. Apenas deixe isso claro na documentação.

## Desafios
Os desafios dessa edição são.

 - [Args](#args) - Fácil
 - [Banco OCR](#banco-ocr) - Médio
 - [Banco OCR pt2](#banco-ocr-pt2) - Fácil
 - [Banco OCR pt3](#banco-ocr-pt3) - Fácil
 - [Banco OCR pt4](#banco-ocr-pt4) - Dificil

### Args
Este desafio é apresentado no livro de Robert C. Martin, "Clean Code", capítulo 14.

A maioria de nós teve que analisar argumentos de linha de comando de tempos em tempos. Se não temos um utilitário conveniente, simplesmente caminhamos pela matriz de strings que são passadas para a função principal. Existem vários utilitários disponíveis em várias fontes, mas provavelmente eles não fazem exatamente o que queremos. Então vamos escrever outro!

Os argumentos transmitidos ao programa consistem em sinalizadores e valores. Os sinalizadores devem ter um caractere, precedido por um sinal de menos. Cada sinalizador deve ter zero ou um valor associado a ele.

Você deve escrever um analisador para esse tipo de argumento. Esse analisador usa um esquema detalhando quais argumentos o programa espera. O esquema especifica o número e os tipos de sinalizadores e os valores que o programa espera.

Depois que o esquema for especificado, o programa deve passar a lista de argumentos real para o analisador de argumentos. Ele verificará se os argumentos correspondem ao esquema. O programa pode solicitar ao analisador args cada um dos valores, usando os nomes dos sinalizadores. Os valores são retornados com os tipos corretos, conforme especificado no esquema.

Por exemplo, se o programa deve ser chamado com estes argumentos:

-l -p 8080 -d / usr / logs

isso indica um esquema com 3 sinalizadores: l, p, d. O sinalizador “l” (log) não possui valores associados, é um sinalizador booleano, Verdadeiro se presente, Falso se não. o sinalizador “p” (porta) possui um valor inteiro e o sinalizador “d” (diretório) possui um valor de string.

Se um sinalizador mencionado no esquema estiver ausente nos argumentos, um valor padrão adequado deverá ser retornado. Por exemplo, “Falso” para um booleano, 0 para um número e “” para uma sequência. Se os argumentos fornecidos não coincidirem com o esquema, é importante que uma boa mensagem de erro seja fornecida, explicando exatamente o que está errado.

Se você estiver se sentindo ambicioso, estenda seu código para listas de suporte, por exemplo

-g isto, é, uma, lista -d 1,2, -3,5

Portanto, o sinalizador "g" indica uma lista de cadeias, ["isto", "é", "uma", "lista"] e o sinalizador "d" indica uma lista de números inteiros, [1, 2, -3, 5 ]

Verifique se o seu código é extensível, pois é simples e óbvio como adicionar novos tipos de valores.

### Banco OCR
Você trabalha em um banco que comprou recentemente uma máquina engenhosa para ajudar na leitura de cartas e faxes enviados pelas filiais. A máquina digitaliza os documentos em papel e produz um arquivo com várias entradas, cada uma com a seguinte aparência:
```
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                           
```
Cada entrada tem 4 linhas e cada linha possui 34 caracteres. As três primeiras linhas de cada entrada contêm um número de conta gravado usando tubos e sublinhados, e a quarta linha está em branco. Cada número de conta deve ter 9 dígitos, todos no intervalo de 0 a 9. Um arquivo normal contém cerca de 500 entradas. Sua tarefa é escrever um programa que possa pegar esse arquivo e analisá-lo em números de contas reais.

### Banco OCR pt2
Feito isso, você percebe rapidamente que a máquina engenhosa não é de fato infalível. Às vezes, dá errado na verificação. A próxima etapa, portanto, é validar que os números que você lê são de fato números de conta válidos. Um número de conta válido possui uma soma de verificação válida. Isso pode ser calculado da seguinte forma:
```
account number:  3  4  5  8  8  2  8  6  5
position names:  d9 d8 d7 d6 d5 d4 d3 d2 d1

checksum calculation:
(d1+2*d2+3*d3+...+9*d9) mod 11 = 0
```
Portanto, agora você também deve escrever um código que calcule a soma de verificação para um determinado número e identifique se é um número de conta válido.

### Banco OCR pt3
Seu chefe está ansioso para ver seus resultados. Ele pede que você escreva um arquivo com suas descobertas, um para cada arquivo de entrada, neste formato:
```
457508000
664371495 ERR
86110??36 ILL
```
Ou seja, o arquivo tem um número de conta por linha. Se alguns caracteres estiverem ilegíveis, eles serão substituídos por um?. No caso de uma soma de verificação incorreta ou número ilegível, isso é anotado em uma segunda coluna indicando o status.

### Banco OCR pt4
Acontece que, muitas vezes, quando um número volta como ERR ou ILL, é porque o scanner não conseguiu captar um tubo ou sublinhado para uma das figuras. Por exemplo:
```
    _  _  _  _  _  _     _ 
|_||_|| || ||_   |  |  ||_ 
  | _||_||_||_|  |  |  | _|

```
O 9 poderia ser um 8 se o scanner tivesse perdido um |. Ou o 0 pode ser um 8. Ou o 1 pode ser um 7. O 5 pode ser um 9 ou 6. Portanto, sua próxima tarefa é examinar os números que retornaram como ERR ou ILL e tentar adivinhar o que deveriam adicionando ou removendo apenas um tubo ou sublinhado. Se houver apenas um número possível com uma soma de verificação válida, use-o. Se houver várias opções, o status deve ser AMB. Se você ainda não consegue descobrir o que deveria ser, o status deve ser relatado como ILL.

#### Casos de uso para o Banco OCR
```
use case 1
 _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|

=> 000000000

  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |

=> 111111111
 _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
|_ |_ |_ |_ |_ |_ |_ |_ |_ 

=> 222222222
 _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
 _| _| _| _| _| _| _| _| _|

=> 333333333

|_||_||_||_||_||_||_||_||_|
  |  |  |  |  |  |  |  |  |

=> 444444444
 _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
 _| _| _| _| _| _| _| _| _|

=> 555555555
 _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
|_||_||_||_||_||_||_||_||_|

=> 666666666
 _  _  _  _  _  _  _  _  _ 
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |

=> 777777777
 _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
|_||_||_||_||_||_||_||_||_|

=> 888888888
 _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
 _| _| _| _| _| _| _| _| _|

=> 999999999
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|

=> 123456789

use case 3
 _  _  _  _  _  _  _  _    
| || || || || || || ||_   |
|_||_||_||_||_||_||_| _|  |

=> 000000051
    _  _  _  _  _  _     _ 
|_||_|| || ||_   |  |  | _ 
  | _||_||_||_|  |  |  | _|

=> 49006771? ILL
    _  _     _  _  _  _  _ 
  | _| _||_| _ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _ 

=> 1234?678? ILL

use case 4

  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |

=> 711111111
 _  _  _  _  _  _  _  _  _ 
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |

=> 777777177
 _  _  _  _  _  _  _  _  _ 
 _|| || || || || || || || |
|_ |_||_||_||_||_||_||_||_|

=> 200800000
 _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
 _| _| _| _| _| _| _| _| _|

=> 333393333 
 _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
|_||_||_||_||_||_||_||_||_|

=> 888888888 AMB ['888886888', '888888880', '888888988']
 _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
 _| _| _| _| _| _| _| _| _|

=> 555555555 AMB ['555655555', '559555555']
 _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
|_||_||_||_||_||_||_||_||_|

=> 666666666 AMB ['666566666', '686666666']
 _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
 _| _| _| _| _| _| _| _| _|

=> 999999999 AMB ['899999999', '993999999', '999959999']
    _  _  _  _  _  _     _ 
|_||_|| || ||_   |  |  ||_ 
  | _||_||_||_|  |  |  | _|

=> 490067715 AMB ['490067115', '490067719', '490867715']
    _  _     _  _  _  _  _ 
 _| _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|

=> 123456789
 _     _  _  _  _  _  _    
| || || || || || || ||_   |
|_||_||_||_||_||_||_| _|  |

=> 000000051
    _  _  _  _  _  _     _ 
|_||_|| ||_||_   |  |  | _ 
  | _||_||_||_|  |  |  | _|

=> 490867715 
```
