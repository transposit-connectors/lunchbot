(params) => {
  var data = api.run('this.prev_visits', {id:params.id})[0];
  
  const rec = Object.entries(data.pairs[data.most_recent]).sort((a,b) => b[1] - a[1])[0][0]
  
  return (rec ? rec : "sorry, I can't help you")
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */