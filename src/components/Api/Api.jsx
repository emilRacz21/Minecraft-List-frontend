import axios from "axios";

export function getMcList(setData, setLoading, setError, page) {
  let url = `https://minecraft-list-backend.onrender.com/api/minecraft-server/?page=${page}`;
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

export function getMcVersion(setData) {
  let url = `https://minecraft-list-backend.onrender.com/api/server-types/`;
  axios.get(url).then((response) => {
    setData(response.data);
  });
}

export function getMcTypes(setData) {
  let url = `https://minecraft-list-backend.onrender.com/api/server-versions/`;
  axios.get(url).then((response) => {
    setData(response.data);
  });
}
