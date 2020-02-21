const metrics = new Map()

module.exports = {
  hasMetric(metricId) {
    return !!metrics.get(metricId)
  },
  getMetricById(metricId) {
    if (!this.hasMetric(metricId)) { throw 'Unknown metric' }

    const { value, created } = metrics.get(metricId)

    return {
      value,
      created
    }
  },
  setMetric(id, newValue) {
    if (metrics.has(id)) {
      const oldMetric = metrics.get(id)

      metrics.set(id, {
        ...oldMetric,
        value: oldMetric.value + newValue
      })
    } else {
      metrics.set(id, {
        created: new Date(),
        value: newValue
      })
    }
  }
}
