import axios from "axios";

const Api = {
  getUserInfo: async function(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

      console.log(response);
    } catch (err) {
      console.warn("Erro na API");
    }
  },
};

Api.getUserInfo("diego3g");
