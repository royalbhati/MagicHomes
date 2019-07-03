const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;
const passport = require("passport");
var path = require("path");
const propertyModel = require("./model/Property");
//DB
require("./model/db");

const userRoute = require("./routes/user");

const app = express();
//Static file declaration
app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());
// app.use(logger())
app.use(cors());
//Paspport mIddleware
app.use(passport.initialize());

//Passport Config
require("./config/passport.js");
app.use("/user", userRoute);

app.post("/api/createProperty", (req, res) => {
  console.log(req.body);
  const ameni = req.body.ameni;
  const new_prop = new propertyModel({
    ameni: ameni.split(","),
    ...req.body
  });
  new_prop
    .save()
    .then(() => res.send({ msg: "Saved Sucessfully" }))
    .catch(err => res.json({ msg: err.error }));
});



app.get("/api/", (req, res) => {
  propertyModel.find({}, function(err, result) {
    res.send({ result });
  });
});

app.put("/api/editproperty/:id", (req, res) => {
  propertyModel.findOneAndUpdate({ _id: req.params.id }, req.body, function(
    err,
    doc
  ) {
    if (err) return res.send(500, { error: err });
    return res.send({ msg: "Edit Sucessfully" });
  });
});

app.delete("/api/:id", (req, res) => {
  propertyModel.findOneAndDelete({ _id: req.params.id }, function(err) {
    if (!err) {
      res.send({ msg: "deleted" });
    } else {
      console.log("error");
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "client/build/index.html")));
  });
}
//server
app.listen(port, () => {
  console.log("server started");
});
