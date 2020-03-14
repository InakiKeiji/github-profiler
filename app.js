let profile = require("./profile.js");

// let profiles = ["inakikeiji", "rizafahmi", "yofri", "mark"];
// profiles.map(user => {
//   return profile.get(user);
// });

let profiles = process.argv.slice(2);
profiles.map(profile.get);
