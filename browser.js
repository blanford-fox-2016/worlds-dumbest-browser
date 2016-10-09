"use strict"



var util = require('./util')



class Browser {
  run() {
    // Run the browser
    // Display a prompt for a user
    // Parse their input
    // Display useful results by instantiating
    //   a new Page and calling methods on it.
    //
    // Questions:
    //  1. How can a user quit the browser gracefully?
    //  2. How can a user ask for help, i.e., how do they know what commands are available to them?

    // request(this.url, function(err, res, body) {
    //   if(!err && res.statusCode == 200) {
    //     var $ = cheerio.load(body)
    //     title = $('title').text()
    //     console.log(title);
    //     console.log(this.title);
    //
    //     $('h2.badge-item-title a.badge-evt.badge-track').each(function(){
    //       // var link = $(this).attr('href')
    //       var link = $('a.badge-evt.badge-track')
    //       var linkText = link.text()
    //       console.log(linkText);
    //     })
    //
    //     console.log(images.length);
    //     for(var i = 0;i<images.length;i++) {
    //       console.log(images[i]);
    //     }
    //   }
    // })

    util.getTitle
    util.getLinks()

  }
}

var browser = new Browser
browser.run()
