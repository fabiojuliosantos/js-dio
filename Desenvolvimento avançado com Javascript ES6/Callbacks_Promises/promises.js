//Promises

const doSomethingPromise = new Promise((resolved, reject) => {
  //throw new Error('Something went wrong');
    setTimeout(function () {
    resolved("First Data");
  }, 1000);
});

const doOtherThingPromise = new Promise((resolved, reject) => {
  setTimeout(function () {
    resolved("Second Data");
  }, 1000);
});

doSomethingPromise.then(data => console.log(data))//.catch(error => console.log(error));
