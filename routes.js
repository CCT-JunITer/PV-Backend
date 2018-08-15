
module.exports = (app, db) => {
  app.get('/', (req, res) => {
    console.log('DOCKER LIVE')
    db.collection('pvdata').find({}).toArray((err, item) => {
      if (err) {
        console.log(err)
        res.send({'error':'An error has occurred'})
      } else {
        if(item[0]) {
          res.send({
            general1: item[0].general,
            general2: item[0].general,
            project1: item[0].projects,
            project2: item[0].projects,
            seminar1: item[0].seminars,
            seminar2: item[0].seminars
          })
        }
        else {
          res.send({
            general1: {},
            general2: {},
            project1: {},
            project2: {},
            seminar1: {},
            seminar2: {}
          })
        }


      }
    })
  })

  app.put('/new', (req, res) => {
    res.send('Success')
  })
}
