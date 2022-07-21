import { NextResponse } from 'next/server'

export async function middleware(req) {
  console.log('REQUEST RECEIVED', req)
  const { nextUrl: url, geo } = req
  url.searchParams.set('country', geo.country)
  return NextResponse.redirect(url)
}
