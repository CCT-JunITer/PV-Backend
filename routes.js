
module.exports = (app, db) => {
  app.get('/', (req, res) => {
    db.collection('pvdata').find({}).toArray((err, item) => {
      if (err) {
        console.log(err)
        res.send({'error':'An error has occurred'})
      } else {
        res.send({
          general1: item[0].general,
          general2: item[0].general,
          project1: item[0].projects,
          project2: item[0].projects,
          seminar1: item[0].seminars,
          seminar2: item[0].seminars
        })
      }
    })
  })

  app.put('/new', (req, res) => {
    res.send('Success')
  })
}
