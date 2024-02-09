if (window.productsScriptExecuted) {
    console.warn("Products.js alerady executed, Aborting");
} else {
    window.productsScriptExecuted = true;

    document.addEventListener("DOMContentLoaded", function ()
    {
        const productContainer = document.getElementById("productContainer");
        const uniqueProductNames = new Set();

        const products =
            [
                { name: "Graphics Card", price: "$ 500.00", imgSrc: "../photos/GraphicsCard.jpg" },
                { name: "CPU", price: "$ 450.00", imgSrc: "../photos/CPU.jpg" },
                { name: "Motherboard", price: "$ 230.00", imgSrc: "../photos/Motherboard.jpg" },
                { name: "Desktop Case", price: "$ 200.00", imgSrc: "../photos/DesktopCase.jpg" },
                { name: "Case Fan", price: "$ 30", imgSrc: "../photos/CaseFan.jpg" },
                { name: "AIO Cooler", price: "$ 190", imgSrc: "../photos/AIOCooler.jpg"},
                { name: "RAM", price: "$ 150", imgSrc: "../photos/RAM.jpg",hidden: true}
            ];

        
        products.forEach(product =>
        {

            if (!product.hidden)
            {
                
                if (!uniqueProductNames.has(product.name))
                {
                    uniqueProductNames.add(product.name);
                    const productBox = document.createElement("div");
                    productBox.className = "box";

                    const imgLink = document.createElement("a");
                    imgLink.href = product.imgSrc;

                    const img = document.createElement("img");
                    img.src = product.imgSrc;
                    imgLink.appendChild(img);

                    const h4 = document.createElement("h4");
                    h4.textContent = product.name;

                    const h5 = document.createElement("h5");
                    h5.textContent = product.price;

                    productBox.appendChild(imgLink);
                    productBox.appendChild(h4);
                    productBox.appendChild(h5);

                    productContainer.appendChild(productBox)
                }
            }
        })
    })
}