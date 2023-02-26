// Lấy ra element của button
const btn = document.querySelector('.shopee-button-solid');

// Thêm sự kiện click vào button
btn.addEventListener('click', () => {


  var products = [];

  // Lặp qua tất cả các phần tử có class "product"
    $('.product_id').each(function() {
      // Lấy giá trị của các phần tử "price", "quantity" và "total"
      var id = $(this).text();
      var price = $('.product_price_' + id).text();
      var quantity = $('.product_quantity_' +id).text();
      var total = $('.product_total_' +id).text();

      // Tạo một object mới chứa giá trị vừa lấy
      var product = {
        idProduct: id,
        price: price,
        quantity: quantity
      };

      // Thêm object vào mảng
      products.push(product);
    });

  // Đã có được mảng các object chứa giá trị từ HTML, có thể gửi lên server
    var jsonData = JSON.stringify(products);
    console.log(jsonData);

  // Gửi yêu cầu POST đến endpoint "/payment" để xử lý thanh toán
  fetch('/payment', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
  })
  .then(response => {
    console.log(jsonData)
    $('#check-buy-pro').append(`
    		<div class="shopee-popup shopee-modal__transition-enter-done">
    			<div class="shopee-popup__overlay"></div><div class="shopee-popup__container"><div class="shopee-alert-popup card"><div class="shopee-alert-popup__message">Bạn đã đặt hàng thành công.<div class="shopee-alert-popup__message-list"></div></div><div class="shopee-alert-popup__button-horizontal-layout"><button class="shopee-button-solid shopee-button-solid--primary" onclick="clickOkBuyNoPro()">OK</button></div></div></div>
      		</div>
    		`)
  })
  .catch(error => {
    // Xử lý lỗi nếu có
  });
});
