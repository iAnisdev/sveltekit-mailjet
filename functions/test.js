export async function onRequestGet(context) {
    const info = JSON.stringify({
        message: 'hurrah it works'
    });
    return new Response(info, null, 2);
}