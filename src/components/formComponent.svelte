<script>
    import {userIp} from './../store'
    import emailjs from '@emailjs/browser'
    emailjs.init(import.meta.env.VITE_USER_ID);
    let name , subject , message, email
    const submitEmail = function(event) {
        event.preventDefault();
        if(name === 'James'){
            alert("Cannot Submit with name James")
        }else{
            let templateParams = {
                subject,
                to_email: email,
                from_name: name,
                message,
                from_ip: $userIp
            }
            console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams)
            emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams).then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
        }
    }
</script>
<form on:submit={submitEmail}>
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
            type="name"
            class="form-control"
            id="name"
            placeholder="Enter your Name"
            required
            bind:value={name}
        />
</div>

<div class="mb-3">
    <label for="name" class="form-label">Email</label>
    <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Enter your email"
        required
        bind:value={email}
    />
    </div>
    <div class="mb-3">
        <label for="message" class="form-label">Subject</label>
        <select class="form-select" bind:value={subject}>
            <option selected>Choose a Subject</option>
            <option value="Customer Support">Customer Support</option>
            <option value="New Connection">New Connection</option>
            <option value="Complaint">Complaint</option>
        </select>
    </div>
    <div class="mb-3">
        <label for="message" class="form-label">Your Message</label>
        <textarea class="form-control" id="message" rows="5" bind:value={message}/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
