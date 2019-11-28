import html2canvas from 'html2canvas';

$(document)

    .on('click', '#product_id', function () {
        $('#product_id').prev('.select2-container').find('.select2-search__field').focus()
    })

    .on('click', '.reports', function () {
        $('#send-report').attr('disabled', true);
        setTimeout(function () {
            let element = $("#html-content-holder");
            let canvas_handler = $("#canvas_handler");
            canvas_handler.empty();

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
                $('#send-report').attr('disabled', false);
            });
        }, 300)
    });
