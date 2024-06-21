// The difference in behavior between var and let in loops relates to their scope and
// how they interact with asynchronous functions like setTimeout:
for (let i = 0; i <= 11; i++) {
  setTimeout(() => console.log(i), 1000);
}
// for(let i= 0; i < = 11; i++){
//     setTimeout(()=>console.log(i),1000)
// }
