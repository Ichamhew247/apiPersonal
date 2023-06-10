const { User, Customer, Category } = require("./src/models");
const { sequelize } = require("./src/models");
sequelize
  .sync({ force: true })
  .then(() => {
    return User.bulkCreate([
      {
        username: "Admin",
        firstName: "Admin",
        lastName: "Admin",
        email: "Admin@gmail.com",
        password: "Admin",
        role: "Admin",
      },
      {
        username: "User",
        firstName: "User",
        lastName: "User",
        email: "User@gmail.com",
        password: "User",
        role: "User",
      },
      {
        username: "Guest",
        firstName: "Guest",
        lastName: "Guest",
        email: "Guest@gmail.com",
        password: "Guest",
        role: "Guest",
      },
    ]);
  })
  .then(() => {
    return Customer.bulkCreate([
      {
        customerId: "001",
        customerName: "บริษัท เพ็นน์เอเซีย จำกัด (สำนักงานใหญ่)",
        customerAddress:
          "468 ซอยคลองแค หมู่ที่ 2 ถนนเศรษฐกิจ ต.อ้อมน้อย อ.กระทุ่มแบน จ.สมุทรสาคร 74130",
        customerTaxNumber: "เลขประจำตัวผู้เสียภาษีอากร 0745536000300",
      },
      {
        customerId: "002",
        customerName:
          "บริษัท เอเอสเอ บ๊อกซ์บอร์ด คอนเทนเนอร์ จำกัด (สำนักงานใหญ่)",
        customerAddress:
          "99/1 หมู่ที่5 ถนนพระรามที่2  ต.ท่าทราย อ.เมืองสมุทรสาคร จ.สมุทรสาคร 74000 ",
        customerTaxNumber: "เลขประจำตัวผู้เสียภาษีอากร 0745530000251",
      },
      {
        customerId: "003",
        customerName: "บริษัท เอเอสเอ คอนเทนเนอร์ จำกัด (สำนักงานใหญ่)",
        customerAddress:
          "361 หมู่ที่4   ตำบลอ้อมน้อย อำเภอกระทุ่มแบน  จังหวัดสมุทรสาคร 74130",
        customerTaxNumber: "เลขประจำตัวผู้เสียภาษีอากร 0105537052848",
      },
    ]);
  })
  .then(() => {
    return Category.bulkCreate([
      {
        nameCategory: "หมวดลูกกลิ้งยาง ลูกกลิ้งเหล็ก",
      },
      {
        nameCategory: "หมวดยางดูด",
      },
      {
        nameCategory: "หมวดลูกล้อ",
      },
      {
        nameCategory: "หมวดพลาสติกอุตสาหกรรม",
      },
      {
        nameCategory: "หมวดซีลยาง แผ่นยาง ปะเก็นยาง ท่อยาง และอื่น ๆ",
      },
    ]);
    // console.log(JSON.stringify(todo, null, 2));
  })

  .then(() => process.exit(0))
  .catch((err) => console.log(err.message));
