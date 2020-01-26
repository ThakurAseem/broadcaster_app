const Login = function(idPass) {
  return new Promise(function(resolve, reject) {
    console.log("inside network");
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4) {
        switch (this.status) {
          case 200:
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
    xhttp.open("POST", "http://localhost:5000/login");
    xhttp.setRequestHeader("Content-type", "application/json");
    // console.log();
    xhttp.send(JSON.stringify(idPass));
  });
};

module.exports = { Login };
