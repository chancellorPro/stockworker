$(document)

    .on('click', '#product_id', function () {
        console.log('product_id');
        $('#product_id').prev('.select2-container').find('.select2-search__field').focus()
    });
