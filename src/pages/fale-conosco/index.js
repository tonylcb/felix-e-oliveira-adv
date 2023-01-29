import Link from "next/link";
import styles from "./fale-conosco.module.scss";

export default function FaleConosco() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className="title">Fale conosco</h1>
        <section className={styles.contactPhoneSection}>
          <h3 className={styles.contactPhoneText}>Contacte-nos através do telefone (81) 3523-3058 ou via <Link href="https://web.whatsapp.com/send?phone=558135233058" target="_blank" rel="noreferrer">Whatsapp</Link>.</h3>
          <div className={styles.contactPhoneOpeningHoursContainer}>
            <h3>Horário de atendimento:</h3>
            <p>Segunda à quinta-feira de 09:00 às 17:00</p>
            <p>Sexta-feira de 09:00 às 12:00</p>
          </div>
        </section>
        <section className={styles.contactMapSection}>
          <h3 className={styles.contactMapTitle}>Localização física do escritório:</h3>
          <div className={styles.mapouter}><div className={styles.gmapCanvas}><iframe className={styles.gmapIframe} width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1920&amp;height=800&amp;hl=en&amp;q=R. Dr. Demócrito Cavalcante, 355 - Livramento, Vitória de Santo Antão&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://pdflist.com/" alt="pdf">Pdf</a></div></div>
        </section>
      </div>
    </main>
  );
}
