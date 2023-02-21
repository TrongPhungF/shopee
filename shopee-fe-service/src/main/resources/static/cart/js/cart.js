function clickAll(){
	event.preventDefault();
     let checkbox = $('.stardust-checkbox.total')
 	 let checkBoxAll = $('._1zPSKE .stardust-checkbox.total').attr("class").includes('stardust-checkbox--checked')
       checkbox.each(function() {
    	  if(checkBoxAll){
    		  $(this).removeClass("stardust-checkbox--checked");
    	
    		 
    	  }
    	  else{    		  
    		  $(this).addClass("stardust-checkbox--checked");
    		 
    	  }
        });
      
     let shops = $('.aCSbhb')
     let totalPrice= 0
     shops.each(function() {
	   	  if(checkBoxAll){
	   		 $('._10A7e2 span').empty()
		   		$('._10A7e2 span').text(0)
	   	  }
	   	  else{
	   		  $(this).find('._216OLk .dn3H7Y span span').each(function(){	   			  
	   			totalPrice += parseInt($(this).attr("price"));
	   		  })  
	   		    		  
	   		 $('._10A7e2 span').empty()
	   	     $('._10A7e2 span').text($('#total-product').text()) 
	   	  }
     });
     
     $('.nBHs8H').empty()
     $('.nBHs8H').text(totalPrice.toLocaleString('en-US', {style : 'currency', currency : 'VND'}))
     
}

function clickAllForShop(id){
	event.preventDefault();
	
     let checkbox = $('.aCSbhb.'+id+' .stardust-checkbox.total')
     let totalSelect = parseInt($('#total-select').val())
 	 let checkBoxEachShop = $('.aCSbhb.'+id+' .stardust-checkbox.total').attr("class").includes('stardust-checkbox--checked')
 	 
 	 let getPriceCheckBox = $('.aCSbhb.'+id+' ._2qN5oG .dn3H7Y')
 	 
       checkbox.each(function() {     
    	   if(checkBoxEachShop){
     		  $(this).removeClass("stardust-checkbox--checked");
     		  $('._1zPSKE .stardust-checkbox.total').removeClass("stardust-checkbox--checked")
     		  $('._1E2dyV .stardust-checkbox.total').removeClass("stardust-checkbox--checked")
     		  
     	  }
     	  else{    		  
     		  $(this).addClass("stardust-checkbox--checked");
     		 
     	  }

        });
           
     let priceTotal = $('.nBHs8H').text().slice(1).replaceAll(",","")
     let totalPriceSelect = 0
     let totalPriceNoSelect = 0
     let totalPro = 0
     let totalShop = 0
     getPriceCheckBox.each(function() {     
	  	  if(checkBoxEachShop){
	  		$(this).find('span span').each(function(){	   			  
	  			totalPriceNoSelect += parseInt($(this).attr('price'))
	  			totalPro++
	   		  })   
	   	  }
	   	  else{    		  
   			$(this).find('span span').each(function(){	   			  
   		   		totalPriceSelect += parseInt($(this).attr('price'))
   		   		totalPro++
	   		  })         
	   	  }
	  	  
      });
     
     $('.nBHs8H').empty()
     let getNumProSelect = parseInt($('._10A7e2 span').text())
      $('._10A7e2 span').empty()
     if(totalPriceSelect!='0'){ 
         $('.nBHs8H').text((parseInt(priceTotal)+totalPriceSelect).toLocaleString('en-US', {style : 'currency', currency : 'VND'}))     
		 $('._10A7e2 span').text(getNumProSelect+parseInt(totalPro))
		 $('#total-select').val(totalSelect+totalPro+1)
     }else{
		  $('#total-select').val(totalSelect-totalPro-1)
     }
     
     if(totalPriceNoSelect!='0'){
         $('.nBHs8H').text((parseInt(priceTotal)-totalPriceNoSelect).toLocaleString('en-US', {style : 'currency', currency : 'VND'}))
		 $('._10A7e2 span').text(getNumProSelect-parseInt(totalPro))
     }

     
     if(($('.stardust-checkbox.total').length-2) == parseInt($('#total-select').val())){
      	  $('._1zPSKE .stardust-checkbox.total').addClass("stardust-checkbox--checked")
   		  $('._1E2dyV .stardust-checkbox.total').addClass("stardust-checkbox--checked")
        }

}



function clickItem(id_item,id_shop){
	event.preventDefault();
		let priceTotal = $('.nBHs8H').text().slice(1).replaceAll(",","")
		let price = parseInt($('._216OLk.'+id_item+' .dn3H7Y span span').attr("price"))	 
		let checkBoxItem = $('._216OLk.'+id_item+' .stardust-checkbox.total').attr("class").includes('stardust-checkbox--checked')
		let totalPro = parseInt($('._10A7e2 span').text())
	    $('._10A7e2 span').empty();
		if(checkBoxItem){
		 $('._216OLk.'+id_item+' .stardust-checkbox.total').removeClass("stardust-checkbox--checked");  
         $('.nBHs8H').text((parseInt(priceTotal)-price).toLocaleString('en-US', {style : 'currency', currency : 'VND'}))
         $('._10A7e2 span').text(totalPro-1)
	  }
	  else{    
		  $('._216OLk.'+id_item+' .stardust-checkbox.total').addClass("stardust-checkbox--checked");
	      $('.nBHs8H').text((parseInt(priceTotal)+price).toLocaleString('en-US', {style : 'currency', currency : 'VND'}))
	         $('._10A7e2 span').text(totalPro+1)
	  } 
		
		let totalCheckbox = $('.aCSbhb.'+id_shop+' ._2qN5oG .stardust-checkbox.total')
		let totalSelect = 0
		totalCheckbox.each(function() {   
		  	  if($(this).attr('class').includes('stardust-checkbox--checked')){
			  		totalSelect+=1
		   	  }
		   	  else{    		  
		   		  totalSelect-=1
		   	  }		  	  
	      });
		if($('.aCSbhb.'+id_shop+' .stardust-checkbox.total').length-1==totalSelect){
			$('.aCSbhb.'+id_shop+' ._3ApheT .stardust-checkbox.total').addClass("stardust-checkbox--checked")
			
		}else{
			$('.aCSbhb.'+id_shop+' ._3ApheT .stardust-checkbox.total').removeClass("stardust-checkbox--checked")		
		}

		let totalCheckboxShop = $('.aCSbhb ._3ApheT .stardust-checkbox.total')
		let totalAllCheckBox = 0
		totalCheckboxShop.each(function() {   
		  	  if($(this).attr('class').includes('stardust-checkbox--checked')){
		  		totalAllCheckBox+=1
		   	  }
		   	  else{    		  
		   		totalAllCheckBox-=1
		   	  }		  	  
	      });
		if(totalCheckboxShop.length == totalAllCheckBox){
	      	  $('._1zPSKE .stardust-checkbox.total').addClass("stardust-checkbox--checked")
	   		  $('._1E2dyV .stardust-checkbox.total').addClass("stardust-checkbox--checked")
	     }else{
	    	 $('._1zPSKE .stardust-checkbox.total').removeClass("stardust-checkbox--checked")
	   		  $('._1E2dyV .stardust-checkbox.total').removeClass("stardust-checkbox--checked")
	     }
}

function clickRaise(id_Item,quanitity,priceSale,priceNormal,percentSale,id_shop){
	let amount = $('#amount'+id_Item).val();
	let raise = parseInt(amount)+1
	
	
	if(raise>=quanitity){
		raise = quanitity
		$('.EcPhjV.raise'+id_Item).addClass('_2wRvC2');
	}
	else{
		$('.EcPhjV.reduce'+id_Item).removeClass('_2wRvC2');
		$('.EcPhjV.raise'+id_Item).removeClass('_2wRvC2');
	}
	
	let price = parseFloat(priceNormal)*parseInt(raise);
	// check sale
	if(parseInt(percentSale)>0){
		price= parseFloat(priceSale)*parseInt(raise)
	}
	
	
	//change price total pro
	let priceTotalCurrent =  parseInt($('.nBHs8H').text().slice(1).replaceAll(",",""))
	let checkbox = $('#price'+id_Item).parent().parent().parent().find('.uUhc_B .stardust-checkbox.total').attr("class").includes('stardust-checkbox--checked')
	if(checkbox){
		priceTotalCurrent= priceTotalCurrent-parseInt($('#price'+id_Item).attr('price'))+price
		$('.nBHs8H').text(priceTotalCurrent.toLocaleString('en-US', {style : 'currency', currency : 'VND'}))
	}
	
	updateAjax(id_shop,raise)
	$('#price'+id_Item).parent().parent().find('em').empty()
	$('#price'+id_Item).empty()
	$('#amount'+id_Item).empty()
	$('#amount'+id_Item).val(raise)
	$('#price'+id_Item).attr('price',price)
	$('#price'+id_Item).text(price.toLocaleString('en-US', {style : 'currency', currency : 'VND'}))
	
}

function clickReduce(id_Item,quanitity,priceSale,priceNormal,percentSale,id_shop){
	let amount = $('#amount'+id_Item).val();
	let reduce = parseInt(amount)-1
	if(reduce<=1){
		reduce = 1
		$('.EcPhjV.reduce'+id_Item).addClass('_2wRvC2');
	}
	else{
		$('.EcPhjV.raise'+id_Item).removeClass('_2wRvC2');
		$('.EcPhjV.reduce'+id_Item).removeClass('_2wRvC2');
	}
	let price = parseFloat(priceNormal)*parseInt(reduce);
	if(parseInt(percentSale)>0){
		price= parseFloat(priceSale)*parseInt(reduce)
	}
	
	//change price total pro
	let priceTotalCurrent =  parseInt($('.nBHs8H').text().slice(1).replaceAll(",",""))
	let checkbox = $('#price'+id_Item).parent().parent().parent().find('.uUhc_B .stardust-checkbox.total').attr("class").includes('stardust-checkbox--checked')
	if(checkbox){
		priceTotalCurrent= priceTotalCurrent-parseInt($('#price'+id_Item).attr('price'))+price
				$('.nBHs8H').text(priceTotalCurrent.toLocaleString('en-US', {style : 'currency', currency : 'VND'}))
	}
	
	updateAjax(id_shop,reduce)
	$('#price'+id_Item).parent().parent().find('em').empty()
	$('#price'+id_Item).empty()
	$('#amount'+id_Item).empty()
	$('#amount'+id_Item).val(reduce)
	$('#price'+id_Item).attr('price',price)
	$('#price'+id_Item).text(price.toLocaleString('en-US', {style : 'currency', currency : 'VND'}))
	
}

function maxvalue(id_Item,quanitity,priceSale,priceNormal,percentSale,id_shop){
	let amount = $('#amount'+id_Item).val();
	if(amount>=quanitity){
		 $('#amount'+id_Item).val(quanitity);
		 $('.EcPhjV.raise'+id_Item).addClass('_2wRvC2');
		 amount=quanitity
	}
	else{
		$('.EcPhjV.raise'+id_Item).removeClass('_2wRvC2');
	}
		
	if(amount<=1){
		$('#amount'+id_Item).val(1);
		$('.EcPhjV.reduce'+id_Item).addClass('_2wRvC2');
		amount=1
	}
	else{
		$('.EcPhjV.reduce'+id_Item).removeClass('_2wRvC2');
	}
	
	let price = parseFloat(priceNormal)*parseInt(amount);
	if(parseInt(percentSale)>0){
		price= parseFloat(priceSale)*parseInt(amount)
	}
	
	
	//change price total pro
	let priceTotalCurrent =  parseInt($('.nBHs8H').text().slice(1).replaceAll(",",""))
	let checkbox = $('#price'+id_Item).parent().parent().parent().find('.uUhc_B .stardust-checkbox.total').attr("class").includes('stardust-checkbox--checked')
	if(checkbox){
		priceTotalCurrent= priceTotalCurrent-parseInt($('#price'+id_Item).attr('price'))+price
				$('.nBHs8H').text(priceTotalCurrent.toLocaleString('en-US', {style : 'currency', currency : 'VND'}))
	}
	
	updateAjax(id_shop,amount)
	$('#price'+id_Item).parent().parent().find('em').empty()
	$('#price'+id_Item).empty()	
	$('#price'+id_Item).attr('price',price)
	$('#price'+id_Item).text(price.toLocaleString('en-US', {style : 'currency', currency : 'VND'}))
}

function isNumberKey(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function updateAjax(id_cart,amount){
	let accessToken = $('#access-token').val()
	let data = {
		 "id": id_cart,
		 "amount": amount
	}
	 $.ajax({
         type: "PUT",
         url:"http://localhost:8000/api/v1/carts",
         headers: {
 		"Authorization": accessToken,
 		'Content-Type': 'application/json'
 			},
 		data:JSON.stringify(data),
         success: function(data) {
         },
         error: function(error) {
         }
     })
}

function deleteOneItem(id_card,id_shop){
	let list_id = []
	let accessToken = $('#access-token').val()
	list_id.push(id_card)
	
	
	 $.ajax({
         type: "DELETE",
         url:"http://localhost:8000/api/v1/carts?ids="+list_id,
         headers: {
 		"Authorization": accessToken,
 		'Content-Type': 'application/json'
 			},
         success: function(data) {
        	 $('._216OLk.'+id_card).remove()
     		if($('.aCSbhb.'+id_shop+' ._2qN5oG ._216OLk').length<=0){
     			$('.aCSbhb.'+id_shop).remove()
     		}
        	 if($('.aCSbhb').length<=0){
     		$('#container').empty()
     		$('#container').append(` 
     				<div class="_1fP0AH _2tKeYb"><div class="_1g-4gk"></div><div class="h9wsC4">Giỏ hàng của bạn còn trống</div><a class="_35zxc9" href="/"><button class="shopee-button-solid shopee-button-solid--primary"><span class="_3SCpTT">MUA NGAY</span></button></a></div>
     				<div style="display: contents;"><div class="_03zJAw"></div></div>
     		`)
     	}
        	
         },
         error: function(error) {
         }
     })
	
}

function deleteAllItem(){
	let list_id = []
	let accessToken = $('#access-token').val()
	let totalProAllShop = $('._2qN5oG .uUhc_B .stardust-checkbox.total')
	totalProAllShop.each(function(){
		if($(this).attr('class').includes('stardust-checkbox--checked')){
			list_id.push($(this).parent().parent().parent().attr('class').slice(8))
		}
	})
	if(list_id.length==0){
		$('.stardust-toast').removeClass('stardust-toast--hidden')	
		$('.stardust-toast').css('pointer-events:', 'none')	
		setTimeout(() => {
			$('.stardust-toast').addClass('stardust-toast--hidden')	
			$('.stardust-toast').css('pointer-events:', 'all')	
		}, 800);
	}else{
		$('.shopee-modal__transition-enter-done').addClass('shopee-popup')		
		$('.shopee-modal__transition-enter-done').append(`
			<div class="shopee-popup__overlay"></div>
			<div class="shopee-popup__container"><div class="_2TnlBU"><div class="_3RgXWe">Bạn có muốn bỏ ${list_id.length} sản phẩm?</div>
			<div class="EUd_G5">
				<button class="shopee-button-solid shopee-button-solid--primary shopee-button-solid--confirm-popup" onclick="back()">Trở Lại</button>
				<button class="cancel-btn" onclick="callAjaxDeleteAll('${list_id}')">có</button></div>
			</div></div>	
		`)		
	}
}
function back(){
	$('.shopee-modal__transition-enter-done').removeClass('shopee-popup')
	$('.shopee-modal__transition-enter-done').empty()
}
function callAjaxDeleteAll(list){
	list.split(',')
	let accessToken = $('#access-token').val()
	$.ajax({
	    type: "DELETE",
	    url:"http://localhost:8000/api/v1/carts?ids="+list,
	    headers: {
		"Authorization": accessToken,
		'Content-Type': 'application/json'
			},
	    success: function(data) {
	    	location.reload(true)
	    	$('.shopee-modal__transition-enter-done').removeClass('shopee-popup')
	    	$('.shopee-modal__transition-enter-done').empty()
	    	window.location.reload();
	    },
	    error: function(error) {
	    }
	})
}		

function loadProSimilar(){
	let list_id = []
	let accessToken = $('#access-token').val()
	let totalProAllShop = $('.inp-category')
	totalProAllShop.each(function(){
			list_id.push($(this).val())
	})
	$.ajax({
	    type: "GET",
	    url:"http://localhost:8000/api/v1/products/sameCategory?ids="+list_id,
	    headers: {
		"Authorization": accessToken,
		'Content-Type': 'application/json'
			},
	    success: function(data) {
	    	data.forEach(pro =>{
	    		let price = pro.price.toLocaleString('en-US', {style : 'currency', currency : 'VND'})
	    		let amount = parseInt(pro.orderSuccess)
	    		$('.shopee-header-section__content .row').append(`
	    				<div class="_8152vY col-md-2 col-xs-2">
                            <a data-sqe="link" href="https://shopee.vn/VGA-gtx1660-gtx1660ti-gtx1660-super-gtx-1660-ti-card-m%C3%A0n-h%C3%ACnh-m%C3%A1y-t%C3%ADnh-giga-msi-i.50671771.4747377734?sp_atk=3cae1ab9-975d-4736-a183-cdbe312f4439&amp;xptdk=3cae1ab9-975d-4736-a183-cdbe312f4439">
                            <div class="M1kqFm">
                                <div class="_0ABYrj">
                                  <div style="pointer-events: none">
                                    <div class="d4L7r2 oQgKkG" style=" padding-top: 0px !important;">
                                      <img
                                        width="190px"
                                        height="200px"
                                        alt="${pro.name}"
                                        style="object-fit: contain"
                                        src="${pro.srcImg}" />
                                      <div class="FvUS-9">
                                        <div class="fYVw4y EUFogd" style="color: rgb(242, 82, 32)">
                                          <span class="_8KRpTF">Yêu thích</span>
                                        </div>
                                      </div>
                                      <div class="fUK37e" id="${pro.id}a">
                                        <div class="tbGfIp hEHhXM +mMGCd">
                                          <span class="percent">${pro.salePercent}%</span
                                          ><span class="Fyrrqv">giảm</span>
                                        </div>
                                      </div>
                                      <div class="Hb4HmN">
                                        
                                      </div>
                                      <div class="_3-SX1m">
                                        
                                      </div>
                                    </div>
                                  </div>
                                  <div class="_54S4Wz">
                                    <div class="YlxmGC">
                                      <div class="f19Yf6">
                                        <div class="CoHNbH zqMkG1">
                                         ${pro.name}
                                        </div>
                                      </div>
                                    </div>
                                    <div class="dJmeLw VBvSRI">
                                      <div class="Ji+Ayk xJgdss">
                                        <span class="CYomhb">${price}</span>
                                      </div>
                                      <div class="v7npGe kYRIVM">Đã bán ${amount}</div>
                                    </div>
                                  </div>
                                </div>
                              </div></a
                            >
                          </div>
                    		
	    		`)
	    		if(pro.salePercent==0){
	    			$('#'+pro.id+'a').empty()
	    		}
	    	})
	    },
	    error: function(error) {
	    }
	})
}

function ajaxPostDeliveryPayment(){
	//let accessToken = $('#access-token').val()
	let list_id = []
	let totalProAllShop = $('._2qN5oG .uUhc_B .stardust-checkbox.total')
	totalProAllShop.each(function(){
		if($(this).attr('class').includes('stardust-checkbox--checked')){
			list_id.push($(this).parent().parent().parent().attr('class').slice(8))
		}
	})
	if(list_id.length==0){
		$('#check-buy-pro').append(`
		<div class="shopee-popup shopee-modal__transition-enter-done">
			<div class="shopee-popup__overlay"></div><div class="shopee-popup__container"><div class="shopee-alert-popup card"><div class="shopee-alert-popup__message">Bạn vẫn chưa chọn sản phẩm nào để mua.<div class="shopee-alert-popup__message-list"></div></div><div class="shopee-alert-popup__button-horizontal-layout"><button class="shopee-button-solid shopee-button-solid--primary" onclick="clickOkBuyNoPro()">OK</button></div></div></div>
  		</div>
		`)
	}else{
//		$.ajax({
//		    type: "POST",
//		    url:"/payment?idCarts="+list_id,
//		    headers: {
//				"Authorization": accessToken,
//				'Content-Type': 'application/json'
//			},
//		    success: function(data) {
		    	window.location.href = "http://localhost:8080/payment?idCarts="+list_id
//		    },
//		    error: function(error) {
		    	
//		    }
//		})
	}
}

function clickOkBuyNoPro(){
	$('#check-buy-pro').empty();
}

$(document).ready(function(){
	loadProSimilar()
	let totalPro = 0
	shops.forEach((product,index) => {
		product.carts.forEach(item=>{
			totalPro = totalPro+1
		})
	})
	$('#total-product').text(totalPro)
	let listPro =JSON.parse(window.localStorage.getItem('products')) 
	if(listPro!=null){
		listPro.reverse()
	//check duplicate	
	let arrNew = Array.from(new Set(listPro.map(JSON.stringify))).map(JSON.parse);
		$("._2QKwIt").empty();
		arrNew.forEach((pro,index)=>{
			if(index>11) return;
			$('._2QKwIt').append(`
					  <a
                        index="0"
                        class="_3J-9cq"
                        href="/detail-product?k=${pro.slug}"
                        ><div class="_1Zpa2f">
                          <div class="_2TafGB _1NNc5R">
                            <img
                              width="80"
                              height="80"
                              class="Q2TwgS"
                              style="object-fit: contain"
                              src="${pro.url}"
                            />
                          </div>
                        </div>
                        <div class="_24FucX">${pro.price.toLocaleString('en-US', {style : 'currency', currency : 'VND'})}</div></a
                      >
		     `);
		})	
	}
});