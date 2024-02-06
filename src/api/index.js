export const api = async (endPoint, { body, ...customConfig }) => {
    const headers = {
        "Content-Type": "application/json",
    }

    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig,
        }
    }

    if (body) {
        config.body = JSON.stringify(body)
    }

    try {
        const res = await fetch(endPoint, config)
        if (!res.ok) throw new Error('faild to fetch')
        const data = await res.json()
        return data
    } catch (err) {
        return Promise.reject(err.message)
    }
}

api.get = function(endPoint, customConfig = {}) {
    return api(endPoint, customConfig)
}

api.post = function(endPoint, body, customConfig = {}) {
    return api(endPoint, {...customConfig, body})
}

api.delete = function(endPoint, customConfig = {}) {
    return api(endPoint, {...customConfig, method: 'DELETE'})
}

api.patch = function(endPoint, body, customConfig = {}) {
    return api(endPoint, {...customConfig, body, method: 'PATCH'})
}