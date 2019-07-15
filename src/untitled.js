(params) => {
  const channel_id = api.run('this.get_channels_list')[0].id

  // remove null messages from the array with .filter()
  const messages = api.run('this.get_conversations_history', {channel_id: channel_id}).filter(x => x.fields);
  
  // filter out options that didn't receive any votes from each poll
  var vals = messages.map(x => {
    return {
    ts:x.ts, 
    data:x.fields.map(y => y.value).filter(z => z.match(/\(\d\)/) && z.match(/\: (.*)/))
    }
  });
  
  // remove polls with zero options that got any votes
  vals = vals.filter(v => v.data[0])
  
  // pull out the restaurant title and vote count for each option 
  var z = vals.map(a => {
    return {
    	ts: a.ts, 
    	data: a.data.map(t => [t.match(/\: (.*)/)[1], parseInt(t.match(/\(\d\)/)[0][1])])
    }
  })
  
  // put each message in object format
  var a = z.map(t => t.data.reduce((acc, cur) => {
    acc.data[cur[0]] = cur[1];
    return acc
  }, {
    ts:t.ts,
    data:{}
  }))
  
  return a
  
  // const result = api.run("this.create_record", {"messages": messages})
  
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */