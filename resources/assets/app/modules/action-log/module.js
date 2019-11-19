import html2canvas from 'html2canvas';
import http from "components/http/RequestBuilder";

$(document)

    .on('click', '#product_id', function () {
        $('#product_id').prev('.select2-container').find('.select2-search__field').focus()
    })

    .on('click', '.reports', function () {
        setTimeout(function () {
            let element = $("#html-content-holder"); // global variable
            let canvas_handler = $("#canvas_handler"); // global variable

            const copy_ele = element.get(0).cloneNode(true);
            canvas_handler.append(copy_ele);
            canvas_handler.css('height', element.scrollHeight + 20);
            canvas_handler.css('width', element.scrollWidth + 10);

            html2canvas(copy_ele, {
                scrollX: 0,
                scrollY: -1,
                useCORS: true,
            }).then(function (canvas) {
                let imageData = canvas.toDataURL("image/png");
                let newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
                $('#canvas-data').val(newData);
            });
        }, 500)
    });
