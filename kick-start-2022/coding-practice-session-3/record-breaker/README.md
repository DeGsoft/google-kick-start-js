# Problem / Problema
Isyana is given the number of visitors at her local theme park on N consecutive days. The number of visitors on the i-th day is Vi. A day is record breaking if it satisfies both of the following conditions:
> A Isyana se le da el número de visitantes en su parque temático local en N días consecutivos. El número de visitantes en el i-ésimo día es Vi. Un día es récord si cumple las dos condiciones siguientes:

-Either it is the first day, or the number of visitors on the day is strictly larger than the number of visitors on each of the previous days.
> O es el primer día, o el número de visitantes en el día es estrictamente mayor que el número de visitantes en cada uno de los días anteriores.

-Either it is the last day, or the number of visitors on the day is strictly larger than the number of visitors on the following day.
> O es el último día o el número de visitantes del día es estrictamente mayor que el número de visitantes del día siguiente.

Note that the very first day could be a record breaking day!
> ¡Tenga en cuenta que el primer día podría ser un día récord!

Please help Isyana find out the number of record breaking days.
> Por favor, ayude a Isyana a averiguar el número de días récord.

## Input / Entrada
The first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with a line containing the integer N. The second line contains N integers. The i-th integer is Vi and represents the number of visitors on the i-th day.
> La primera línea de la entrada da el número de casos de prueba, T. Siguen los casos de prueba T. Cada caso de prueba comienza con una línea que contiene el número entero N. La segunda línea contiene N números enteros. El i-ésimo entero es Vi y representa el número de visitantes en el i-ésimo día.

## Output / Salida
For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the number of record breaking days.
> Para cada caso de prueba, genere una línea que contenga Caso #x: y, donde x es el número de caso de prueba (a partir de 1) e y es el número de días de récord.

## Limits / Limites

Time limit: 20 seconds.
Memory limit: 1 GB.
1≤T≤100.
0≤Vi≤2×105, for all i.

### Test Set 1
1≤N≤1000.

### Test Set 2
1≤N≤2×105, for at most 10 test cases.
For the remaining cases, 1≤N≤1000.

## Sample / Ejemplo

### Sample Input / Ejemplo de Entrada
4
8
1 2 0 7 2 0 2 0
6
4 8 15 16 23 42
9
3 1 4 1 5 9 2 6 5
6
9 9 9 9 9 9

### Sample Output / Ejemplo de Salida
Case #1: 2
Case #2: 1
Case #3: 3
Case #4: 0

In Sample Case #1, the underlined numbers in the following represent the record breaking days: 1 [2] 0 [7] 2 0 2 0.
> En el caso de muestra 1, los números subrayados a continuación representan los días de récord: 1 [2] 0 [7] 2 0 2 0.

In Sample Case #2, only the last day is a record breaking day: 4 8 15 16 23 [42].
> En el caso de muestra 2, solo el último día es un día récord: 4 8 15 16 23 [42].

In Sample Case #3, the first, the third, and the sixth days are record breaking days: [3] 1 [4] 1 5 [9] 2 6 5.
> En el Caso de muestra 3, el primero, el tercero y el sexto días son días récord: [3] 1 [4] 1 5 [9] 2 6 5.

In Sample Case #4, there is no record breaking day: 9 9 9 9 9 9.
> En el caso de muestra 4, no hay un día que rompa récords: 9 9 9 9 9 9.

# Author
[LinkedIn](https://www.linkedin.com/in/diegoezequielguillen)

[Twitter](https://twitter.com/DeGsoft)