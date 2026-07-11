export async function onRequest(context) {
  const url = new URL(context.request.url);
  const targetUrl = `https://api.xkkx.eu.cc${url.pathname}${url.search}`;
  
  const response = await fetch(targetUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.method !== 'GET' && context.request.method !== 'HEAD' ? context.request.body : undefined,
  });
  
  return response;
}
