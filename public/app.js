const API = "http://localhost:5000/api";

// MongoDB API Call
async function createMongoUser() {
  const name = document.getElementById("mongoName").value;
  const email = document.getElementById("mongoEmail").value;

  const res = await fetch(`${API}/mongo-user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  });

  const data = await res.json();
  document.getElementById("response").innerText =
    "MongoDB User Created: " + JSON.stringify(data);
}

// MySQL API Call
async function createSQLUser() {
  const name = document.getElementById("sqlName").value;
  const email = document.getElementById("sqlEmail").value;

  const res = await fetch(`${API}/mysql-user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  });

  const text = await res.text();
  document.getElementById("response").innerText = text;
}
