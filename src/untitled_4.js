(params) => {
  return api.run('this.get_channels_list')[0].members.map(a => api.run('this.recommend', {id:a}))
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */