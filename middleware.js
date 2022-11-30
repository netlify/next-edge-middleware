import { NextResponse } from 'next/server'

export async function middleware(req) {
  const { nextUrl: url, geo } = req
  console.log(`Processing request from ${geo.country}`)
  url.searchParams.set('country', geo.country)
  return NextResponse.rewrite(url)
}
