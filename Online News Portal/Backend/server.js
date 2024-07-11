const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3001;
``;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "signupnews",
  password: "gurudesh@0801",
  port: 5432,
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Signup API
app.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    // Check if email or phone already exists in the database
    const checkUser = await pool.query(
      "SELECT * FROM newssignuser WHERE email = $1 OR phone = $2",
      [email, phone]
    );

    if (checkUser.rows.length > 0) {
      // If user already exists, send response with status 409 (Conflict)
      return res.status(409).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const client = await pool.connect();

    const result = await pool.query(
      "INSERT INTO newssignuser (name, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, phone, hashedPassword]
    );
    const user = result.rows[0];
    client.release();
    // Redirect to the main page upon successful signup
    res.redirect("http://localhost:5173/main");
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login API
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Query the database to retrieve user information
    const result = await pool.query(
      "SELECT * FROM newssignuser WHERE email = $1",
      [email]
    );
    const user = result.rows[0];

    // If user doesn't exist
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
      // return err.innerHTML = "User Not Found"
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
      // return err.innerHTML = "User Not Found"
    }
    res.redirect("http://localhost:5173/main");
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Route for handling file upload
app.post("/upload", upload.single("image"), (req, res) => {
  try {
    // Check if req.file exists and is populated
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const { filename, path } = req.file;

    // Check if other required fields are present
    if (!req.body.headline || !req.body.description) {
      throw new Error("Missing headline or description");
    }

    const { headline, description } = req.body;

    console.log("News headline:", headline);
    console.log("News description:", description);
    console.log("Image path:", path);
  } catch (error) {
    console.error("Error uploading image:", error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
