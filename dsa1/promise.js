//ES 5
var access = true;
function callback(message) {
  console.log("Success!" + message);
}

function errorCallback(message) {
  console.log("Failed!" + message);
}

function test(callback, errorCallback) {
  if (access) {
    callback("You do have access");
  } else {
    errorCallback("You don't have access");
  }
}

test(callback, errorCallback);

// ES 6
let access1 = false;
const  test1=()=> {
  return new Promise((resolve, reject) => {
    if (access1) {
      resolve("success");
    } else {
      reject("failed");
    }
  })
}
test1()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
