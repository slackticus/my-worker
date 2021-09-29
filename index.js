import template from './template'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
event.respondWith(handleRequest(evnt.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response(template(), {
    headers: { 'content-type': 'text/html' },
  })
}
