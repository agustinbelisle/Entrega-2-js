
const pizzasIdImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);
console.log("Pizzas con ID impar:");
console.log(pizzasIdImpar);

const pizzaMenor600 = pizzas.some(pizza => pizza.precio < 600);
console.log("¿Hay alguna pizza que valga menos de $600?");
console.log(pizzaMenor600 ? "Sí, hay pizzas que valen menos de $600." : "No, todas las pizzas valen $600 o más.");

console.log("Nombre de cada pizza con su respectivo precio:");
pizzas.forEach(pizza => {
  console.log(`${pizza.nombre} - Precio: $${pizza.precio}`);
});

console.log("Ingredientes de cada pizza:");
pizzas.forEach(pizza => {
  console.log(`Ingredientes de ${pizza.nombre}:`);
  pizza.ingredientes.forEach(ingrediente => {
    console.log(ingrediente);
  });
});

