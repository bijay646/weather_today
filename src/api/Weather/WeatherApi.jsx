import ApiUrlConfig from "./ApiUrlConfig";
import BaseRequest from "./BaseApis";
import urlWithFilters from "./UrlWithFilters";

class WeatherApi extends BaseRequest {
  static getWeatherData(filter) {
    let WEATHER_URL = ApiUrlConfig.endPoint();

    if (filter) {
      WEATHER_URL = urlWithFilters(WEATHER_URL, filter);
    }

    return BaseRequest.get(WEATHER_URL);
  }
}

export default WeatherApi;
