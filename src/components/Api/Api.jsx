import axios from "axios";

export function getMcList(setData, setLoading, setError, page) {
  let url = `https://minecraft-list-backend.onrender.com/api/minecraft-server/?page=${page}`;
  console.log(url);
  axios
    .get(url)
    .then((response) => {
      setData(response.data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    });
}
