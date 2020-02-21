const express = require('express')

const metricService = require('./metric.service')


const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())


app.get('/metric/:metricId/sum', (req, res) => {
  try {
    res.json(metricService.getMetricById(req.params.metricId))
  } catch (err) {
    res.sendStatus(404)
  }
})

app.post('/metric/:metricId', (req, res) => {
  metricService.setMetric(req.params.metricId, req.body.value)

  res.sendStatus(200)
})


app.listen(PORT, () => console.log(`Server listening on the ${PORT} port`))
