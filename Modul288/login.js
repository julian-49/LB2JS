var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './index.html'
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://www.mecallapi.com/api/login");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "username": username,
    "password": password
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects['status'] == 'ok') {
        localStorage.setItem("jwt", objects['accessToken']);
        Swal.fire({
          text: objects['message'],
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = './index.html';
          }
        });
      } else {
        Swal.fire({
          text: objects['message'],
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
    [
      {
        "id": 1,
        "fname": "Karn",
        "lname": "Yong",
        "username": "karn.yong@mecallapi.com",
        "avatar": "https://www.melivecode.com/users/1.png"
      },

      {
        "id": 2, "fname": "Ivy",
        "lname": "Cal",
        "username": "ivy.cal@mecallapi.com",
        "avatar": "https://www.melivecode.com/users/2.png"
      },
      {
        "id": 3,
        "fname": "Walter",
        "lname": "Beau",
        "username": "walter.beau@mecallapi.com",
        "avatar": "https://www.melivecode.com/users/3.png"

      },
      {
        "id": 4,
        "fname": "Gayla",
        "lname": "Bertrand",
        "username": "gayla.bertrand@mecallapi.com",
        "avatar": "https://www.melivecode.com/users/4.png"
      }
    ]
  };
  return false;

}