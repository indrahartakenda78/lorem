 // this for menu scroll down
        $(document).ready(function() {
            $('a[role="Down"]').click(function(e) {
                if($(this).hash !== '') {
                    e.preventDefault();
                    var hash = this.hash;
                    console.log(this.hash);
                    $('html, body').animate({
                        scrollTop : $(hash).offset().top
                    }, 400, function(){
           
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    // window.location.hash = hash;
                  });
                }
            });
        });


var geser = $(document),
      element = $(".back");
geser.scroll(function() {
  if(geser.scrollTop() >= 50) {
  element.addClass("top");
  } else {
   element.removeClass("top");
   }
});

        // for get started