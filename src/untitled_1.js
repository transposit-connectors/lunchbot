(params) => {
  var vals = api.run('this.get_daily_users').slice(0, -4)
  const id = api.run('this.get_member_id', {name: "blazarus"})[0].id
  
  vals = vals.map(v => {
    return {
    	ts: v.ts, 
    	data: Object.keys(v.data).filter(key => v.data[key].includes(id))
    }
  })
  
  return vals.filter(v => v.data[0])
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */