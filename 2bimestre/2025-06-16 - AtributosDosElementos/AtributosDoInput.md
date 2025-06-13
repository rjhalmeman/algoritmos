# Atributos Globais (comuns a muitos elementos HTML)

id - Identificador único

class - Classes CSS

style - Estilos CSS inline

title - Texto de tooltip

disabled - Desabilita o input

readonly - Somente leitura

autofocus - Foco automático ao carregar a página

tabindex - Ordem de tabulação

aria-* - Atributos de acessibilidade

# Atributos Específicos para `<input>`

## Atributos Básicos

type - Define o tipo de input (text, number, email, password, etc.)

name - Nome do campo (importante para formulários)

value - Valor padrão

placeholder - Texto de exemplo

required - Campo obrigatório

autocomplete - Habilita/desabilita autocompletar (on/off)

## Atributos de Validação
min / max - Valor mínimo/máximo (para number, date, etc.)

minlength / maxlength - Tamanho mínimo/máximo do texto

pattern - Expressão regular para validação

step - Incremento/decremento (para number, range, etc.)

## Atributos de Eventos
onclick, onchange, oninput, etc. - Manipuladores de eventos JavaScript

## Atributos para Tipos Específicos

checked - Para inputs do tipo radio ou checkbox

multiple - Permite múltiplos valores (para email, file)

accept - Tipos de arquivo aceitos (para file)

src - URL da imagem (para image)

alt - Texto alternativo (para image)

## Atributos de Formulário
form - Associa o input a um formulário (por ID)

formaction / formenctype / formmethod / formnovalidate / formtarget - Substitui atributos do formulário (para submit e image)

