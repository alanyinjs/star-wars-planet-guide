import axios from 'axios';
import { getIdFromUrl } from '../utils/planets';
import { fetchPlanetPeopleName } from './people';

let planetResults = [];

export async function fetchPlanetData() {
  try{
    const { data: { count } } = await axios.get('/planets');
    const pageNum = Math.ceil(count / 10);

    let allResults = [];
    for (let i = 1; i <= pageNum; i++){
      const { data: { results } } = await axios.get(`/planets?page=${i}`);
      allResults = allResults.concat(results);
    }

    planetResults = allResults.map(result => ({
      ...result,
      id: getIdFromUrl(result.url)
    }));

    return planetResults;
  } catch(err) {
    alert('Error fetching planets');
  }
}

export async function getPlanets() {

  const promise = await new Promise((resolve, reject) => {
    const checkData = () => {
      if(planetResults.length !== 0){
        clearInterval(interval);
        resolve();
      } else {
        console.log("waiting to get data");
      }
    }
    const interval = setInterval(checkData, 1000);
  });
  return planetResults;
}

export async function fetchPlanetById(Id) {
  const url = `/planets/${Id}`;
  try{
    const { data } = await axios.get(url);
    const { name, rotation_period: rotPeriod, orbital_period: orbPeriod, diameter, climate, gravity, terrain, surface_water: surfaceWater, population, residents } = data; 
    const planetDetails = {
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
    };
    const residentNames = await fetchPlanetPeopleName(residents);
    return {
      ...planetDetails,
      residentNames
    }
  } catch(err) {
    alert("Error fetching planets by Id"); 
  }
}