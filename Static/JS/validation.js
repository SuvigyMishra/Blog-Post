$("#fname, #lname").on("keyup", () => {
    if ($("#fname").val() !== "") {
        $("#fname").css("border", "2px solid green");
    } else {
        $("#fname").css("border", "1px solid #ced4da");
    }

    if ($("#lname").val() !== "") {
        $("#lname").css("border", "2px solid green");
    } else {
        $("#lname").css("border", "1px solid #ced4da");
    }
});

$("#email").on("keyup", () => {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test($("#email").val())) {
        $("#email").css("border", "2px solid green");
    }
});

$("#confirm_password").on("keyup", () => {
    if ($("#password").val() !== $("#confirm_password").val()) {
        $("#message").html("Passwords do not match!").css("color", "red");
        $("#password").css("border", "2px solid red");
        $("#confirm_password").css("border", "2px solid red");
    } else {
        $("#message").html("");
        $("#password").css("border", "2px solid green");
        $("#confirm_password").css("border", "2px solid green");
        $("#submitSignUp").prop('disabled', false);
    }
});
