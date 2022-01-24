const mailjet = require('node-mailjet').connect('45a3af7f2d4e8e848bebe8f97b960331', '1da0d3c35c170485c24b8f9ac3bcf275')
export async function onRequestPost(context) {
  const { data } = context;
  mailjet.post("send", { 'version': 'v3.1'}).request({
    "Messages": [{
      "From": {
        "Email": "pilot@mailjet.com",
        "Name": "Mailjet Pilot"
      },
      "To": [{
        "Email": data.email,
        "Name": data.name
      }],
      "Subject": data.subject,
      "TextPart": "Following is a Test Email!",
      "HTMLPart": `<h3>Dear ${data.name}, welcome to my App, Your IP is ${data.ip}`
    }]
  }).then((result) => {
    return new Response(JSON.stringify(result.body), null, 2);
  }).catch((err) => {
    return new Response(err, null, 2);
  })
}