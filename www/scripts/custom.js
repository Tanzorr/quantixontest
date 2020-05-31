
$(".image-carousel").owlCarousel({
    items: 1,
    autoPlay: true,
    stopOnHover: true,
    navigation: true,
    navigationText : false,
    responsiveBaseWidth: ".image-carousel-slide"
    //responsiveBaseWidth: ".author"
});

$(document).ready(function () {
    $("#submit-form").on("click", function () {
        const FirstName = $("#first_name").val()
        const LastName = $("#last_name").val()
        const email = $("#email").val()
        const phone = $("#phone_number").val()
        const curese = $("#course").val()
        const message = $("#message").val()

        $.ajax({
            url:"http://127.0.0.1/data.php",
            type:"POST",
            data:{"FirstName":FirstName,"LastName":LastName,"Email":email,"Phone":phone,"Curse":curese,"Message":message},
            dataType:'html',
            success: function (data) {
                if(!data){
                    alert("Error message not send")
                }else {
                    $("#microsite-form").trigger("reset")
                }

            }
        })


    })
})