import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <h2>Get in touch</h2>
      <form>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
        />
        <br />
        <label htmlFor="lastName">Last name</label>
        <input type="text" name="lastName" id="lastName" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="phone">Phone</label>
        <input type="phone" name="phone" id="phone" />
        <br />
        <input className={styles.submit_btn} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
