(params) => {
  var data = api.run('this.daily_counts').map(d => d.data)
  
  return data.reduce((acc, cur) => {
    Object.keys(cur).map((key, index) => {
      if (key in acc) {
        acc[key] += cur[key]
      } else {
        acc[key] = cur[key]
      }
	})
    return acc
  }, {})
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */