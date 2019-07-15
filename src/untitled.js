(params) => {
  const messages = api.run('this.get_conversations_history').filter(x => !!x)
  
  console.log(messages[8])
  
  const result = api.run("this.create_record", {"messages": messages})
  
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */