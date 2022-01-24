export async function onRequestGet(context) {
    const info = JSON.stringify({
        env,
        message: 'response from test function'
      })
      return new Response(info, null, 2);
    }