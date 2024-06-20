let url= "https://jsonplaceholder.typicode.com/posts";
async function fetchMultipleAPIs(url) {
       const response = await fetch(url);
       console.log(response)
        const data = await response.json();
        console.log(data)
        return data;

}

fetchMultipleAPIs(url)
