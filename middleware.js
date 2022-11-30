import { NextResponse } from 'next/server'

export async function middleware(req) {
  console.log(`Processing request from ${geo.country}`)
  const { nextUrl: url, geo } = req
  url.searchParams.set('country', geo.country)
  return NextResponse.rewrite(url)
}
