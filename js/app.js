class Store {
    static init(key) {
        if(!Store.isset(key)) {
            Store.set(key, []);
        }
        return Store.get(key);
    }

    static set(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }

    static get(key){
        let value = localStorage.getItem(key);
        return value === null ? null : JSON.parse(value);
    }

    static isset(key){
        return Store.get(key) !== null;
    }

    static unset(key){
        if(Store.isset(key)){
            localStorage.removeItem(key);
        }
    }

    static clear() {
        localStorage.clear();
    }
}

let cart = [];

function countItems(elem) {
    let count = +elem.textContent;
    return ++count;
}

function saveCart(cart) {
    Store.set('basket', cart);
}


function addProductToWishList(product){
    wishList.textContent = countItems(wishList);
}

function addToWishListButton() {
    let addToWEishListButtons = document.querySelectorAll('.add-to-wishlist');
    addToWEishListButtons.forEach((item) => {
      
        item.addEventListener('click', (event)=>{
            let productId = event.target.closest('.btn-block').dataset.id;
            let price = event.target.closest('.btn-block').dataset.price;
            addProductToWishList({id: productId, price: price});
        })
    });
}





const setSvgIcons = () => `
<svg width="0" height="0" class="hidden">
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="delivery-time-1">
          <title>Delivery Time</title>
          <desc>A line styled icon from Orion Icon Library.</desc>
          <path data-name="layer2" fill="none" stroke="#202020" stroke-miterlimit="10" d="M62 46v-5l-8-7h-8" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
          <circle data-name="layer2" cx="24" cy="54" r="4" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></circle>
          <circle data-name="layer2" cx="54" cy="54" r="4" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></circle>
          <path data-name="layer2" fill="none" stroke="#202020" stroke-miterlimit="10" d="M50 54H28m-8 0h-4v-8h46v8h-4M24.5 24H46v22m-30 0V29.8M2 38h6m-2 8h2" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
          <circle data-name="layer1" cx="14" cy="18" r="12" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></circle>
          <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10" d="M14 12v8h6" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="helpline-24h-1">
          <title>Helpline 24h</title>
          <desc>A line styled icon from Orion Icon Library.</desc>
          <path data-name="layer2" d="M52.3 48.8c1.2.8 3 1.9 2.7 4.3S51 62 43 62s-17.7-6.3-26.2-14.8S2 28.9 2 21 9 9.3 10.9 9s3.6 1.5 4.3 2.7l6 9.2a4.3 4.3 0 0 1-1.1 5.8c-2.6 2.1-6.8 4.6 2.9 14.3s12.3 5.4 14.3 2.9a4.3 4.3 0 0 1 5.8-1.1z" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
          <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10" d="M54 2l-6 14h14m-4-6v12m-14 0H32l8.5-10v-.2A6 6 0 0 0 32 3.6" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
        </symbol>

        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="label-tag-1">
          <title>Label Tag</title>
          <desc>A line styled icon from Orion Icon Library.</desc>
          <path data-name="layer2" fill="none" stroke="#202020" stroke-miterlimit="10" d="M25.6 61L3 38.4 38.4 3l21.2 1.4L61 25.6 25.6 61z" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
          <circle data-name="layer2" cx="48" cy="15" r="4" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></circle>
          <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10" d="M31.3 21.4l11.3 11.3m-22.6 0l8.5 8.5M25.6 27l5.7 5.7" stroke-linejoin="round" stroke-linecap="round" style="stroke:var(--layer1, #202020)"></path>
        </symbol>

      </svg>
`;

let productItemTemplate = (product) => `
<div class="col-xl-3 col-lg-4 col-sm-6">
<div class="product text-center">
  <div class="position-relative d-block mb-3">
    <div class="badge text-white bg-${product.badge.bg}">${product.badge.title}</div><a class="d-block" href="detail.html"><img class="img-fluid w-100" src="${product.image}" alt="${product.name}"></a>
    <div class="product-overlay">
      <ul class="mb-0 list-inline btn-block" data-id="${product.id}" data-price="${product.price}">
        <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark add-to-wishlist" href="#!"></i></a></li>
        <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-dark add-to-cart" href="#!">Add to cart</a></li>
        <li class="list-inline-item me-0"><a class="btn btn-sm btn-outline-dark detail" href="#productView" data-bs-toggle="modal"><i class="fas fa-expand"></i></a></li>
      </ul>
    </div>
  </div>
  <h6> <a class="reset-anchor product-name" href="detail.html">${product.name}</a></h6>
  <p class="small text-muted">$<span class="product-price">${product.price}</span></p>
</div>
</div>
`;

const setFooter = () => `
<div class="container py-4">
          <div class="row py-5">
            <div class="col-md-4 mb-3 mb-md-0">
              <h6 class="text-uppercase mb-3">Customer services</h6>
              <ul class="list-unstyled mb-0">
                <li><a class="footer-link" href="#!">Help &amp; Contact Us</a></li>
                <li><a class="footer-link" href="#!">Returns &amp; Refunds</a></li>
                <li><a class="footer-link" href="#!">Online Stores</a></li>
                <li><a class="footer-link" href="#!">Terms &amp; Conditions</a></li>
              </ul>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <h6 class="text-uppercase mb-3">Company</h6>
              <ul class="list-unstyled mb-0">
                <li><a class="footer-link" href="#!">What We Do</a></li>
                <li><a class="footer-link" href="#!">Available Services</a></li>
                <li><a class="footer-link" href="#!">Latest Posts</a></li>
                <li><a class="footer-link" href="#!">FAQs</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <h6 class="text-uppercase mb-3">Social media</h6>
              <ul class="list-unstyled mb-0">
                <li><a class="footer-link" href="https://www.twitter.com" target="_blank" title="Twitter" rel="nofollow"><i class="fab fa-twitter"></i> Twitter</a></li>
                <li><a class="footer-link" href="https://www.instagram.com" target="_blank" title="Instagram" rel="nofollow"><i class="fab fa-instagram"></i> Instagram</a></li>
                <li><a class="footer-link" href="https://www.facebook.com" target="_blank" title="Facebook" rel="nofollow"><i class="fab fa-facebook"></i> Facebook</a></li>
              </ul>
            </div>


          </div>
          <div class="border-top pt-4" style="border-color: #1d1d1d !important">
            <div class="row">
              <div class="col-md-6 text-center text-md-start">
                <p class="small text-muted mb-0">© 2022 All rights reserved.</p>
              </div>
              <div class="col-md-6 text-center text-md-end">
                <p class="small text-muted mb-0">Template designed by <a class="text-white reset-anchor" href="#">Shopaholic</a></p>
              </div>
            </div>
          </div>
        </div>
`;

function populateProductsList(products) {
    let content = "";
    for (const item of products) {
        content += productItemTemplate(item);
    }

    return content;
}

/**
 * documentations
 */
"use strict"


let addToCart = document.querySelector('.add-to-cart');
const catalog = document.querySelector('.catalog');
const modalWindow = document.querySelector('.modal-window');
const shoppingCartItems = document.querySelector('.shopping-cart-items');
const url = 'https://my-json-server.typicode.com/couchjanus/db';
let products = [];
let categories = [];

const setHeader = () => `
<div class="container px-lg-3">
          <nav class="navbar navbar-expand navbar-light py-3 px-lg-0">
            <!-- navbar-brand -->
            <a href="index.html" class="navbar-brand"><span class="fw-bold text-uppercase text-dark">Shopaholic</span></a>
            <!-- navbar-toggler -->

            <button class="navbar-toggler" type="button"><span class="navbar-toggler-icon"></span></button>
            
            <div class="navbar-collapse collapse">
              <!-- navbar-nav -->
              <ul class="navbar-nav me-auto">
                <!-- nav-item -->
                <li class="nav-item">
                  
                  <a href="index.html" id="index.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                 <a href="shop.html" id="shop.html" class="nav-link">Shop</a>
                </li>
                <li>
                  <a href="contact.html" id="contact.html" class="nav-link">Contact</a>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto">               
                <li class="nav-item">
                  <a href="cart.html" id="cart.html" class="nav-link"><i class="fas fa-dolly-flatbed me-1 text-gray"></i>Cart<small class="text-gray fw-normal">(<span class="shopping-cart">2</span>)</small></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
`; 

let modalTemplate = (product) => `
<div class="modal" id="productView">
          <div class="modal-dialog">
            <div class="modal-content overflow-hidden border-0">
              <a href="#!" class="p-4 btn-close close"><i class="fas fa-times"></i></a>
            
              <div class="modal-body p-0">
            
                <div class="row align-items-stretch">
                  <div class="col-lg-6 p-lg-0">
                    <div class="bg-center bg-cover d-block h-100" style="background: url(${product.image});">
                    </div>
                  </div>
                
                  <div class="col-lg-6">
                    <div class="p-4 my-md-4">
                      
                      <ul class="list-inline mb-2">
                        <li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li><li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li><li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li><li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li><li class="m-0 list-inline-item"><i class="fas fa-star small text-warning"></i></li>
                      </ul>
                    
                      <h2 class="h4">${product.name}</h2>
                      <p class="text-muted">$${product.price}</p>
                      <p class="text-sm mb-4">${product.description}</p>

                      <div class="row align-items-stretch mb-4">
                  
                        <div class="col-sm-7">
                          <div class="border d-flex align-items-center justify-content-between py-1 px-3">
                            <span class="small text-uppercase text-gray mr-4">Quantity</span>
                            <div class="quantity">
                              <i class="fas fa-caret-left p-0 dec-btn"></i>
                              <input class="form-control border-0 shadow-0 p-0 quantity-result" type="text" value="1">
                              <i class="fas fa-caret-right p-0 inc-btn"></i>
                            </div>
                          </div>
                        </div>
                  
                        <div class="col-sm-5">
                          <a class="btn btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center px-0 add-to-cart" href="#!" data-id="${product.id}" data-price="${product.price}">Add to cart</a>
                        </div>
                    
                      </div>

                      <a class="btn btn-link text-dark reset-anchor p-0" href="#!"></i> Add to wish list</a>
                  
                    </div>
                
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
`;


let setActiveLink = () => {
    let arr = location.href.split('/');
    let current = arr.pop();
    let alink = document.getElementById(current);
    alink.classList.add('active');
}

const cartItemTemplate = (item, products) => {
    // console.log(item);
    let product = products.find(product => product.id == item.id);
    return `
    <tr class="cart-item" id="id${product.id}">
        <th class="ps-0 py-3 border-light" scope="row">
            <div class="d-flex align-items-center">
                <a class="reset-anchor d-block animsition-link" href="detail.html"><img src="${product.image}" alt="${product.name}" width="70"></a>
                <div class="ms-3"><strong class="h6"><a class="reset-anchor animsition-link" href="detail.html">${product.name}</a></strong></div>
            </div>
        </th>
        <td class="p-3 align-middle border-light">
            <p class="mb-0 small">$${product.price}</p>
        </td>
        <td class="p-3 align-middle border-light">
            <div class="border d-flex align-items-center justify-content-between px-3">
                <span class="small text-uppercase text-gray headings-font-family">Quantity</span>
                <div class="quantity">
                    <button class="dec-btn p-0" data-id="${product.id}"><i class="fas fa-caret-left"></i></button>
                    <input class="form-control form-control-sm border-0 shadow-0 p-0" type="text" value="${item.amount}">
                    <button class="inc-btn p-0" data-id="${product.id}"><i class="fas fa-caret-right"></i></button>
                </div>
            </div>
        </td>
        <td class="p-3 align-middle border-light">
            <p class="mb-0 small">$<span class="product-subtotal"></span></p>
        </td>
        <td class="p-3 align-middle border-light"><button class="reset-anchor"><i class="fas fa-trash-alt small text-muted" data-id="${product.id}"></i></button></td>
    </tr>
    `;
}
const populateShoppingCart = (cart, products) => {
    let result = '';
    cart.forEach(item => result+=cartItemTemplate(item, products));
    return result;
}

const filterItem = (cart, id) => cart.filter(item => item.id != id);
const findItem = (cart, id) => cart.find(item => item.id == id);


function setCartTotal(cart) {
    let tmpTotal = 0;
    cart.map(item => {
        tmpTotal = item.price * item.amount;
        
        shoppingCartItems.querySelector(`#id${item.id} .product-subtotal`).textContent = parseFloat(tmpTotal.toFixed(2));
    });

    let subTotal = parseFloat(cart.reduce((prev, cur) => prev + cur.price * cur.amount, 0).toFixed(2));

    let cartTax = subTotal * 0.07;

    document.querySelector('.cart-subtotal').textContent = subTotal;
    document.querySelector('.cart-tax').textContent = cartTax;
    document.querySelector('.cart-total').textContent = subTotal + cartTax;
}

const carouselItemTemplate = data => `<div class="slide carousel-item">
<a class="category-item" href="#!" data-id="${data.id}">
    <img src="${data.image}" alt="${data.name}" height="100" with="250">
    <strong class="category-item category-item-title" data-id="${data.id}">${data.name}</strong>
</a>
</div>`;


function makeCarousel(items) {
    let result = '';
    items.forEach(item => {
        result += carouselItemTemplate(item);
    } );
    result += result;
    document.querySelector('.slide-track').innerHTML = result;

}


function distinctSections(items) {
    let mapped = [...items.map(item => item.section)];
    // console.log(mapped);
    let unique = [...new Set(mapped)];
    // console.log(unique);
    return unique;
}

let liItemTemplate = obj => `<li class="mb-2"><a class="category-item reset-anchor" href="#!" data-id="${obj.id}">${obj.name}</a></li>`;


let ulMenu = items => {
    let ul = document.createElement('ul');
    ul.setAttribute('class', "list-unstyled small text-muted ps-lg-4 font-weight-normal");
    let res = '';
    for (let item of items) {
        res += liItemTemplate(item);
    }
    ul.innerHTML = res;
    return ul;
}

// distinctSections(categories);

let makeSectionName = section => {
    let div = document.createElement('div');
    div.setAttribute('class', "py-2 px-4 bg-dark text-white mb-3");
    div.innerHTML = `<strong class="small text-uppercase fw-bold">${section}</strong>`;
    return div;
}

let formChack = () => `<div class="form-check mb-1">
<input class="form-check-input" type="checkbox" id="checkbox_1">
<label class="form-check-label" for="checkbox_1">Returns Accepted</label>
</div>`;


let makeFormChackMenu = () => {
    let span = document.createElement('span');
    let h6 = document.createElement('h6');
    h6.setAttribute('class', "text-uppercase mb-3");
    h6.innerText = `Show only`;
    span.append(h6);
    let res = '';
    for (let i=0; i < 6; i++) {
        res += formChack();
    }

    let span1 = document.createElement('span');
    span1.innerHTML = res;
    span.append(span1);
    return span;
}

async function fetchData(url) {
    return await fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        if (response.status >= 400) {
            return response.json().then(err => {
                const error = new Error('Something went wrong!')
                error.data = err
                throw error
            })
        }
        return response.json();
    });
}


document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('icons')){
        document.getElementById('icons').innerHTML = setSvgIcons();
    }
    
    document.getElementById('header').innerHTML = setHeader();
    
    const shoppingCart = document.querySelector('.shopping-cart');
    const wishList = document.querySelector('.wish-list');

    // setActiveLink();
    document.querySelector('.navbar-toggler').addEventListener('click', () => document.querySelector('.collapse').classList.toggle('show'));

    function renderCart() {
        shoppingCartItems.addEventListener('click', event => {
            if(event.target.classList.contains('fa-trash-alt')){
                cart = filterItem(cart, event.target.dataset.id);
                setCartTotal(cart);
                saveCart(cart);
                cartItemsAmount(cart);
                event.target.closest('.cart-item').remove();
    
            }else if(event.target.classList.contains('inc-btn')){
                let tmp = findItem(cart, event.target.dataset.id);
                tmp.amount += 1;
                event.target.previousElementSibling.value = tmp.amount;
                setCartTotal(cart);
                saveCart(cart);
                cartItemsAmount(cart);
                
            }else if(event.target.classList.contains('dec-btn')){
                let tmp = findItem(cart, event.target.dataset.id);
                if(tmp !== undefined && tmp.amount > 1) {
                    tmp.amount -= 1;
                    event.target.nextElementSibling.value = tmp.amount;
                }else{
                    cart = filterItem(cart, event.target.dataset.id);
                    event.target.closest('.cart-item').remove();
                }
                setCartTotal(cart);
                saveCart(cart);
                cartItemsAmount(cart);
            }
        })
    }
    
    cart = Store.init('basket');


    function renderModal(cart) {
        modalWindow.querySelector('.inc-btn').addEventListener('click', e => {
            let v = e.target.previousElementSibling.value;
            v++;
            e.target.previousElementSibling.value = v;
        });
        modalWindow.querySelector('.dec-btn').addEventListener('click', e => {
            let v = e.target.nextElementSibling.value;
            if(v>1) {
                v--;
            }        
            e.target.nextElementSibling.value = v;
        });
            
        let quantityResult = modalWindow.querySelector('.quantity-result');
        let addToCart = modalWindow.querySelector('.add-to-cart');
    
        addToCart.addEventListener('click', e => {
            let id = e.target.dataset.id;
            let price = e.target.dataset.price;
            addProductToCart({id: id, price: price}, +quantityResult.value)
        })
    }
    
    function toggleModal(param, product={}) {
    
        if(modalWindow.innerHTML == '') {
            modalWindow.innerHTML = modalTemplate(product);
            renderModal(cart);
        }else{
            modalWindow.innerHTML = '';
        }
        modalWindow.style.display = param;
    }
    
    function detailButton() {
        let detailButtons = catalog.querySelectorAll('.detail');
        detailButtons.forEach(button => {
            button.addEventListener('click', event => {
                let productId = event.target.closest('.btn-block').dataset.id;
                let product = products.find(item => item.id == productId);
    
                toggleModal('block', product);
    
                modalWindow.querySelector('.close').addEventListener('click', event => {
                    event.preventDefault();
                    toggleModal('none');
                });
            });
        });
    }

    function cartItemsAmount(cart) {
        shoppingCart.textContent = cart.reduce((prev, cur) => prev + cur.amount, 0);
    }

    function addToCartButton() {
        let addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(item => 
            item.addEventListener('click', event => {
                let productId = event.target.closest('.btn-block').dataset.id;
                let price = event.target.closest('.btn-block').dataset.price;
                addProductToCart({id: productId, price: price});
            })
        );
    }

    
    function addProductToCart(product, amount=1) {
        let inCart = cart.some(element => element.id == product.id);
        if (inCart) {
            cart.forEach(item => {
                if(item.id === product.id) {
                    item.amount += amount;
                }
            })
        } else {
            let cartItem = {...product, amount:amount};
            cart = [...cart, cartItem];
        }
        saveCart(cart);
        cartItemsAmount(cart);
    }

    cartItemsAmount(cart);


    if(shoppingCartItems) {
        fetchData(`${url}/products`)
        .then(response => {
            products = response;
            shoppingCartItems.innerHTML = populateShoppingCart(cart, products);
            setCartTotal(cart);
            renderCart();
        });
    }

    const categoriesId = document.getElementById('categories');

    function renderCategory(selector, products) {
        const categoryItems = document.querySelectorAll(selector);

        categoryItems.forEach(item => item.addEventListener('click', e => {
            e.preventDefault();
            if(e.target.classList.contains('category-item')) {
                const category_id = e.target.dataset.id;
                const categoryFilter = items => items.filter(item => item.category == category_id);

                catalog.innerHTML = populateProductsList(categoryFilter(products));
            }else{
                catalog.innerHTML = populateProductsList(products);
            }
        }))
    }

    const showOnly = document.querySelector('.show-only');

    

    

    if(catalog) {
        fetchData(`${url}/products`)
        .then(response => {
            products = response;
            catalog.innerHTML = populateProductsList(products);

            addToCartButton();
            addToWishListButton();
            detailButton();

            if (document.querySelector('.carousel')) {
                fetchData(`${url}/categories`)
                .then(response => {
                    categories = response;
                    let categoriesForCrarousel = categories;
                    categoriesForCrarousel.length = 7;
                    makeCarousel(categoriesForCrarousel);
                    renderCategory('.slide-track', products);
                });
            }

            if (showOnly) {
                let badges = [...new Set([...products.map(item => item.badge.title)].filter(item => item != ''))];
        
                showOnly.innerHTML = badges.map(item => `<div class="form-check mb-1">
                <input class="form-check-input" type="checkbox" id="id-${item}" value="${item}" name="badge">
                <label class="form-check-label" for="id-${item}">${item}</label>
                </div>`).join("");
        
                let checkboxes = document.querySelectorAll('input[name="badge"]');
        
                let values = [];
                checkboxes.forEach(item => {
                    item.addEventListener('change', e => {
                        if (e.target.checked) {
                            values.push(item.value);
                            catalog.innerHTML = values.map(value => populateProductsList(products.filter(product => product.badge.title.includes(value)))).join('');
                        }else{
                            if (values.length != 0) {
                                values.pop(item.value);
                                catalog.innerHTML = values.map(value => populateProductsList(products.filter(product => product.badge.title.includes(value)))).join('');
                            }
                        }
                        if (values.length == 0) {
                            catalog.innerHTML = populateProductsList(products);
                        }
                    });
                });
            }

            if (categoriesId) {
                fetchData(`${url}/categories`)
                .then(response => {
                    categories = response;
                    let distinct = distinctSections(categories);
                    let results = [];
                    let i = 0;
                    for (let section of distinct) {
                        results[i] = categories.filter(obj => {
                            return obj.section === section;
                        });
                        i++;
                    }
            
                    for (let i = 0; i < distinct.length; i++) {
                        categoriesId.append(makeSectionName(distinct[i]));
                        categoriesId.append(ulMenu(results[i]));
                    }
            
                    renderCategory('#categories', products);
                   
                });
            }

        }); 
        
    }

    let compare = (key, order='asc') => (a, b) => {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

        const A = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const B = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

        let copmarison = 0;
        copmarison = (A > B)? 1: -1;
        return (order === 'desc') ? -copmarison : copmarison;
    }


    const selectPicker = document.querySelector('.selectpicker');

    if (selectPicker) {
        const sortingOrders = [
            {key: 'default', value: 'Default sorting'},
            {key: 'popularity', value: 'Popularity sorting'},
            {key: 'low-high', value: 'Low To High sorting'},
            {key: 'high-low', value: 'High To Low sorting'},
        ];

        const sortingOptions = sortingOrders.map(item => `<option value="${item.key}">${item.value}</option>`).join('');
        selectPicker.innerHTML = sortingOptions;

        selectPicker.addEventListener('change', function() {
            switch(this.value){
                case 'low-high': 
                catalog.innerHTML = populateProductsList(products.sort(compare('price', 'asc')));
                break;
                case 'high-low': 
                catalog.innerHTML = populateProductsList(products.sort(compare('price', 'desc')));
                break;
                case 'popularity': // TODO
                catalog.innerHTML = populateProductsList(products.sort(compare('price', 'asc')));
                break;
                default: 
                catalog.innerHTML = populateProductsList(products.sort(compare('id', 'asc')));
               
            }
        })

    }

    document.getElementById('footer').innerHTML = setFooter();
});