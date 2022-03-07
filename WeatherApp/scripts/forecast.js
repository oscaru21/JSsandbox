//responsible of interactinting with RESTFul API and getting data
const key = 'BCAgdHGeOGLuARG5ACiAMQLmEGzVHBTL'

const getWeather =  async (locationKey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationKey}?apikey=${key}`;

    const response = await fetch(base + query);
    if(response.status !== 200){
        throw new Error('Cannot fetch Data');
    }
    const data = await response.json();

    return data[0];
};

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    if(response.status !== 200){
        throw new Error('Cannot fetch Data');
    }
    const data = await response.json();

   return data[0];
};

// getCity('santa tecla')
//     .then(data => getWeather(data.Key))
//     .then(data => console.log(data))
//     .catch(err => console.log(err));