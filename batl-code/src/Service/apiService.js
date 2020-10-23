const contentful = require("contentful")

export const client = contentful.createClient({
  space: "cs11esrpx5q6",
  environment: "master", // defaults to 'master' if not set
  accessToken: "lAv8ot12M6WtQG-QVwrdhysli61lCCmhKRGwd6tbBss",
})

export const getAllEntries = () => {
  return client
    .getEntries()
    .then(response => response.items)
    .catch(console.error)
}

export const getSpace = () => {
  return client
    .getSpace()
    .then(space => space)
    .catch(console.error)
}

export const getEntryById = id => {
  return client
    .getEntry(`${id}`)
    .then(entry => entry)
    .catch(console.error)
}

export const getEntryByContentType = contentName => {
  return client
    .getEntries({
      content_type: contentName,
    })
    .then(response => response.items)
    .catch(console.error)
}

export default {
  getAllEntries,
  getSpace,
  getEntryById,
  getEntryByContentType,
  client,
}
