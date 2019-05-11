
$.getJSON("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC58mqEPx030KtZIiBNRMV4w&fields=items(statistics(subscriberCount))&key=AIzaSyBD8rkDthKJes4fPzbbN1gXYCbAUDKMAls",function(data){
console.log(data.statistics);
});