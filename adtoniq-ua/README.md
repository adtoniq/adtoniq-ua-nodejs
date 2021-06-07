![](logo.png)

# adtoniq-ua
Adtoniq for Node.js implements the server-to-server communications required between your webserver and [Adtoniq](https://adtoniq.io).

## Install

```bash
npm i adtoniq-ua
```
## Usage

### Get your Adtoniq refresh URL. ###
```js
const auaURL = "Your-URL-Here"
```
### Optionally, set a polling interval. Defaults to 60000 milliseconds ###
```js
const auaPollInterval = 10000 // mseconds
```

### Initialize the API with your key. ###
```js
const adtoniqUA = new AdtoniqUA(auaURL, auaPollInterval)
```
### Process requests ###
You must insert a piece of code on every header of a request that page. You should obtain that code by calling the following:
```js
const headCode = adtoniqUA.getHeadCode()
```
### Details
For details and examples visit https://github.com/adtoniq/adtoniq-for-nodejs


### License

This project is licensed under the MIT License
