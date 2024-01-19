export type Weather = {
  temp: number;
  description: string;
  city: string;
  currently: string;
  condition_slug: string;
  date: string;
  time: string;
  wind_speedy: string;
}


export type WeatherResponse = {
  valid_key: string;
  results: Weather
}
