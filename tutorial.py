# Variaveis

pi = 3.14161820
print("O comprimento de PI é " + (str(len (str(pi)))))
print("O numero pi é " + str(pi))

# Listas

lottery = [35,2,40,59,7,10] # lista
lottery.sort() # coloca em ordem
# lottery.reverse() # ordem reversa
lottery.append(5) # inclui um item
lottery.pop(3) # exclui um item

print("Existem " + (str(len(lottery))) + " numeros sorteados") # comprimento da lista
print("A lista de numeros sorteados foi: " + (str(lottery))) # lista total
print("Este é o primeiro item da lista = " + (str(lottery[0]))) # item especifico da lista

# Dicionarios

participant = {'name': 'Monalisa', 'country': 'Irlanda','numeros_favoritos': [7, 42, 93]}
participant['comida_favorita'] = 'Filé de vitéla'
print(participant)
print(participant['name'], participant['comida_favorita'])
print(len(participant))

# Comparadores e Booleanos

print(5 > 2, 3 < 1, 5 > 2 * 3, 1 == 1, 5 != 2, 6 >= 12 / 2, 3 <= 2)
print(6 > 2 and 2 < 3, 3 > 2 and 2 < 1, 3 > 2 or 2 < 1)

# Condicionais

# Exemplo 01

if 5 > 2:
    print('5 é maior que 2')
else:
    print('5 não é maior que 2')

# Exemplo 02

valor = 9

if valor == 10:
    print('Valor exato')
elif valor < 10:
    print('Valor insuficiente')
else:
    print('O valor não está correto')

# Exemplo 03

volume = 54

if volume < 19:
    print('volume muito baixo')
elif 20 <= volume < 39:
    print('volume baixo e agradavel')
elif 40 <= volume < 59:
    print('volume correto')
elif 60 <= volume < 79:
    print('volume alto, mas não incomoda')
elif 80 <= volume < 100:
    print('volume muito alto, esta imcomodando')
else:
    print('volume extremamente alto')

# Funções

def hi(name):
    if name == 'Ola':
        print('Ola bocó')
    elif name == 'Monalisa':
        print('Ola '+ name + '!')
    else:
        print('Ola python louco')

print(hi("Monalisa"))

# Laços

def hi(nome):
    print('Quieta ' + nome + '!')

dogs = ['Monalisa', 'Sophia', 'Dina', 'Belinha']
for nome in dogs:
    hi(nome)
    print('Pra casinha!')

for i in range(1, 6):
    print(i)
