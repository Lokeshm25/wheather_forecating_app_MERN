import mongoose from "mongoose";

const searchHistorySchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      required: true,
      trim: true
    },
    temperature: {
      type: Number,
      required: true
    },
    condition: {
      type: String,
      required: true,
      trim: true
    },
    searchedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false
  }
);

searchHistorySchema.index({ searchedAt: -1 });

export const SearchHistory = mongoose.model("SearchHistory", searchHistorySchema);
