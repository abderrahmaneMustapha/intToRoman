interface HttpRequest {
  body?: object,
  query?: object,
  params?: object,
  ip?: string,
  method?: string,
  path?: string,
  user?: string,
  source?: {
    ip: string,
    browser: string
  },
  headers?: {
    'Content-Type': string,
    'Referer': string,
    'User-Agent': string
  }
}

export { HttpRequest }