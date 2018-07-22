import { TimePicker } from '@blueprintjs/datetime';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

export const renderTimePicker = ({ input }: WrappedFieldProps) => {
    
    const prepareTimePickerValue = (inputValue: number) => {
        const date = new Date();
        const hours = inputValue % 60;
        const minutes = inputValue - hours * 60;
        date.setHours(hours);
        date.setMinutes(minutes);

        return date;
    }
    
    const onTimePickerChange = (newDate: Date) => {
        const minutes = newDate.getMinutes();
        const hours = newDate.getHours();
        
        const totalMinutes = minutes + hours * 60;
        
        input.onChange(totalMinutes);
    };

    return (
        <TimePicker
            onChange={onTimePickerChange}
            value={prepareTimePickerValue(input.value)}
            showArrowButtons={true}
        />
    );
    
}
