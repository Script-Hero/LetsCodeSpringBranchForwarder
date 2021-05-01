"use strict";

import pkg from "./../package.json"
//var Greenlock = require("greenlock");
import Greenlock from 'greenlock';


function updateSSL() {
  var greenlock = Greenlock.create({
    configDir: "./greenlock.d/config.json",
    packageAgent: pkg.name + "/" + pkg.version,
    maintainerEmail: pkg.author,
    staging: true,
    notify: function (event, details) {
      if ("error" === event) {
        // `details` is an error object in this case
        console.error(details);
      }
    },
  });

  greenlock.manager
    .defaults({
      agreeToTerms: true,
      subscriberEmail: "webhosting@example.com",
    })
    .then(function (fullConfig) {
      var altnames = ["letscodesbisd.com", "www.letscodesbisd.com"];

      greenlock
        .add({
          subject: altnames[0],
          altnames: altnames,
        })
        .then(function () {
          // saved config to db (or file system)
        });
    });

  greenlock
    .get({ servername: subject })
    .then(function (pems) {
      if (pems && pems.privkey && pems.cert && pems.chain) {
        console.info("Success");
      }
      //console.log(pems);
    })
    .catch(function (e) {
      console.error("Big bad error:", e.code);
      console.error(e);
    });
}


export default updateSSL;