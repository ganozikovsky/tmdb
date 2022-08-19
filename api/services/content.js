const axios = require("axios");
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=892afd68c77e0b0640953b7d3f1d71b0";

class ContentService {
  static async getContentTrends() {
    try {
      const {
        data: { results },
      } = await axios.get(`${API_URL}/trending/all/week?${API_KEY}`);
      return {
        error: false,
        data: results,
      };
    } catch ({ response }) {
      const { error } = response.data;
      console.error(error);
      return { error: true, data: error };
    }
  }

  static async getSingleContent(type, id) {
    try {
      const { data } = await axios.get(
        `${API_URL}/${type}/${id}?${API_KEY}&append_to_response=videos,images`
      );
      return {
        error: false,
        data: data,
      };
    } catch ({ response }) {
      const { error } = response.data;
      console.error(error);
      return { error: true, data: error };
    }
  }
}

module.exports = ContentService;
