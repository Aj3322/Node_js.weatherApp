const fs = require('fs');
const http = require('http');
var requests = require('requests');
const port = process.env.PORT || 3000;

const homeFile = fs.readFileSync('Home.html', 'utf-8');
const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%TEMPVAL%}", orgVal.main.temp);
    temperature = temperature.replace("{%TEMPMIN%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%TEMPMAX%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%LOC%}", orgVal.name);
    temperature = temperature.replace("{%COUNTRY%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

    return temperature;
}

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        requests('http://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=58894c5f765fe956d755b7b62fd730e4')
            .on('data', (chunk) => {
                var data = JSON.parse(chunk);
                const arraydata = [data];
                console.log(arraydata[0]);
                console.log(arraydata[0].main.temp);

                const realTimeData = arraydata .map((val) => replaceVal(homeFile, val))
                .join("");
              res.write(realTimeData);

            })
            .on("end", (err) => {
                if (err) return console.log("connection closed due to errors", err);
                res.end();
              });
          } else {
            res.end("File not found");
          }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });