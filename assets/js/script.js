AOS.init();
$(document).ready(function () {

  function toggleSidebarRight() {
    if ($(".sidebar-right").hasClass('active')) {
      $(".sidebar-right").removeClass('active');
      $(".nav-item").removeClass('open');
      $(".disclaimer-for-help").css('display', 'none');
    } else {
      $(".sidebar-right").addClass('active')
    }
  }
  $("#sidebar-right-button").on('click', function () {
    toggleSidebarRight();
  });

  if (screen.width <= 576) {
    var navbar_sticky = $(".navbar-sticky").height();
    var sidebar_right = $(".sidebar-right").height();
    $(".sidebar-right .sidebar-content").css('height', 'calc(100vh - ' + navbar_sticky + 'px - ' + sidebar_right + 'px)');
    $(".sidebar-right .sidebar-content .item-document").css('height', 'calc(100vh - ' + navbar_sticky + 'px - ' + sidebar_right + 'px)');

    var sidebar_content = $(".sidebar-right .sidebar-content").height();
    $(".chat-container").css('height', 'calc(' + sidebar_content + 'px - ' + sidebar_right + 'px)')
  }




  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  });

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
  });






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
      $(".disclaimer-for-help").css('display', 'none');
      if (screen.width <= 576) {
        $(".sidebar-right").addClass('active')
      }
    }

  }


  var accItem2 = $('.sidebar-right .nav-item');
  var accHD2 = $("[data-toggle=sidebar-right]:not(.active)");

  for (i = 0; i < accHD2.length; i++) {
    accHD2[i].addEventListener('click', toggleItem2, false);
  }

  function toggleItem2() {
    $(".disclaimer-for-help").toggle();
    $(".nav-item").removeClass('open');
  }



  var myModal = new bootstrap.Modal(document.getElementById('login'), {
    keyboard: false
  })

  myModal.show()




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



