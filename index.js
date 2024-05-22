$(document).ready(function () {

})
$("p").click(function () {
    $(".madremia").hide();
    $(this).css("color", "red");
})
$(".ocultar").on("click", function (
) {
    $("p").toggle(1000)

})
$("#mostrar").click(function () {
    $("p").show(1000)
})

$("input").keydown(function () {
    $(this).css("width", "300px")
})
$("input").focus(function () {
    $(this).css("background-color", "red")
})


$(".seleccionar").click(function () {
    $(".tercero").text("que fue perrito");
    alert($(".primero").html)

})

$("#enviar").click(function () {
    alert("tu nombre es " + $("#nombre").val())
    $("#nombre").val("pichi")
})