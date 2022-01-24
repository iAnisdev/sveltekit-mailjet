<script>
    import { onMount } from "svelte";
    import wretch from 'wretch'
    import {userIp} from './../store'

    import FormComponent from './../components/formComponent.svelte' 

    let IP_API = wretch().url('https://api.db-ip.com/v2/free/self')
    
    async function fetchIP() {
        let response = await IP_API.get().json()
        console.log(response)
        userIp.set(response.ipAddress)
    }
    onMount(fetchIP);
</script>

<div class="container mt-5">
    <FormComponent />
</div>

<svelte:head>
    <title>Svelte Kit and Mailjet Demo</title>
</svelte:head>
