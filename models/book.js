import mongoose, {Schema} from "mongoose";


const BookSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.models.books || mongoose.model("books", BookSchema);

export default Book;