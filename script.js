const accounts = [
    { user: "amir", pass: "2680", page: "amir.html" },
    { user: "ibrahim", pass: "2005", page: "ibrahim.html" },
    { user: "aiden", pass: "2831", page: "aiden.html" },
    { user: "caleb", pass: "9967", page: "caleb.html" },
    { user: "eihan", pass: "9584", page: "eihan.html" },
    { user: "david", pass: "8385", page: "david.html" },
    { user: "meghan", pass: "1432", page: "meghan.html" },

    // Admins
    { user: "admin", pass: "9999", page: "admin.html", admin: true },
    { user: "jamesadmin", pass: "5689", page: "admin.html", admin: true },
    { user: "vishaanadmin", pass: "bundle12", page: "admin.html", admin: true }
];

function login() {
    let u = document.getElementById("username").value.trim();
    let p = document.getElementById("password").value.trim();

    const account = accounts.find(acc => acc.user === u && acc.pass === p);

    if (account) {
        window.location.href = account.page;
    } else {
        document.getElementById("error").innerText = "Invalid username or password!";
    }
}