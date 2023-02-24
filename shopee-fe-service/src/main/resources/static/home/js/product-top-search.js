let product = [];

function callAjaxProduct() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8000/api/v1/home/topSearch",
        success: function (data) {
            product = data;
            layoutProduct(data);
        },
        error: function () {
        },
    });
}

const layoutProduct = (data) => {
    data.forEach((product, index) => {
        $("#product ul.image-carousel__item-list").append(`
					<li class="image-carousel__item"
                         style="padding: 0px; width: 13.6667%;">
                         <a class="K5psIF Wh3W7J"
                               href="/detail-product?k=${product.slug}">
                               <div class="xpdSwI">
                                     <div
                                           class="uVbGLf od+H03 li78LN">
                                     </div>
                                     <div
                                           class="n-CE6j _06bq+d">
                                           <img width="invalid-value"
                                                 height="invalid-value"
                                                 class="QQTrlS edy5hG"
                                                 style="object-fit: contain"
                                                 src="${product.urlImG}">
                                     </div>
                                     <div class="pDTGqb">Bán
                                           39k+ / tháng</div>
                               </div>
                               <div class="cXODCZ">${product.name}</div>
                         </a></li>
             `);
    });
};
let translateProduct = 0;

function clickProduct(nextorprev) {
    let total = product.length;
    let indexMax = total * -10;
    console.log(indexMax);
    if (nextorprev == "next") {
        translateProduct = translateProduct - 10;
        console.log(translateProduct);
        $("#product ul.image-carousel__item-list").css(
            "transform",
            "translate(" + translateProduct + "%, 0px)"
        );

        if (translateProduct - 50 <= indexMax) {
            $("#product-next.carousel-arrow.carousel-arrow--next").css(
                "visibility",
                "hidden"
            );
        } else {
            $("#product-next.carousel-arrow.carousel-arrow--next").css(
                "visibility",
                "visible"
            );
        }
        if (translateProduct - 50 >= -50) {
            $("#product-prev.carousel-arrow.carousel-arrow--prev").css(
                "visibility",
                "hidden"
            );
        } else {
            $("#product-prev.carousel-arrow.carousel-arrow--prev").css(
                "visibility",
                "visible"
            );
        }
    }
    if (nextorprev == "prev") {
        translateProduct = translateProduct + 10;
        $("#product ul.image-carousel__item-list").css(
            "transform",
            "translate(" + translateProduct + "%, 0px)"
        );
        if (translateProduct - 50 <= indexMax) {
            $("#product-next.carousel-arrow.carousel-arrow--next").css(
                "visibility",
                "hidden"
            );
        } else {
            $("#product-next.carousel-arrow.carousel-arrow--next").css(
                "visibility",
                "visible"
            );
        }
        if (translateProduct - 50 >= -50) {
            $("#product-prev.carousel-arrow.carousel-arrow--prev").css(
                "visibility",
                "hidden"
            );
        } else {
            $("#product-prev.carousel-arrow.carousel-arrow--prev").css(
                "visibility",
                "visible"
            );
        }
    }
}

$(document).ready(function () {
    //onmouse for category
    $("#product-next.carousel-arrow.carousel-arrow--next").mouseenter(
        function () {
            $("#product-next.carousel-arrow.carousel-arrow--next").removeClass(
                "carousel-arrow--hint"
            );
        }
    );
    $("#product-next.carousel-arrow.carousel-arrow--next").mouseleave(
        function () {
            $("#product-next.carousel-arrow.carousel-arrow--next").addClass(
                "carousel-arrow--hint"
            );
        }
    );
    $("#product-prev.carousel-arrow.carousel-arrow--prev").mouseenter(
        function () {
            $("#product-prev.carousel-arrow.carousel-arrow--prev").removeClass(
                "carousel-arrow--hint"
            );
        }
    );
    $("#product-prev.carousel-arrow.carousel-arrow--prev").mouseleave(
        function () {
            $("#product-prev.carousel-arrow.carousel-arrow--prev").addClass(
                "carousel-arrow--hint"
            );
        }
    );

    callAjaxProduct();
});
