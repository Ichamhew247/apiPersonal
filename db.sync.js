// const { sequelize, User, Chordlist, Playlist } = require("./models");

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     User.bulkCreate([
//       { userId: 1, username: "Admin", password: "1234" },
//       { userId: 2, username: "AAA", password: "1234" },
//       { userId: 3, username: "BBB", password: "1234" },
//     ]);
//   })
//   .then(() => {
//     return Playlist.bulkCreate([
//       {
//         playlistId: 1,
//         username: "Admin",
//         musicName: "ก่อน",
//         youtubeEmbed: "Bn5JCe-7aIg",
//       },
//       {
//         playlistId: 2,
//         username: "AAA",
//         musicName: "adad",
//         youtubeEmbed: "Bnasdasd",
//       },
//       {
//         playlistId: 3,
//         username: "BBB",
//         musicName: "asdas",
//         youtubeEmbed: "Bn5asdaIg",
//       },
//     ]);
//   })
//   .then(() => {
//     return Chordlist.bulkCreate([

//       {
//         id: 1,
//         playlistId: 1,
//         time: "1.5",
//         chord: "A",
//       },
//       {
//        id: 2,
//         playlistId: 1,
//         time: "6",
//         chord: "F Sharp minor",
//       },
//       {
//         id: 3,
//         playlistId: 2,
//         time: "11.6",
//         chord: "D",
//       },
//       {
//         id: 4,
//         playlistId: 3,
//         time: "16.9",
//         chord: "E",
//       },
//     ]);

//   })

//   .then(() => process.exit(0))
//   .catch((err) => console.log(err.message));
