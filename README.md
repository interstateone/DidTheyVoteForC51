# Did They Vote For C-51

A tiny website I made so it was easier to check how your MP voted on bill [C-51](http://www.parl.gc.ca/HousePublications/Publication.aspx?DocId=6932136&Col=1&File=4). It was made in a few evenings, and if you think it could be better I'd encourage you to [contribute](#contributing) to it.

It uses data from [Open Parliament](https://openparliament.ca) and [Represent](https://represent.opennorth.ca), two great projects with free APIs for reasonable usage levels.

## Contributing

Any feedback is welcome, but I ask that it be constructive and polite. If you have an issue or concern and aren't sure what to do about it, or otherwise want to start some dialogue about a potential change to the site, please open an issue. If you have a change in mind for the site and you'd like to propose a specific solution, please open a [pull request](https://help.github.com/articles/using-pull-requests/).

## How I Got The Data

I had vote data (ballots) from Open Parliament, but in order to easily look up someones MP I wanted to use Represent. They don't have a common representative ID, but the representatives would have the same name between datasets. There's one problem with the data that Open Parliament provides at the ballot endpoint for votes though, and that's that it doesn't provide names, only URL slugs for a particular representatives endpoint. For older votes you could perform a query on one of Open Parliament's [database dumps](https://openparliament.ca/data-download/), but it's not recent enough for this vote that just occurred.

I managed to create a [short JavaScript file](https://github.com/interstateone/DidTheyVoteForC51/blob/master/join_ballots.js) that used the representative slug in the ballot JSON to lookup the representative's name in the (outdated) database dump and combine that into a single array. The file is quick and dirty, but I only needed it to work precisely once, and it did :). Working with JSON in JS was easier to work with than a shell script, so that's why I ended up doing it that way. If you want to do this yourself with some other future vote data, just `npm install exec-queue` and `node join_ballots.js > combined.json` and you'll get the new JSON you need.

## License

It's MIT, see the LICENSE file for details.