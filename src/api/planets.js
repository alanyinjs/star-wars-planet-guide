import axios from 'axios';

export async function fetchPlanets(){
  try{
    const { data: {count} } = await axios.get('/planets');
    const pageNum = Math.ceil(count / 10);

    let allResults = [];
    for (let i = 1; i <= pageNum; i++){
      const { data: {results} } = await axios.get(`/planets?page=${i}`);
      allResults = allResults.concat(results);
    }
    return allResults
  } catch(err) {
    console.log(err);
  }
}

export async function fetchPlanetById(){
  
}