package com.example.weatherapp.controller;

import com.example.weatherapp.entity.ForecastResponse;
import com.example.weatherapp.entity.WeatherResponse;
import com.example.weatherapp.services.WeatherService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "http://localhost:3000")
public class WeatherController {

    private final WeatherService service;

    public WeatherController(WeatherService service) {

        this.service = service;

    }

    @GetMapping("/{city}")
    public Mono<WeatherResponse> getWeather(
            @PathVariable String city){

        return service.getWeather(city);

    }

    @GetMapping("/forecast/{city}")
    public Mono<ForecastResponse> getForecast(
            @PathVariable String city){

        return service.getForecast(city);

    }

}