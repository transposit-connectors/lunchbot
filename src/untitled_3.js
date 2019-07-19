(params) => {
  var data = api.run('this.prev_visits', {id:params.id})[0];
  
  if (!(data.most_recent in data.pairs)) {
    return "sorry, I can't help you"
  } else {
    return Object.entries(data.pairs[data.most_recent]).sort((a,b) => b[1] - a[1])[0][0]
  }
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */