//text resize
fitty('#option',{
    minSize: 80,
    maxSize: 100,
    multiLine: true,
});
//radio buttons 
var radioE = document.getElementById('radio')
var pE = document.getElementById('radio_result')

// When a new <option> is selected
radioE.addEventListener('change', function() {
  var index = radioE.selectedIndex;
  // Add that data to the <p>
  pE.innerHTML = $("#radio").val();
})

var radioE = document.getElementById('radio1')
var pE = document.getElementById('radio_result')

// When a new <option> is selected
radioE.addEventListener('change', function() {
  var index = radioE.selectedIndex;
  // Add that data to the <p>
  pE.innerHTML = $("#radio1").val();
})

var radioE2 = document.getElementById('radio2')
var pE2 = document.getElementById('radio_result2')

// When a new <option> is selected
radioE2.addEventListener('change', function() {
  var index = radioE2.selectedIndex;
  // Add that data to the <p>
  pE2.innerHTML = $("#radio2").val();
})

var radioE2 = document.getElementById('radio3')
var pE2 = document.getElementById('radio_result2')

// When a new <option> is selected
radioE2.addEventListener('change', function() {
  var index = radioE2.selectedIndex;
  // Add that data to the <p>
  pE2.innerHTML = $("#radio3").val();
})

var radioE3 = document.getElementById('radio4')
var pE3 = document.getElementById('radio_result3')

// When a new <option> is selected
radioE3.addEventListener('change', function() {
  var index = radioE3.selectedIndex;
  // Add that data to the <p>
  pE3.innerHTML = $("#radio4").val();
})

var radioE3 = document.getElementById('radio5')
var pE3 = document.getElementById('radio_result3')

// When a new <option> is selected
radioE3.addEventListener('change', function() {
  var index = radioE3.selectedIndex;
  // Add that data to the <p>
  pE3.innerHTML = $("#radio5").val();
})


//side menu options
var selectElem = document.getElementById('options')
var pElem = document.getElementById('option')

// When a new <option> is selected
selectElem.addEventListener('change', function() {
  var index = selectElem.selectedIndex;
  // Add that data to the <p>
  pElem.innerHTML = $("#options").val();
})

//
var selectElement = document.getElementById('countries_options')
var pElement = document.getElementById('countries_result')

// When a new <option> is selected
selectElement.addEventListener('change', function() {
    var index = selectElement.selectedIndex;
    // Add that data to the <p>
    pElement.innerHTML = $("#countries_options").val();

})

fitty('#a4_description_result',{
    minSize: 30,
    maxSize: 45,
    multiLine: true,
    // observeMutations: true,
});
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


// function insertText(elemID, text)
// {
//     var elem = document.getElementById('a4_weight_result');
//     elem.innerHTML += $("#a4_weight").val();
// }

// $(document).ready(function () {
//     $('#a4_weight').keyup(function(e){
//         var keyed = $(this).val().replace(/[]/g, '');
//         if(keyed == '<')
//         {
//             $('#a4_weight').keyup(function(e){
//                 var keyed = $(this).val().replace(/[]/g,'');
//                 $('#a4_weight_result').html('<' + keyed);
//             });
//         }
//         else
//         $("#a4_weight_result").html(keyed);
//         });
//     });

calculate = function()
{
    var resources = document.getElementById('a4_description').value;
    var minutes = document.getElementById('a4_weight').value; 
    document.getElementById('a4_description_result').innerHTML = document.getElementById('a4_description').value + " " + document.getElementById('a4_weight').value;
     
   }






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
    
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
document.getElementById("result8").innerHTML =(day + "-" + month + "-" + year)


function myFunction() {
    var x = document.getElementById("myDate").value;
    document.getElementById("result8").innerHTML = x;
}

var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
document.getElementById("result9").innerHTML =(day + "-" + month + "-" + year)


function myFunction2() {
    var x = document.getElementById("myDate2").value;
    document.getElementById("result9").innerHTML = x;
}
