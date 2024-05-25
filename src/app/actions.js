"use server";

import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import path from "path";

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const favoriteSchema = new mongoose.Schema({
  homeId: String,
  userId: String,
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

export async function addToFavorite(formData) {
  const homeId = formData.get("homeId");
  const userId = formData.get("userId");
  const pathName = formData.get("pathName");

  const favorite = new Favorite({
    homeId: homeId,
    userId: userId,
  });

  await favorite.save();

  revalidatePath(pathName);
}

export async function deleteFromFavorite(formData) {
  const favoriteId = formData.get("favoriteId");
  const pathName = formData.get("pathName");
  const userId = formData.get("userId");

  await Favorite.deleteOne({
    _id: favoriteId,
    userId: userId,
  });

  revalidatePath(pathName);
}
