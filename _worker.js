export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // SPA routing - serve index.html for all routes
    if (!url.pathname.startsWith('/assets') && !url.pathname.startsWith('/static')) {
      url.pathname = '/';
      return fetch(url.toString(), request);
    }
    
    return fetch(request);
  }
};