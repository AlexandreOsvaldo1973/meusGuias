# fonte: rogerdudler.github.io/git-guide/index.pt_BR.html

INICIANDO UM REPOSITÓRIO

Em um novo diretório inicie o repositório pelo terminal:

    git init # cria um novo repositório local

Criar uma cópia de trabalho de um repositório local:

    git clone /caminho/do/repositorio

Criar uma cópia de trabalho em um repositório remoto:

    git clone usuário@servidor: /caminho/do/repositório

FLUXO DE TRABALHO

O repositório local consiste em 3 ramificações:

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

Criar um novo branch:

    git checkout -b funcionalidade_x

Para retornar ao master:

    git checkout master

Para remover o branch:

    git branch -d funcionalidade_x

Disponibilizar o novo branch para outros:

    git push origin <funcionalidade_x>

ATUALIZAR E MESCLAR

Atualizar o repositório local com a mais nova versão do repositório remoto:

    git pull

Obter e mesclar alterações remotas (em caso de conflito executar merge de cada arquivo manualmente):

    git merge <branch>

Depois de mesclar marcar com:

    git add <arquivo>

Antes de subir alterações visualizar:

    git diff <branch origem> <branch destino>

ROTULANDO

Se recomenda criar rótulos para releases de softwares.

Obter o id do commit:

    git log

Criar um novo rótulo:

    git tag 1.0.0 1b2c3d45ef # representa os 10 primeiros caracteres do id do commit que referencia o rótulo.

SOBRESCREVER ALTERAÇÕES LOCAIS

Caso algo seja feito errado, para sobrescrever as alterações locais (HEAD) use:

    git checkout -- <arquivo>

Para apagar alterações adicionadas ao INDEX (commits locais), recupere o histórico mais recente do servidor e aponte para o branch master:

    git fetch origin
    git reset --hard origin/master

DICAS ÚTEIS

- Interface gráfica padrão instale gitk
- Usar saídas do git coloridas:

    git config color.ui true

- Exibir log em apenas uma linha por commit:

    git config format.pretty oneline

- Fazer inclusões interativas:

    git add -i

GUIAS ÚTEIS:

Livro Pro Git: https://git-scm.com/book/pt-br/v2 (até a página 144 está em português, depois em inglês)
ProGit Magazine: https://progit.org/ (site em francês)
Think Like (a) Git: https://think-like-a-git.net/ (site em inglês)
Suporte do Git: https://support.github.com/ 
