export async function onRequestGet(context) {
    // Contents of context object
    const {
      env
    } = context;
  
    return new Response({env, message: 'response from function'});
  }