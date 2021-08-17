// FUNÇÃO VOLTAR AO TOPO
$(document).ready(function(){

    $(function(){
       
          $(document).on( 'scroll', function(){
       
            if ($(window).scrollTop() > 300) {
            $('.scroll-top-wrapper').addClass('show');
          } else {
            $('.scroll-top-wrapper').removeClass('show');
          }
        });
       
        $('.scroll-top-wrapper').on('click', scrollToTop);
    });
       
    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }
      
});
// FUNÇÃO VOLTAR AO TOPO FINAL


// FUNÇÃO LUPA
function modalLupa(){
   const lupa =  document.getElementById("search");
   const container = document.querySelector(".container-search")
   const close = document.querySelector("#close")

    lupa.addEventListener('click',()=>{
        if(container.style.display = "none" ){
          container.style.display ="flex";
        }
    })
    close.addEventListener('click',()=>{
      if(container.style.display ="flex"){
        container.style.display = "none";
      }
    })
}

// FUNÇÃO MENU-MOBILE

var slide_wrp 		= ".side-menu-wrapper"; 
var open_button 	= ".menu-open"; 
var close_button 	= ".menu-close"; 
var overlay 		= ".menu-overlay"; 

$(slide_wrp).hide().css( {"left": -$(slide_wrp).outerWidth()+'px'}).delay(50).queue(function(){$(slide_wrp).show()}); 

$(open_button).click(function(e){
	e.preventDefault();
	$(slide_wrp).css( {"left": "0px"}); 
	setTimeout(function(){
		$(slide_wrp).addClass('active'); 
	},50);
	$(overlay).css({"opacity":"1", "width":"100%"});
});

$(close_button).click(function(e){ 
	e.preventDefault();
	$(slide_wrp).css( {"left": -$(slide_wrp).outerWidth()+'px'}); 
	setTimeout(function(){
		$(slide_wrp).removeClass('active');
	},50);
	$(overlay).css({"opacity":"0", "width":"0"});
});

$(document).on('click', function(e) {
	if (!e.target.closest(slide_wrp) && $(slide_wrp).hasClass("active")){
		$(slide_wrp).css( {"left": -$(slide_wrp).outerWidth()+'px'}).removeClass('active');
		$(overlay).css({"opacity":"0", "width":"0"});
	}
});









