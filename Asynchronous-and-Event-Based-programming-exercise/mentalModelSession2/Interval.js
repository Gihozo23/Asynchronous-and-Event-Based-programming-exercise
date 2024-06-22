//Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds

function displayNumber() {
  let count = 0;
  const intervalId = setInterval(() => {
    console.log(count);
    count++;
  }, 2000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
}

displayNumber();
