import {baseUrl} from "./baseUrl";

export const newBlog = async () => {
  let res = await fetch(baseUrl + "/post-newest", {
    method: "GET",
  });
  if (res.status == 200) {
    let data = await res.json();
    return data;
  } else {
    return [];
  }
};
