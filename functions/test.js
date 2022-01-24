export async function onRequestGet(context) {
    return new Response(JSON.stringify({ message: 'hurrah it works'}));
  }