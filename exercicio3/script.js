const arrayOriginal = [10, 20, 30, 40]
const arraysegundoArray = arrayOriginal.slice()
const arrayTerceiraArray = arraysegundoArray.slice()
console.log("Original-",arrayOriginal)
console.log("Segunda array-",arraysegundoArray)
console.log("Terceira array-",arrayTerceiraArray)

//ETAPA5
console.log("Foi adicionado o indice:",arrayOriginal.push(60))
console.log("Original com o numero adicionado",arrayOriginal)
console.log("Segunda array",arraysegundoArray)

//ETAPA6
arraysegundoArray.pop()
console.log("Segunda array com o numero removido",arraysegundoArray)
console.log("Original",arrayOriginal)

//ETAPA7
arrayTerceiraArray.splice(1,1)
console.log("Terceira array com o segundo numero removido",arrayTerceiraArray)
console.log("Original",arrayOriginal)







