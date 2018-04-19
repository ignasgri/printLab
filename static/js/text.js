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
//     $('#title').keyup(function(e){
//         var keyed = $(this).val().replace(/[]/g, '');
//     $("#result").html(keyed);
//     });
// });
