var nodemailer = require("nodemailer");
const {
  ownerMailOptions,
  clientMailOptions,
  ownerForAuditMailOptions,
} = require("./mailToptions");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const sendEmailForEnquiry = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  transporter.sendMail(
    clientMailOptions({
      firstName,
      lastName,
      email,
    }),
    function (error, info) {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({ data: null, success: false, msg: "Email Not Sent" });
      } else {
        console.log("Email sent to Client: " + info.response);
      }
    }
  );
  transporter.sendMail(ownerMailOptions(req.body), function (error, info) {
    if (error) {
      console.log(error);
      res
        .status(500)
        .json({ data: null, success: false, msg: "Email Not Sent" });
    } else {
      console.log("Email sent to Owner: " + info.response);
    }
  });
  res
    .status(200)
    .json({ data: req.body || {}, success: true, msg: "Email Sent" });
};
const sendEmailForAudit = async (req, res) => {
  transporter.sendMail(
    ownerForAuditMailOptions(req.body),
    function (error, info) {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({ data: null, success: false, msg: "Email Not Sent" });
      } else {
        console.log("Email sent to Owner: " + info.response);
      }
    }
  );
  res
    .status(200)
    .json({ data: req.body || {}, success: true, msg: "Email Sent" });
};

module.exports = {
  sendEmailForEnquiry,
  sendEmailForAudit,
};
