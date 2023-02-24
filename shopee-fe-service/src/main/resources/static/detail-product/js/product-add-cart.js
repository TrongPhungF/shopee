async function callAPIAddCart(data, accessToken) {

    $.ajax({
        type: "POST",
        url: "http://localhost:8000/api/v1/carts",
        headers: {
            "Authorization": accessToken,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            let number = parseInt($('.shopee-cart-number-badge').text())
            //		    	$('.shopee-cart-number-badge').empty()
            $('.shopee-cart-number-badge').text(number + 1)
        },
        error: function (error) {

        }
    })
    return data;

}

function buyNow() {
    let accessToken = $('#access-token').val()
    if (accessToken == 'notAccessToken') {
        window.location.href = "/buyer"
        return;
    }
    let productId = $("#inp-product-id").val();
    let amount = $("#amount").val();
    const data = {
        amount,
        product: {
            id: productId
        }
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:8000/api/v1/carts",
        headers: {
            "Authorization": accessToken,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            window.location.href = "/cart"
        },
        error: function (error) {

        }
    })
}

function addCartHandler() {
    let accessToken = $('#access-token').val()
    if (accessToken == 'notAccessToken') {
        window.location.href = "/buyer"
        return
    }
    let productId = $("#inp-product-id").val();
    let amount = $("#amount").val();
    const data = {
        amount,
        product: {
            id: productId
        }
    }
    $("#btn-add-cart").attr("disabled", "disabled")
    callAPIAddCart(data, accessToken).then(() => {

        $("#div-toaster").append(`
			<div class="toast"><div class="toast__container">
				<div class="toast__icon"><div class="action-toast__icon"><svg enable-background="new 0 0 12 12" viewBox="0 0 12 12" x="0" y="0" class="shopee-svg-icon icon-tick-bold"><g><path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path></g></svg></div></div><div class="toast__text">Sản phẩm đã được thêm vào Giỏ hàng</div></div>
			</div>
		`);
        setTimeout(() => {
            $("#amount").val(1);
            $("#btn-add-cart").removeAttr("disabled")
            $("#div-toaster").empty();
        }, 2000)
    });

}

$(document).ready(function () {
    $("#btn-add-cart").on("click", addCartHandler)
    $("#btn-buy-now").on("click", buyNow)
})