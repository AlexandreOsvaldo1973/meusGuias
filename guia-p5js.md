p5.js

file:///the/file/path/to/your/html // digite na barra de endereço para visualizar seu esboço

<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.1.9/lib/p5.js"></script>
    <script src="sketch.js"></script>
  </head>
  <body>
    <main>
    </main>
  </body>
</html>

ProcessingJS

Formas

rect(x, y, w, h)
ellipse(x, y, w, h)
triangle(x1, y1, x2, y2, x3, y3)
line(x1, y1, x2, y2)
point(x, y)
arc(x, y, w, h, start, stop)
bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2)
quad(x1, y1, x2, y2, x3, y3, x4, y4)
image(image, x, y, width*, height*)
ellipseMode
rectMode
imageMode
strokeCap
bezierPoint
bezierTangent
curve
curvePoint
curveTangent
curveTightness

Formas complexas

beginShape() / endShape() / vertex()
curveVertex()
bezierVertex()
strokeJoin
curveTightness

Cores

background(r, g, b) Define a cor de fundo
fill(r, g, b) Define a cor de preenchimento para as formas
noFill() Desativa o preenchimento das formas
stroke(r, g, b) Define a cor do contorno para formas
strokeWeight(thickness) Altera a espessura de linhas e contornos
noStroke() Desativa os contornos para formas
color(r, g, b) Armazena uma cor em uma variável
blendColor(c1, c2, MODE) Mistura duas cores
lerpColor(c1, c2, amount) Interpola 2 cores
colorMode 
alpha
hue
saturation
brightness

Texto

text(text, x, y) Escreve um texto
textFont(font, size*) Muda a fonte do texto
textSize(size) Altera o tamanho do texto
textWidth
textAscent
textDescent
textLeading
textAlign

Transformar

rotate(angle) Gira as formas em um ângulo
scale(amount) Redimensiona as formas em ambas as dimensões
translate(x, y) Translada as formas por uma distância definida
pushMatrix/popMatrix
resetMatrix
printMatrix

Ambiente

width / height O tamanho da tela
draw = function() { } Chamado repetidamente durante a execução do programa
playSound(sound) Reproduz um dos sons permitidos
Program.assertEqual
Program.restart
frameRate(fps)
frameCount
loop
noLoop

Mouse

mouseX, mouseY - Coordenadas atuais do mouse
pmouseX, pmouseY - Coordenadas anteriores do mouse
mouseButton - Indica qual botão está pressionado
mouseIsPressed - Indica se o mouse está pressionado
mouseClicked = function() { } - Chamada ao clicar o mouse
mousePressed = function() { } - Chamada quando o mouse é pressionado
mouseReleased = function() { } - Chamada quando o mouse é liberado
mouseMoved = function() { } - Chamada quando se move o mouse
mouseDragged = function() { } - Chamado quando o mouse é arrastado
mouseOver = function() { } - Chamada quando o mouse se move na tela
mouseOut = function() { } - Chamada quando o mouse se move para fora da tela

Teclado

key - Número que representa qual tecla está pressionada
keyCode - Indica quando uma tecla especial é pressionada
keyIsPressed - Retorna verdadeiro se uma tecla está pressionada; falso, caso contrário
keyPressed = function() { } - Chamada quando uma tecla é pressionada
keyReleased = function() { } - Chamada quando uma tecla é liberada
keyTyped = function() { } - Chamada quando uma tecla é digitada

Matemática

random(low, high) - Gera um número aleatório
dist(x1, y1, x2, y2) - Calcula a distância entre dois pontos
constrain(value, min, max) - Restringe o valor entre min e max
min(num1, num2) - Retorna o mínimo de dois números
max(num1, num2) - Retorna o máximo de dois números
abs(num) - Obtém o valor absoluto de um número
log(num) - Obtém o logaritmo de um número
pow(num, exponent) - Eleva um número a um expoente
sq(num) - Eleva um número ao quadrado
sqrt(num) - Obtém a raiz quadrada de um número
round(num) - Retorne o inteiro mais próximo
ceil(num) - Retorne o inteiro mais próximo de valor maior ou igual
floor(num) - Retorne o inteiro mais próximo de valor menor ou igual
PVector(x, y) - Um objeto que descreve um vetor bidimensional
mag
exp
map
norm
lerp
noise
noiseDetail
Random.nextGaussian

Trigonometria
cos(degrees) - Obtém o cosseno de um ângulo
sin(degrees) - Obtém o seno de um ângulo
tan(degrees) - Obtém a tangente de um ângulo
acos
asin
atan
atan2
radians
degrees
angleMode

Data e hora

day() / month() / year() - Data atual
hour() / minute() / second() - Hora atual
millis() - Milissegundos decorridos desde o início do programa

Correção de erros

debug(arg1, arg2, ...) - Imprime o painel de desenvolvimento do navegador
println(data) - Imprimir uma nova linha para o console da tela
print(data) - Imprime o console

JavaScript

var drawWinston = function() { } - Define uma nova função
var array = [0, 1, 2, 3, 4] - Cria uma matriz de 5 números
if (x < 20) { } - Somente executa o código se uma determinada condição for verdadeira
for (var i = 0; i < 8; i++) { } - Repete o código um número definido de vezes
while (x < 250) { } - Somente executa o código se uma determinada condição for verdadeira