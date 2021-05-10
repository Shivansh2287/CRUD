const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//mongo connect
mongoose.connect(
  "mongodb+srv://Shivansh:dojo@table.ncklg.mongodb.net/Table?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },

  () => {
    console.log("connected to db");
  }
);
mongoose.set("useCreateIndex", true);

require("./model/User");

app.use(require("./routes/users"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("server up and running"));
