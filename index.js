require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();


// ---------------- MIDDLEWARE ----------------

app.use(cors());
app.use(express.json());


// ---------------- DATABASE CONNECTION ----------------

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log(err);
});


// ---------------- SCHEMA ----------------

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    course: {
        type: String,
        required: true
    }

});


// ---------------- MODEL ----------------

const Student = mongoose.model("Student", studentSchema);


// ---------------- HOME ROUTE ----------------

app.get("/", (req, res) => {
    res.send("Student Backend Running");
});


// ---------------- INSERT STUDENT ----------------

app.get("/add-student", async (req, res) => {

    const student = new Student({

        name: "Rakesh",
        email: "rakesh@gmail.com",
        course: "CSE"

    });

    await student.save();

    res.send("Student Added Successfully");
});


// ---------------- FETCH STUDENTS ----------------

app.get("/students", async (req, res) => {

    const students = await Student.find();

    res.json(students);
});


// ---------------- DELETE STUDENT ----------------

app.get("/delete-student", async (req, res) => {

    await Student.deleteOne({ name: "Rakesh" });

    res.send("Student Deleted");
});


// ---------------- UPDATE STUDENT ----------------

app.get("/update-student", async (req, res) => {

    await Student.updateOne(
        { name: "Rakesh" },
        { course: "AI & ML" }
    );

    res.send("Student Updated");
});


// ---------------- SERVER ----------------

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");


// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Backend Running");
// });

// app.get("/api/jokes", (req, res) => {

//   const jokes = [
//     {
//       id: 1,
//       title: "A joke",
//       content: "This is a joke"
//     },
//     {
//       id: 2,
//       title: "Another joke",
//       content: "This is another joke"
//     },
//     {
//       id: 3,
//       title: "A third joke",
//       content: "This is a third joke"
//     },
//     {
//       id: 4,
//       title: "A fourth joke",
//       content: "This is a fourth joke"
//     },
//     {
//       id: 5,
//       title: "A fifth joke",
//       content: "This is a fifth joke"
//     }
//   ];

//   res.json(jokes);
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


//*****   .env file
// .env file stores important project settings and secret data like PORT, API keys, and passwords 
// separately from the main code.
// dotenv.config() loads those values into process.env, so the project can use them securely and easily.