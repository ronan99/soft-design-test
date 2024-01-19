import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/weather/weather.dto';
import { WeatherService } from 'src/app/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather !: Weather;
  city_name: string = "";

  constructor(private weatherService: WeatherService){
  }
  ngOnInit(): void {
    this.getWeather()
  }
  getWeather(){
    this.weatherService.getWeatherByCity(this.city_name).subscribe(
      {
        next: (res: any) => {
          console.log(res)
          this.weather = res

        },
        error: (e: any) => {
          if(e.status == 404){
            alert("Um erro ocorreu")
            return
          }
          alert(e.error.message)
        }
      }
    )

  }
}
