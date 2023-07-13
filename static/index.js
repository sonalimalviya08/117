//Create date variable
var date=new Date()
let display_date='Date: '+ date.toLocaleDateString()



//Load HTML DOM
$(document).ready(function(){
    $('#display_date').html(display_date)
})

//Define variable to store predicted emotion

let predicted_emotion;
//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call
            let input_data={
                "text":$("#text").val()
            }
            console.log(input_data)
        $.ajax({
            type:'POST',
            url:"/predict-emotion",
            data:JSON.stringify(input_data),
            dataType:"json",
            contentType:'application/json',
            sucess:function(result){

            }
            
            
              {
                
                // Result Received From Flask ----->JavaScript
                
                // Display Result Using JavaScript----->HTML
                
            },
            //Error function
            
        });
    });
})

