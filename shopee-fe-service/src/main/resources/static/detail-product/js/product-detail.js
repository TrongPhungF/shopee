function isNumberKey(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

function maxvalue() {
    let amount = $('#amount').val();
    if (amount >= product.quanitity) {
        $('#amount').val(product.quanitity);
    } else if (amount <= 1) {
        $('#amount').val(1);
    }
}

function reduceAmount() {
    let amount = $('#amount').val();

    let reduce = amount - 1
    if (reduce <= 1) {
        reduce = 1
    }
    $('#amount').empty()
    $('#amount').val(reduce)
}

function raiseAmount() {
    let amount = $('#amount').val();

    let raise = parseInt(amount) + 1

    if (raise >= product.quanitity) {
        raise = product.quanitity
    }
    $('#amount').empty()
    $('#amount').val(raise)
}

function onmouse(url) {
    $('._1KdnTb').empty();
    $('._1KdnTb').append(`
			    <div class="_2fbO7Q" >
                          <div class="vpbtQ5" style="display: none;">
                                <div class="shopee-image-placeholder _3LM2cY"><svg
                                            enable-background="new 0 0 54 61" viewBox="0 0 54 61"
                                            role="img"
                                            class="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                            <path stroke="none"
                                                  d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00">
                                            </path>
                                      </svg></div>
                                <div class="center _1fKb1T"><video data-dashjs-player="true"
                                            class="bS6E6i" autoplay=""></video></div>
                          </div>
                          <div class="_1OPdfl">
                                <div class="_3uzKon _2PWsS4"
                                      style="background-image: url(&quot;${url}&quot;); background-size: contain; background-repeat: no-repeat;">
                                </div>
                          </div>
                          <div class="_3sHeKp"></div>
                 </div>
	`)
}

function onleave(url) {
    $('._1KdnTb').empty();
    $('._1KdnTb').append(`
			   <div class="_2fbO7Q" >
                   <div class="vpbtQ5" style="display: none;">
                         <div class="shopee-image-placeholder _3LM2cY"><svg
                                     enable-background="new 0 0 54 61" viewBox="0 0 54 61"
                                     role="img"
                                     class="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                     <path stroke="none"
                                           d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00">
                                     </path>
                               </svg></div>
                         <div class="center _1fKb1T"><video data-dashjs-player="true"
                                     class="bS6E6i" autoplay=""></video></div>
                   </div>
                   <div class="_1OPdfl">
                         <div class="_3uzKon _2PWsS4"
                               style="background-image: url(&quot;${url}&quot;); background-size: contain; background-repeat: no-repeat;">
                         </div>
                   </div>
                   <div class="_3sHeKp"></div>
             </div>
	`)
}

let currentIndex

function clickImgCMT(index, id_cmt) {
    let position = 0
    if (index != 0) {
        position = index * -150
    }


    $('#img' + id_cmt + ' .rating-media-list__image-wrapper').each(function () {
        if ($(this).attr('class').includes('rating-media-list__image-wrapper--active')) {
            $(this).removeClass('rating-media-list__image-wrapper--active').addClass('rating-media-list__image-wrapper--inactive')
            $('#zoom' + id_cmt).removeClass('rating-media-list__zoomed-image--active')
            $('#zoom' + id_cmt).find('.rating-media-list-image-carousel').css({
                "transition": "all 0ms ease 0s;",
                "width": "0px"
            })
            $('#i' + index + id_cmt).addClass('rating-media-list__image-wrapper--inactive').removeClass('rating-media-list__image-wrapper--active')
        }
    })
    if (index == currentIndex) return
    currentIndex = index
    if ($('#i' + index + id_cmt).attr('class').includes('rating-media-list__image-wrapper--inactive')) {
        $('#i' + index + id_cmt).removeClass('rating-media-list__image-wrapper--inactive').addClass('rating-media-list__image-wrapper--active')
        $('#zoom' + id_cmt).find('.rating-media-list-image-carousel').css({
            "transition": "all 500ms ease 0s;",
            "width": "150px"
        })
        $('#ul' + id_cmt).css("margin-left", position + "px")
        $('#zoom' + id_cmt).addClass('rating-media-list__zoomed-image--active')

    } else {
        $('#zoom' + id_cmt).removeClass('rating-media-list__zoomed-image--active')
        $('#i' + index + id_cmt).addClass('rating-media-list__image-wrapper--inactive').removeClass('rating-media-list__image-wrapper--active')
        $('#zoom' + id_cmt).find('.rating-media-list-image-carousel').css({
            "transition": "all 0ms ease 0s;",
            "width": "0px"
        })
        $('#ul' + id_cmt).css("margin-left", position + "px")
    }
    onBlerImg()
}

let stara
let totalPage

function callAjaxCMT(idPro, numStar) {
    stara = numStar
    let url
    $('.product-rating-overview__filter').each(function () {
        $(this).removeClass('product-rating-overview__filter--active')
    })

    if (numStar == 0) {
        $('#allCmt').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro
    }
    if (numStar == 1) {
        $('#star1').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&star=" + numStar
    }
    if (numStar == 2) {
        $('#star2').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&star=" + numStar
    }
    if (numStar == 3) {
        $('#star3').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&star=" + numStar
    }
    if (numStar == 4) {
        $('#star4').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&star=" + numStar
    }
    if (numStar == 5) {
        $('#star5').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&star=" + numStar
    }
    if (numStar == 6) {
        $('#onlyCmt').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&haveComment=YES"
    }

    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            totalPage = data.totalPages
            $('.shopee-product-comment-list').empty()
            $('.shopee-page-controller.product-ratings__page-controller').empty()
            let content = data.content
            content.forEach(cmt => {
                $('.shopee-product-comment-list').append(` 
	    				<div class="shopee-product-rating">
					   <a class="shopee-product-rating__avatar" href="/shop/715792936">
					      <div class="shopee-avatar">
					         <div class="shopee-avatar__placeholder">
					            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-headshot">
					               <g>
					                  <circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
					                  <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path>
					               </g>
					            </svg>
					         </div>
					         <img class="shopee-avatar__img" src="${cmt.user.pathAvatar}">
					      </div>
					   </a>
					   <div class="shopee-product-rating__main">
					      <a class="shopee-product-rating__author-name" href="/shop/715792936">${cmt.user.userName}</a>
					      <div class="repeat-purchase-con">
					         <div class="shopee-product-rating__rating" id="cmt${cmt.id}">
		
					         </div>
					      </div>
					      <div class="shopee-product-rating__time">${cmt.createdAt}</div>
					      <div class="_280jKz">
					         <div style="margin-top: 0.75rem;">${cmt.content}</div>
					      </div>
					      <div class="shopee-product-rating__image-list-wrapper">
					         <div class="rating-media-list">
					            <div class="rating-media-list__container" id="img${cmt.id}">
					               
					            </div>
					            <div class="rating-media-list__zoomed-image" id="zoom${cmt.id}">
					               <div class="rating-media-list-image-carousel" style="transition: all 500ms ease 0s; width: 0px;">
					                  <div class="rating-media-list-image-carousel__item-list-wrapper">
					                     <ul class="rating-media-list-image-carousel__item-list" id="ul${cmt.id}" style="margin-left: 0px; margin-top: 0px; transition: all 500ms ease 0s;">
	    				
					                     </ul>
					                  </div>
					                  <div class="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--prev rating-media-list-carousel-arrow--hint rating-media-list-carousel-arrow--hidden" role="button" tabindex="0" style="opacity: 1; visibility: hidden; transform: translateX(calc(-50% + 0px));">
					                     <svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="shopee-svg-icon icon-arrow-left-bold">
					                        <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
					                     </svg>
					                  </div>
					                  
					               </div>
					            </div>
					         </div>
					      </div>
					   </div>
					</div>	
	    								
	    		`)
                for (let i = 0; i < 5; i++) {
                    if (i < cmt.star) {
                        $('#cmt' + cmt.id).append(` 
	    						<svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
									<polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
								</svg>
	    				`)
                    } else {
                        $('#cmt' + cmt.id).append(` 
	    					  <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-rating">
					               <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
					            </svg>	
	    				`)
                    }
                }
                cmt.commentResources.forEach((img, index) => {
                    $('#img' + cmt.id).append(`
    				<div class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive" id="i${index}${cmt.id}">
	                  <div class="shopee-rating-media-list-image__wrapper">
	                     <div class="shopee-rating-media-list-image__place-holder">
	                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-loading-image">
	                           <g>
	                              <rect fill="none" height="8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10" x="1" y="4.5"></rect>
	                              <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="6.5" y2="6.5"></line>
	                              <rect fill="none" height="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" x="11" y="6.5"></rect>
	                              <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="14.5" y2="14.5"></line>
	                              <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6" x2="6" y1=".5" y2="3"></line>
	                              <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="3.5" x2="3.5" y1="1" y2="3"></line>
	                              <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" x2="8.5" y1="1" y2="3"></line>
	                           </g>
	                        </svg>
	                     </div>
	                     <div class="shopee-rating-media-list-image__content" style="background-image: url(&quot;${img.path}&quot;);">
	                        <div class="shopee-rating-media-list-image__content--blur" onclick="clickImgCMT(${index},${cmt.id})"> </div>
	                     </div>
	                  </div>
	               </div>

	    			`)
                    $('#ul' + cmt.id).append(` 
	    				<li class="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style="padding: 0px 0.625rem;"><img width="135" height="132" class="rating-media-list__zoomed-image-item" src="${img.path}"></li>
	    			`)
                })
            })
            if (!data.first) {
                $('.shopee-page-controller.product-ratings__page-controller').append(` <button
					class="shopee-icon-button shopee-icon-button--left" id="prevPage" onclick="handerPaging(${data.number},${idPro})"><svg
						enable-background="new 0 0 11 11"
						viewBox="0 0 11 11" x="0" y="0"
						class="shopee-svg-icon icon-arrow-left">
						<g>
							<path
								d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z">
							</path>
						</g>
					</svg></button>`)
            }
            for (let i = 0; i < data.totalPages; i++) {
                if (i == 0) {
                    $('.shopee-page-controller.product-ratings__page-controller').append(`<button class="shopee-button-solid shopee-button-solid--primary" onclick="handerPaging(${i + 1},${idPro})">${i + 1}</button> `)
                } else {
                    $('.shopee-page-controller.product-ratings__page-controller').append(`<button class="shopee-button-no-outline" onclick="handerPaging(${i + 1},${idPro})">${i + 1}</button>`)
                }
            }
            let positionPage = parseInt($('.shopee-button-solid.shopee-button-solid--primary').text())
            if (!data.last) {
                $('.shopee-page-controller.product-ratings__page-controller').append(` 
    			<button
					class="shopee-icon-button shopee-icon-button--right " onclick="handerPaging(${positionPage + 1},${idPro})"><svg
						enable-background="new 0 0 11 11"
						viewBox="0 0 11 11" x="0" y="0"
						class="shopee-svg-icon icon-arrow-right">
						<path
							d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
						</path>
					</svg></button>
	    	`)
            }

        },
        error: function (error) {

        }
    })

}

function handerPaging(page, idPro) {
    let numStar = stara
    event.preventDefault()
    let url
    if (numStar == 0) {
        $('#allCmt').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&page=" + page
    }
    if (numStar == 1) {
        $('#star1').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&star=" + numStar + "&page=" + page
    }
    if (numStar == 2) {
        $('#star2').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&star=" + numStar + "&page=" + page
    }
    if (numStar == 3) {
        $('#star3').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&star=" + numStar + "&page=" + page
    }
    if (numStar == 4) {
        $('#star4').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&star=" + numStar + "&page=" + page
    }
    if (numStar == 5) {
        $('#star5').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&star=" + numStar + "&page=" + page
    }
    if (numStar == 6) {
        $('#onlyCmt').addClass('product-rating-overview__filter--active')
        url = "http://localhost:8000/api/v1/comments/inDetailProduct?idProduct=" + idPro + "&haveComment=YES" + "&page=" + page
    }

    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            $('.shopee-product-comment-list').empty()
            let content = data.content

            content.forEach(cmt => {
                $('.shopee-product-comment-list').append(` 
	    				<div class="shopee-product-rating">
					   <a class="shopee-product-rating__avatar" href="/shop/715792936">
					      <div class="shopee-avatar">
					         <div class="shopee-avatar__placeholder">
					            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-headshot">
					               <g>
					                  <circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
					                  <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path>
					               </g>
					            </svg>
					         </div>
					         <img class="shopee-avatar__img" src="${cmt.user.pathAvatar}">
					      </div>
					   </a>
					   <div class="shopee-product-rating__main">
					      <a class="shopee-product-rating__author-name" href="/shop/715792936">${cmt.user.userName}</a>
					      <div class="repeat-purchase-con">
					         <div class="shopee-product-rating__rating" id="cmt${cmt.id}">
		
					         </div>
					      </div>
					      <div class="shopee-product-rating__time">${cmt.createdAt}</div>
					      <div class="_280jKz">
					         <div style="margin-top: 0.75rem;">${cmt.content}</div>
					      </div>
					      <div class="shopee-product-rating__image-list-wrapper">
					         <div class="rating-media-list">
					            <div class="rating-media-list__container" id="img${cmt.id}">
					               
					            </div>
					            <div class="rating-media-list__zoomed-image" id="zoom${cmt.id}">
					               <div class="rating-media-list-image-carousel" style="transition: all 500ms ease 0s; width: 0px;">
					                  <div class="rating-media-list-image-carousel__item-list-wrapper">
					                     <ul class="rating-media-list-image-carousel__item-list" id="ul${cmt.id}" style="margin-left: 0px; margin-top: 0px; transition: all 500ms ease 0s;">
	    				
					                     </ul>
					                  </div>
					                  <div class="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--prev rating-media-list-carousel-arrow--hint rating-media-list-carousel-arrow--hidden" role="button" tabindex="0" style="opacity: 1; visibility: hidden; transform: translateX(calc(-50% + 0px));">
					                     <svg enable-background="new 0 0 13 20" viewBox="0 0 13 20" x="0" y="0" class="shopee-svg-icon icon-arrow-left-bold">
					                        <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
					                     </svg>
					                  </div>
					                  
					               </div>
					            </div>
					         </div>
					      </div>
					   </div>
					</div>	
	    								
	    		`)
                for (let i = 0; i < 5; i++) {
                    if (i < cmt.star) {
                        $('#cmt' + cmt.id).append(` 
	    						<svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-rating-solid--active icon-rating-solid">
									<polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
								</svg>
	    				`)
                    } else {
                        $('#cmt' + cmt.id).append(` 
	    					  <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-rating">
					               <polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon>
					            </svg>	
	    				`)
                    }
                }
                cmt.commentResources.forEach((img, index) => {
                    $('#img' + cmt.id).append(`
    				<div class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive" id="i${index}${cmt.id}">
	                  <div class="shopee-rating-media-list-image__wrapper">
	                     <div class="shopee-rating-media-list-image__place-holder">
	                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon icon-loading-image">
	                           <g>
	                              <rect fill="none" height="8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="10" x="1" y="4.5"></rect>
	                              <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="6.5" y2="6.5"></line>
	                              <rect fill="none" height="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="3" x="11" y="6.5"></rect>
	                              <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1" x2="11" y1="14.5" y2="14.5"></line>
	                              <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6" x2="6" y1=".5" y2="3"></line>
	                              <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="3.5" x2="3.5" y1="1" y2="3"></line>
	                              <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="8.5" x2="8.5" y1="1" y2="3"></line>
	                           </g>
	                        </svg>
	                     </div>
	                     <div class="shopee-rating-media-list-image__content" style="background-image: url(&quot;${img.path}&quot;);">
	                        <div class="shopee-rating-media-list-image__content--blur" onclick="clickImgCMT(${index},${cmt.id})"> </div>
	                     </div>
	                  </div>
	               </div>

	    			`)
                    $('#ul' + cmt.id).append(` 
	    				<li class="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid" style="padding: 0px 0.625rem;"><img width="135" height="132" class="rating-media-list__zoomed-image-item" src="${img.path}"></li>
	    			`)
                })
            })
            $('.shopee-page-controller.product-ratings__page-controller').empty()
            if (!data.first) {
                $('.shopee-page-controller.product-ratings__page-controller').append(` <button
					class="shopee-icon-button shopee-icon-button--left" onclick="handerPaging(${data.number},${idPro})"><svg
						enable-background="new 0 0 11 11"
						viewBox="0 0 11 11" x="0" y="0"
						class="shopee-svg-icon icon-arrow-left">
						<g>
							<path
								d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z">
							</path>
						</g>
					</svg></button>`)
            }
            for (let i = 0; i < data.totalPages; i++) {
                if (i == data.number) {
                    $('.shopee-page-controller.product-ratings__page-controller').append(`<button class="shopee-button-solid shopee-button-solid--primary" onclick="handerPaging(${i + 1},${idPro})">${i + 1}</button> `)
                } else {
                    $('.shopee-page-controller.product-ratings__page-controller').append(`<button class="shopee-button-no-outline" onclick="handerPaging(${i + 1},${idPro})">${i + 1}</button>`)
                }
            }
            let positionPage = parseInt($('.shopee-button-solid.shopee-button-solid--primary').text())

            if (!data.last) {
                $('.shopee-page-controller.product-ratings__page-controller').append(` 
    			<button
					class="shopee-icon-button shopee-icon-button--right " onclick="handerPaging(${positionPage + 1},${idPro})"><svg
						enable-background="new 0 0 11 11"
						viewBox="0 0 11 11" x="0" y="0"
						class="shopee-svg-icon icon-arrow-right">
						<path
							d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
						</path>
					</svg></button>
	    	`)
            }
            scrollInView()
        },
        error: function (error) {

        }
    })

}

function onBlerImg() {
    $(".rating-media-list-carousel-arrow").mouseenter(function () {
        $(".rating-media-list-carousel-arrow").removeClass("rating-media-list-carousel-arrow--hint")
    });
    $(".rating-media-list-carousel-arrow").mouseleave(function () {
        $(".rating-media-list-carousel-arrow").addClass("rating-media-list-carousel-arrow--hint")
    });

}

function scrollInView() {
    $('#myScroll')[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
}

$(document).ready(function () {

    //load cmt
    callAjaxCMT(product.id, 0)
    //load catagory
    let temp = {...categoryBreadcrumb};
    let categories = [];
    let currentCate = temp;
    while (currentCate != null) {
        categories.push(currentCate);
        currentCate = currentCate.categoryParent;
    }
    $('#breadcrumb').append(`
		 <a class="CyVtI7"
            href="/">Shopee</a>
            <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11"
            x="0" y="0" class="shopee-svg-icon _2ON4et icon-arrow-right">
            <path
                  d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
            </path>
      </svg>	
	`)
    $('#cate-brecumb').append(`
			<a class="CyVtI7 _2yC5g9" href="/">Shopee</a>
		      <svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon _2ON4et icon-arrow-right">
		      <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
`)
    for (let i = categories.length - 1; i >= 0; i--) {
        $('#breadcrumb').append(`
		<a class="CyVtI7" href="category?id=${categories[i].id}">${categories[i].name}</a><svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0"
                class="shopee-svg-icon _2ON4et icon-arrow-right">
                <path
                      d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                </path>
          </svg>	
		`)
        $('#cate-brecumb').append(`
				  <a class="CyVtI7 _2yC5g9" href="category?id=${categories[i].id}">${categories[i].name}</a><svg enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon _2ON4et icon-arrow-right">
		            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>                                      
		`)
    }
    $('#breadcrumb').append(`
			 <span class="_3frqjk">${product.name}</span>
		`)
    // load star
    let star = product.avgStar.toFixed()
    $('.product-rating-overview__rating-score').text(star)
    for (let i = 0; i < 5; i++) {
        if (i < star) {
            $('#stars').append(`
						 <div class="shopee-rating-stars__star-wrapper">
                              <div class="shopee-rating-stars__lit"
                                    style="width: 100%;"><svg
                                          enable-background="new 0 0 15 15"
                                          viewBox="0 0 15 15" x="0" y="0"
                                          class="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid">
                                          <polygon
                                                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-miterlimit="10"></polygon>
                                    </svg></div><svg
                                    enable-background="new 0 0 15 15"
                                    viewBox="0 0 15 15" x="0" y="0"
                                    class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
                                    <polygon fill="none"
                                          points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"></polygon>
                              </svg>
                        </div>
				`);
            $('.product-rating-overview .shopee-rating-stars__stars').append(` 
						<div class="shopee-rating-stars__star-wrapper">
							<div class="shopee-rating-stars__lit" style="width: 100%;"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid">
									<polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
									</polygon>
								</svg></div><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
								<polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
								</polygon>
							</svg>
						</div>
				`)
        } else {
            $('#stars').append(`
						 <div class="shopee-rating-stars__star-wrapper"><div class="shopee-rating-stars__lit" style="width: 5.88235%;"><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg></div><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating"><polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg></div>
				`);
            $('.product-rating-overview .shopee-rating-stars__stars').append(` 
						<div class="shopee-rating-stars__star-wrapper">
							<div class="shopee-rating-stars__lit" style="width: 100%;">
							<svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating"><polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg></div><svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="shopee-svg-icon shopee-rating-stars__hollow-star icon-rating">
								<polygon fill="none" points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
								</polygon>
							</svg>
						</div>
				`)
        }
    }

    //load star for cmt
    $.ajax({
        type: "GET",
        url: "http://localhost:8000/api/v1/comments/totalStar?idProduct=" + product.id,
        success: function (data) {
            console.log(data)
            let numCmt = data.Star1 + data.Star2 + data.Star3 + data.Star4 + data.Star5
            $('.product-rating-overview__filters').append(` 
	    			<div id="allCmt" class="product-rating-overview__filter product-rating-overview__filter--active product-rating-overview__filter--all" onclick="callAjaxCMT(${product.id},0)">
	    			tất cả</div>
	    			<div id="star5" class="product-rating-overview__filter" onclick="callAjaxCMT(${product.id},5)">5 Sao (${data.Star5})</div>
	    			<div id="star4" class="product-rating-overview__filter" onclick="callAjaxCMT(${product.id},4)">4 Sao (${data.Star4})</div>
	    			<div id="star3" class="product-rating-overview__filter" onclick="callAjaxCMT(${product.id},3)">3 Sao (${data.Star3})</div>
	    			<div id="star2" class="product-rating-overview__filter" onclick="callAjaxCMT(${product.id},2)">2 Sao (${data.Star2})</div>
	    			<div id="star1" class="product-rating-overview__filter" onclick="callAjaxCMT(${product.id},1)">1 Sao (${data.Star1})</div>
				<div id="onlyCmt" class="product-rating-overview__filter product-rating-overview__filter--with-comment" onclick="callAjaxCMT(${product.id},6)">
					Có Bình luận (${numCmt})
				</div>
	    	`)
        },
        error: function (error) {

        }
    })
    //load price
    let priceDiscount = product.price - (product.salePercent * product.price) / 100
    if (product.salePercent == 0) {
        $('#price').append(` <div class="flex items-center">
                              <div class="_2Shl1j" >đ${numberWithCommas(product.price)}</div>
                        </div> `)
    } else {
        $('#price').append(`
				 <div class="_2yjfFH" >${numberWithCommas(product.price)}</div>
                    <div class="flex items-center">
                          <div class="_2Shl1j" >₫${numberWithCommas(priceDiscount, 3, 'COMMA')}</div>
                          <div class="_3PlIlX">${product.salePercent}% giảm</div>
                    </div>
		 `)
    }
    //load img
    for (const [key, value] of Object.entries(product.imageProduct)) {
        if (key.includes('pathImage01')) {
            $('._1KdnTb').append(`
				   <div class="_2fbO7Q" >
                          <div class="vpbtQ5" style="display: none;">
                                <div class="shopee-image-placeholder _3LM2cY"><svg
                                            enable-background="new 0 0 54 61" viewBox="0 0 54 61"
                                            role="img"
                                            class="stardust-icon stardust-icon-shopee icon-shopee-tiny">
                                            <path stroke="none"
                                                  d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00">
                                            </path>
                                      </svg></div>
                                <div class="center _1fKb1T"><video data-dashjs-player="true"
                                            class="bS6E6i" autoplay=""></video></div>
                          </div>
                          <div class="_1OPdfl">
                                <div class="_3uzKon _2PWsS4"
                                      style="background-image: url(&quot;${value}&quot;); background-size: contain; background-repeat: no-repeat;">
                                </div>
                          </div>
                          <div class="_3sHeKp"></div>
                    </div>
				`)
        } else if (key.includes('pathImage') || key.includes('pathVideo')) {
            $('.xK9doz').append(`
						      <div class="jgvTec" onmouseenter="onmouse('${value}')"  onmouseleave="onleave(product.imageProduct.pathImage01)">
                                  <div class="k1LVKF">
                                        <div class="_1OPdfl">
                                              <div class="X2N8Bt _2PWsS4"
                                                    style="background-image: url(&quot;${value}&quot;); background-size: contain; background-repeat: no-repeat;">
                                              </div>
                                        </div>
                                        <div class="_248Eqj"></div>
                                  </div>
                            </div> 
				 `)

        }

    }

    const pro = {
        slug: product.slug,
        price: product.price,
        url: product.imageProduct.pathImage01
    }
    let listPro = JSON.parse(window.localStorage.getItem('products')) || []
    listPro.push(pro)
    window.localStorage.setItem('products', JSON.stringify(listPro));

});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
