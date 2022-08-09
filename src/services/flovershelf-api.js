const BASE_URL = "http://localhost:4040";

async function getFlowers(url = "", config = {}) {
  let response = await fetch(url);
  console.log(response);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Failed to get flowers"));
}
export function getAchimenes() {
  return getFlowers(`${BASE_URL}/achimenes`);
}

export function getViolets() {
  return getFlowers(`${BASE_URL}/violets`);
}

export function getGeran() {
  return getFlowers(`${BASE_URL}/gerans`);
}

export function getAchimeneById(achimeneId) {
  return getFlowers(`${BASE_URL}/achimenes/${achimeneId}`);
}

export function getVioletById(violetId) {
  return getFlowers(`${BASE_URL}/violets/${violetId}`);
}

export function getGeranById(geranId) {
  return getFlowers(`${BASE_URL}/gerans/${geranId}`);
}
