const API = "/api";

function register() {
  const username = document.getElementById("regUser").value;
  const password = document.getElementById("regPass").value;

  fetch(`${API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("message").innerText = data.message;
    });
}

function login() {
  const username = document.getElementById("logUser").value;
  const password = document.getElementById("logPass").value;

  fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("message").innerText = data.message;
    });
}
