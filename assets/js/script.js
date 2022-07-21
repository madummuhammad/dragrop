$(document).ready(function() {
    // $('#example').DataTable();
    $('.testselect3').SumoSelect({
        placeholder: 'None Selected'
    });


} );

$(document).ready(function(){
    $(".navbar-toggler-custom").on('click',function(){
        $(".navbar-profile.collapse").toggle(function(){
            $(this).addClass("show");
        });
    });
    if (screen.width<768) {
        $(".navbar-search-button").on('click',function(){
            $(".navbar-search").toggle(function(){
                $(this).addClass("show");
            });
        });

    };

    var btn_collapse = $("[data-toggle=collapse-custom]");

    for (let i = 0; i < btn_collapse.length; i++) {
        btn_collapse[i].onclick = function () {
            var id_target = $(this).data('target');
            $(".idp").removeClass("active");
            $(id_target).addClass('active');

            $(".btn-collapse-custom").removeClass('active');
            $(this).addClass('active');
            if (id_target=="#assigned") {
                $(".finalize-peer").addClass('active');
            } else {
                $(".finalize-peer").removeClass('active');
            }
        }
    }

    var btn_sidebar = $("[data-toggle=btn_sidebar]");

    for (let i = 0; i < btn_sidebar.length; i++) {
        btn_sidebar[i].onclick = function () {
            var id_target = $(this).data('target');
            $(".tab-pane").removeClass("active show");
            $(id_target).addClass('active show');

            $(".btn-sidebar").removeClass('active');
            $(this).addClass('active');
        }
    }

    var input_select=$(".multiple-select .input-select");
    var select_option=$(".select-option");
    var multiple_select=$(".multiple-select");
    for (let i = 0; i < multiple_select.length; i++) {
        $(multiple_select[i]).on('mouseenter',function(){
            $(select_option[i]).addClass('active');
            $(multiple_select[i]).on('mouseleave',function(){
                $(select_option[i]).removeClass('active');

            })
            var option = $(".option");
            for (let b = 0; b < option.length; b++) {
                option[b].onclick = function () {
                    var id_target = $(this).data('target');
                    var a=$(this).find("input").attr('checked');
                    var val=$(this).find("input").val();
                    if (a=="checked") {
                        var val_start=$(input_select[i]).val();
                        var val_new=val_start.split(",");
                        $(this).find("input").removeAttr('checked');

                        const index = val_new.indexOf(val)
                        if (index > -1) { val_new.splice(index, 1) }
                            $(input_select[i]).val(val_new);

                    } else {
                        var val_start=$(input_select[i]).val();
                        $(this).find("input").attr('checked','true');
                        if (val_start=="") {
                            $(input_select[i]).val(val);
                        } else {
                            $(input_select[i]).val(val_start+","+val);
                        }
                    }
                }
            }
        })
    }
})

$(".box-custom-select").toggle();

var select = $("[data-toggle=select]");
var option = $("[data-toggle=option]");

for (let i = 0; i < select.length; i++) {
    select[i].onclick = function () {
        var id_target = $(this).data('target');
        $(id_target).toggle();
    }
}

// $(document).ready(function() {
//     alert(screen.width);
// });

