import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { env } from 'src/app/shared/config';
import { Weather, WeatherResponse } from 'src/app/weather/weather.dto';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: String): Observable<Weather>{
    return this.http.get<WeatherResponse>("/weather/weather?city_name="+ city +"&key=" + env.WEATHER_KEY).pipe(
      map(
        res => {
          return {
            temp: res.results.temp,
            description: res.results.description,
            city: res.results.city,
            currently: res.results.currently,
            condition_slug: res.results.condition_slug,
            date: res.results.date,
            time: res.results.time,
            wind_speedy: res.results.wind_speedy
          }
        }
      )
    );
  }
}
