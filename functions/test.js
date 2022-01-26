export async function onRequestGet({env}) {
    const info = JSON.stringify({
        message: 'hurrah it works',
        platform: env
    });
    return new Response(info, null, 2);
    
}