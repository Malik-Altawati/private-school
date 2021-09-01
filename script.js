$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    items: 3,
    autoplay:true,
    autoplayHoverPause:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
})



$( "#send" ).click(function() {
    var name =  $( "#name" ).val();
    var email = $( "#email" ).val();
    var message = $( "#message" ).val();
    if(!name || !email || !message){
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Please Fill All Fields',
            showConfirmButton: true,
          })
          return
    }
// 
    var data = {
        service_id: "service_cz4uycg",
        template_id: "template_ftoxl13",
        user_id: "user_dngrGGtjcV4vLLZ2Cv3pt",
        template_params: {
          name: name,
          email: email,
          message: message,
        }
    }
    // 
    $('#sending').show()
    $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
          type: "POST",
          data: JSON.stringify(data),
          contentType: "application/json",
        })
          .done(function () {
            $('#sending').hide()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your message has been sent.',
                showConfirmButton: false,
                timer: 1500
              })
              $( "#name" ).val('');
              $( "#email" ).val('');
              $( "#message" ).val('');
          })
  });



  $(function () {
    $(document).scroll(function () {
      var $nav = $("#navbar_top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $('#mobile').click(function(){
    var $nav = $("#navbar_top");
    $nav.toggleClass('colored', $(this).scrollTop() <= $nav.height());
  })