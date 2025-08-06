import News from "../models/news.model.js";

export const getAllNews = async (req, res) => {
  const news = await News.find();
  return res.status(200).json({ news });
};

export const getNewsById = async (req, res) => {
  try {
    const newsId = req.params.id;

    const news = await News.findById(newsId);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNews = async (req, res) => {
  try {
    const { title, content, categories, author } = req.body;

    const newNews = new News({
      title: title,
      content: content,
      categories: categories,
      author: author,
    });

    const isNewsSaved = await newNews.save();

    if (!isNewsSaved) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    res.status(200).json({ message: "News Created Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const modifyNews = async (req, res) => {
  try {
    const newsId = req.params.id;

    const { title, content, categories, author } = req.body;

    const modifiedNews = await News.findByIdAndUpdate(
      newsId,
      {
        title,
        content,
        categories,
        author,
      },
      { new: true }
    );

    if (!modifiedNews) {
      return res.status(404).json({ message: "News Not Found" });
    }

    res.status(200).json(modifiedNews);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNews = async (req, res) => {
  try {
    const newsId = req.params.id;

    const result = await News.deleteOne({ _id: newsId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "News Not Found" });
    }

    res.status(200).json({ message: "News Deleted Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
