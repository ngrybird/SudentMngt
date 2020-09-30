export const get = async url => {
  const jsonResponse = await fetch(url, {
    method: "GET"
  }).then(response => response.json());

  return jsonResponse;
};
