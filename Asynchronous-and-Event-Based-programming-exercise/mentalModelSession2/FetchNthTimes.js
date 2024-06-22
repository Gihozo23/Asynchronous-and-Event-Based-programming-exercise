//Write a JavaScript function that fetches data from an API and retries the request a specified
// number of times if it fails.

//Steps:
//1. Define the  async function: first argument url, maxRetries as second argument
//2. Function body:
//A. try:
//ii. Parse it into json
//i. fetch data
//B. catch :
//i.
//3.
/* steps
1. Fetch data from an API
2. Check if the fetch was successful
3. Return it if it is successful
4. Retry if it fails
5. Track the number of times to ensure that it never exceeds the limit
6. if retries < limit, and the data is available we return
7. if retries > limit, then we throw the error
*/

/*
Data: What can change 
1. The url from an API
2. The max number of times we want to retry if it fails
3. The delay 
*/
const url = "https://jsonplaceholder.typicode.com/posts";
const fetchData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result;
};
fetchData(url);
// }
// fetchData(url).then((data) => console.log(data))

// function add (){
// return "hihi"
// }
// add().then((data) => console.log(data))

// const url = "https://jsonplaceholder.typicode.com/posts";
// const fetchData = (url) => {
//     const response = fetch(url).then((data) => data.json().then((res) => res ));
//     console.log(response);
// }
// fetchData(url)
