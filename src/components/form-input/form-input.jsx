import './form-input.scss';

export const FormInput = ({handleChange, label, ...otherInputProps}) => {
  return (
    <div className="form_input-group">
      <input className="form_input-input" onChange={handleChange} {...otherInputProps} />
      {label ? (
        <label className={`form_input-label ${otherInputProps.value.length ? 'shrink' : ''}`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};
