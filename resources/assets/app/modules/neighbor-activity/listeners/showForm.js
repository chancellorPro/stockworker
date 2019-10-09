import observer from "components/observer/EventObserver";
import {NEIGHBOR_ACTIVITY_SHOW_FORM} from "../constants";
import changeType from "../handlers/changeType";

export default function () {
    observer.subscribe(NEIGHBOR_ACTIVITY_SHOW_FORM, (data, self) => {
        observer.unsubscribe(NEIGHBOR_ACTIVITY_SHOW_FORM, self);

        changeType();

        $('.neighbor-activity-form .datetimepicker').datetimepicker({
            format: 'yyyy-mm-dd hh:ii:ss',
            autoclose: true
        });
    });
}
