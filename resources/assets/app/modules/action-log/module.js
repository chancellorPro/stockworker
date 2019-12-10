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
            let submitBtn = $('#load');

            submitBtn.data('loading-text', '<i class="fa fa-spinner fa-spin"></i> Подготовка');
            submitBtn.button('loading');
            submitBtn.attr('disabled', true);
            canvas_handler.empty();

            element.width(480);
            element.css('margin', 20);
            element.css({"border-color": "#2d2d2d",
                "border-width":"2px",
                "border-style":"solid"});

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
                setTimeout(function () {
                    submitBtn.button('reset');

                    $('#send-report').attr('disabled', false);
                }, 4000)
            });
        }, 300)
    });
