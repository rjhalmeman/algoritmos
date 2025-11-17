

# 1) CRUD para controle de **Especialidade Médica**

  Tipo       Atributo
  ---------- -------------------------
  `int`      **id_especialidade**

  `string`   **nome_especialidade**

  `string`   **area_atuacao**

  `int`      **tempo_formacao_anos**

  `string`   **conselho_regional**


### Restrições

  -   `id_especialidade`: maior que zero
  -   `nome_especialidade`: mínimo 3 caracteres
  -   `tempo_formacao_anos`: maior ou igual a 2
  -   `conselho_regional`: selecionar via menu suspenso a qual conselho está vinculado

### Funcionalidades

  -   Listar todas as especialidades por conselho regional
  -   Procurar especialidade pelo nome
  -   Listar especialidades com tempo de formação acima de 5 anos

------------------------------------------------------------------------

# 2) CRUD para controle de **Exames de Saúde**

  Tipo       Atributo
  ---------- -----------------------------
  `int`      **id_exame**

  `string`   **nome_exame**

  `string`   **tipo_exame**

  `date`     **data_validade_resultado**

  `float`    **custo_exame**

  `int`      **tempo_resultado_dias**

  `string`    **nome_laboratorio**


### Restrições

    -   `id_exame`: maior que zero
    -   `data_validade_resultado`: não pode ser passada
    -   `custo_exame`: maior que zero
    -   `tempo_resultado_dias`: entre 1 e 30
    -   `nome_laboratorio`: selecionar via menu suspenso o nome do laboratório onde foi feito o exame

### Funcionalidades

    -   Listar exames por tipo
    -   Buscar exame pelo nome
    -   Listar exames cujo custo ultrapasse determinado valor
    -   Listar exames de um laboratório escolhido

------------------------------------------------------------------------

# 3) CRUD para controle de **Linguagem de Programação**

  Tipo       Atributo
  ---------- --------------------------
    `int`      **id_linguagem**
    `string`   **nome_linguagem**
    `date`     **ano_criacao**
    `string`   **paradigma** //pesquise para saber do que se trata
    `string`   **criador**
    `int`      **popularidade_indices**

### Restrições

  -   `id_linguagem`: maior que zero\
  -   `nome_linguagem`: mínimo 2 caracteres\
  -   `ano_criacao`: não pode ser futura\
  -   `popularidade_indices`: entre 0 e 100\
  -   `paradigma`: menu suspenso

### Funcionalidades

    -   Listar linguagens por paradigma\
    -   Buscar linguagem pelo nome\
    -   Listar linguagens criadas antes do ano 2000

------------------------------------------------------------------------

# 4) CRUD para controle de **Material de Construção**

  Tipo       Atributo
  ---------- ----------------------------
    `int`      **id_material_construcao**
    `string`   **nome_material**
    `string`   **categoria**
    `float`    **preco_unitario**
    `int`      **quantidade_estoque**
    `string`   **unidade_de_medida**
    `string`   **fabricante**
    `date`     **data_validade**

### Restrições

  -   `id_material_construcao`: maior que zero
  -   `preco_unitario`: maior que zero
  -   `quantidade_estoque`: maior ou igual a zero
  -   `unidade_de_medida` : escolher em data list
  -   `data_validade`: não pode ser passada
  -   `categoria`: menu suspenso

### Funcionalidades

  -   Listar materiais por categoria\
  -   Listar materiais com estoque inferior a 10 unidades\
  -   Buscar material pelo nome
  -   Liste todos os produtos cuja dada de validade está a uma semana do vencimento do produto

------------------------------------------------------------------------

# 5) CRUD para controle de **Trator (Máquinas Agrícolas)**

  Tipo       Atributo
  ---------- ----------------------------
    `int`      **id_trator**
    `string`   **modelo**
    `string`   **marca**
    `int`      **ano_fabricacao**
    `float`    **potencia_cv**
    `string`   **tipo_tracao**
    `int`      **horas_trabalhadas**
    `int`      **horas_entre_manutencoes** //quantidade de horas que trabalha para daí ser enviado para manutenção
    `date`     **data_ultima_manutencao**

### Restrições

  -   `id_trator`: maior que zero
  -   `ano_fabricacao`: não pode ser futuro
  -   `potencia_cv`: maior que zero
  -   `horas_trabalhadas`: maior ou igual a zero
  -   `tipo_tracao`: menu suspenso
  -   `data_ultima_manutencao`: não pode ser futura

### Funcionalidades

  -   Pesquisar trator por marca ou modelo
  -   Listar tratores com mais de 500 horas trabalhadas
  -   Listar tratores com manutenção vencida (data < hoje)
  -   Faça uma lista com os tratores e suas prováveis datas de manutenção, considere que trabalham 12 horas por dia, sete dias por semana.
