$(document).ready(function(){
    //Variables to define the current time.
    var currentHour = moment().format("HH");
    var currentHourInt = parseInt(currentHour);
    //Variable to define the current day.
    $("#currentDay").html(moment().format("dddd") + ", " + moment().format("MMMM Do"));
    //Creating a new form.
    var newForm = document.createElement("form");
    //Variable to store form information to localStorage as an array.
    var inputArray = [];
    //Creating saveInfo key in local storage.
    localStorage.getItem("savedInfo");
    //Appending newForm to the first item of the container class.
    $(".container").append(newForm);
    //On submit function for the page form.
    $(newForm).on("submit",function(event){
        //Preventing page reload on form submission.
        event.preventDefault();
        //Clearing inputArray and local storage.
        inputArray = [];        
        localStorage.clear();
        //For loop to push the value of all the input boxes on the page to inputArray.
        for(i=0;i<18;i+=2){
            inputArray.push(event.target[i].value);
        }
        //Saving inputArray to the savedInfo key.
        localStorage.setItem("savedInfo",inputArray);        
    })
    //For loop to create page content.
    for(i=0;i<9;i++){
        //Y variable set to compare i into the time next to the form item.
        var y = i+9
        //Creating new elements to append to the page.
        var newDiv = document.createElement("div");
        var newInput = document.createElement("input");
        var newLabel = document.createElement("label");
        var newButton = document.createElement("button");
        //Setting the value of the input box text to the corresponding array value
        newInput.value = localStorage.getItem("savedInfo").split(",")[i];
        //Adding class designations to the created items.
        $(newDiv).addClass("row");
        $(newInput).addClass("textBox col-sm");
        $(newLabel).addClass("col-sm-1 scheduleLabel");
        $(newButton).addClass("btn btn-dark col-sm-1 saveButton");
        $(newButton).html("Save");
        //Conditions to set the AM/PM label of the form item.
        if(i<4){
            $(newLabel).html(i+9+"AM");
        } else if(i>3){
            $(newLabel).html(i-3+"PM");
        }
        //Conditions to set the background color of the input box.
        if(y>currentHourInt){
            $(newInput).css("background-color","rgb(119, 10, 10)");
        }
        if(y<currentHourInt){
            $(newInput).css("background-color","rgb(6, 34, 156)");
        }
        if(y===currentHourInt){
            $(newInput).css("background-color","rgb(100, 67, 161)");
        }
        //Appending newDiv to newForm, and then newLabel, newInput, and newButton to newDiv.
        $(newForm).append(newDiv);
        $(newDiv).append(newLabel);
        $(newDiv).append(newInput);
        $(newDiv).append(newButton);
    }
})