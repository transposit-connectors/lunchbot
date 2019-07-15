(params) => {
  const messages = api.run('this.get_conversations_history')
  
  const result = api.run("this.create_record", {"messages": messages})
  console.log(result)
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */