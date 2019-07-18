(params) => {
  var vals = api.run('this.get_daily_users')
  // const id = api.run('this.get_member_id', {name: params.username})[0].id
  const id = "U3A38JXSL"
  
  vals = vals.map(v => {
    return {
    	ts: v.ts, 
    	data: Object.keys(v.data).filter(key => v.data[key].includes(id))
    }
  }).filter(v => v.data[0]) // remove null entries
  
  return vals
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */