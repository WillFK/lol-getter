(function() {
  var request = require('request');
  function getPage() {
    if (process.argv >= 3)
      return process.argv[2]
    else
    return 1
  }

  const cheerio = require('cheerio')
  request('http://www.lolskill.net/live-matches/page-'+getPage(), function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(body)
        $('.live-match').find('a').each(function(index, it) {
          openGame($(it).attr('href'))
        })
     }
  })

  function openGame(address) {
    request.get({
      uri: 'http://www.lolskill.net/'+address,
      encoding: 'utf8'
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log('\n')
          const $ = cheerio.load(body)
          $('.row.gametype h3').each(function(){ console.log($(this).text().trim()) })
          console.log($('#search-realm').text().trim())
          $('.gamesummoner-card .summoner-name>a').each(function(index, it) {
            console.log($(it).html())
          })
       }
     })
  }
})()
