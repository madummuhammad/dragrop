  AOS.init();
  $(document).ready(function(){

    var accItem = $('.sidebar-right .nav-item');
    var accHD = $("[data-toggle=sidebar-right].active");

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


    var accItem2 = $('.sidebar-right .nav-item');
    var accHD2 = $("[data-toggle=sidebar-right]:not(.active)");

    for (i = 0; i < accHD2.length; i++) {
      accHD2[i].addEventListener('click', toggleItem2, false);
    }

    function toggleItem2() {
      $(".disclaimer-for-help").toggle();

    }

    $('.owl-carousel').owlCarousel({
      autoWidth:true,
      loop:false,
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



