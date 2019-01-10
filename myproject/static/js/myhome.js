$(function () {
    $('img').each(function () {
        var imgPath = $(this).attr('src').slice(3);
        imgPath = "{% static '" + imgPath +"'%}";
        $(this).attr('src',imgPath)

    });
    console.log($('body').html())

});