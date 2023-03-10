class HeroUI extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="hero__slider">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="./assets/img/hero-1.jpg.webp">
                            <div class="grid wide">
                                <div class="row">
                                    <div class="col c-7 l-7 m-7">
                                        <div class="hero__text">
                                            <h6>Summer Collection</h6>
                                            <h2>Summer - Fall Collections 2023</h2>
                                            <p>
                                                A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                                commitment to exceptional quality.
                                            </p>
                                            <button href="#shop" class="primary-btn">
                                                SHOP NOW
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </button>
                                            <div class="hero__social">
                                                <a href="https://www.facebook.com/byunbaeknaa/">
                                                    <i class="fa-brands fa-facebook-f"></i>
                                                </a>
                                                <a href="https://www.facebook.com/namdh03">
                                                    <i class="fa-brands fa-twitter"></i>
                                                </a>
                                                <a href="https://www.pinterest.com/bbaeknaa/">
                                                    <i class="fa-brands fa-pinterest"></i>
                                                </a>
                                                <a href="https://www.instagram.com/ha._.chang/">
                                                    <i class="fa-brands fa-instagram"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="swiper-slide">
                            <img src="./assets/img/hero-2.jpg.webp">
                            <div class="grid wide">
                                <div class="row">
                                    <div class="col c-7 l-7 m-7">
                                        <div class="hero__text">
                                            <h6>Winter Collection</h6>
                                            <h2>Winter - Spring Collections 2023</h2>
                                            <p>
                                                A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                                commitment to exceptional quality.
                                            </p>
                                            <button href="#shop" class="primary-btn">
                                                SHOP NOW
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </button>
                                            <div class="hero__social">
                                                <a href="https://www.facebook.com/byunbaeknaa/">
                                                    <i class="fa-brands fa-facebook-f"></i>
                                                </a>
                                                <a href="https://www.facebook.com/namdh03">
                                                    <i class="fa-brands fa-twitter"></i>
                                                </a>
                                                <a href="https://www.pinterest.com/bbaeknaa/">
                                                    <i class="fa-brands fa-pinterest"></i>
                                                </a>
                                                <a href="https://www.instagram.com/ha._.chang/">
                                                    <i class="fa-brands fa-instagram"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
            
                    <!-- If we need navigation buttons -->
                    <!-- <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div> -->
                </div>
            </div>
        `
    }
}

customElements.define('hero-ui', HeroUI)