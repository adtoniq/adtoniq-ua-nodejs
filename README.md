# README #
This is a Node.js project demonstrating how to integrate [Adtoniq](https://adtoniq.io) with your Node.js based web server.

Adtoniq Universal Adapater for Node.js implements the integration between your webserver and Adtoniq. Your server will periodically poll Adtoniq servers for updated Adtoniq code, which is cached in memory and then injected into the head of your pages. This ensures that Adtoniq continues functioning as new ad block rules are added, or ad blockers are enhanced with new capabilities.

In addition, once you are live with Adtoniq, Adtoniq will monitor your website to determine if ad blockers are adding new capabilities specifically designed to block ads on your website, and if they are, Adtoniq will immediately prepare new code for your site to be picked up during the next poll cycle, to ensure your advertising is not blocked.

## Guide to what's here ##

The [adtoniq-ua](https://github.com/adtoniq/adtoniq-ua-nodejs/tree/master/adtoniq-ua) repository contains the code to the [Adtonic universal adapter npm module](https://www.npmjs.com/package/adtoniq-ua).

The [examples/express](https://github.com/adtoniq/adtoniq-ua-nodejs/tree/master/examples/express) repository contains a simple [Express](https://expressjs.com) sever that implements the Adtoniq functionality.

## Support ##
Contact support@adtoniq.com with any questions.
