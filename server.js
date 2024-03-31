const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/api/upload", (req, res) => {
  const currentRowId = req.query.currentRowId; // Получение currentRowId из параметра запроса
  console.log('currentRowId:', currentRowId);

  const generateFileName = (currentRowId) => (req, file, cb) => {
    const filename = `${currentRowId}`;
    cb(null, filename);
  };

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./images");
    },
    filename: generateFileName(currentRowId),
  });

  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      cb(null, true);
    }
  }).single("file");

  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(req.file);
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});