// yes, you can import just like how you would on the frontend, just need to add this elegant piece of code to package.json > "type": "module".
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

// limit: "40mb" means the limit for image size.
app.use(express.json({ limit: "40mb", extended: true }));
app.use(express.urlencoded({ limit: "40mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is up and running on port ${PORT}`)
    )
  )
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
