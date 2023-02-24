// Lấy ra element của button
const btn = document.querySelector('.shopee-button-solid');

// Thêm sự kiện click vào button
btn.addEventListener('click', () => {

  const inputElements = document.querySelectorAll('.EcPhjV');

  // Tạo một object để lưu trữ các giá trị id và value của các thẻ input
  const requestBody = {};

  // Lặp qua danh sách các thẻ input để lấy giá trị id và value của mỗi thẻ
  inputElements.forEach((input) => {
    const id = input.getAttribute('id');
    const value = input.value;

    // Thêm giá trị id và value vào object body của request
    requestBody[id] = value;
  });

  // Gửi yêu cầu POST đến endpoint "/payment" để xử lý thanh toán
  fetch('/payment', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
  })
  .then(response => {
    console.log(JSON.stringify(requestBody))
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
