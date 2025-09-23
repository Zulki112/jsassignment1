
const user = {
id: 1,
profile: {
username: "mandem",
email: "mandem@example.com"
},
settings: {
theme: "dark",
notifications: true}
};

function extractinfo(user) {
    let {profile: {username, email}, settings: {theme}} = user;
    console.log("username: ", username);
    console.log("email: ", email);
    console.log("theme: ", theme);
}

extractinfo (user);