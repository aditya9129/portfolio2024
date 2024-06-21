
import styles from "./contactStyles.module.css"
function Contact(){
  return  (
    <section className={styles.container}>
        <h1>CONTACT</h1>
        <form className={styles.form}>
            <div>
            <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
            </div>
            <div>
            <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
            </div>
            <div>
            <label htmlFor="message" hidden>
            Messagge
          </label>
            <textarea  name="message"
            id="message"
            placeholder="Message"
            required>
            </textarea>
            </div>
            <button>Submit</button>
        </form>
    </section>
  )
}
export default Contact;