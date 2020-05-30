const url = 'https://api.coincap.io/v2'

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

function getAsset(id) {
  return fetch(`${url}/assets/${id}`)
    .then(res => res.json())
    .then(res => res.data)
}

function getAssetHistory(id) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${id}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data)
}

function getMarkets(id) {
  return fetch(`${url}/assets/${id}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data)
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data)
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
}
