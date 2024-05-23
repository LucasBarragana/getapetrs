import mongoose, {model, models, Schema} from "mongoose";


const MenuItemSchema = new Schema({
  image: {type: String},
  name: {type: String},
  description: {type: String},
  category: {type: String},
  sizes: {type: String},
}, {timestamps: true});

export const MenuItem = models?.MenuItem || model('MenuItem', MenuItemSchema);