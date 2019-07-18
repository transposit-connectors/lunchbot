(params) => {
  const channel_id = api.run('this.get_channels_list')[0].id

  // remove null messages from the array with .filter()
  const messages = api.run('this.get_conversations_history', {channel_id: channel_id}).filter(x => x.fields);
  
  // filter out options that didn't receive any votes from each poll
  var vals = messages.map(x => {
    return {
    ts:x.ts, 
    data:x.fields.map(y => y.value).filter(z => z.match(/\(\d\)/) && z.match(/\: (.*)/) && z.match(/(?<=\<\@)[A-Z0-9]*(?=\>)/g))
    }
  });
  
  // remove polls with zero options that got any votes
  vals = vals.filter(v => v.data[0])
  
  return vals
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */