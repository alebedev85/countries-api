export const api = async (endPoint: string, { body, method, ...customConfig }:
  {
    body?: any,
    method: 'POST' | 'GET' | 'DELETE' | 'PATCH'
  }
) => {
  const headers = {
    "Content-Type": "application/json",
  }

  const config = {
    method: method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig,
    },
    body: body ? JSON.stringify(body) : null
  }

  try {
    const res = await fetch(endPoint, config)
    if (!res.ok) throw new Error('faild to fetch')
    const data = await res.json()
    return data
  } catch (err) {
    if (err instanceof Error) {
      return Promise.reject(err.message)
    }
  }
}

api.get = function (endPoint: string, customConfig = {}) {
  return api(endPoint, { ...customConfig, method: 'GET' })
}

api.post = function (endPoint: string, body: any, customConfig = {}) {
  return api(endPoint, { ...customConfig, body, method: 'POST' })
}

api.delete = function (endPoint: string, customConfig = {}) {
  return api(endPoint, { ...customConfig, method: 'DELETE' })
}

api.patch = function (endPoint: string, body: any, customConfig = {}) {
  return api(endPoint, { ...customConfig, body, method: 'PATCH' })
}