import css from './ContactForm.module.css'

const ContactForm = ({ name, number, handleChange, handleSubmit }) => {
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input type='text' name='name' value={name} onChange={handleChange} required />
      </label>
      <label>
        Number
        <input type="tel" name="number" value={number} onChange={handleChange} required />
      </label>
      <button className={css.submitButton} type='submit'>Add Contact</button>
    </form>
  );
};

export default ContactForm;
