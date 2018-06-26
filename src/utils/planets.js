export const getIdFromUrl = url => {
  const urlFragments = url.split('/');
  return urlFragments[urlFragments.length - 2];
};

export const getVisiblePlanets = ({ planets, filter, sortBy }) => {
  return planets.filter(planet => {
    const filterMatch = typeof filter !== 'string' || 
    planet.name.toLowerCase().includes(filter.toLowerCase());
    return filterMatch;
  }).sort((a, b) => {
    if (sortBy === 'name-a-to-z') {
      return a.name > b.name ? 1 : -1;
    } else if (sortBy === 'name-z-to-a') {
      return a.name < b.name ? 1 : -1;
    } else if (sortBy === 'population-low-to-high') {
      return a.population > b.population ? 1 : -1;
    } else if (sortBy === 'population-high-to-low') {
      return a.population < b.population ? 1 : -1;
    }
  });
};