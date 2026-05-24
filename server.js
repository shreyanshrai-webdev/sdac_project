const express = require("express");
const app = express();
const { empmodel, connectdb } = require("./models/student");

app.use(express.json());

//connectdb();

app.get("/showemp", async (req, res) => {
  try {
    const data = await empmodel.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

app.post("/addemp", async (req, res) => {
  try {
    const data = new empmodel({
      name: req.body.name,
      department: req.body.department,
      salary: req.body.salary,
      email: req.body.salary,
      course: req.body.course,
      age: req.body.age,
    });
    const result = await data.save();
    console.log(result);
    res.json("Data inserted");
  } catch (err) {
    console.log(err);
  }
});

app.patch("/updateemp/:id", async (req, res) => {
  try {
    const result = await empmodel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        salary: req.body.salary,
        dept: req.body.dept,
        email: req.body.salary,
        course: req.body.course,
        age: req.body.age,
      },
      { new: true },
    );
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/deleteemp/:id", async (req, res) => {
  try {
    const result = await empmodel.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000, () => {
  console.log(" Server running on port 4000");
});
