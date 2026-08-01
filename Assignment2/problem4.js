function topRatedRestaurant(restaurants) {
  if (Array.isArray(restaurants) !== true || restaurants.length === 0) {
    return "Invalid";
  }

  let top = restaurants[0];
  for (let i = 1; i < restaurants.length; i++) {
      if (restaurants[i].rating > top.rating) {
        top = restaurants[i];
      }
  }
    return top.name.toUpperCase();
}