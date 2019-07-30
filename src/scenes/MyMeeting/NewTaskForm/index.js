import React, { Fragment, PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux';
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <Input
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

class NewTaskForm extends PureComponent{
  handleFormSubmit = (data) => {
    this.props.handleSubmit(data)
    this.props.reset()
  }
  render() {
    const { placeholder, name } = this.props
    console.log('props', this.props)
    return(
      <form onSubmit={this.handleFormSubmit}>
        <Field component={renderTextField} placeholder={placeholder} name={name} />
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    form: ownProps.name
  }
}

export default compose(
  connect(mapStateToProps),
  reduxForm({})
)(NewTaskForm);
