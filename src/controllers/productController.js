const { Product } = require("../models");

exports.createProduct = async (req, res, next) => {
  try {
    const { priceProduct, description, name, photoProduct } = req.body;

    const result = await Product.create({
      priceProduct: priceProduct,
      description: description,
      name: name,
      photoProduct: photoProduct,
    });
    res.status(201).json({ message: "อัพโหลดสินค้าสำเร็จ", result });
  } catch (error) {
    next(error);
  }
};
exports.updateProduct = async (req, res, next) => {
  try {
    const { oldpriceProduct, newpriceProduct, confirmpriceProduct } = req.body;
    const price = await Product.update({
      oldpriceProduct: oldpriceProduct,
      newpriceProduct: newpriceProduct,
      confirmpriceProduct: confirmpriceProduct,
    });
    res.status(201).json({ message: "อัพเดตสินค้าสำเร็จ", price });
    const { olddescription, newdescription, confirmdescription } = req.body;
    const description = await Product.update({
      olddescription: olddescription,
      newdescription: newdescription,
      confirmdescription: confirmdescription,
    });
    res
      .status(201)
      .json({ message: "อัพเดตรายละเอียดสินค้าสำเร็จ", description });

    const { oldname, newname, confirmname } = req.body;
    const name = await Product.update({
      oldname: oldname,
      newname: newname,
      confirmname: confirmname,
    });
    res.status(201).json({ message: "อัพเดตชื่อสินค้าสำเร็จ", name });

    const { oldphotoProduct, newphotoProduct, confirmphotoProduct } = req.body;
    const photo = await Product.update({
      oldphotoProduct: oldphotoProduct,
      newphotoProduct: newphotoProduct,
      confirmphotoProduct: confirmphotoProduct,
    });
    res.status(201).json({ message: "อัพเดตรูปภาพสำเร็จ", photo });
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { priceProduct, description, name, photoProduct } = req.body;

    const result = await Product.Destroy({
      priceProduct: priceProduct,
      description: description,
      name: name,
      photoProduct: photoProduct,
    });
    res.status(201).json({ message: "อัพโหลดสินค้าสำเร็จ", result });
  } catch (error) {
    next(error);
  }
};
