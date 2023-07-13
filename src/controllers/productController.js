const { Product } = require("../models");
const { Op } = require("sequelize");

exports.getProduct = (req, res, next) => {
  Product.findAll()
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};

exports.getProductById = (req, res, next) => {
  const { id } = req.params;
  Product.findOne({
    attributes: ["name", "priceProduct", "description"],
    where: { id: id },
  })
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};

exports.updateProduct = (req, res, next) => {
  const { id } = req.params;
  Product.update({ ...req.body }, { where: { id: id } })
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};

exports.deleteProduct = (req, res, next) => {
  const { id } = req.params;
  Product.destroy({
    attributes: ["name", "priceProduct", "description"],
    where: { id: id },
  })
    .then((rs) => {
      res.json(rs);
    })
    .catch(next);
};

exports.createProduct = async (req, res, next) => {
  try {
    const { priceProduct, description, name } = req.body;

    const result = await Product.create({
      priceProduct: priceProduct,
      description: description,
      name: name,
      // photoProduct: photoProduct,
    });
    res.status(201).json({ message: "อัพโหลดสินค้าสำเร็จ", result });
  } catch (error) {
    next(error);
  }
};
// exports.createProduct = (req, res, next) => {
//   Product.create({
//     attributes: ["priceProduct", "description", "name"],
//   })
//     .then((rs) => {
//       res.json(rs);
//     })
//     .catch(next);
// };

// exports.searchProduct = (req, res, next) => {
//   const { search } = req.body;
//   Product.findAll({
//     where: {
//       name: {
//         [Op.like]: `%${search}%`,
//       },
//     },
//   })
//     .then((rs) => {
//       res.json(rs);
//     })
//     .catch(next);
// };

exports.searchProduct = (req, res, next) => {
  const { search } = req.body;
  Product.findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          priceProduct: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          description: {
            [Op.like]: `%${search}%`,
          },
        },
      ],
    },
  })
    .then((results) => {
      res.json(results);
    })
    .catch(next);
};
