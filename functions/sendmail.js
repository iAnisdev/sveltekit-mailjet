export async function onRequestGet(context) {
    // Contents of context object
    const {
      env
    } = context;
  
    return new Response({env, data, message: 'response from function'});
  }