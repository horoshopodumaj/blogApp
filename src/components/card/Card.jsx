import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = ({ item }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.03.2023 - </span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href="/">
                    <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc}>{item.desc}</p>
                <Link href="/" className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;
