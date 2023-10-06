/* # 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor ou igual 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 3.000 = Prata
Se XP for entre 3.001 e 4.000 = Ouro
Se XP for entre 4.001 e 5.000 = Platina
Se XP for entre 5.001 e 8.000 = Diamante
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

 */


let heroName = "Naillath"
let heroExperience = 2000


let heroLevel

if (heroExperience < 1001) {
    heroLevel = "Ferro"
}
else if (heroExperience >= 1001 && heroExperience <= 2000) {
    heroLevel = "Bronze"
}
else if (heroExperience >= 2001 && heroExperience <= 3000) {
    heroLevel = "Prata"
}
else if (heroExperience >= 3001 && heroExperience <= 4000) {
    heroLevel = "Ouro"
}
else if (heroExperience >= 4001 && heroExperience <= 5000) {
    heroLevel = "Platina"
}
else if (heroExperience >= 5001 && heroExperience <= 8000) {
    heroLevel = "Diamante"
}
else if (heroExperience >= 8001 && heroExperience <= 9000) {
    heroLevel = "Ascendente"
}
else if (heroExperience >= 9001 && heroExperience <= 10000) {
    heroLevel = "Imortal"
}
else {
    heroLevel = "Radiante"
}


console.log(`O Herói de nome ${heroName} está no nível ${heroLevel}.`)

