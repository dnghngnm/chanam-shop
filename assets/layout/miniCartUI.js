class MiniCartUI extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="product__mini-cart">
                <div class="product__mini-cart-wrapper close">
                    <div class="product__mini-cart-title">
                        <h1>My Cart</h1>
                        <span class="product__mini-cart-close">
                            <i class="fa-solid fa-xmark"></i>
                        </span>                     
                    </div>
            
                    <div class="product__mini-cart-items"></div>
                    
                    <div class="product__mini-cart-empty-msg hide">No products in the cart.</div>
            
                    <div class="product__mini-cart-subtotal">
                        <div class="product__mini-cart-subtotal-text">Subtotal:</div>
                        <div class="product__mini-cart-subtotal-number">£32.00</div>
                    </div>
            
                    <div class="product__mini-cart-btns">
                        <a href="./cart.html" class="product__mini-cart-btn product__mini-cart--view-cart-btn">View cart</a>
                        <a href="./checkout.html" class="product__mini-cart-btn product__mini-cart--checkout-btn">Checkout</a>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('mini-cart-ui', MiniCartUI)