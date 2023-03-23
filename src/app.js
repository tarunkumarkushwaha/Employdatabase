const e = require("express");
const { json } = require("express");
const express = require("express");
require("../src/db/connection");

const Empdata = require("../src/models/empdata")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req, res) => {
   res.send("Employ data base is working")
})

// post request handler 

app.post("/employdata", async (req, res) => {
   console.log("the post method")
   const data = new Empdata(
      {
         employeename: req.body.employeename,
         address: req.body.address,
         age: req.body.age,
         department: req.body.department,
         employeestatus: req.body.employeestatus
      }
   )

   const val = await data.save()
   res.json(val)
})

// get handler 

app.get("/getdata", async (req, res) => {
   let value = await Empdata.find({})
   res.send(value)
})

app.listen(port, () => {
   console.log(`connection is live at ${port}`);
})
