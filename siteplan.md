<!-- change document structure to have simple, light landing page with
 links to various galleries etc. (traffice, shoes, SDR)
 add section for favorite radio stations on SDR, and the shoe gallery, have sample images as part of links (thumbnail?) -->

oh, i can type all over and no need to comment because this is an .md file, right?

use this for the header/footer template
<!-- <embed type="text/html" src="forinclude.html"> -->
<!-- can't use links with embed, puts landing into the small box -->

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
