(params) => {
  const messages = api.run('this.get_conversations_history').filter(x => x.fields)
  
  var vals = messages.map(x => x.fields.map(y => y.value).filter(z => z.match(/\(\d\)/) && z.match(/\: (.*)/)));
  vals = vals.filter(v => v[0])
  var z = vals.map(a => a.map(t => [t.match(/\: (.*)/)[1], parseInt(t.match(/\(\d\)/)[0][1])]))
  
  var a = z[0].reduce((acc, cur) => {
    acc[cur[0]] = cur[1];
    return acc
  })
  
  console.log(a)
  
  // const result = api.run("this.create_record", {"messages": messages})
  
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */