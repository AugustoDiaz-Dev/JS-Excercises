let nombres = ["Jose", "Diego", "Javier", "Elena", "Augusto"];

console.log(nombres)
console.log(nombres[0])
console.log(nombres[5])
console.log(nombres.length)

nombres.push('Pepe');
console.log(nombres)
console.log(nombres.length)

const nombreEliminado = nombres.pop()
console.log(nombreEliminado)

nombres.unshift('Tomás')
console.log(nombres)

const nombreShift = nombres.shift()
console.log(nombreShift)
console.log(nombres)

console.log('Indice de ' + nombres.indexOf('Javier'));
console.log('Indice de ' + nombres.indexOf('Metienequedarmenosuno'));

nombres.unshift('Tomás');
nombres.push('Tomás');
console.log('Indice de ' + nombres.indexOf('Mirko'));

console.log('Indice de ' + nombres.indexOf('Tomás')); 