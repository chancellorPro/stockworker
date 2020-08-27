import html2canvas from 'html2canvas';

$(document)
    .ready(function(){$('.reports').css('pointer-events', 'auto')})

    .on('click', '#product_id', function () {
        $('#product_id').prev('.select2-container').find('.select2-search__field').focus()
    })

    .on('click', '#send-report', function(e) {
        e.preventDefault();

        $(this).closest("form").submit();

        return false;
    })

    .on('click', '.reports', function (e) {
        e.preventDefault();

        $('#send-report').attr('disabled', true);
        $('.reports').css('pointer-events', 'none');

        let dateFrom = $('[name="today[from]"]').val();
        let dateTo = $('[name="today[to]"]').val();
        let canvas = $('#canvas-data').val();
        let data = {from: dateFrom, to: dateTo, canvas: canvas};
        let canvas_handler = $("#canvas_handler");

        if (Object.keys(data).length) {
            $.ajax({
                url: $(this).attr('href'),
                type: 'POST',
                data: data,
                error: response => {
                    $('.reports').css('pointer-events', 'auto')
                    if (!!response.responseJSON) {
                        this._error(response.responseJSON);
                    }
                },
                success: function (r) {
                    console.log('success')
                    $('.reports').css('pointer-events', 'auto')
                    canvas_handler.empty();
                    if (r.hasOwnProperty('success')) {
                        $('.modal-title').text(r.success);
                        $('.modal-header').css('background', '#a7ff83');
                    } else {
                        new ModalBuilder()
                            .header('Предпросмотр отчета')
                            .body(r)
                            .modal();
                    }
                },
                complete: function (r) {
                    $('.reports').css('pointer-events', 'auto')
                    console.log('complete');
                    postProcess();
                },
            });
        }

        function postProcess() {

            let submitBtn = $('#load');
            submitBtn.data('loading-text', '<i class="fa fa-spinner fa-spin"></i> Подготовка');
            submitBtn.button('loading');
            submitBtn.attr('disabled', true);

            setTimeout(function () {
                let element = $(".html-content-holder");
                let canvas_handler = $("#canvas_handler");
                canvas_handler.empty();

                const copy_ele = $(element).find('.wrapper').get(0).cloneNode(true);
                canvas_handler.append(copy_ele);
                canvas_handler.css('height', element.scrollHeight + 20);
                canvas_handler.css('width', 760);

                html2canvas(copy_ele, {
                    scrollX: 0,
                    scrollY: 0,
                    useCORS: true,
                }).then(function (canvas) {
                    let imageData = canvas.toDataURL("image/png");
                    let newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
                    $('#canvas-data').val(newData);
                    $('#send-report').attr('disabled', false);
                    // element.append(canvas_handler.html())
                    element.empty();
                    element.get(0).appendChild(canvas)

                    setTimeout(function () {
                        submitBtn.button('reset');
                        $('#send-report').attr('disabled', false);
                    }, 500)
                });

            }, 300)
        }

    });
