const Signup = function(userDetails) {
  return new Promise((resolve, reject) => {
    console.log(userDetails);
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4) {
        console.log(xhttp.responseText);
        switch (this.status) {
          case 201:
            const res = JSON.parse(xhttp.responseText);
            console.log(res);
            resolve(res);
            console.log("res ok");
            break;
          case 500:
            console.log("500");
            reject(false);
            break;
          default:
            console.log("default");
            reject(false);
        }
      }
    };
    xhttp.open("POST", "http://localhost:5000/signup");
    xhttp.setRequestHeader("Content-type", "application/json");
    // console.log();
    xhttp.send(JSON.stringify(userDetails));
  });
};

module.exports = { Signup };
