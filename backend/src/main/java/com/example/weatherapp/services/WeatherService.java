package com.example.weatherapp.services;

import com.example.weatherapp.entity.ForecastResponse;
import com.example.weatherapp.entity.WeatherResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class WeatherService {

    private final WebClient webClient;
    private final String apiKey;

    public WeatherService(@Value("${weather.api.key}") String apiKey) {

        this.apiKey = apiKey;

        this.webClient = WebClient.builder()
                .baseUrl("https://api.openweathermap.org/data/2.5")
                .build();

    }

    public Mono<WeatherResponse> getWeather(String city){

        return webClient.get()

                .uri(uriBuilder -> uriBuilder

                        .path("/weather")

                        .queryParam("q", city)

                        .queryParam("appid", apiKey)

                        .queryParam("units", "metric")

                        .queryParam("lang", "es")

                        .build())

                .retrieve()

                .bodyToMono(WeatherResponse.class);

    }

    public Mono<ForecastResponse> getForecast(String city){

        return webClient.get()

                .uri(uriBuilder -> uriBuilder

                        .path("/forecast")

                        .queryParam("q", city)

                        .queryParam("appid", apiKey)

                        .queryParam("units", "metric")

                        .queryParam("lang", "es")

                        .build())

                .retrieve()

                .bodyToMono(ForecastResponse.class);

    }

}