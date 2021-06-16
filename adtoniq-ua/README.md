![](logo.png)

# adtoniq-ua
Adtoniq for Node.js implements the server-to-server communications required between your webserver and [Adtoniq](https://adtoniq.io).

## Install

```bash
npm i adtoniq-ua
```
## Usage

### Get your Adtoniq refresh URL. ###
Contact Adtoniq for a URL customized for your website and paste it below.
```js
const auaURL = "Your-URL-Here"
```
### Optionally, set a polling interval. Defaults to 60000 milliseconds if not specified ###
```js
const auaPollInterval = 10000 // mseconds
```

### Initialize the API with your settings. ###
```js
const AdtoniqUA = require("adtoniq-ua");
const adtoniqUA = new AdtoniqUA(auaURL, auaPollInterval)
```
### Process requests ###
You must insert a piece of Adtoniq code in the head of every page by calling the following:
```js
adtoniqUA.getHeadCode()
```
### Details
For details and examples visit https://github.com/adtoniq/adtoniq-ua-nodejs


### License

This project is licensed under the MIT License
