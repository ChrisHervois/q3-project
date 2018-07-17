import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem, editItem } from '../actions';

class ItemForm extends Component {
    renderField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <input
                    type="text"
                    {...field.input}
                />
            </div>
        )
    }

    onSubmit(values) {
        const { path } = this.props.match;
        const { id } = this.props.match.params;
        if (path === '/edit/:id') {
            this.props.editItem(values, id, () => {
                this.props.history.push('/');
            })
        } else {
            this.props.addItem(values, () => {
                this.props.history.push('/');
            })
        }

    }



    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Item Name"
                    name="item_name"
                    component={this.renderField}
                />
                <Field
                    label="Item Description"
                    name="item_description"
                    component={this.renderField}
                />
                <Field
                    label="Item Price"
                    name="item_price"
                    component={this.renderField}
                />
                <Field
                    label="Add Image"
                    name="img_url"
                    component={this.renderField}
                />
                <button type="submit">Save</button>
                <Link to="/">Cancel</Link>
            </form>
        )
    }
}

export default reduxForm({
    form: 'NewItemForm'
})(
    connect(null, { addItem, editItem })(ItemForm)
);