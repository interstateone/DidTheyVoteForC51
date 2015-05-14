// npm install exec-queue
var sys = require('sys');
var exec = require('exec-queue');
// Raw data from http://api.openparliament.ca/votes/ballots/?vote=%2Fvotes%2F41-2%2F395%2F&limit=500&format=json
var ballots = require('./ballots.json').objects;

var psqlPath = '/Applications/Postgres.app/Contents/Versions/9.3/bin/psql';
var port = '5432';
var user = 'brandon';
var database = 'c51';
var command = psqlPath + ' -p' + port + ' -U ' + user + ' -d ' + database + ' -c "COPY (SELECT name FROM core_politician WHERE slug=\'@@\') TO STDOUT"'

ballots.forEach(function(ballot, i) {
  var slug = ballot.politician_url.replace('/politicians/', '').replace('/', '')
  var c = command.replace('@@', slug);

  exec(c, function(error, stdout, stderr) {
    ballot.name = stdout.trim();
    if (i === ballots.length - 1) {
      sys.puts(JSON.stringify(ballots));
    }
  });
});