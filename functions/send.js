
export async function onRequestPost(context) {
  const { env , data } = context;
  const mailjet = require('node-mailjet').connect(env.API_KEY, env.API_SECRET)

  mailjet.post("send", { 'version': 'v3.1'}).request({
    "Messages": [{
      "From": {
        "Email": env.SENDER_EMAIL,
        "Name": env.SENDER_NAME
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
    console.log("result "  , result)
    return new Response(JSON.stringify(result.body), null, 2);
  }).catch((err) => {
    return new Response(err, null, 2);
  })
}
