Esse é o inicio do repositorio git

Esses são os comandos do Git:

Configurar o Git:

git config --global user.name "seu nome" // adiciona o usuário
git config --global user.email "seuemail@algumacoisa" // insere o e-mail a ser usado
git config --global core.editor "seueditor" // define o editor para utilizar com o Git
git config --list // mostra as configurações do Git

Controles do Git:

git init // inicia o Git na pasta onde serão criados os arquivos
git status // mostra o status dos arquivos criados/modificados
git add "nome-do-arquivo-extensão" // adiciona o arquivo na fila do commit
git add -A // adiciona todos os arquivos na fila
git commit -m "instrução de modificação" // commit do arquivo para o repositório local
git commit -am "mensagem" // cria nova mensagem do commit
git log // mostra os dados do commit: hash, autor, data e hora
    variações do log:
        git log --decorate // mostra as modificações feitas
        git log --author // mostra os autores das modificações
        git log --graph // mostra as informações em modo gráfico
        git shortlog -sn // mostra só o nome de quem modificou
git branch // verifica a arvore do diretório (normalmente é criado um master)
git checkout "nome-de-outro-ramo" // muda para outro ramo (fora do master)
git diff // mostra diferenças entre arquivos
    variações do diff:
        git diff --only // mostra arquivos modificados
        git diff --name-only // mostra só o nome do arquivo modificado
        git diff nomedoarquivoe extensão // mostra só esse arquivo
git show "hash" / mostra as modificações ocorridas nesse arquivo
git reset HEAD // tira da fila do staged, apaga as modificações feitas no arquivo
    variações do reset:
        git reset soft //
        git reset mixed //
        git reset hard //


