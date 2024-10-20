const express = require('express');
const Book = require('../model/Book');
const router = express.Router();

router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
