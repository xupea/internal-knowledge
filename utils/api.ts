export const baseApiURL = "http://localhost:8080";

export const customFetch = async (api: string) => {
  const res = await fetch(`${baseApiURL}${api}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch data for ${api}`);
  }

  return res.json();
};

export const updateCourse = async (
  id: number,
  field: string,
  value: string | boolean
) => {
  const api = `/courses/${id}`;
  const res = await fetch(`${baseApiURL}${api}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ field, value }),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch data for ${api}`);
  }

  return res;
};
