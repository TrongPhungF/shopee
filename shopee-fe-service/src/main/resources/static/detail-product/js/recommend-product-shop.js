const btnCarouselNext = document.querySelector("#btn-carousel-next");
const btnCarouselPrev = document.querySelector("#btn-carousel-prev");

let translateProduct = 0;
const handleCarouseProduct = () => {
    let total = 15;
    let indexMax = total * -15;
    btnCarouselNext.addEventListener('click', () => {

        translateProduct = translateProduct - 15;
        document.querySelector("#ul-item-list").style.transform = "translate(" + translateProduct + "%, 0px)";

        if (translateProduct - 90 <= indexMax) {
            $("#btn-carousel-next").css('visibility', 'hidden')
        } else {
            $("#btn-carousel-next").css('visibility', 'visible')
        }
        if (translateProduct - 90 >= -90) {
            $("#btn-carousel-prev").css('visibility', 'hidden')
        } else {
            $("#btn-carousel-prev").css('visibility', 'visible')
        }
    });

    btnCarouselPrev.addEventListener('click', () => {
        translateProduct = translateProduct + 15
        $("#ul-item-list").css("transform", "translate(" + translateProduct + "%, 0px)");
        if (translateProduct - 90 <= indexMax) {
            $("#btn-carousel-next").css('visibility', 'hidden')
        } else {
            $("#btn-carousel-next").css('visibility', 'visible')
        }
        if (translateProduct - 90 >= -90) {
            $("#btn-carousel-prev").css('visibility', 'hidden')
        } else {
            $("#btn-carousel-prev").css('visibility', 'visible')
        }
    });
}
handleCarouseProduct();

const loadProductOfShop = () => {
    let listItem = '';
    const URL = `http://localhost:8000/api/v1/products/inShop/${$('#id_shop').val()}`;
    $.get(URL, function (data) {
        for (const item of data) {
            listItem +=
                `<li class="image-carousel__item"
       style="padding: 0px; width: 16.6667%;">
       <div class="product-recommend-items__item-wrapper">
           <a data-sqe="link"
               href="/detail-product?k=${item.slug}" target="_blank">
               <div class="_3tGY4K">
                   <div class="_27gjnh">
                       <div style="pointer-events: none;">
                           <div class="_1OPdfl _34Bbgp">
                               <img width="190"
                                   height="262"
                                   alt="Áo thun form rộng tay lỡ nam nữ oversize unisex chất cotton siêu mịn"
                                   class="_3DRMhT _2PWsS4"
                                   style="object-fit: contain"
                                   src="${item.srcImg}">
                               <div class="_23y7qS">
                                   <div
                                       class="VPfNgf _3Vf-cm pKWQzh">
                                       <span
                                           class="percent">${item.salePercent}%</span><span
                                           class="_1dKOej">giảm</span>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="weFbbG">
                           <div class="_3Xp1Jg">
                               <div class="_17eONp">
                                   <div
                                       class="_3KpaoK _2UGSVV">
                                       ${item.name}
                                   </div>
                               </div>
                           </div>
                           <div class="vMfGQW _2NzYpj">
                               <div class="_3NkBUm rMbdeO">
                                   <span
                                       class="_181cfk">₫</span><span
                                       class="_2igTXp">${formatCurrency(item.price)}</span>
                               </div>
                               <div
                                   class="_2J8hZZ _2For-u">
                                   SL: ${item.quanitity}</div>
                           </div>
                       </div>
                   </div>
               </div>
           </a>
       </div>
   </li>`
        }
        document.querySelector("#ul-item-list").innerHTML = listItem;
    });
}

const loadProductRecommendLike = () => {

    let listItem = '';
    const URL = `http://localhost:8000/api/v1/products/sameCategory?ids=${$('#id_category').val()}`;
    $.get(URL, function (data) {
        for (const item of data) {
            listItem +=
                `<div class="col-xs-2">
            <div class="_2TTYjw"><a data-sqe="link"
                    href="/detail-product?k=${item.slug}" target="_blank"
                    <div class="_3tGY4K">
                        <div class="_27gjnh">
                            <div style="pointer-events: none;">
                                <div class="_1OPdfl _34Bbgp"><img
                                        width="invalid-value"
                                        height="invalid-value"
                                        alt="${item.name}"
                                        class="_3DRMhT _2PWsS4"
                                        style="object-fit: contain"
                                        src="${item.srcImg}">
                                    <div class="_23y7qS">
                                        <div class="VPfNgf _3Vf-cm pKWQzh"><span
                                                class="percent">${item.salePercent}%</span><span
                                                class="_1dKOej">giảm</span>
                                        </div>
                                    </div>
                                    <div class="_3AoG8W">
                                        <div class="customized-overlay-image">
                                            <img src="${item.srcImg}"
                                                width="" height="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="weFbbG">
                                <div class="_3Xp1Jg">
                                    <div class="_17eONp">
                                        <div class="_3KpaoK _2UGSVV">
                                        ${item.name}
                                        </div>
                                    </div>
                                    <div class="_34HOLt">
                                        <div class="_1PWkR nt-medium nt-foot _3nkRL"
                                            style="color: rgb(246, 145, 19);">
                                            <svg class="_2DRZW _2xFcL"
                                                viewBox="-0.5 -0.5 4 16">
                                                <path
                                                    d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                                                    stroke-width="1"
                                                    transform=""
                                                    stroke="currentColor"
                                                    fill="#f69113"></path>
                                            </svg>
                                            <div class="_1FKkT _3Ao0A"
                                                style="color: white; background-color: rgb(246, 145, 19);">
                                                ${item.salePercent}% Giảm</div><svg
                                                class="_2DRZW _2xFcL"
                                                viewBox="-0.5 -0.5 4 16">
                                                <path
                                                    d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3"
                                                    stroke-width="1"
                                                    transform="rotate(180) translate(-3 -15)"
                                                    stroke="currentColor"
                                                    fill="#f69113"></path>
                                            </svg>
                                        </div>
                                        <div class="_3rLTln"
                                            style="color: rgb(255, 0, 32);">
                                            #ShopDacBiet
                                        </div>
                                    </div>
                                </div>
                                <div class="vMfGQW _2NzYpj">
                                    <div class="_3NkBUm rMbdeO"><span
                                            class="_181cfk">₫</span><span
                                            class="_2igTXp">${formatCurrency(item.price)}</span></div>
                                    <div class="_2J8hZZ _2For-u">SL: ${item.quanitity}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a></div>
        </div>`;
        }
        document.querySelector("#list-product-rec-like").innerHTML = listItem;
    });
}

$(document).ready(function () {
    loadProductOfShop();
    loadProductRecommendLike();
});

const formatCurrency = (money) => {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}