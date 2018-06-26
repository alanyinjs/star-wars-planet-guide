import axios from 'axios';
import { getIdFromUrl } from '../utils/planets';

export async function fetchPlanets() {
  try{
    const { data: { count } } = await axios.get('/planets');
    const pageNum = Math.ceil(count / 10);

    let allResults = [];
    for (let i = 1; i <= pageNum; i++){
      const { data: { results } } = await axios.get(`/planets?page=${i}`);
      allResults = allResults.concat(results);
    }

    return allResults.map(result => ({
      ...result,
      id: getIdFromUrl(result.url)
    }))
  } catch(err) {
    console.log(err);
  }
}

export async function fetchPlanetById(Id) {
  const url = `/planets/${Id}`;
  try{
    const { data } = await axios.get(url);
    const { name, rotation_period: rotPeriod, orbital_period: orbPeriod, diameter, climate, gravity, terrain, surface_water: surfaceWater, population, residents } = data; 
    return {
      name, 
      rotPeriod,
      orbPeriod,
      diameter,
      climate, 
      gravity,
      terrain,
      surfaceWater,
      population,
      residents
    }
  } catch(err) {
    console.log(err);
  }
}