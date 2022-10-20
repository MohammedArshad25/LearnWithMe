$(function () {
    form = $("#form");
    form.submit(function(event){
        var name = $("#name").val();
        var password = $("#password").val();
        var amount = $("#amount").val();
        var message = $("#message").val();
        var checkbox = $("#checkbox").is(":checked");

        validateName(name,event);
        validatePassword(password,event);
        validateMessage(message,event);
        validateChecked(checkbox,event);
    });
            });

function validateName(name, event){
    if(!isValidName(name)){
        event.preventDefault();
        $("#name-feedback").text("Please enter atleast two characters");
    }
    else {
        $("#name-feedback").text("");
    }
}

function isValidName(name){
    return (name.length >=2)
}

function validatePassword(password, event){
    if(!isValidPassword(password)){
        event.preventDefault();
        $("#password-feedback").text("min-length:4 and max-length:8 ");
    }
    else {
        $("#password-feedback").text("");
    }
}

function isValidPassword(password){
    return (password.length >=4 && password.lengt<=8)
}

function validateMessage(message,event){
        if(!isValidMessage(message)){
            event.preventDefault();
            $("#message-feedback").text("minimum of 10 characters are required");
        }
        else{
            $("#message-feedback").text("");
        }
}

function isValidMessage(message){
    return message.trim() !="";
}

function validateChecked(checkbox,event){
    if(!isValidChecked(checkbox)){
        event.preventDefault();
        $("#checkbox-feedback").text("please check this check box");
    }
    else {
        $("#checkbox-feedback").text(" ");
    }
}

function isValidChecked(checkbox){
    return checkbox;
}