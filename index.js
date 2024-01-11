// $("form").on("submit", function(event)
// {
//     var url=$(".inputForm").val();
//     //var qr_svg = qr.image(url);
//     console.log(url);
//     qr_svg.pipe(fs.createWriteStream('qrcode-image.png'));
//     $("img").attr("src","qrcode-image.png");
// });
//code above needs some changes

var generate = $('.generateQR');
var qrInput = $('.inputForm');
var qrImage = $('.qr-image');

generate.on("click", function()
{
    qrImage.attr("src","https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrInput.val());
    console.log(qrInput.val());
});