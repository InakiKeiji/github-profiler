// TODO: [x] Connect to GitHub API
let https = require("https");

const options = {
  hostname: "api.github.com",
  port: 443,
  path: "/users/inakikeiji",
  mehtod: "GET",
  headers: {
    "user-agent": "nodejs"
  }
};

// TODO: [x] Read the data
let request = https.request(options, response => {
  // console.log(`Got response: `, response);
  let body = "";
  response.on("data", data => {
    body = body + data;
  });
  response.on("end", () => {
    // console.log(body);
    // console.log(typeof body);
    // TODO: [x] Parse the data
    // Convert String to JSON (JavaScript object)
    let profile = JSON.parse(body);
    // console.log(profile.avatar_url);
    // console.log(typeof profile);
    // TODO: [x] Print the data out
    console.log(
      `${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} follower(s)`
    );
  });
});

request.end();

request.on("error", e => {
  console.error(e);
});
