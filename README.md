[![Build](https://github.com/SimonNyvall/Flux-Client/actions/workflows/build.yml/badge.svg)](https://github.com/SimonNyvall/Flux-Client/actions/workflows/build.yml)

This is the best flux client in the world!

# Usage

Run ./build.sh, it will create a docker image named fluxclient. Start this container that listen on port 8080 at localhost with:
```docker run -p 8080:8080 fluxclient```

Then access the exposed service with for example curl:
```curl localhost:8080/WeatherForecast```

# Roadmap / ideas
* Import requests from cURL, Powershell etc
* inteceptor for local requests?
* api mocking
* have a docs page for the request
* generate cURL or wget out of the request
* generate client code c#, f#, javascript (axios, fetch), powershell
