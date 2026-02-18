const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

let drawings = []; // Guardado temporal de dibujos

app.post("/save", (req, res) => {
  const drawing = req.body;
  drawings.push(drawing);
  res.json({ message: "Dibujo guardado!", id: drawings.length - 1 });
});

app.get("/drawings", (req, res) => {
  res.json(drawings);
});

app.get("/drawing/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (drawings[id]) res.json(drawings[id]);
  else res.status(404).json({ message: "No encontrado" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
