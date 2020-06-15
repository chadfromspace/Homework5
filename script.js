$(document).ready(function(){

    var currentHour = moment().format("HH");
    var currentHourInt = parseInt(currentHour);
    var newForm = document.createElement("form");
    var inputArray = [];
    $(".container").append(newForm);
    $("#currentDay").html(moment().format("dddd") + ", " + moment().format("MMMM Do"));
    $(newForm).on("submit",function(event){
        event.preventDefault();
        inputArray = [];
        localStorage.clear();
        for(i=0;i<18;i+=2){
            inputArray.push(event.target[i].value);
        }
        for(i=0;i<9;i++){
            localStorage.setItem(i,inputArray[i]);
        }        
    })
    for(i=0;i<9;i++){
        var x = -1;
        var y = i+9
        var newDiv = document.createElement("div");
        var newInput = document.createElement("input");
        var newLabel = document.createElement("label");
        var newButton = document.createElement("button");
        var currentHourValue;
        if(localStorage.getItem(0)!==null){
            newInput.value = localStorage.getItem(i);
        }
        $(newDiv).addClass("row");
        $(newInput).addClass("textBox col-sm");
        $(newLabel).addClass("col-sm-1 scheduleLabel");
        $(newButton).addClass("btn btn-dark col-sm-1 saveButton");
        $(newButton).html("Save");
        if(i<4){
            $(newLabel).html(i+9+"AM");
            currentHourValue = y;
        } else if(i>3){
            $(newLabel).html(i-3+"PM");
            currentHourValue = i-3;
        }
        if(y>currentHourInt){
            $(newInput).css("background-color","rgb(119, 10, 10)");
        }
        if(y<currentHourInt){
            $(newInput).css("background-color","rgb(6, 34, 156)");
        }
        if(y===currentHourInt){
            $(newInput).css("background-color","rgb(100, 67, 161)");
        }
        $(newForm).append(newDiv);
        $(newDiv).append(newLabel);
        $(newDiv).append(newInput);
        $(newDiv).append(newButton);
    }
})