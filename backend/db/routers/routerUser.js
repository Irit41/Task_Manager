const express = require('express');
const User = require('../models/user');
const router = new express.Router()
router.get('/test', (req, res) => {
  res.send("this is from newwww file")

})
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users)
  } catch (error) {

    res.status(500).send()
  }


})
router.delete('/users/:id', async (req, res) => {

  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });

    }
    res.send(user);

  } catch (error) {

    res.status(500).send()
  }


})

router.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.send(user);

  } catch (error) {
    res.status(500).send()

  }

})

router.post('/users', async (req, res) => {

  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error)

  }



})

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOperation = updates.every((update) => {
    allowedUpdates.includes(update)
    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates !' })
    }
  })
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!user) {
      return res.status(404).send();
    }
    res.send(user)

  } catch (error) {
    res.status(400).send(error)

  }
})




module.exports = router

