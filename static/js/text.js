$(document).ready(function () {
    $('#title').keyup(function(e){
        var keyed = $(this).val().replace(/[]/g, '');
        if(keyed == '<')
        {
            $('#title').keyup(function(e){
                var keyed = $(this).val().replace(/[]/g,'');
                $('#result"').html('<' + keyed);
            });
        }
        else
        $("#result").html(keyed);
     });
    });

// $(document).ready(function () {
//     $('#title1').keyup(function(e){
//         var keyed = $(this).val().replace(/[]/g, '');
//         if(keyed == '<')
//         {
//             $('#title1').keyup(function(e){
//                 var keyed = $(this).val().replace(/[]/g,'');
//                 $('#result1"').html('<' + keyed);
//             });
//         }
//         else
//         $("#result1").html(keyed);
//      });
//     });


var selectElem = document.getElementById('title1')
var pElem = document.getElementById('result1')

// When a new <option> is selected
selectElem.addEventListener('change', function() {
  var index = selectElem.selectedIndex;
  // Add that data to the <p>
  pElem.innerHTML = $("#title1").val();
})


$(document).ready(function () {
    $('#title3').keyup(function(e){
        var keyed = $(this).val().replace(/[]/g, '');
        if(keyed == '<')
        {
            $('#title3').keyup(function(e){
                var keyed = $(this).val().replace(/[]/g,'');
                $('#result3"').html('<' + keyed);
            });
        }
        else
        $("#result3").html(keyed);
        });
    });

$(document).ready(function () {
    $('#title4').keyup(function(e){
        var keyed = $(this).val().replace(/[]/g, '');
        if(keyed == '<')
        {
            $('#title4').keyup(function(e){
                var keyed = $(this).val().replace(/[]/g,'');
                $('#result4').html('<' + keyed);
            });
        }
        else
        $("#result4").html(keyed);
        });
    });

$(document).ready(function () {
    $('#title5').keyup(function(e){
        var keyed = $(this).val().replace(/[]/g, '');
        if(keyed == '<')
        {
            $('#title5').keyup(function(e){
                var keyed = $(this).val().replace(/[]/g,'');
                $('#result5"').html('<' + keyed);
            });
        }
        else
        $("#result5").html(keyed);
        });
    });

$(document).ready(function () {
    $('#title6').keyup(function(e){
        var keyed = $(this).val().replace(/[]/g, '');
        if(keyed == '<')
        {
            $('#title6').keyup(function(e){
                var keyed = $(this).val().replace(/[]/g,'');
                $('#result6"').html('<' + keyed);
            });
        }
        else
        $("#result6").html(keyed);
        });
    });


$(document).ready(function () {
    $('#title7').keyup(function(e){
        var keyed = $(this).val().replace(/[]/g, '');
        if(keyed == '<')
        {
            $('#title7').keyup(function(e){
                var keyed = $(this).val().replace(/[]/g,'');
                $('#result7"').html('<' + keyed);
            });
        }
        else
        $("#result7").html(keyed);
        });
    });
    
$(document).ready(function () {
    $('#title8').keyup(function(e){
        var keyed = $(this).val().replace(/[]/g, '');
        if(keyed == '<')
        {
            $('#title8').keyup(function(e){
                var keyed = $(this).val().replace(/[]/g,'');
                $('#result8"').html('<' + keyed);
            });
        }
        else
        $("#result8").html(keyed);
        });
    });
// $(document).ready(function () {
//     $('#title').keyup(function(e){
//         var keyed = $(this).val().replace(/[]/g, '');
//     $("#result").html(keyed);
//     });
// });
