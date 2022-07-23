$(document).ready(function(){

  var accItem = $('.sidebar-right .nav-item');
  var accHD = $("[data-toggle=sidebar-right]");

  for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
  }

  function toggleItem() {
    var target = $(this).data('target');
    var itemClass = $(target).parent().attr('class');
    for (i = 0; i < accItem.length; i++) {
      accItem[i].className = 'nav-item close';
    }
    if (itemClass == 'nav-item close') {
      $(target).parent().addClass('nav-item open');
    }

  }

  $('.owl-carousel').owlCarousel({
    autoWidth:true,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:2
      }
    }
  })

  var myModal = new bootstrap.Modal(document.getElementById('login'), {
    keyboard: false
  })

  myModal.show()
});



