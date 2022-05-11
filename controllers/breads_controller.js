const express = require('express')
const bread = require('../models/bread')
const breads = express.Router()

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: bread,
        title: 'Index Page'
      }
    )
  // res.send(Bread)
})

// NEW
breads.get('/new', (req, res) => {
  res.render('New')
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
  bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})


// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    })
  } else {
    res.send('404')
  }
})

// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  bread.push(req.body)
  res.redirect('/breads')
})

  
module.exports = breads