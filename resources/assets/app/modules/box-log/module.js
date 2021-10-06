$(document)
    .ready(function(){
        $('.reports').css('pointer-events', 'auto');
    })

    .on('click', '.reports', function (e) {
        e.preventDefault();

        $('#report').attr('disabled', true);
        $('.reports').css('pointer-events', 'none');

        let dateFrom = $('[name="report[from]"]').val();
        let dateTo = $('[name="report[to]"]').val();
        let data = {from: dateFrom, to: dateTo};

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
                    $('.reports').css('pointer-events', 'auto')
                    if (r.hasOwnProperty('success')) {
                        $('.modal-title').text(r.success);
                        $('.modal-header').css('background', '#a7ff83');
                    }
                },
            });
        }
    });
