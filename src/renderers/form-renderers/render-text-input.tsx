import { H4, InputGroup } from '@blueprintjs/core';
import React from 'react';
import { IFormFieldProps } from './interfaces';

export const renderTextInput = (props: IFormFieldProps) => {
    const { input, meta, label, placeholder } = props;
    return (
        <React.Fragment>
            <H4>{label}</H4>
            <InputGroup
                onChange={input.onChange}
                value={input.value}
                onBlur={input.onBlur}
                placeholder={placeholder}
            />
            {
                meta.touched &&
                meta.dirty &&
                <p>{meta.error}</p>
            }
    </React.Fragment>
)};