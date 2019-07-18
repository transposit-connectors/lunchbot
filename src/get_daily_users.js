(params) => {
  const vals = api.run('this.get_data')
  
  // pull out the restaurant title and vote count for each option 
  var z = vals.map(a => {
    return {
    	ts: a.ts, 
    	data: a.data.map(t => [t.match(/\: (.*)/)[1], t.match(/(?<=\<\@)[A-Z0-9]*(?=\>)/g)])
    }
  })
  
  // put each message in object format
  var a = z.map(t => t.data.reduce((acc, cur) => {
    acc.data[cur[0].toLowerCase().replace(/[:@\|\[\]?!'.]/g,"").replace("&amp;", "and").replace("ñ", "n")] = cur[1];
    return acc
  }, {
    ts:t.ts,
    data:{}
  }))
  
  return a
}
/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */