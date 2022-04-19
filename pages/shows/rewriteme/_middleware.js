import { NextResponse } from 'next/server'

export function middleware(req, ev) {
  const url = req.nextUrl.clone()
  url.pathname = '/shows/100'
  const res = NextResponse.rewrite(url)
  res.headers.set('x-modified-in-rewrite', 'true')
  return res
}
