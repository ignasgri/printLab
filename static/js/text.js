var selectElem = document.getElementById('options')
var pElem = document.getElementById('option')

// When a new <option> is selected
selectElem.addEventListener('change', function() {
  var index = selectElem.selectedIndex;
  // Add that data to the <p>
  pElem.innerHTML = $("#options").val();
})

$(document).ready(function () {
    $('#a4_description').keyup(function(e){
        var keyed = $(this).val().replace(/[]/g, '');
        if(keyed == '<')
        {
            $('#a4_description').keyup(function(e){
                var keyed = $(this).val().replace(/[]/g,'');
                $('#a4_description_result"').html('<' + keyed);
            });
        }
        else
        $("#a4_description_result").html(keyed);
     });
    });


function insertText(elemID, text)
{
    var elem = document.getElementById('a4_weight_result');
    elem.innerHTML += $("#a4_weight").val();
}

// 
// $(document).ready(function () {
//     $('#a4_weight').keyup(function(e){
//         var keyed = $(this).val().replace(/[]/g, '');
//         if(keyed == '<')
//         {
//             $('#a4_weight').keyup(function(e){
//                 var keyed = $(this).val().replace(/[]/g,'');
//                 $('#a4_weight_result"').html('<' + keyed);
//             });
//         }
//         else
//         $("#a4_weight_result").html(keyed);
//         });
//     });

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
