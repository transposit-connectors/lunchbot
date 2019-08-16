(params) => {
  var data = api.run('this.get_user_history', {id: params.id});
  
  var counts = user_history.reduce(
  	(restaurant_mapping, current_restaurants, index) => {
    let previous_restaurants = user_history[index + 1];

    // if there's a previous entry in the history
    if (previous_restaurants) {
      // go through each previous restaurant
      previous_restaurants.data.forEach(previous_restaurant => {
        // if it's already in our mapping, +1 to the current
        // restaurant
        if (previous_restaurant in restaurant_mapping) {
          current_restaurants.data.forEach(current_restaurant => {
            if (current_restaurant in restaurant_mapping[previous_restaurant]) {
              restaurant_mapping[previous_restaurant][current_restaurant]++;
            } else {
              restaurant_mapping[previous_restaurant][current_restaurant] = 1;
            }
          });

          // otherwise, just make it contain 1 for each of
          // the current restaurants
        } else {
          restaurant_mapping[
            previous_restaurant
          ] = current_restaurants.data.reduce((a, b) => {
            a[b] = 1;
            return a;
          }, {});
        }
      });
    }

    return restaurant_mapping;
  },
  {}
  );

  
  return {
    most_recent: data[0].data,
    pairs: counts
  }
}