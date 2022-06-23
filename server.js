import express from "express";
import yup from "yup";

const app = express();
app.use(express.json());

// middlewares
import validate from "./middlewares/validate.js";

const linkSchema = yup.object({
  body: yup.object({
    url: yup.string().url().required(),
    title: yup.string().min(8).max(32).required(),
    content: yup.string().min(8).max(255).required(),
    contact: yup.string().email().required(),
  }),
  params: yup.object({
    id: yup.number().required(),
  }),
});

app.get("/", (_req, res) => {
  res.send({ message: "API is running" });
});

app.post("/create/:id", validate(linkSchema), (req, res) => {
  return res.json({ body: req.body, id: req.params.id });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
