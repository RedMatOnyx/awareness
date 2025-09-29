starting to implement unified header loaded with javascript testing it in the trailheads view
to add to all other views, add the placeholder div and scriptsource to each view file

waiting to do same to head tags but they are not typical from view to view in the title after |

just learned that i need to move the header into the body

javascript cannot GET /partials/header.html for index.html but works fine for views (using live server)
...so will just push and see if deployed site works ok...
nope, so got rid of javascript header in index.html, just using it for the views

i need to get rid of inline styles on headers and put them all into css file

i have duplicated css in my header, footer block and .banner class (i'll try commenting out the css class and deleting the attribute from my header tag html for simplicity)

i left the unique header in the gamepad tester view because it's a working page and has a seperate index anyway

airports view is only one i tested the new load-title feature, copy to others if it makes sense to do it...

RSS Project
Still wondering why some of these don't work, and how to find rss feeds to use...
Will maybe try the following and experiment:

These feeds generally allow direct JavaScript fetching:

BBC News (JSON & RSS)

RSS: https://feeds.bbci.co.uk/news/world/rss.xml

JSON: https://api.bbc.com/feed/1.0/news/

Hacker News (Tech News & Startups)

RSS: https://news.ycombinator.com/rss

NPR News

RSS: https://feeds.npr.org/1001/rss.xml

NASA Astronomy Picture of the Day (APOD)

RSS: https://apod.nasa.gov/apod.rss

Mozilla Developer Network (MDN) Web Docs

RSS: https://developer.mozilla.org/en-US/docs/Web/RSS

Reddit (Public Subreddit Feeds, but requires CORS proxy)

Example: https://www.reddit.com/r/webdev/.rss

Note: Reddit blocks direct JS fetches from browsers, so a proxy is needed.

Google News: https://news.google.com/rss

NY Times: https://rss.nytimes.com/services/xml/rss/nyt/World.xml

CNN: http://rss.cnn.com/rss/edition.rss

Reuters: http://feeds.reuters.com/reuters/topNews

The Guardian: https://www.theguardian.com/world/rss
