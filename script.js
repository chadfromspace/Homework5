$(document).ready(function(){

    var currentHour = moment().format("HH");
    var currentHourInt = parseInt(currentHour);
    var newForm = document.createElement("form");
    var inputArray = [];
    $(".container").append(newForm);
    $("#currentDay").html(moment().format("dddd") + ", " + moment().format("MMMM Do"));
    $(newForm).on("submit",function(event){
        event.preventDefault();        
    })
    for(i=0;i<9;i++){        
        var x = -1;
        var y = i+9
        var newDiv = document.createElement("div");
        var newInput = document.createElement("input");
        var newLabel = document.createElement("label");
        var newButton = document.createElement("button");
        var currentHourValue;
        $(newDiv).addClass("row");
        $(newInput).addClass("textBox col-sm");
        $(newInput).attr("id",i+9);
        $(newLabel).addClass("col-sm-1 scheduleLabel");
        $(newButton).addClass("btn btn-dark col-sm-1 saveButton");
        if(i<4){
            $(newLabel).html(i+9+"AM");
            currentHourValue = y;
        } else if(i>3){
            $(newLabel).html(i-3+"PM");
            currentHourValue = i-3;
        }
        if(y>currentHourInt){
            $(newInput).css("background-color","red");
        }
        if(y<currentHourInt){
            $(newInput).css("background-color","blue");
        }
        if(y===currentHourInt){
            $(newInput).css("background-color","purple");
        }
        $(newForm).append(newDiv);
        $(newDiv).append(newLabel);
        $(newDiv).append(newInput);
        $(newDiv).append(newButton);
    }
})