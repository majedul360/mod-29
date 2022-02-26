const products = [
  "laptop asus new model ",
  "dell old model laptop",
  "hp corei5 laptop",
  "apple new watch",
  "laptop apple corei7 ",
  "pulsar ns160",
];
const search = "laptop";

// using indexof
/* for (const element of products) {
  if (element.indexOf(search) != -1) {
    console.log(element);
  }
} */

// using includes
/* for (const product of products) {
  if (product.includes(search)) {
    console.log(product);
  }
} */

// using startsWith
/* for (const product of products) {
  if (product.startsWith(search)) {
    console.log(product);
  }
}
 */

// using endsWith
for (const product of products) {
  if (product.endsWith(search)) {
    console.log(product);
  }
}
