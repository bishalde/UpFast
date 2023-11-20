const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const data = {
    1: "/week1",
    2: "/week2",
    3: "/week3",
    4: "/week4",
    5: "/week5",
    6: "/week6",
    7: "/week7",
    8: "/week8",
    9: "/week9",
  };
  res.send(data);
});

app.get("/week:id", (req, res) => {
  const weekNumber = req.params.id;
  if (weekNumber >= 1 && weekNumber <= 9) {
    const filePath = path.join(__dirname, `Files/week${weekNumber}.html`);
    res.sendFile(filePath);
  } else {
    res.status(404).send("Week not found");
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`);
});
