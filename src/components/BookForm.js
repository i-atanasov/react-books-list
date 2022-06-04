import React from "react";
import { Form, Field } from "react-final-form";
 
const BookForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
 
  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const renderTextArea = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <textarea {...input} />
      </div>
    );
  };
 
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };
 
  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};
 
        if (!formValues.title) {
          errors.title = "You must enter a title";
        }
 
        if (!formValues.author) {
          errors.author = "You must enter an author";
        }
 
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
            <div className="ui container">
                <h3>{props.title}</h3>
                <Field name="title" component={renderInput} label="Enter Title*:" />
                <Field
                    name="author"
                    component={renderInput}
                    label="Enter Author*:"
                />
                <Field name="coverurl" component={renderInput} label="Enter URL for cover image:" />
                <Field name="published" component={renderInput} label="Year of publication:" />
                <div className="ui toggle checkbox">
                    <Field
                        name="read"
                        component="input"
                        type="checkbox"
                        defaultValue={false}
                        className=""
                    />
                    <label className="label" htmlFor="read">
                        Read
                    </label> 
                </div>
                <Field name="notes" component={renderTextArea} label="Notes:" />

            <button className="ui button primary">Submit</button>
          </div>
        </form>
      )}
    />
  );
};
 
export default BookForm;