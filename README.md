# Weather App with Node.js

This is a simple Node.js weather app that fetches real-time weather data for a location and displays it on a web page. It uses the OpenWeatherMap API to get weather information and serves a webpage with the data.

## Features

- Fetches weather data from the OpenWeatherMap API.
- Displays temperature, location, country, and weather status.
- Minimalistic and easy-to-understand Node.js code.

## Prerequisites

Before running this application, you need to have Node.js installed on your machine. You also need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/) and replace `'YOUR_API_KEY'` in the code with your actual API key.

## Installation

1. Clone the repository to your local machine:

   ```bash
   https://github.com/Aj3322/Node_js.weatherApp.git
   cd weather-app
   ```

2. Install the required npm packages:

   ```bash
   npm install requests 
   ```

3. Start the application:

   ```bash
   npm start
   ```

## Usage

Once the application is running, you can access it in your web browser by navigating to `http://localhost:3000`. It will display the current weather information for the location specified in the code (`'http://api.openweathermap.org/data/2.5/weather?q=mullana&units=metric&appid=YOUR_API_KEY'`).

## Customization

You can customize the location for which you want to fetch weather data by modifying the API URL in the code. You can also customize the HTML template in the `Home.html` file to change the appearance of the webpage.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [OpenWeatherMap](https://openweathermap.org/)

## Author

[Your Name](https://github.com/Aj3322)

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

Feel free to contribute to this project by adding new features or fixing bugs. Your contributions are greatly appreciated!

---
