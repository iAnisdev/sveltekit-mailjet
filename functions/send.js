export async function onRequestGet(context) {
    // Contents of context object
    const {
      env
    } = context;
  
    return new Response(JSON.stringify({env, message: 'response from function'}));
  }