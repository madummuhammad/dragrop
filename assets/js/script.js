AOS.init();
$(document).ready(function () {
  $("#sidebar-right-button").on('click', function () {
    $(".sidebar-right").toggle();
  })

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  });
  var top = $("#coba").offset().top;
  var left = $("#coba").offset().left;
  $(".container-popover").css("transform", "translate3d(calc(" + left + "px - 150px), " + top + "px, 0px)");

  $(".main-stage-question").on('scroll', function () {
    var top = $("#coba").offset().top;
    var left = $("#coba").offset().left;
    $(".container-popover").css("transform", "translate3d(calc(" + left + "px - 150px), " + top + "px, 0px)");
  });

  $("[data-bs-toggle=custom-popover]").on('mouseover', function () {
    $(".container-popover").show();
  });

  $("[data-bs-toggle=custom-popover]").on('mouseout', function () {
    $(".container-popover").hide();
  });

  $(".container-popover").on('mouseover', function () {
    $(".container-popover").show();
  });

  $(".container-popover").on('mouseout', function () {
    $(".container-popover").hide();
  });


  $(document).on('click', function () {
    // $(".container-popover").hide();
  })


  $(".document-preview").on('click', function () {
    $("#item-document-1").toggle();
  })



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
      $(".sidebar-right").css("display", 'block')
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
    autoWidth: true,
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  })

  var myModal = new bootstrap.Modal(document.getElementById('login'), {
    keyboard: false
  })

  myModal.show()




});



