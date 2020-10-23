const url =
  "https://cdn.contentful.com/spaces/cs11esrpx5q6/entries?access_token=lAv8ot12M6WtQG-QVwrdhysli61lCCmhKRGwd6tbBss"

export const findAllData = () =>
  fetch(url).then(response => response.json())

  export default {
    findAllData
  }
