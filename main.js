
console.log('Pizzas con ID impar:');
pizzas.forEach(pizza => {
  if (pizza.id % 2 !== 0) {
    console.log(`ID: ${pizza.id}, Nombre: ${pizza.nombre}`);
  }
});
 

const pizzaMenor600 = pizzas.find(pizza => pizza.precio < 600);
console.log("¿Hay alguna pizza que valga menos de $600?");
if (pizzaMenor600) {
    console.log("Sí, hay pizzas que valen menos de $600.");
    console.log(`La pizza que vale menos de $600 es la ${pizzaMenor600.nombre} cuyo precio es de $${pizzaMenor600.precio}`);
} else {
    console.log("No, todas las pizzas valen $600 o más.");
}


console.log("Nombre de cada pizza con su respectivo precio:");
pizzas.forEach(pizza => {
  console.log(`${pizza.nombre} - Precio: $${pizza.precio}`);
});


console.log("Ingredientes de cada pizza:");
pizzas.forEach(pizza => {
  console.log(`Ingredientes de la ${pizza.nombre}:`);
  pizza.ingredientes.forEach(ingrediente => {
    console.log("-" + ingrediente);
  });
});

