const express = require("express");
const app = express();

// app.use("/", (req, res) => {
//   res.send("hello ");
// });// default router

app.get("/test", (req, res) => {
  res.send("hello form the server");
});

// app.get("/ab+cd", (req, res) => {
//   res.send({first:"lokesh", lastname:"kale"});
// });

// app.get("/ab?cd", (req, res) => {
//   res.send("Matched");
// });

app.post("/home", (req, res) => {
  //  console.log("save data to databases")
  res.send("save data to databases");
});

app.get("/home", (req, res) => {
  res.send("express get method");
});
app.get("/home/abc", (req, res) => {
  res.send("get method");
});

// app.get("/home/ab+cd", (req, res) => {
//   res.send("get method");
// });
app.get("/home/ab*cd", (req, res) => {
  res.send(" multiple symbol get method");
});

const port = 8080;
app.listen(port, () => {
  console.log("server start at port:", port);
});
