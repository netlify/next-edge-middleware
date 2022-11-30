import { NextRequest } from 'next/server'
import { MiddlewareRequest } from '@netlify/next'

export async function middleware(req: NextRequest) {
  const { geo } = req
  const country = geo?.country || ''

  const request = new MiddlewareRequest(req)
  const response = await request.next()

  console.log(`Processing request from ${geo.country}`)

  if (country === 'PT') {
    const message =
      'Hello Portugal! Use promo code COUNTRY50 for 50% off your order!'

    response.replaceText('#banner', message)
    response.setPageProp('banner', message)
  }

  return response
}
