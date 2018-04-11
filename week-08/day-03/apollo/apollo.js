
let apollo = new XMLHttpRequest();
apollo.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=07c7068e53c44f4da1d500c91b7649ca', true);
apollo.onload = () => {
  let variant = JSON.parse(apollo.responseText);
  console.log(variant.response.docs);
  
  variant.response.docs.forEach((e, i) => {
  let a = document.createElement('a');
  let p = document.createElement('p');

  a.innerText = variant.response.docs[i].headline.main + `\n`;
  a.href = variant.response.docs[i].web_url; 
  document.querySelector('div').appendChild(a);

  p.innerText =  variant.response.docs[i].snippet + `\n` 
   + variant.response.docs[i].pub_date + `\n`;
   document.querySelector('div').appendChild(p);
});
}
apollo.send();
