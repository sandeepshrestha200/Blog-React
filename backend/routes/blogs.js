const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const { Article } = require("../models/Blogs");
const multer = require("multer");
const fetchuser = require("../middleware/fetchuser");
const fs = require("fs");
const path = require("path"); // Import the path module

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

// Validation middleware for creating an article
const articleValidation = [
  body("title", "Enter a valid title.").isLength({ min: 3 }),
  body("content", "Please enter a description with at least 20 characters.").isLength({ min: 2 }),
  body("category", "Enter a valid category with at least 4 characters.").isLength({ min: 4 }),
  body("tag", "Enter a proper tag with at least 3 characters.").isLength({ min: 3 }),
];

// ROUTE 1 : Create a Blog using: POST "/api/blogs/create". Require Auth
router.post("/create", upload.single("image"), articleValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, content, author, tag, category, author_name } = req.body;

    // Check if a file was provided
    const imageUrl = req.file ? req.file.filename : null;
    const date = new Date();
    const dateTime = date.toISOString();

    // Create a new article based on the Article model
    const newArticle = await Article.create({
      title,
      content,
      author, // passing the author's ID
      category,
      author_name,
      tag,
      imageUrl, // Add the image URL to the article
      dateTime,
    });

    res.status(201).json({ article: newArticle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// ROUTE 2 : Fetch all Blogs using: GET "/api/blogs/fetcharticles". Doesn't require Auth
router.get("/fetcharticles", async (req, res) => {
  try {
    const blogs = await Article.find();
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ROUTE 3 : Fetch all own Blogs using: POST "/api/blogs/fetchuserblogs". Require Auth
router.post("/fetchuserblogs", fetchuser, async (req, res) => {
  try {
    const notes = await Article.find({ user: req.user._id });
    res.json(notes);
  } catch (error) {
    console.error("Error fetching Blogs:", error.message);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// ROUTE 4 : Fetch a Specific Blog using: GET "/api/blogs/:id". Doesn't require Auth
router.get("/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Article.findById(blogId);
    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ROUTE 5 : Delete a Specific Blog using: DELETE "/api/blogs/deleteblog/:id". Require Auth
router.delete("/deleteblog/:id", fetchuser, async (req, res) => {
  try {
    let blog = await Article.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    if (blog.author.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not authorized to delete this blog" });
    }

    // Retrieve the path of the image
    const imageUrl = blog.imageUrl; // Replace with the actual field name storing the image path

    // Construct the absolute path to the image file
    const imagePath = path.join(__dirname, "../images/", imageUrl);

    // Check if the image file exists
    if (fs.existsSync(imagePath)) {
      // Delete the image file from the device
      fs.unlinkSync(imagePath);
    }

    // Delete the blog from the database
    await Article.findByIdAndDelete(req.params.id);
    res.json({ success: "The blog has been deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

module.exports = router;
