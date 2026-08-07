package com.example.weatherapp.entity;

import lombok.Data;

import java.util.List;

@Data
public class WeatherResponse {

    private String name;

    private Integer timezone;

    private Integer visibility;

    private Main main;

    private List<Weather> weather;

    private Wind wind;

    private Sys sys;

    @Data
    public static class Main {

        private Double temp;

        private Double feels_like;

        private Double temp_min;

        private Double temp_max;

        private Integer humidity;

        private Integer pressure;

    }

    @Data
    public static class Weather {

        private String main;

        private String description;

        private String icon;

    }

    @Data
    public static class Wind {

        private Double speed;

    }

    @Data
    public static class Sys {

        private String country;

        private Long sunrise;

        private Long sunset;

    }

}