const Product = require("../models/product.model")

const addProduct = async (req, res, next)=>{
    const {title, price, description} = req.body
    if(!req.body.published){
        published = false
    } else {
        published = true;
    }
    const product = await Product.create({
      title,
      price,
      description,
      published,
    });
    return res.status(200).json({
        product
    })
}

const allProducts = async (req, res, next) => {
  const products = await Product.findAll();
  return res.status(201).json({
    products,
  });
};

const allProductBased = async (req, res, next) => {
  const productsBased = await Product.findAll({ attributes: ["title", "price"] });
  return res.status(200).json({
    productsBased,
  });
};

const oneProduct = async (req, res, next) => {
    const {id} = req.query
  const OneProduct = await Product.findOne({where: {id}});
  return res.status(201).json({
    OneProduct,
  });
};

const updateProduct = async (req, res, next) => {
  const { id } = req.query;
  const product = Product.update(req.body, {where: {id}})
  return res.status(201).json({
    product,
  });
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.query;
  await Product.destroy({where: {id}})
  return res.status(201).json({
    message: "Deleted..."
  });
};

const productPublished = async (req, res, next) => {
  const productsPub = await Product.findAll({
      where: {published: true}
  });
  return res.status(200).json({
    productsBased,
  });
};

module.exports = {
  deleteProduct,
  allProducts,
  productPublished,
  addProduct,
  updateProduct,
  oneProduct,
  allProductBased,
};