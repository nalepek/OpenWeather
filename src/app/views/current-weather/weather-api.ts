export interface WeatherApi {
  coord: WeatherCoordApi;

  weather: WeatherOverviewApi[];

  base: string;

  main: WeatherMainApi;

  /** Visibility, meter. The maximum value of the visibility is 10km */
  visibility: number;

  wind: WeatherWindApi;

  clouds: WeatherCloudsApi;

  rain: WeatherRainApi;

  snow: WeatherSnowApi;

  /** Time of data calculation, unix, UTC */
  dt: number;

  sys: WeatherSysApi;

  timezone: number;

  id: number;

  name: string;

  cod: number;
}

export interface WeatherCoordApi {
  /** City geo location, longitude */
  lon: number;

  /** City geo location, latitude */
  lat: number;
}

export interface WeatherOverviewApi {
  /** Weather condition id */
  id: number;

  /** Group of weather parameters (Rain, Snow, Extreme etc.) */
  main: string;

  /** Weather condition within the group */
  description: string;

  /** Weather icon id */
  icon: string;
}

export interface WeatherMainApi {
  /** Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
  temp: number;

  /** Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
  feels_like: number;

  /** Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
  temp_min: number;

  /** Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
  temp_max: number;

  /** Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa */
  pressure: number;

  /** Humidity, % */
  humidity: number;

  /** Atmospheric pressure on the sea level, hPa */
  sea_level: number;

  /** Atmospheric pressure on the ground level, hPa */
  grnd_level: number;
}

export interface WeatherWindApi {
  /** Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour. */
  speed: number;

  /** Wind direction, degrees (meteorological) */
  deg: number;

  /** Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour */
  gust: number;
}

export interface WeatherCloudsApi {
  /** Cloudiness, % */
  all: number;
}

type Hours = "1h" | "3h";

type WeatherPrecipitation = {
  /** Precipitation volume for the last n hour, mm */
  [key in Hours]: number;
};

export interface WeatherRainApi extends WeatherPrecipitation {}
export interface WeatherSnowApi extends WeatherPrecipitation {}

export interface WeatherSysApi {
  type: number;

  id: number;

  /** Country code (GB, JP etc.) */
  country: string; // should be some dictrionary of countries

  /** Sunrise time, unix, UTC */
  sunrise: number;

  /** Sunset time, unix, UTC */
  sunset: number;
}
