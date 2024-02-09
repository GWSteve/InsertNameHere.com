document.addEventListener("DOMContentLoaded", function ()
{
    const displayName = document.getElementById("displayUsername");
    const flagContainer = document.getElementById("flagContainer");


    if (displayName)
    {
        var storedName = localStorage.getItem("username");

        if (storedName)
        {
            displayName.textContent = "Welcome: " + storedName;

            if (storedName === "Admin")
            {
                var hiddenProducts = document.createElement('a');
                hiddenProducts.href = "http://localhost:50426/html/hiddenProducts.html";
                hiddenProducts.textContent = "Unreleased Products";

                var text = document.createElement('p')
                text.innerHTML = "Welcome back Admin"

                document.body.appendChild(hiddenProducts);
            }

            else if (storedName === "SecureUser")
            {
                const flagEntry = document.createElement("div");
                flagEntry.className = "flagInput";

                const search = document.createElement("input");
                search.type = "input";

                const text = document.createElement("placeholder");
                text.textContent = "Enter Flag Here ...";

                flagEntry.appendChild(search);
                flagEntry.appendChild(text);
                flagContainer.body.appendChild(flagEntry);

                const flagEntryButton = document.createElement("div");
                flagEntryButton.className = "flagEntry";

                const flagButton = document.createElement("input");
                const buttonName = document.createElement("value");


                flagEntryButton.appendChild(flagButton);
                flagEntryButton.appendChild(buttonName);

                flagContainer.body.appendChild(flagEntryButton);

            }

            else {
                console.log("NOT AN ADMIN");
            }

        }
        else {
            displayName.textContent = "Username not found";
        }
    }
})