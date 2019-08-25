$(document).ready(function(){
    $("form").on("submit", (function(e){
        e.preventDefault();
        var addData = $("input.add").serialize();
        $.ajax({
            url:'server.php',
            type: 'POST',
            data: addData,
            success: function () {
                console.log('Удивительно!!!');
            },
            error: function(){
                var answer = {
                    status: "success", 
                    message: ["данные сохранены", "сумма = "]};
                $(".answerServ").css("display", "block");
                var arr = $("input.add");
                var summ = +(arr[0].value) + +(arr[1].value);
                $(".answerServ").html(answer.message[0]);
                setTimeout (function (){$(".answerServ").html(answer.message[1] + summ);}, 3000);
                setTimeout (function (){$(".answerServ").css("display", "none");}, 6000);
            }
        })
    }))
})