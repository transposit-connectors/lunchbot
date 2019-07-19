(params) => {
  var data = api.run('this.prev_visits', {id:params.id})[0];
  
  const choices = data.most_recent.map(a => Object.entries(data.pairs[a]).sort((a,b) => b[1] - a[1])[0][0])
  
  const mode = arr => { if(arr.filter((x,index)=>arr.indexOf(x)==index).length == arr.length) return arr; else return mode(arr.sort((x,index)=>x-index).map((x,index)=>arr.indexOf(x)!=index ? x : null ).filter(x=>x!=null))}
  
  const modes = mode(choices)
  
  if (!(data.most_recent in data.pairs)) {
    return "sorry, I can't help you"
  } else {
    return "you should go to " + modes[Math.floor(Math.random()*modes.length)]
  }
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */