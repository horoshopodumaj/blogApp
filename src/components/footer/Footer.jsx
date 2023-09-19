import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="blog" width={50} height={50} />
                    <h1 className={styles.logoText}>Blog</h1>
                </div>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum porro sequi, totam minima consequuntur,
                    aspernatur deleniti vero repellendus dorales.
                </p>
                <div className={styles.icons}>
                    <Image src="/telega.png" alt="" width={18} height={18} />
                    <Image src="/vk.png" alt="" width={18} height={18} />
                    <Image src="/youtube.png" alt="" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Telegram</Link>
                    <Link href="/">VK</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </div>
        </div>
    );
};
