$(".deleteBtn").click(function () {
    $.ajax({
        //Using ajax so page does not refresh
        url: "/delete/" + $(this).val(),    //Deleting the element in database
        method: "POST",
        success: () => {
            //Removing List Element
            $("#" + $(this).val()).remove();
        },
    });
});
