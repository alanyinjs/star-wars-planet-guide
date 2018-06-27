import { ascendantSort, descendantSort } from './sortNumbers';

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

    const firstNum = parseInt(a.population);
    const secondNum = parseInt(b.population);

    if (sortBy === 'name-a-to-z') {
      return a.name > b.name ? 1 : -1;
    } else if (sortBy === 'name-z-to-a') {
      return a.name < b.name ? 1 : -1;
    } else if (sortBy === 'population-low-to-high') {
      return ascendantSort(firstNum, secondNum);
    } else if (sortBy === 'population-high-to-low') {
      return descendantSort(firstNum, secondNum);
    }
  });
};
