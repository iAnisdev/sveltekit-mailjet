export async function onRequestPost(context) {
  const { env, data } = context;
  fetch('https://api.mailjet.com/v3/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${env.API_KEY}:${env.API_SECRET}`)
    },
    body: JSON.stringify({
      "FromEmail": env.SENDER_EMAIL,
      "FromName": env.SENDER_NAME,
      "Recipients": [{
        "Email": data.to_email,
        "Name": data.to_name
      }],
      "Subject": data.subject,
      "Text-part": `Email Message is : ${data.message}`,
      "Html-part": `<h3>Dear ${data.to_name}, welcome to my App, Your IP is ${data.from_ip}`
    })
  }).then(response => response.json()).then((result) => {
    console.log("result ", result)
    return new Response(JSON.stringify(result.body), null, 2);
  }).catch((err) => {
    return new Response(err, null, 2);
  })
}