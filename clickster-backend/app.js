require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sendEmailForEnquiry, sendEmailForAudit } = require("./controller");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.post("/email-enquiry", sendEmailForEnquiry);
app.post("/email-audit", sendEmailForAudit);

app.listen(5000, console.log(5000, "PORT"));
