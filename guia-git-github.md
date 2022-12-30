# fonte: rogerdudler.github.io/git-guide/index.pt_BR.html

INICIANDO UM REPOSITÓRIO

Em um novo diretório inicie o repositório pelo terminal:

    git init # cria um novo repositório local

Criar uma cópia de trabalho de um repositório local:

    git clone /caminho/do/repositorio

Criar uma cópia de trabalho em um repositório remoto:

    git clone usuário@servidor: /caminho/do/repositório

FLUXO DE TRABALHO

O repositório local consite em 3 ramificações:

- working directory - contém os arquivos atuais
- index - área temporária
- head - aponta para o último commit confirmando a alteração

Adicionar mudanças:

    git add <arquivo>
    git add * # adiciona todos os arquivos do diretório

Confirmar as alterações feitas no repositório local:

    git commit -m "comentário de alterações"

Enviar alterações para o repositório remoto:

    git push origin master # pode ser alterado master para outro branch se necessário

Caso o diretório seja um criado localmente, não um clonado, para enviar ao repositório remoto:

    git remote add origin <servidor>

RAMIFICAÇÕES 'BRANCHS'

Branches são utilizados para desenvolver funcionalidades isoladas umas das outras. O branch master é o padrão quando é criado um repositório. Usando outros branches consegue-se isolar o código na fase de desenvolvimento e depois mesclar ao master após a conclusão, evitando subir código errado.

Criar um nvo branche:

    git checkout -b funcionalidade_x

Para retornar ao master:

    git checkout master

Para remover o branche:

    git branch -d funcionalidade_x

Disponibilizar o novo branch para outros:

    git push origin <funcionalidade_x>

ATUALIZAR E MESCLAR

