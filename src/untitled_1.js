(params) => {
  const vals = api.run('this.get_data')
  const id = api.run('this.get_member_id', {name: "jules"})
  
  return vals
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */