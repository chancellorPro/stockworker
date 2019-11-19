import html2canvas from 'html2canvas';
import http from "components/http/RequestBuilder";

$(document)

    .on('click', '#product_id', function () {
        $('#product_id').prev('.select2-container').find('.select2-search__field').focus()
    })

    .on('click', '.reports', function () {
        setTimeout(function () {
            let element = $("#html-content-holder"); // global variable

            html2canvas(element.get(0), {
                scrollX: 0,
                scrollY: -1
            }).then(function (canvas) {
                let imageData = canvas.toDataURL("image/png");
                let newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
                $('#canvas-data').val(newData);
            });
        }, 500)
    });
