$(document).ready(function(){

  // var btn_sidebar_right = $("[data-toggle=sidebar-right]");

  // for (let i = 0; i < btn_sidebar_right.length; i++) {

  //   btn_sidebar_right[i].onclick = function () {

  //     var itemClass=this.className;

  //     $(this).addClass('active')

  //     if (itemClass=="nav-link active") {

  //       $(this).removeClass('active');
  //     }

  //   }
  // }


  var accItem = $('.sidebar-right .nav-item');
  var accHD = $('.sidebar-right .nav-link');

  for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
  }
  function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
      accItem[i].className = 'nav-item close';
    }
    if (itemClass == 'nav-item close') {
      this.parentNode.className = 'nav-item open';
    }
  }


  var myModal = new bootstrap.Modal(document.getElementById('login'), {
    keyboard: false
  })

  myModal.show()
});



