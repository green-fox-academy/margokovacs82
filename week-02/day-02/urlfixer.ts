'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!


let re = /nevertellmethebots/gi; 
let url: string = 'https//www.reddit.com/r/nevertellmethebots';
url = url.replace(re, "nevertellmetheodds");
let re2 = /https/gi;
url = url.replace(re2, "https:");
console.log(url);
