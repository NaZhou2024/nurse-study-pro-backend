import Topic from "../models/Topic.js";

export const getTopics = async (req, res) => {
  const topics = await Topic.find();
  res.json(topics);
};

export const getTopicById = async (req, res) => {
  const topic = await Topic.findById(req.params.id);
  res.json(topic);
};
