//Profile CRUD&&Endpoints
//Create isn´t possible for the sake of my code

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Profile = require('../models/Profile');


router.get('/', auth, async (req, res) => {
  try {
    const profile = await Profile.find({ user: req.user.id })
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/:id', auth, async (req, res) => {
  const {username, url_image} = req.body;
  const taskFields = {};
  if (username) taskFields.username = username;
  if (url_image) taskFields.url_image = url_image;

  try {
    let profile = await Profile.findById(req.params.id);

    if (!profile) return res.status(404).json({ msg: 'Profile not found' });

    if (profile.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    profile = await Profile.findByIdAndUpdate(
      req.params.id,
      { $set: taskFields },
      { new: true }
    );

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 // Just because the full CRUD is needed
 // Wont be accsessible from the frontend

router.delete('/:id', auth, async (req, res) => {
  try {
    let profile = await Profile.findById(req.params.id);

    if (!profile) return res.status(404).json({ msg: 'Profile not found' });

    if (profile.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Profile.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Profile deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
