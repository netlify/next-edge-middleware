import { NextResponse } from 'next/server'

export async function middleware(req, context) {
  console.log('REQUEST RECEIVED', req)
  console.log('CONTEXT', context)
  const { nextUrl: url } = req
  url.searchParams.set('country', context.geo?.country || 'NZ')
  return NextResponse.rewrite(url)
}
