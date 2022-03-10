//responsible of interactinting with RESTFul API and getting data
class Forecast{
    constructor(){
        this.key = 'BCAgdHGeOGLuARG5ACiAMQLmEGzVHBTL';
        this.baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';            
    }
    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
    
        return {
            cityDetails: cityDetails,
            weather: weather
        }
    }
    async getWeather(locationKey){
        const query = `${locationKey}?apikey=${this.key}`;

        const response = await fetch(this.baseUrl + query);
        if(response.status !== 200){
            throw new Error('Cannot fetch Data');
        }
        const data = await response.json();

        return data[0];
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityUrl + query);
        if(response.status !== 200){
            throw new Error('Cannot fetch Data');
        }
        const data = await response.json();

        return data[0];
    }
}
