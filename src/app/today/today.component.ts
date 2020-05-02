import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat;
  lon;
  weather;
  accessDenied=true;
  accDeniedEnableCity=false;
   constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getLocation() 
    
  }

  getCoords(event){
    console.log(event)
    this.lat=event.coords.lat;
    this.lon=event.coords.lng;

    this.weatherService.getDatabyCoords(this.lat,this.lon)
    .subscribe(data=>{
      this.weather=data;
    })
  }

  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat=success.coords.latitude;
        this.lon=success.coords.longitude;

        this.weatherService.getDatabyCoords(this.lat,this.lon)
          .subscribe(data=>{
            this.weather=data;
          })
      },(error)=>{
        this.accessDenied=false;
        this.accDeniedEnableCity=true;
      })
    }
  }

  getCity(city){
    this.weatherService.getWeatherbyCity(city)
    .subscribe(data=>{
      this.weather=data;
      this.lat=data['coord'].lat;
      this.lon=data['coord'].lon;
    })

  }

}
