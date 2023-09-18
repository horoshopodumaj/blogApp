import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import styles from "./navbar.module.css";

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/telega.png" alt="telega" width={24} height={24} />
                <Image src="/vk.png" alt="vk" width={24} height={24} />
                <Image src="/youtube.png" alt="youtube" width={24} height={24} />
            </div>
            <div className={styles.logo}>Blog</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/" className={styles.link}>
                    Homepage
                </Link>
                <Link href="/" className={styles.link}>
                    Contact
                </Link>
                <Link href="/" className={styles.link}>
                    About
                </Link>
                <AuthLinks />
            </div>
        </div>
    );
};
