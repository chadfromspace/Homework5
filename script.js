$(document).ready(function(){

    console.log(moment());

    var newForm = document.createElement("form");
    $(".container").append(newForm);

    $("#currentDay").html(moment().format("dddd") + ", " + moment().format("MMMM Do"));
    for(i=0;i<9;i++){
        var newDiv = document.createElement("div");
        var newInput = document.createElement("input");
        var newLabel = document.createElement("label");
        var newButton = document.createElement("button");
        $(newDiv).addClass("row");
        $(newInput).addClass("textBox col-sm");
        $(newLabel).addClass("col-sm-1 scheduleLabel");
        $(newButton).addClass("btn btn-dark col-sm-1 saveButton");
        if(i<4){
            $(newLabel).html(i+9+"AM");
        } else if(i>3){
            $(newLabel).html(i-3+"PM");
        }
        $(newForm).append(newDiv);
        $(newDiv).append(newLabel);
        $(newDiv).append(newInput);
        $(newDiv).append(newButton);
    }
})