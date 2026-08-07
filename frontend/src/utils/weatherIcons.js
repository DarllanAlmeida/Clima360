import {
    Sun,
    Cloud,
    CloudRain,
    CloudSnow,
    CloudLightning,
    CloudFog,
    Wind
} from "lucide-react";

export function getWeatherIcon(condition) {

    switch(condition.toLowerCase()){

        case "clear":
            return Sun;

        case "clouds":
            return Cloud;

        case "rain":
        case "drizzle":
            return CloudRain;

        case "snow":
            return CloudSnow;

        case "thunderstorm":
            return CloudLightning;

        case "mist":
        case "fog":
        case "haze":
            return CloudFog;

        default:
            return Wind;

    }

}