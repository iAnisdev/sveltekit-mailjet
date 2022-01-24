export async function onRequestPost({env , data}) {
    const info = JSON.stringify({
        env,
        message: 'response from test function',
        data
      })
      return new Response(info, null, 2);
    }