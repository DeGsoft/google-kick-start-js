# Problem / Problema
Banny has just bought a new programmable robot. Eager to test his coding skills, he has placed the robot in a grid of squares with R rows (numbered 1 to R from north to south) and C columns (numbered 1 to C from west to east). The square in row r and column c is denoted (r,c).
> Banny acaba de comprar un nuevo robot programable. Ansioso por poner a prueba sus habilidades de codificación, ha colocado el robot en una cuadrícula de cuadrados con R filas (numeradas del 1 al R de norte a sur) y C columnas (numeradas del 1 al C de oeste a este). El cuadrado en la fila r y la columna c se denota (r, c).

Initially the robot starts in the square (SR, SC). Banny will give the robot N instructions. Each instruction is one of N, S, E, or W, instructing the robot to move one square north, south, east, or west respectively.
> Inicialmente, el robot comienza en el cuadrado (SR, SC). Banny le dará N instrucciones al robot. Cada instrucción es N, S, E o W, y le indica al robot que se mueva un cuadrado al norte, sur, este u oeste, respectivamente.

If the robot moves into a square that it has been in before, the robot will continue moving in the same direction until it reaches a square that it has not been in before. Banny will never give the robot an instruction that will cause it to move out of the grid.
> Si el robot se mueve a un cuadrado en el que ha estado antes, el robot continuará moviéndose en la misma dirección hasta que alcance un cuadrado en el que no haya estado antes. Banny nunca le dará al robot una instrucción que haga que se salga de la red.

Can you help Banny determine which square the robot will finish in, after following the N instructions?
> ¿Puedes ayudar a Banny a determinar en qué casilla terminará el robot después de seguir las N instrucciones?

Input / Entrada
The first line of the input gives the number of test cases, T. T test cases follow. Each test case starts with a line containing the five integers N, R, C, SR, and SC, the number of instructions, the number of rows, the number of columns, the robot's starting row, and the robot's starting column, respectively.
> La primera línea de la entrada da el número de casos de prueba, T. Siguen los casos de prueba T. Cada caso de prueba comienza con una línea que contiene cinco números enteros N, R, C, SR y SC, el número de instrucciones, el número de filas, el número de columnas, la fila inicial del robot y la columna inicial del robot, respectivamente.

Then, another line follows containing a single string consisting of N characters; the i-th of these characters is the i-th instruction Banny gives the robot (one of N, S, E, or W, as described above).
> Luego, sigue otra línea que contiene una sola cadena que consta de N caracteres; el i-ésimo de estos caracteres es la i-ésima instrucción que Banny le da al robot (una de N, S, E o W, como se describe arriba).

## Output / Salida
For each test case, output one line containing Case #x: r c, where x is the test case number (starting from 1), r is the row the robot finishes in, and c is the column the robot finishes in.
> Para cada caso de prueba, genere una línea que contenga el Caso #x: rc, donde x es el número del caso de prueba (a partir de 1), r es la fila en la que termina el robot y c es la columna en la que termina el robot.

## Limits / Limites
* Memory limit: 1 GB.
* 1≤T≤100.
* 1≤R≤5×104.
* 1≤C≤5×104.
* 1≤SR≤R.
* 1≤SC≤C.
* The instructions will not cause the robot to move out of the grid.

## Test Set 1
* Time limit: 20 seconds.
* 1≤N≤100.
* Test Set 2
* Time limit: 60 seconds.
* 1≤N≤5×104.

## Sample / Ejemplo

### Sample Input / Ejemplo de Entrada
* 3
* 5 3 6 2 3
* EEWNS
* 4 3 3 1 1
* SESE
* 11 5 8 3 4
* NEESSWWNESE

### Sample Output / Ejemplo de Salida
* Case #1: 3 2
* Case #2: 3 3
* Case #3: 3 7

Sample Case #1 corresponds to the top-left diagram, Sample Case #2 corresponds to the top-right diagram, and Sample Case #3 corresponds to the lower diagram. In each diagram, the yellow square is the square the robot starts in, while the green square is the square the robot finishes in. 
> El primer caso de muestra corresponde al diagrama superior izquierdo, el segundo caso de muestra corresponde al diagrama superior derecho y el tercer caso de muestra corresponde al diagrama inferior. En cada diagrama, el cuadrado amarillo es el cuadrado en el que comienza el robot, mientras que el cuadrado verde es el cuadrado en el que termina el robot.

# Author
[LinkedIn](https://www.linkedin.com/in/diegoezequielguillen)

[Twitter](https://twitter.com/DeGsoft)