document.addEventListener("DOMContentLoaded", function ()
{
    var loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event)
        {                    
            event.preventDefault();

            var usr = document.getElementById("username").value;
            var paswrd = document.getElementById("password").value;

            var loginInfo = [
                { username: "Admin", password: "Admin" },
                { username: "Guest", password: "Guest" },
                { username: "SecureUser", password: "SecureUser" }
            ]

            function validOrNot(username, password) {
                return loginInfo.some(user => user.username == username && user.password == password);
            }

            const isValid = validOrNot(usr, paswrd);

            if (isValid == true)
            {
                localStorage.setItem("username", usr);
                location.href = "http://localhost:50426/html/userProfile.html";
            }
            else
            {
                alert("Error, Username or Password is Incorect");
            }
        })
    }
})
