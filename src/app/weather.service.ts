import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url="https://api.openweathermap.org/data/2.5/weather"
  apiKey="b86290eea7e2458c24b666af58f8cdee"
  constructor(private http: HttpClient) { }

getDatabyCoords(lat,lon){
  let params=new HttpParams()
    .set('lat',lat)
    .set('lon',lon)
    .set('unit','imperial')
    .set('appid',this.apiKey)

    return this.http.get(this.url, {params});
}

getWeatherbyCity(city){
  let params=new HttpParams()
    .set('q',city)
    .set('unit','imperial')
    .set('appid',this.apiKey)

    return this.http.get(this.url, {params});

}

}
