const {getBrands} = require('node-car-api');

async function printBrands () {
  const brands = await getBrands();
  

  console.log(brands);
}

printBrands();

const {getModels} = require('node-car-api');

async function printModels (brand) {
  const models = await getModels(brand);

  console.log(models);
}

printModels('PEUGEOT');