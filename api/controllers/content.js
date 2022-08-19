const ContentService = require("../services/content");

class ContentController {
  static async getContentTrends(req, res) {
    const { error, data } = await ContentService.getContentTrends();
    if (error) {
      return res.status(data.status || 500).send({ message: data.message });
    }
    res.send(data);
  }

  static async getSingleContent(req, res) {
    const { type, id } = req.params;
    const { error, data } = await ContentService.getSingleContent(type, id);
    if (error) {
      return res.status(data.status || 500).send({ message: data.message });
    }
    res.send(data);
  }
}

module.exports = ContentController;
