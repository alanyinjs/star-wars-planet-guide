import axios from 'axios';

export async function fetchPlanetPeopleName(residents) {
  try{
    let residentNames = [];
    for (let i = 0; i < residents.length; i++){
      const { data: {name} } = await axios.get(residents[i]);
      residentNames = residentNames.concat( name );
    }
    return residentNames
  } catch(err) {
    alert('Error fetching people on the planet');
  }
}