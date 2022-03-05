const displayLocalStorageOnUi = () => {
    const cart = getCart();
    for (const key in cart) {
        displayProduct(key);
    }
}


const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if (!name) {
        return;
    }
    //display products on UI
    displayProduct(name);
    //store products on local storage
    storeInLocalStorage(name);
    //clear input field
    nameField.value = '';
}

const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {}
    }
    return cartObj;
}

const storeInLocalStorage = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    const cartObjStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartObjStringified);
}


const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayLocalStorageOnUi();

