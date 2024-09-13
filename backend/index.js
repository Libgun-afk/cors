import cors from "cors";
import express from "express";
import bcrypt from "bcryptjs";
import { writeFileSync, readFileSync } from "fs";
import jwt from "jsonwebtoken";

// import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());

// const tokenSecret = "key";

app.get("/", async (req, res) => {
  const resultJson = await readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);
  res.status(200).send(result.users);
  return result;
});

app.post("/sign-up", async (req, res) => {
  const { userName, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const resultJson = await readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);

  result.users.push({
    userName,
    password: hashedPassword,
  });

  await writeFileSync("./db.json", JSON.stringify(result));

  res.status(200).send(result);
});

app.post("/sign-in", async (req, res) => {
  const { userName, password } = req.body;

  const result = JSON.parse(readFileSync("./db.json", "utf-8"));

  const isMatch = await bcrypt.compare(password, result.password);

  if (!isMatch) {
    res.status(400).send("username or pass is not match");
    return;
  }

  const token = jwt.sign({ userName }, tokenSecret, { expiresIn: "5m" });

  res.status(200).send({ userName, token });
});

app.post("/refresh", (req, res) => {
  const { token } = req.body;

  const decryptedToken = jwt.verify(token, tokenSecret);
  res.status(200).send({ decryptedToken });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
