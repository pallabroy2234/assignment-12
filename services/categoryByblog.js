import {baseUrl} from "./baseUrl";

export const categoryByBlog = async (id) => {
  let res = await fetch("https://basic-blog.teamrabbil.com/api/post-list/" + id, {
    method: "GET",
  });
  if (res.status == 200) {
    let data = await res.json();
    return data;
  } else {
    return [];
  }
};
