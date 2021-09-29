addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

import template from './template'
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/html' },
  })
}
