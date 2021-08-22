//PLAYGROUND 2. Crear un array que contenga varios posteos. Tenemos que recorrer el array de objetos e imprimir cada objeto.

let posts = [
  {
    id: 1,
    titulo: "Aprendiendo Processing1",
    autor: "Daniel Shiffmann1",
    categoria: "Programación1",
  },
  {
    id: 2,
    titulo: "Aprendiendo Processing2",
    autor: "Daniel Shiffmann2",
    categoria: "Programación2",
  },
  {
    id: 3,
    titulo: "Aprendiendo Processing3",
    autor: "Daniel Shiffmann3",
    categoria: "Programación3",
  }
];

for (let i = 0; i < posts.length; i++) {
  console.log(`El post número ${posts[i].id}, es el posteo ${posts[i].titulo} y lo escribió ${posts[i].autor}`);
}