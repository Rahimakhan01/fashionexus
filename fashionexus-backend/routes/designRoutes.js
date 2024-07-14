// routes/designRoutes.js
const express = require('express');
const Design = require('../models/Design');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/', upload.single('image'), async (req, res) => {
  const { title, description } = req.body;
  const design = new Design({
    title,
    description,
    imageUrl: `/uploads/${req.file.filename}`,
  });
  await design.save();
  res.json(design);
});

router.get('/', async (req, res) => {
  const designs = await Design.find();
  res.json(designs);
});

router.post('/:id/vote', async (req, res) => {
  const design = await Design.findById(req.params.id);
  design.votes += 1;
  await design.save();
  res.json(design);
});

module.exports = router;
