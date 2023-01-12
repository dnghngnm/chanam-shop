import product from '../js/product.js'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

export default function miniCart(products = undefined) {
    const PRODUCTS_STORAGE_KEY = 'Chanam'
    let navClientCart = $('.nav__client-cart')
    let productMiniCart = $('.product__mini-cart')
    let productMiniCartWrapper = $('.product__mini-cart-wrapper')
    let productMiniCartClose = $('.product__mini-cart-close')
    let productMiniCartItems = $('.product__mini-cart-items')
    let productMiniCartSubtotalNumber = $('.product__mini-cart-subtotal-number')
    
    return {
        cart: {},
        products: [],
        quantity: 1,
        subTotal: 0,
        config: JSON.parse(localStorage.getItem(PRODUCTS_STORAGE_KEY)) || {},

        setConfig(key, value) {
            this.config[key] = value;
            localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(this.config));
        },

        async isElementLoaded(selectors, method) {
            if (method === 'querySelectorAll') {
                while ($$(selectors).length === 0) {
                    await new Promise(resolve => requestAnimationFrame(resolve))
                }
                return $$(selectors)
            }

            if (method === 'querySelector') {
                while ($(selectors) === null) {
                    await new Promise(resolve => requestAnimationFrame(resolve))
                }
                return $(selectors)
            }
        },

        renderMiniCart() {
            this.isElementLoaded('.product__btn--add-to-cart', 'querySelectorAll')
                .then(selectors => {
                    const _this = this
                    
                    this.setLocalStorage(selectors)
                    for (let i of this.products) {
                        for (let j of products) {
                            if (i.productID === j.id) {
                                this.createCartItem(j.images[0], j.title, i.quantity, j.price, i.productID)
                                break
                            }
                        }
                    }
                    this.showEmptyText()
                })
        },

        handleEvents() {
            // Handle show mini cart
            navClientCart.onclick = function() {
                productMiniCart.classList.add('active')
                productMiniCartWrapper.classList.add('active')
            }

            // Handle close mini cart
            productMiniCartClose.onclick = function() {
                productMiniCart.classList.remove('active')
                productMiniCartWrapper.classList.remove('active')
            }

            // Handle remove item cart 
        },

        // Handle store local storage 
        setLocalStorage(selectors) {
            const _this = this

            Array.from(selectors).forEach(button => {
                button.onclick = function () {
                    let productItemElement = product().getParent(button, '.product__item')
                    let productIndex = productItemElement.parentElement.getAttribute('data-index')
                    let productItem = products[productIndex]
                    let productID = productItem.id
                    let quantity = _this.quantity
                    let productMiniCartItem = $$('.product__mini-cart-item')

                    _this.subTotal += _this.quantity * productItem.price
                    productMiniCartSubtotalNumber.innerText = '£' + _this.subTotal
                    
                    for (let i = 0; i < _this.products.length; i++) {
                        if (productID === _this.products[i].productID) {
                            quantity = ++_this.config.cart.products[i].quantity
                            _this.products.splice(i, 1)
                        }
                    }
                    
                    _this.products.push({productID, quantity})
                    _this.cart['products'] = _this.products
                    _this.setConfig('cart', _this.cart)

                    for (let item of productMiniCartItem) {
                        if (Number(item.getAttribute('data-id')) === productID) {
                            let number = item.querySelector('.product__mini-cart-quantity')
                            number.innerText = quantity + ' x'
                            return
                        }
                    }
                    _this.createCartItem(productItem.images[0], productItem.title, quantity, productItem.price, productID)
                    _this.showEmptyText()
                }
            })
        },

        loadConfig() {
            this.config.cart ? this.cart = this.cart = this.config.cart : this.cart = {}
            this.config.cart?.products ? this.products = this.config.cart.products : this.products = []
        },

        createCartItem(image, title, quantity, price, productID) {
            let cartItem = document.createElement('div')
            cartItem.setAttribute('class', 'product__mini-cart-item')
            cartItem.setAttribute('data-id', productID)

            cartItem.innerHTML = `
                <div class="product__mini-cart-thumbnail">
                    <a href="">
                        <img src="${image}" alt="">
                    </a>
                </div>

                <div class="product__mini-cart-info">
                    <div class="product__mini-cart-name">
                        <a href="">${title}</a>
                    </div>

                    <div class="product__mini-cart-price">
                        <span class="product__mini-cart-quantity">${quantity} x </span>
                        <span class="product__mini-cart-number">£${price}</span>
                    </div>
                </div>

                <div class="product__mini-cart-remove">
                    <i class="fa-regular fa-rectangle-xmark"></i>
                </div>
            `
            productMiniCartItems.append(cartItem)
            let productMniCartRemoveBtn = $$('.product__mini-cart-remove')
            this.removeCartItem(productMniCartRemoveBtn)
        },

        removeCartItem(productMniCartRemoveBtn) {
            const _this = this
            Array.from(productMniCartRemoveBtn).forEach(button => {
                button.onclick = function() {
                    let item = product().getParent(button, '.product__mini-cart-item')
                    let quantity = Number(item.querySelector('.product__mini-cart-quantity').textContent.replace(/\D/g, ''))
                    let price = Number(item.querySelector('.product__mini-cart-number').textContent.replace(/\D/g, ''))
                    item.remove()
                    
                    for (let i = 0; i < _this.products.length; i++) {
                        if (Number(item.getAttribute('data-id')) === _this.products[i].productID) {
                            _this.products.splice(i, 1)
                            _this.cart['products'] = _this.products
                            _this.setConfig('cart', _this.cart)
                            _this.showEmptyText()
                        }
                    }
                    _this.subTotal -= quantity * price
                    productMiniCartSubtotalNumber.innerText = '£' + _this.subTotal
                    _this.showEmptyText()
                }
            })
        },

        loadSubtotal() {
            for (let i of this.products) {
                for (let j of products) {
                    if (i.productID === j.id) {
                        this.subTotal += i.quantity * j.price
                    }
                }
            }
            productMiniCartSubtotalNumber.innerText = '£' + this.subTotal
        },

        showEmptyText() {
            let productMiniCartItem = $$('.product__mini-cart-item')
            let productMiniCartEmptyMsg = $('.product__mini-cart-empty-msg')
            let productMiniCartSubtotal = $('.product__mini-cart-subtotal')
            let productMiniCartBtns = $('.product__mini-cart-btns')

            if (productMiniCartItem.length === 0) {
                this.subTotal = 0
                productMiniCartEmptyMsg.classList.remove('hide')
                productMiniCartSubtotal.classList.add('hide')
                productMiniCartBtns.classList.add('hide')
            } else {
                productMiniCartEmptyMsg.classList.add('hide')
                productMiniCartSubtotal.classList.remove('hide')
                productMiniCartBtns.classList.remove('hide')
            }
        },

        start() {
            this.loadConfig()
            this.loadSubtotal()
            this.renderMiniCart()
            this.handleEvents()
        }
    }
}