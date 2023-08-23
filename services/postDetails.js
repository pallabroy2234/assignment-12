import {baseUrl} from "./baseUrl";

export const postDetails = async (id) => {
  let response = await fetch(`${baseUrl}/post-details/${id}`, {
    method: "GET",
  });
  if (response.status == 200) {
    let data = response.json();
    return data;
  } else {
    return [];
  }
};
