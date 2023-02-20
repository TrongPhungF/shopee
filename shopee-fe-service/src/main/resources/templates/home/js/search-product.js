let keywords = [];
function callAjaxKeyword(){
	$.ajax({
		 type: "GET",
		 url: "http://localhost:8000/api/v1/home/keyword",
		 success: function(data) {
			 keywords = data;
			 //layoutKeyword(data)
		 },
		 error: function() {
			 
		 }
		 })
}
function removeAccents(str) {
	  return str.normalize('NFD')
	            .replace(/[\u0300-\u036f]/g, '')
	            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
	}
function filterKeySearch(element){
	const key = element.value;
	const result = keywords.filter(k =>
	removeAccents(k.keyword).includes(removeAccents(key))
	)
	layoutKeyword(result)
}
const layoutKeyword =(data)=>{
	$('.XBbhCr').empty()
	 $('.XBbhCr').append(`
				<a href="https://shopee.vn/bitis-sieu-sale"
 class="shopee-searchbar-hints__search-prefill" role="option"><span
     class="shopee-searchbar-hints__text">BITI'S HUNTER X BẢN ĐỘC QUYỀN 40 NĂM</span><img
     src="https://cf.shopee.vn/file/bfe2d0e04f7003c37d062b68c5b1dafa" height="24"></a>
   `);
	if(data!=null){
	data.forEach((key,index) => {
		if(index>9) return;
		 $('.XBbhCr').append(`
			<a class="shopee-searchbar-hints__history-entry" role="option" href="/search?keyword=d%C3%A9p%20nam">
            <div class="shopee-searchbar-hints__history-entry__text"><span
                   class="shopee-searchbar-hints__history-entry__typed-text"></span><span>${key.keyword}</span></div>
        </a>
         `);
	 })
	}

}
function addKeyForLocal(){
	
	let input = $('#search-input-form').val()
	if(input=="") return;
	let listKey =JSON.parse(window.localStorage.getItem('keys')) || []		
		listKey.push(input)
		window.localStorage.setItem('keys',JSON.stringify(listKey));
	
	$(location).prop('href', "http://localhost:8080/search?keyword=" +input);	
}

function focusInput(){
	let listKey = JSON.parse(window.localStorage.getItem('keys'))
	$(window).click(function(e) {
		if(e.target.id != "search-input-form"){
			$('.shopee-searchbar').removeClass('shopee-searchbar--focus')
			$("#search-input").attr( "aria-expanded","false");
			$(".XBbhCr").empty();
		}else{
			$('.shopee-searchbar').addClass('shopee-searchbar--focus')
			$( "#search-input" ).attr( "aria-expanded","true");
			$(` <div class="shopee-popover" aria-role="tooltip"
		    style="position: absolute; top: 34px; left: 0px; width: 754px; z-index: 600;">
		    <div class="XBbhCr" role="listbox" id="shopee-searchbar-listbox" >      
		    </div>
			</div>`).insertAfter( "form.shopee-searchbar-input" );
		}	
		listKey.reverse()
		if(listKey!=null){
			$(".XBbhCr").empty();
			listKey.forEach((key,index)=>{
				if(index>9) return;
				$('.XBbhCr').append(`
						<a class="shopee-searchbar-hints__history-entry" role="option" href="/search?keyword=d%C3%A9p%20nam">
			            <div class="shopee-searchbar-hints__history-entry__text"><span
			                   class="shopee-searchbar-hints__history-entry__typed-text"></span><span>${key}</span></div>
			        </a>
			     `);
			})	
		}	
	});
	layoutKeyword();
}
$(document).ready(function() {
	callAjaxKeyword()
	$(".shopee-searchbar__search-button").on("click", addKeyForLocal)
});
