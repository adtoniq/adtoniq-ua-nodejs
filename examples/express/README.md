# README #
This is a simple [Express](https://expressjs.com) demo sever. The file app.js demonstrates how to integrate Adtoniq. This sample page displays sample ads and displays whether you are using an ad blocker.

## Setup ##

This demo depends on the [adtoniq-express module](https://www.npmjs.com/package/adtoniq-ua) which will be atomatically installed.
```bash
npm install
```
You will first need to get your site site registered and obtain your API URL. For that contact support@adtoniq.com.

## The code ##

The sample code resides in app.js

## How to integrate this with your Node.js web server ##

1. Get your Adtoniq refresh URL.
```js
const auaURL = "Your-URL-Here"
```
2. Optionally, set a polling interval. Defaults to 60000 milliseconds
```js
const auaPollInterval = 10000 // mseconds
```
3. Create your adtoniq object.
```js
const adtoniqUA = new AdtoniqUA(auaURL, auaPollInterval)
```

## Displaying other ads ##
Adtoniq will target existing ads to be replced. If you want to add your own, the following snippet, included in body.html, illustrates how to do this. In this case Adtoniq support will generate the ads to be displayed in class="foo".
```html
<p> Here is my ad
<div class="foo" style="border: 1px solid red;">
<br>I am an ad!
</div>
```

## Dealing with adblockers ##
The following snippet, included in head.html, illustrates how to detect whether an adblocker is being used.
```html
<div class="adtoniq_adblocked" style="display:none;color:red;">
  <h1>You are using an ad blocker</h1>
  </div>
<div class="adtoniq_nonblocked" style="display:none;color:green;">
  <h1>You are not using an ad blocker</h1>
  </div>
```

## Running ##

Runs as standard [Express](https://expressjs.com) server:

```bash
# If port other than 3000 is to be used set:
#export PORT=...
bin/www
```

## Support ##
Contact support@adtoniq.com with any questions.
