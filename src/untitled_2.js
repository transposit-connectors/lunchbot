(params) => {
  var data = api.run('this.get_user_history', {id: params.id});
  
  var counts = data.reduce((acc, cur, idx, array) => {
    if (array[idx+1]) {
      array[idx+1].data.forEach(prev => {
        if (prev in acc) {
          cur.data.forEach(current => {
            if (current in acc[prev]) {
              acc[prev][current]++;
            } else {
              acc[prev][current] = 1;
            }
          })
        } else {          
          	acc[prev] = cur.data.reduce((a, b) => {
            	a[b] = 1
            	return a
          	}, {})
          }
      })
    }
    return acc
  }, {})
  
  return {
    most_recent: data[0].data,
    pairs: counts
  }
}