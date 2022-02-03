export async function onRequestGet({env}) {
    const info = JSON.stringify({
        message: 'hurrah it works',
        platform: env,
        'Authorization': 'Basic ' + btoa(`${env.API_KEY}:${env.API_SECRET}`)
    });
    return new Response(info, null, 2);
    
}