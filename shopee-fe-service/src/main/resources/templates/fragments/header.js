async function getCart() {
    try {
        let cart = []
        let response = await fetch("http://localhost:8080/api/caller?url=http://localhost:8000/api/v1/carts");
        cart = await response.json();
        return cart;
    } catch (error) {
        return [];
    }
}

function logout() {
    window.location.href = "/buyer/logout"
}

function seeInfo() {
    window.location.href = "/user/profile"
}

async function getCartt() {
    try {
        let cart = []
        let response = await fetch("http://localhost:8080/api/caller?url=http://localhost:8000/api/v1/carts");
        cart = await response.json();
        return cart;
    } catch (error) {
        return [];
    }
}

let a = [];
getCart().then(rs => {
    let b = rs;
    a = b.map(i => i.carts);
    a = a.flat();
    $('.shopee-cart-number-badge').text(a.length)

})
$(document).ready(function () {
    let totalPro = 0
    $("#btn-redirect-cart").mouseenter(function () {
        let cartItems = [];
        getCart().then(rs => {

            let cartItemsByShop = rs;
            cartItems = cartItemsByShop.map(i => i.carts);
            cartItems = cartItems.flat();
            $('.shopee-cart-number-badge').text(cartItems.length)
            $("#popover-dialect-cart-detail").empty();
            $("#popover-dialect-cart-detail").append(
                `
						<div aria-describedby="cart_drawer_target_id" role="tooltip" aria-hidden="false"
								class="stardust-popover__popover stardust-popover__popover--show stardust-popover__popover--border cart-drawer__popover"
								style="top: 46px; right: 0px; transform-origin: 381.5px top;">
								<div class="stardust-popover__arrow"
									style="top: 1px; left: 381.5px; transform: translate(-7px, -100%); border-bottom: 10px solid rgba(0, 0, 0, 0.09); border-left: 0px solid transparent; border-right: 0px solid transparent;">
									<div class="stardust-popover__arrow--inner"
										style="border-bottom: 10px solid rgb(255, 255, 255); border-left: 14px solid transparent; border-right: 14px solid transparent; bottom: -10px;">
									</div>
								</div>
								${cartItems.length === 0 ? `
									<div class="_1EQVMQ">
										<div class="HLWGuL">
											<div class="dib9cf"></div>
											<div class="JphfXQ">Chưa có sản phẩm</div>
										</div>
									</div>
								` : `
									<div class="_1EQVMQ">
										<div>
											<div class="jJe2sa v-center">Sản phẩm mới thêm</div>
											${cartItems.map(item => `
												<a class="XLsvO5" href="/detail-product?k=${item.product.slug}">
													<div class="mO5Arw"
														style="background-image: url(&quot;${item.product.imageProduct.pathImage01}&quot;);">
													</div>
													<div class="CmkbMQ">
														<div class="v-center">
															<div class="HaAgiV" style="color: black;">${item.product.name}</div>
															<div class="CvhdZ5"></div>
															<div class="-zdq4e v-center">
																<div class="-TThIm">₫${item.product.price}</div>
															</div>
														</div>
													</div>
												</a>
											`)}
											<div class="_4rKyUd">
												<div class="navbar__spacer"></div><a
													class="btn btn-solid-primary btn--s btn--inline btn-solid-primary--link gMJMRY" href="/cart">Xem Giỏ
													hàng</a>
											</div>
										</div>
									</div>
								`}
								
							</div>
					`
            )
        })

    })

    $("#popover-dialect-cart-detail").mouseleave(function () {
        $("#popover-dialect-cart-detail").empty();
    })

    $(".navbar__link.navbar__link--tappable.navbar__link--hoverable.navbar__link--account").mouseenter(function () {
        $('#stardust-popover1').append(` 
				<div aria-describedby="stardust-popover28" role="tooltip" aria-hidden="false" id="show" class="stardust-popover__popover stardust-popover__popover--show stardust-popover__popover--border stardust-popover__popover--hide" style="top: 22px; right: 0px; transform-origin: 98.1406px top;">
				<div class="stardust-popover__arrow" style="top: 1px; left: 98.1406px; transform: translate(-7px, -100%); border-bottom: 10px solid rgba(0, 0, 0, 0.09); border-left: 0px solid transparent; border-right: 0px solid transparent;"><div class="stardust-popover__arrow--inner" style="border-bottom: 10px solid rgb(255, 255, 255); border-left: 14px solid transparent; border-right: 14px solid transparent; bottom: -10px;"></div></div>
				<div class="navbar-account-drawer__content">
				<a class="navbar-account-drawer__button navbar-user-link" href="/user/account/profile"><span>Tài khoản của tôi</span></a>
				<a class="navbar-account-drawer__button navbar-user-link" href="/user/order">
				<span>Đơn Mua</span></a>
				<button class="navbar-account-drawer__button navbar-account-drawer__button--complement navbar-user-link reset-button-style" tabindex="0" onclick="logout()"><span>Đăng xuất</span></button></div></div>
		`)
    })
    $(".navbar__link.navbar__link--tappable.navbar__link--hoverable.navbar__link--account").mouseleave(function () {
        $('#show').remove()
    })
})

