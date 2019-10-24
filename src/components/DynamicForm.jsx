import React, { Component } from "react";

class DynamicForm extends Component{

    state = {
        fields: [
            {
                placeholder: "Investable Asset",
                name: "investmentAsset",
                input_tpye: "dropdown",
                required: true, 
                values: [
                    "WETH",
                    "BAT"
                ]
            },
            {   
                placeholder: "Amount",
                name: "amount",
                input_type: "text",
                required: true
            }
        ]
    }

    submitForm = event => {
        const {fields, ...inputFields} = this.state; 
        console.log(inputFields);
    //TODO
        event.preventDefault();
    };

    _handleChange = event => {
        this.ListeningStateChangedEvent({
            [event.currentTarget.name]: event.currentTarget.value
        });
    };
}

export default DynamicForm;