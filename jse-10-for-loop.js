//El bucle FOR. Se suele usar mas este que el while.

let arr = ["Augusto", "Martha", "Lucia"];
for (let i = 0; i < 3; i++) {
    console.log(arr[i]);
}
//El mismo bucle con el nombres.length se transforma en DINAMICO.
let arr = ["Augusto", "Martha", "Lucia"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}