import axios from "axios";

export function getMcList(setData, setLoading, setError) {
  let url = `https://minecraft-list-backend.onrender.com/api/minecraft-server/?page=1`;
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
