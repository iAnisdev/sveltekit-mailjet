export async function post({ body }) {
    return  fetch('https://api.mailjet.com/v3/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`45a3af7f2d4e8e848bebe8f97b960331:2fffd050b1cd13bfcf722f29500fefdd`)
        },
        body: JSON.stringify({
          "FromEmail":'marahmanjs@gmail.com',
          "FromName": 'Anis Bhai',
            "Recipients": [{
                "Email": body.to_email,
                "Name": body.to_name
            }],
            "Subject": body.subject,
            "Text-part": `Email Message is : ${body.message}`,
            "Html-part": `<h3>Dear ${body.to_name}, welcome to my App, Your IP is ${body.from_ip}`
        })
    }).then((resp) => {
        console.log("resp " , resp)
        return JSON.stringify(resp.body)
    }).catch((err) => {
        console.log("err " , err)
        return err
    })
}