import observer from "components/observer/EventObserver";
import http from "components/http/RequestBuilder";
import {getModalCounter} from "components/modal/ModalBuilder";
import successHandler from "components/http/successHandler";
import errorHandler from "components/http/errorHandler";

/**
 * Submit form
 */
export default function(e) {
    e.preventDefault();
    console.log('SEND');

    const currentButton = $(this);

    if (currentButton.hasClass('loading')) {
        return false;
    }
    currentButton.addClass('loading');

    new http(this.href)
        .data(currentButton.closest('form').serializeArray())
        .method(this.dataset.method || 'get')
        .success(response => {
            if (!!this.dataset.event) {
                observer.dispatch(this.dataset.event, response);
            }

            if (response.type !== 'error' && canReload(this)) {
                location.reload();
            }

            if (parseInt(this.dataset.dismiss) === 1) {
                currentButton.closest('.modal').modal('hide');
            }

            if(response.type === 'error') {
                errorHandler(response);
            } else {
                successHandler(response);
            }
        })
        .complete(r => {
            if(r.responseJSON.hasOwnProperty('report_image')) {
                $('#report_path').val(r.responseJSON.report_image);
            }
            currentButton.removeClass('loading');
        })
        .send();

    return false;
}

/**
 * Can reload the page
 *
 * @param button
 * @returns {boolean}
 */
function canReload(button) {
    if (parseInt(button.dataset.reload) === 1) {
        if (getModalCounter() < 2) {
            const dataReload = $(button).closest('.modal').data('reload');
            if (typeof dataReload === typeof undefined || dataReload === false || parseInt(dataReload) === 1) {
                return true;
            }
        }
    }

    return false;
}
