let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayFunction() {
    let productList = document.getElementById('product-list');
    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');

        let productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        let productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;
        productDiv.appendChild(productPrice);

        let productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        productList.appendChild(productDiv);
    });
}

window.addEventListener('load', displayFunction);

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return;
    }

    let userInput = {
        name: name,
        email: email,
        message: message
    };

    console.log(userInput);
});

function changeColor() {
    const box = document.getElementById('box');
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const currentColor = box.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];

    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    box.style.backgroundColor = newColor;
}

function changeSize() {
    const text = document.getElementById('text');
    const sizes = ['16px', '20px', '24px', '28px', '32px'];
    const currentSize = text.style.fontSize;
    let newSize = sizes[Math.floor(Math.random() * sizes.length)];

    while (newSize === currentSize) {
        newSize = sizes[Math.floor(Math.random() * sizes.length)];
    }

    text.style.fontSize = newSize;
}

document.getElementById('hover-box').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'pink';
});

document.getElementById('hover-box').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'orange';
});

document.getElementById('inputField').addEventListener('focus', function() {
    this.style.borderColor = 'blue';
});

document.getElementById('inputField').addEventListener('blur', function() {
    this.style.borderColor = 'initial';
});
