// Initial users data
let users = [
    { user: "amir", pass: "2680", balance: 5000 },
    { user: "ibrahim", pass: "2005", balance: 3000 },
    { user: "aiden", pass: "2831", balance: 4500 },
    { user: "caleb", pass: "9967", balance: 7000 },
    { user: "eihan", pass: "9584", balance: 2500 },
    { user: "david", pass: "8385", balance: 8000 },
    { user: "meghan", pass: "1432", balance: 6000 }
];

// Load users from localStorage if exists
if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
} else {
    localStorage.setItem("users", JSON.stringify(users));
}

const container = document.getElementById("usersContainer");

function renderUsers() {
    container.innerHTML = "";
    users.forEach((u, index) => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user-card");
        userDiv.innerHTML = `
            <h3>${u.user}</h3>
            <p>Balance: $<span id="balance-${index}">${u.balance}</span></p>
            <input type="number" id="input-${index}" placeholder="New Balance">
            <button onclick="updateBalance(${index})">Update Balance</button>
        `;
        container.appendChild(userDiv);
    });
}

function updateBalance(index) {
    const input = document.getElementById(`input-${index}`);
    const newBalance = parseFloat(input.value);
    if (!isNaN(newBalance)) {
        users[index].balance = newBalance;
        localStorage.setItem("users", JSON.stringify(users));
        document.getElementById(`balance-${index}`).innerText = newBalance;
        input.value = "";
        alert(`${users[index].user}'s balance updated!`);
    }
}

function logout() {
    window.location.href = "index.html";
}

renderUsers();
