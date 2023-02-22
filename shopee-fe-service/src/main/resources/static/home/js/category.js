let categories = [];

function callAjaxCategory() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8000/api/v1/home/categoriesParent",
        success: function (data) {
            categories = data;
            layoutCategories(data)
        },
        error: function () {

        }
    })
}

const layoutCategories = (data) => {
    for (let i = 0; i < data.length; i = i + 2) {
        $('#category ul.image-carousel__item-list').append(`
					<li class="image-carousel__item" style="padding: 0px; width: 10%;">
	                    <div class="home-category-list__group">
	                          <a class="home-category-list__category-grid" href="category?id=${data[i].id}">
	                                <div class="_1l+Pw-">
	                                      <div class="H8mXLe">
	                                            <div class="n-CE6j -rN11Y">
	                                                  <div class="-rN11Y edy5hG" style="background-image: url(&quot;${data[i].pathImage}&quot;); background-size: contain; background-repeat: no-repeat;">
	                                                  </div>
	                                            </div>
	                                      </div>
	                                      <div class="cZdsLQ">
	                                            <div class="C9kwfl">
	                                                 ${data[i].name}
	                                            </div>
	                                      </div>
	                                </div>
	                          </a>
	                          <a class="home-category-list__category-grid" href="category?id=${data[i + 1].id}">
	                                <div class="_1l+Pw-">
	                                      <div class="H8mXLe">
	                                            <div class="n-CE6j -rN11Y">
	                                                  <div class="-rN11Y edy5hG" style="background-image: url(&quot;${data[i + 1] != undefined ? data[(i) + 1].pathImage : ''}&quot;); background-size: contain; background-repeat: no-repeat;">
	                                                  </div>
	                                            </div>
	                                      </div>
	                                      <div class="cZdsLQ">
	                                            <div class="C9kwfl">
	                                                  ${data[i + 1] != undefined ? data[i + 1].name : ''}
	                                            </div>
	                                      </div>
	                                </div>
	                          </a></div>
	              </li>
				`);

    }
}
let translate = 0

function clickCategory(nextorprev) {
    let total = categories.length
    let maxLast = Math.ceil(total / 2)
    let indexMax = maxLast * -8
    console.log(nextorprev)
    if (nextorprev == 'next') {
        translate = translate - 8
        $("#category ul.image-carousel__item-list").css("transform", "translate(" + translate + "%, 0px)");

        if (translate - 80 <= indexMax) {
            $("#category-next.carousel-arrow.carousel-arrow--next").css('visibility', 'hidden')
        } else {
            $("#category-next.carousel-arrow.carousel-arrow--next").css('visibility', 'visible')
        }
        if (translate - 80 >= -80) {
            $("#category-prev.carousel-arrow.carousel-arrow--prev").css('visibility', 'hidden')
        } else {
            $("#category-prev.carousel-arrow.carousel-arrow--prev").css('visibility', 'visible')
        }

    }
    if (nextorprev == 'prev') {
        translate = translate + 8
        console.log(translate)
        $("#category ul.image-carousel__item-list").css("transform", "translate(" + translate + "%, 0px)");
        if (translate - 80 <= indexMax) {
            $("#category-next.carousel-arrow.carousel-arrow--next").css('visibility', 'hidden')
        } else {
            $("#category-next.carousel-arrow.carousel-arrow--next").css('visibility', 'visible')
        }
        if (translate - 80 >= -80) {
            $("#category-prev.carousel-arrow.carousel-arrow--prev").css('visibility', 'hidden')
        } else {
            $("#category-prev.carousel-arrow.carousel-arrow--prev").css('visibility', 'visible')
        }

    }
}

$(document).ready(function () {
    //onmouse for category
    $("#category-next.carousel-arrow.carousel-arrow--next").mouseenter(function () {
        $("#category-next.carousel-arrow.carousel-arrow--next").removeClass("carousel-arrow--hint")
    });
    $("#category-next.carousel-arrow.carousel-arrow--next").mouseleave(function () {
        $("#category-next.carousel-arrow.carousel-arrow--next").addClass("carousel-arrow--hint")
    });
    $("#category-prev.carousel-arrow.carousel-arrow--prev").mouseenter(function () {
        $("#category-prev.carousel-arrow.carousel-arrow--prev").removeClass("carousel-arrow--hint")
    });
    $("#category-prev.carousel-arrow.carousel-arrow--prev").mouseleave(function () {
        $("#category-prev.carousel-arrow.carousel-arrow--prev").addClass("carousel-arrow--hint")
    });

    callAjaxCategory()
});
