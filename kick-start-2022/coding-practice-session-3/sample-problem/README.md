Problem / Problema
You have gathered N bags of candy and you want to distribute the candy amongst M kids. The i-th bag contains Ci pieces of candy. You want to make sure that every kid get the same amount of candy and that the number of pieces of candy they receive is the greatest possible. You can open each bag and mix all pieces of candy before distributing them to the kids.
Has reunido N bolsas de dulces y quieres distribuir los dulces entre M niños. La i-ésima bolsa contiene Ci caramelos. Deseas asegurarte de que todos los niños reciban la misma cantidad de dulces y que la cantidad de dulces que reciban sea la mayor posible. Puedes abrir cada bolsa y mezclar todos los dulces antes de distribuirlos a los niños.

How many pieces of candy will remain after you share the candy amongst kids, based on the rules described above?
¿Cuántos dulces quedarán después de compartir los dulces entre los niños, según las reglas descritas anteriormente?

Input / Entrada
The first line of the input gives the number of test cases, T. T test cases follow.
La primera línea de la entrada da el número de casos de prueba, T. Siguen los casos de prueba T.

Each test case consists of two lines. The first line of each test case contains two integers: integer N, the number of candy bags, and M, the number of kids.
Cada caso de prueba consta de dos líneas. La primera línea de cada caso de prueba contiene dos números enteros: el número entero N, el número de bolsas de dulces, y M, el número de niños.

The next line contains N non-negative integers C1,C2,…,CN representing array C, where the i-th integer represents the number of candies in the i-th bag.
La siguiente línea contiene N enteros no negativos C1,C2,…,CN que representan la matriz C, donde el i-ésimo entero representa el número de dulces en la i-ésima bolsa.

Output / Salida
For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the number of candies that will remain if you divide candies between kids according to the rules described above.
Para cada caso de prueba, genere una línea que contenga Caso #x: y, donde x es el número del caso de prueba (a partir de 1) e y es la cantidad de dulces que quedarán si divide los dulces entre los niños de acuerdo con las reglas descritas anteriormente.

Limits / Limites

Time limit: 60 seconds.
Memory limit: 1 GB.

Test Set 1

1≤T≤100.
1≤N≤105.
1≤M≤104.
0≤Ci≤1000, for all i from 1 to N.

Sample / Ejemplo

Sample Input / Ejemplo de Entrada
2
7 3
1 2 3 4 5 6 7
5 10
7 7 7 7 7

Sample Output / Ejemplo de Salida
Case #1: 1
Case #2: 5

In Sample Case #1, we have N=7 bags of candy. In total we have 1+2+3+4+5+6+7=28 candies that we want to divide between M=3 kids. Every kid can get 9 pieces of candy, so 28−3×9=1 pieces of candy will remain.
En el Caso de Muestra #1, tenemos N=7 bolsas de dulces. En total tenemos 1+2+3+4+5+6+7=28 caramelos que queremos repartir entre M=3 niños. Cada niño puede recibir 9 dulces, por lo que quedarán 28−3×9=1 dulces.

In Sample Case #2, we have N=5 bags of candy. In total we have 7+7+7+7+7=35 candies that we want to divide between M=10 kids. Every kid can get 3 pieces of candy, so 35−10×3=5 pieces of candy will remain.
En el caso de muestra #2, tenemos N=5 bolsas de dulces. En total tenemos 7+7+7+7+7=35 caramelos que queremos repartir entre M=10 niños. Cada niño puede recibir 3 dulces, por lo que quedarán 35−10×3=5 dulces.