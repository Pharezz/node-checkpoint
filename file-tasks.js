const fs = require("fs");

// Create welcome.txt
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("welcome.txt created.");
});

// Read hello.txt
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Could not read hello.txt:", err.message);
  } else {
    console.log("Content of hello.txt:", data);
  }
});
