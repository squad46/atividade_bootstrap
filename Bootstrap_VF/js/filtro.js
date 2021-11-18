$(function () {
    $("button").click(function () {
        var categoria = $(this).get(0).id;
        $("#menu div").css("display", "block");
        $("#menu div").each(function () {
            if ($(this).get(0).id != categoria && categoria != "todos") {
                $(this).css("display", "none");
            }
            else if (categoria == "todos") {
                $("#menu div").css("display", "block");
            }
        });
    });
});

$(function () {
    $("a").click(function () {
        var categoria = $(this).get(0).id;
        if (categoria != "") {
            $("#menu div").css("display", "block");
            $("#menu div").each(function () {
                if ($(this).get(0).id != categoria && categoria != "todos") {
                    $(this).css("display", "none");
                }
                else if (categoria == "todos") {
                    $("#menu div").css("display", "block");
                }
            });
        }
    });
});