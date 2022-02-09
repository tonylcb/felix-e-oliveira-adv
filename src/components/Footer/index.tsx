import styles from './footer.module.scss'
import InstagramSvg from '../../../public/instagram1.svg'
import FacebookSvg from '../../../public/facebook1.svg'
import WhatsappSvg from '../../../public/whatsapp1.svg'
import EmailSvg from '../../../public/email2.svg'

export function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.contactTitle}>Fale conosco</h3>
                <div className={styles.contactLinks}>
                    <a href="https://www.instagram.com/felixoliveiraadvogados/" target="_blank" rel='noreferrer'>
                        <InstagramSvg />
                    </a>
                    <a href="https://www.facebook.com/felixoliveiraadvogados" target="_blank" rel='noreferrer'>
                        <FacebookSvg />
                    </a>
                    <a href="https://web.whatsapp.com/send?phone=558135233058" target="_blank" rel='noreferrer'>
                        <WhatsappSvg />
                    </a>
                    <a href="mailto:contato@felixoliveiraadvogados.com">
                        <EmailSvg /> 
                    </a>
                </div>
            </div>
        </footer>
    );
}