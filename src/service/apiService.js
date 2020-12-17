const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.GATSBY_CONTENTFUL_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
});

client
  .getEntries({
    include: 2,
  })
  .then((response) => response.items)
  .catch(console.error);

export const getAllEntries = () => {
  return client
    .getEntries()
    .then((response) => response.items)
    .catch(console.error);
};

export const getSpace = () => {
  return client
    .getSpace()
    .then((space) => space)
    .catch(console.error);
};

export const getEntryById = (id) => {
  return client
    .getEntry(`${id}`)
    .then((entry) => entry)
    .catch(console.error);
};

export const getEntryByContentType = (contentName) => {
  return client
    .getEntries({
      content_type: contentName,
      include: 2,
    })
    .then((response) => response.items)
    .catch(console.error);
};

export default {
  getAllEntries,
  getSpace,
  getEntryById,
  getEntryByContentType,
  client,
};
