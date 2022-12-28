interface HttpRequest {
  body?: any,
  query?: any,
  params?: any,
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
};

export { HttpRequest }