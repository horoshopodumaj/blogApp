import Image from "next/image";
import Link from "next/link";
import styles from "./comments.module.css";

const Comments = () => {
    const status = "auth";
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "auth" ? (
                <div className={styles.write}>
                    <textarea placeholder="write a comment..." className={styles.input}></textarea>
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni reiciendis voluptatibus ea laboriosam quaerat, obcaecati rerum molestiae voluptatum explicabo minima
                        deserunt nihil non? Sunt optio molestias id provident facere quisquam reiciendis ad, quos nam perferendis esse voluptatem similique doloribus?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Comments;
