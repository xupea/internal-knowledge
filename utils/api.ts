export const baseApiURL = "http://localhost:8080";

export const customFetch = async (api: string) => {
  const res = await fetch(`${baseApiURL}${api}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch data for ${api}`);
  }

  return res.json();
};
