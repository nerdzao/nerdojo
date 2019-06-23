
            /** 
             * Clase matriz 
             */ 
            function matrizCaracol(n){ 
                this.dimensao   = n; 
                this.criaMatriz = criaMatriz; 
                this.fillMatrix   = fillMatrix; 
                this.desenhaMatriz   = desenhaMatriz; 
                this.minhaMatriz = this.criaMatriz(); 
                this.fillMatrix(); 
            } 
             
            /** 
             * Function para inicializar a matriz 
             */ 
            function criaMatriz(){  
               var minhaMatriz = new Array(this.dimensao); 
               for (i = 0 ; i < this.dimensao ; i++)   
                    minhaMatriz[i] = new Array(this.dimensao);  
               return minhaMatriz; 
            } 
             
            /** 
             * Function para  realinhar matriz
             */ 
            function fillMatrix(){   
                var contador = 1;   
                var fila     = 0;   
                var coluna  = 0;   
                var final    = Math.pow(this.dimensao,2)+1;  
                while (contador < final){   
                    for (x = coluna ; x < (this.dimensao - coluna) ; x++){   
                        this.minhaMatriz[fila][x] = contador;   
                        contador++;   
                    }   
                    if (contador == final) break;   
                    x--;   
                    for (y = (fila+1) ; y < (this.dimensao - fila) ; y++){   
                        this.minhaMatriz[y][x] = contador;   
                        contador++;   
                    }   
                    if (contador == final) break;   
                    y--;   
                    x--;   
                    for (x = ((this.dimensao - coluna)-1) ; x > coluna ; x--){   
                        this.minhaMatriz[y][x-1] = contador;   
                        contador++;   
                    }   
                    if (contador == final) break;   
                    for (y = ((this.dimensao - fila)-2) ; y > fila ; y--){   
                        this.minhaMatriz[y][x] = contador;    
                        contador++;   
                    }   
                    if (contador == final) break;   
                    fila++;   
                    coluna++;   
                }      
            } 
             
            /** 
             * Function para imprimir a matriz 
             */ 
            function desenhaMatriz(){ 
                document.write("<table>") ;   
                for(x = 0 ; x < this.dimensao ; x++){   
                    document.write("<tr>");   
                    for(y = 0 ; y < this.dimensao ; y++){   
                         document.write("<td align='center'>"+this.minhaMatriz[x][y]+"<td>");   
                    }   
                    document.write( "</tr>");   
                }   
                document.write("</table>");   
 
  
            } 
              /** 
             * Passar valores das colunas primeiro arg = horizontal, segundo arg = vertical
               Podemos passar um valor só como arg para a quantidade de numero e ela renderiza o valor
               com lados iguais
             */ 
            minhaMatrizCaracol = new matrizCaracol(6, 10); 
            minhaMatrizCaracol.desenhaMatriz(); 
