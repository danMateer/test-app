const moment = require('moment')

const metrics = new Map()

const collectExpiredMetrics = () => {
  if (metrics.size === 0) { return }

  for (const [metricId, metric] of metrics.entries()) {
    const oneHourEarlier = moment().subtract(1, 'hour')

    if(moment(oneHourEarlier).isAfter(metric.created)) {
      metrics.delete(metricId)
    }
  }
}
setInterval(collectExpiredMetrics, 1000)


module.exports = {
  hasMetric(metricId) {
    return !!metrics.get(metricId)
  },
  getMetricById(metricId) {
    if (!this.hasMetric(metricId)) { throw 'Unknown metric' }

    const { value } = metrics.get(metricId)

    return {
      value
    }
  },
  setMetric(metricId, newValue) {
    if (metrics.has(metricId)) {
      const oldMetric = metrics.get(metricId)

      metrics.set(metricId, {
        ...oldMetric,
        value: oldMetric.value + newValue
      })
    } else {
      metrics.set(metricId, {
        created: moment().format(),
        value: newValue
      })
    }
  }
}
