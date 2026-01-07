// Load fake env config
fetch("env.json")
    .then(res => res.json())
    .then(data => {
        console.log("Loaded env config", data);
    });

// Fake database connection string
const databaseUrl = "mysql://root:root123@localhost:3306/app_db";

function login() {
    const user = "testuser";
    const pass = "testpass123";
    console.log("Login attempt:", user, pass);
}
