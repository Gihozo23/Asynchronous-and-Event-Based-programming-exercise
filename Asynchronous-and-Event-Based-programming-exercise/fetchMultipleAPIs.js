// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises

// .

// JavaScrip

// Copy

// const apiUrls = [
//   'https://jsonplaceholder.typicode.com/posts/4',
//   'https://jsonplaceholder.typicode.com/posts/5',
//   'https://jsonplaceholder.typicode.com/posts/6'
// ];

// fetchMultipleAPIs(apiUrls)
//   .then(results => {
//     console.log('Combined Results:', results);
//   })
//   .catch(error => {
//     console.log('Error:', error.message);
//   });

async function fetchMultipleAPIs(urls) {
    const fetchData = async (url) => {
        const response = await fetch(url);
        return response.json();
    };
        const results = Promise.all(urls.map(fetchData));
        return results;
}

// Example usage
const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });

//   fetchData Function:

//   This function fetches data from a single URL and returns the parsed JSON data.
//   It throws an error if the response is not OK.
//   fetchMultipleAPIs Function:
  
//   This function takes an array of URLs and uses Promise.all to fetch data from all the URLs concurrently.
//   It maps each URL to a fetch operation using the fetchData function.
//   It returns an array of results if all fetch operations succeed.
//   It throws an error if any fetch operation fails.

// Declaring fetchData as async:

// const fetchData = async (url) => { ... }: The async keyword here means fetchData returns a promise.
// await fetch(url): Waits for the fetch call to complete and returns the response.
// await response.json(): Waits for the response to be parsed as JSON.
// Using await in fetchMultipleAPIs:

// const results = await Promise.all(urls.map(fetchData));: Waits for all fetch operations to complete. Promise.all runs all fetch operations concurrently and returns an array of results if all succeed.
// Error Handling:


// Concurrency: When combined with Promise.all, async and await allow for concurrent operations while still maintaining readable code.