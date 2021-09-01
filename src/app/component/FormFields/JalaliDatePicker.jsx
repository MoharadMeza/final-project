import React, { useState } from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker,{utils} from "@hassanmojab/react-modern-calendar-datepicker";
import { TextField } from "@material-ui/core";
import { useField } from "formik";
import { at } from "lodash";

const JalaliDatePicker = (props) => {
    const [touch , setTouch] = useState(false)
    const [selectedDay, setSelectedDay] = useState(null);
    const { errorText, ...rest } = props;
    const [field, meta, helpers] = useField(props.name);
    const { setValue } = helpers
    function _renderHelperText() {
        const [touched, error] = at(meta, 'touched', 'error');
        if (touched && error) {
            return error;
        }
    }

    const renderCustomInput = ({ ref }) => (
        <TextField
            dir="ltr"
            defaultValue={field.value ? `${field.value.year}-${field.value.month}-${field.value.day}` : ""}
            value={selectedDay ? `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}` : null}
            fullwidth
            readOnly
            error={meta.touched && meta.error && true}
            helperText={_renderHelperText()}
            ref={ref} // necessary
            onFocus={()=>setTouch(true)}
            onBlur={()=>{!field.value && setTouch(false)}}
            label="تاریخ حادثه"
            InputLabelProps={{shrink : field.value || touch ? true : false}}
            className="my-custom-input-class h-100" // a styling class
        />
    )
    return (
        <DatePicker
            calendarPopperPosition="bottom"
            locale="fa"
            value={selectedDay}
            onChange={(date) => {
                if (date){
                    setValue(date)
                    setSelectedDay(date)
                }
            }}
            minimumDate={{
                year: 1399,
                month: 5,
                day: 1
            }}
            maximumDate={utils('fa').getToday()}
            renderInput={renderCustomInput} // render a custom input
            shouldHighlightWeekends
            wrapperClassName="h-100 align-self-end d-flex"
        />
    );
};
export default JalaliDatePicker;