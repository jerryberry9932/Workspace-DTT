document.getElementById('loginForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/.netlify/functions/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.json();

  if (response.status === 200) {
    window.location.href = result.redirectUrl;
  } else {
    alert(result.message);
  }
});
