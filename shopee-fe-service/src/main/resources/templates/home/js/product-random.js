                                                            
//let product = [];
function callAjaxProductRandom(){
	$.ajax({
		 type: "GET",
		 url: "http://localhost:8000/api/v1/home/random",
		 success: function(data) {
	//		 product = data;
			 layoutProductRandom(data)
		 },
		 error: function() {
			 
		 }
		 })
}

const layoutProductRandom =(data)=>{
	data.forEach((product,index) => {
		 $('._6wTCb6').append(`
					     <div class="_4beVMw"><a
                        data-sqe="link"
                        href='/detail-product?k=${product.slug}'>
                        <div class="yZLQT4">
                              <div
                                    class="uA1waf _4QQ4Ir">
                                    <div
                                          style="pointer-events: none;">
                                          <div
                                                class="n-CE6j iR+sxV">
                                                <img width="invalid-value"
                                                      height="invalid-value"
                                                      style="object-fit: contain"
                                                      src="">
                                                <div
                                                      class="X5j9y1">
                                                      <div class="VGupoO wuWR8e"
                                                            style="color: rgb(242, 82, 32);">
                                                            <span
                                                                  class="_6UEPfo">Yêu
                                                                  thích</span>
                                                      </div>
                                                </div>
                                                <div
                                                      class="vmaKHl">
                                                      <div
                                                            class="C2-vN- dCT7bq Od5TJM">
                                                            <span
                                                                  class="percent">${product.salePercent}%</span><span
                                                                  class="mXP-A3">giảm</span>
                                                      </div>
                                                </div>
                                                <div
                                                      class="+QxcSK">
                                                      <svg viewBox="0 0 20 20"
                                                            enable-background="new 0 0 20 20"
                                                            class="shopee-svg-icon fJ4FuK icon-video-play2">
                                                            <path d="m10 20c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z"
                                                                  clip-rule="evenodd"
                                                                  fill-opacity=".5"
                                                                  fill-rule="evenodd">
                                                            </path>
                                                            <path d="m7 6.1263c0-0.55798 0.4141-0.78618 0.91986-0.50718l6.6976 3.8599c0.506 0.27899 0.506 0.73534 0 1.0143l-6.6976 3.8876c-0.50603 0.279-0.91986 0.0508-0.91986-0.5072v-7.7474z"
                                                                  fill="#fff">
                                                            </path>
                                                      </svg>
                                                </div>
                                                <div
                                                      class="PhrpPs">
                                                      <div
                                                            class="customized-overlay-image">
                                                            <img src="${product.srcImg}"
                                                                  width=""
                                                                  height="">
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div
                                          class="W3bJfG">
                                          <div
                                                class="qUEEG4">
                                                <div
                                                      class="hPc1Pf">
                                                      <div class="vc0PvV AxYdVM">
                                                           ${product.name}
                                                      </div>
                                                </div>
                                          </div>
                                          <div
                                                class="imdVqB _2fuFWg">
                                                <div
                                                      class="WSVId4 fepoRf">
                                                      <span
                                                            
                                                            class="j0vBz2${product.id}"></span>
                                                </div>
                                                <div
                                                      class="upl8wJ _82UoSS">
                                                      SL:${product.quanitity}                              
                        
                                                </div>
                                          </div>
                                    </div>
                                    <div
                                          class="shopee-item-card__hover-footer _1X2yZq">
                                          Tìm
                                          sản
                                          phẩm
                                          tương
                                          tự
                                    </div>
                              </div>
                        </div>
                  </a></div>
		
             `);
		 	$('.j0vBz2'+product.id).text(product.price.toLocaleString('en-US', {style : 'currency', currency : 'VND'}))

	 })
	  $('._6wTCb6').append(`
	 <div class="qqV7Rl"><a
            class="btn btn-light btn--m btn--inline btn-light--link FA8aij"
            href="https://shopee.vn/daily_discover?pageNumber=2">Xem
            thêm</a></div>
		 `);
}

$(document).ready(function() {
	callAjaxProductRandom()
});
                                                            
                                                            