const arr = [{ price: 100 }, { price: 1000 }, { price: 10 }, { price: 1 }];

const result = arr.filter(elem => {
  return elem.price > 10;
});

console.log(result);
