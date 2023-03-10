class ProductUI extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="product__quick-view hide">
                <div class="product__qv-overlay"></div>
                <div class="product__qv-inner">
                    <div class="product__qv-inner-overlay"></div>
                    <button class="product__qv-inner-close-btn">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
            
                    <div class="product__qv-inner-img">
                        <img src="" alt="">
                        <span class="product__qv-cnt-img"></span>
                    </div>
            
                    <div class="product__qv-inner-control-btn">
                        <button class="product__qv-inner-btn product__qv-inner-btn-prev">
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
            
                        <button class="product__qv-inner-btn product__qv-inner-btn-next">
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div class="product__qv-wrapper">
                    <button class="product__qv-close-btn">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
            
                    <div class="grid wide">
                        <div class="row">
                            <div class="col l-1 m-2 c-3">
                                <ul class="product__qv-tablist"></ul>
                            </div>
            
                            <div class="col l-6 m-10 c-9">
                                <div class="product__qv-center">
                                    <div class="product__qv-control">
                                        <button class="product__qv-control-btn product__qv-control-btn--left">
                                            <i class="fa-solid fa-chevron-left"></i>
                                        </button>
            
                                        <button class="product__qv-control-btn product__qv-control-btn--right">
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </button>
                                    </div>
            
                                    <div class="product__qv-main">
                                        <div class="product__qv-main-img">
                                            <img src="" alt="">
                                        </div>
            
                                        <button class="product__qv-show-more-btn">
                                            <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
            
                            <div class="col l-5 m-12 c-12">
                                <div class="product__qv-info">
                                    <div class="product__qv-title"></div>
                                    <div class="product__qv-price"></div>
                                    <div class="product__qv-desc"></div>
            
                                    <form action="" method="" class="form" id="qv-form">
                                        <div class="form-group product__qv-select-form">
                                            <label for="size" class="form-label">Size</label>
                                            <select name="size" id="size" rules="required" class="form-control">
                                                <option value="" disabled selected>Choose an option</option>
                                                <option value="s">Size S</option>
                                                <option value="m">Size M</option>
                                                <option value="l">Size L</option>
                                                <option value="xl">Size XL</option>
                                            </select>
                                            <span class="form-message form-message--size"></span>
                                        </div>
            
                                        <div class="form-group product__qv-select-form">
                                            <label for="color" class="form-label">Color</label>
                                            <select name="color" id="color" rules="required" class="form-control">
                                                <option value="" disabled selected>Choose an option</option>
                                                <option value="red">Red</option>
                                                <option value="blue">Blue</option>
                                                <option value="white">White</option>
                                                <option value="grey">Grey</option>
                                            </select>
                                            <span class="form-message form-message--color"></span>
                                        </div>
            
                                        <div class="form-group">
                                            <div class="product__qv-quantity">
                                                <div class="product__qv-quantity-btn product__qv-quantity-minus-btn">
                                                    <i class="fa-solid fa-minus"></i>
                                                </div>
                                                <input id="quantity" name="quantity" rules="required|number|quantity:1" type="number"
                                                    step="1" min="0" max="99999" value="1" inputmode="numeric" autocomplete="off"
                                                    class="form-control">
                                                <div class="product__qv-quantity-btn product__qv-quantity-plus-btn">
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
            
                                            <div class="product__qv-add-to-wishlist">
                                                <i class="fa-regular fa-heart"></i>
                                            </div>
                                            <span class="form-message form-message--quantity form-message--modifier"></span>
                                        </div>
            
                                        <button class="product__qv-add-to-cart-btn" type="submit">
                                            ADD TO CART
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid wide">
                <div class="row">
                    <div class="col l-12 m-12 c-12">
                        <div class="product__title">
                            <h3>Our Products</h3>
                        </div>
                    </div>
            
                    <div class="col l-8 l-o-2 m-12 c-12">
                        <div class="product__search-container">
                            <input type="search" id="product__search-input" placeholder="Search..." />
                            <button class="product__search-btn">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
            
                    <div class="col l-8 l-o-2 m-12 c-12">
                        <div class="product__category">
                            <button class="product__category-btn active">All Products</button>
                        </div>
                    </div>
            
                    <div class="col l-12 m-12 c-12">
                        <div class="row product__container"></div>
                    </div>
            
                    <div class="col l-12 m-12 c-12">
                        <div class="product__empty-list">
                            <div class="product__empty-text hide">Oops... product not found</div>
                        </div>
                    </div>
            
                    <div class="col l-12 m-12 c-12">
                        <div class="product__view-more">
                            <button class="product__view-more-btn">View more</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('product-ui', ProductUI)