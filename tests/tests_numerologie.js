fs = require('fs')

eval(fs.readFileSync("./numerologie/numerologie.js", {encoding:'utf8'}))

// test de somme(nombre)
console.log(somme(132))

// avec un chiffre : charAt != charCodeAt
console.log(somme(4))
console.log("4".charCodeAt(0))
console.log("4".charAt(0))

// conversion chaîne de caractères et nombre
console.log(typeof "4".charAt(0))
console.log(parseInt("4".charAt(0)))
console.log(typeof parseInt("4".charAt(0)))
// fin de test de somme(nombre)

//test valeur somme des chiffres
console.log(nombre("coucou"))
console.log(chiffreAssocie("coucou"))
// fin de test de chiffreAssocie(chaine)