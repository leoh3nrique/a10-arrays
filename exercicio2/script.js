// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const arrayNumero = [10, 20, 30, 25, 40]

const arrayStrings = ["Leonardo", "Arnaldo", "Garrafa"]

const arrayMista = [10, "Leonardo", true]

console.log(arrayNumero)
console.log(arrayStrings)
console.log(arrayMista)

console.log("A quantidade de itens dessa array é",arrayNumero.length)
console.log("A quantidade de itens dessa array é",arrayStrings.length)
console.log("A quantidade de itens dessa array é",arrayMista.length)

console.log("O primeiro item é:",arrayNumero[0])
console.log("O segundo item é:",arrayStrings[1])
console.log("O terceiro item é:",arrayMista[2])

console.log("A array números inclui 10?",arrayNumero.includes(10))

console.log("A array mista inclui leonardo?",arrayMista.includes("leonardo"))