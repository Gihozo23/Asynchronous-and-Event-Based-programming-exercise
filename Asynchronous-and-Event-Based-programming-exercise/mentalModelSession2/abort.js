/*
Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

steps:
1. fetch data from an API
2. return the data fetched
3. abort when the request takes more than 10 ms
i. create a controller object
ii. pass the signal as argument in an object to the fetch
iii. then abort after 10ms

Data: what can change
1. url
2. delay
*/
let url = "https://jsonplaceholder.typicode.com/posts";
let fetchData = (url) => {
    let controller = new AbortController();
    let {signal} = controller;
    setTimeout(() => {
        let response = fetch(url, {signal}).then((data) => data.json().then((res) => console.log(res)))
        return response;
    },10000);
    setTimeout(() => controller.abort(),10000);


}
fetchData(url);