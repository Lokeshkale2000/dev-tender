const express = require("express");
const app = express();
const {errfunction}= require('./middleware')
// app.use("/", (req, res) => {
//   res.send("hello ");
// });// default router also it handle all method with it

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

// dyanamic routing
app.post("/home/:userid", (req, res) => {
  console.log(req.params);
  res.send("dyanamic routering route");
});

// middleware
// one way
app.use(
  "/user",
  (req, res, next) => {
    console.log("hadling the route user!!!");
    next();
  },
  (req, res, next) => {
    console.log("handle the route user 2");

    res.status(400);
    next();
  },
  (req, res) => {
    console.log("handle the route user 2");
    res.send("3 response!!");
  }
);

// second way

app.use("/admin/", (req, res, next) => {

  const token = "xhhlkjlk"
  const isAdminAuth = token === "xhhlkjlk";
  if (!isAdminAuth) {
    res.status(400)
  } else {
    res.status(200)
     next();
  }
 

}
)


app.get("/admin/getalldata", (req, res) => {
  res.send("all data sent")
})

app.get("/admin/deletedata", (req, res) => {
    res.send("all data delete");
});


// third way

app.use("/useError/", errfunction);
app.get("/useError/getalldata",(req, res) => {
  res.send("all data error")
});

app.get("/useError/deletedata", (req, res) => {
  res.send("all data delete");
});

const port = 8080;
app.listen(port, () => {
  console.log("server start at port:", port);
});
