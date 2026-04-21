import { SearchHistory } from "../models/SearchHistory.js";

export const getSearchHistory = async (_req, res, next) => {
  try {
    const history = await SearchHistory.find()
      .sort({ searchedAt: -1 })
      .limit(8)
      .select("city country searchedAt temperature condition");

    return res.json(history);
  } catch (error) {
    return next(error);
  }
};
