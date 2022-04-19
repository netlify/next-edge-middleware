import { NextResponse } from 'next/server'

export async function middleware(req, ev) {
  const response = NextResponse.next()

  // Set custom header
  response.headers.set('x-modified-edge', 'true')
  response.headers.set('x-is-deno', 'Deno' in globalThis ? 'true' : 'false')

  // Return response
  return response
}
