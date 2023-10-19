const { SourceMapConsumer } = require("source-map-js/lib/source-map-consumer");

let username = "admin";
let password = "12345"

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
  } else {
    console.log("Invalid credentials");
  }