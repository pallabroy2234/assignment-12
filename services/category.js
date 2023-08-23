import {baseUrl} from "./baseUrl";

export const category = async () => {
  let res = await fetch(baseUrl + "/post-categories", {
    method: "GET",
  });
  if (res.status == 200) {
    let data = await res.json();
    return data;
  } else {
    return [];
  }
};
