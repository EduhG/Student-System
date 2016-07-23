var itemContainerHeight = 0;

$(".item-details").each(function () {
    if ($(this).height() > itemContainerHeight) {
        itemContainerHeight = $(this).height();
    }
});
$(".item-details").css('min-height', itemContainerHeight);

//alert(itemContainerHeight);

function resize() {
    //$(".item-details").css('height', itemContainerHeight);
    $(".item-details").css('min-height', itemContainerHeight);
    //alert();
}

window.onresize = resize;

/*//$(".item-container").height(itemContainerHeight);
$(".item-container").css('min-height', itemContainerHeight);
//alert();
$(function () {
    var totalHeight = 0;
    $(".item-details").each(function () {
        totalHeight += $(this).height();
    });
    alert("Total height of all divs: " + totalHeight);
});*/