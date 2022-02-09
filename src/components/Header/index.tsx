import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link';

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <Link href="/" passHref>
                    <Image src="/logo3.png" className={styles.logo} alt="logo" width="256" height="62"/>               
                </Link>
            </div>
        </header>
    );
}