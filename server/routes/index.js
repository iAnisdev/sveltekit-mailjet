var express = require('express');
const mailjet = require('node-mailjet').connect(process.env.API_KEY, process.env.API_SECRET)

var router = express.Router();

router.post('/send', function(req, res, next) {
  const data = req.body;
  mailjet.post("send", { 'version': 'v3.1'}).request({
    "Messages": [{
      "From": {
        "Email": process.env.SENDER_EMAIL,
        "Name": process.env.SENDER_NAME
      },
      "To": [{
        "Email": data.to_email,
        "Name": data.to_name
      }],
      "Subject": data.subject,
      "TextPart": `Email Message is : ${data.message}`,
      "HTMLPart": `<h3>Dear ${data.to_name}, welcome to my App, Your IP is ${data.from_ip}`
    }]
  }).then((result) => {
   res.json(result.body)
  }).catch((err) => {
    res.status(400).json(err)
  })
});

module.exports = router;
