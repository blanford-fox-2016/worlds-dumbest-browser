"use strict"

var jsonfile = require('jsonfile')
var fileTitle = './data.json'
var fileLink = './data_link.json'
var http = require('http')
var request = require('request')
var cheerio = require('cheerio')
var url = "http://9gag.com/"
var data = []

class Page {
  constructor(url) {
    this.url = url
  }

  fetch() {

    request(this.url, function(err, res, body) {
      if(!err && res.statusCode == 200) {
        var $ = cheerio.load(body)
        var title = $('title').text()
        var json = {title: ""}
        json.title = title
        jsonfile.writeFileSync(fileTitle, json)
      }
    })
  }

  title() {
    // console.dir(jsonfile.readFileSync(file).title)
    console.log(jsonfile.readFileSync(fileTitle).title);
  }

  links() {
    // Research alert!
    // How do you use Nokogiri to extract all the link URLs on a page?
    //
    // These should only be URLs that look like
    //   <a href="http://somesite.com/page.html">Click here!</a>
    // This would pull out "http://somesite.com/page.html"

    request(this.url, function(err, res, body) {
      data = []
      if(!err && res.statusCode == 200) {
        var $ = cheerio.load(body)

        $('h2.badge-item-title a.badge-evt.badge-track').each(function(){
          // var link = $(this).attr('href')
          var link = $(this).attr('href')
          data.push(link)

        })
        jsonfile.writeFileSync(fileLink, data)
        // console.log(jsonfile.readFileSync(fileLink));
        return jsonfile.readFileSync(fileLink)
      }
    })
  }
}

var page = new Page(url)
page.fetch()
page.links()

module.exports = {
  getTitle: page.title(),
  getLinks: function() {
    var read = jsonfile.readFileSync(fileLink)
    for(var i=0;i<read.length;i++) {
      console.log(read[i]);
    }
  }
}
