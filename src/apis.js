import Axios from "axios";

export const getAll = async () =>
  await Axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  });
