import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import styles from "./singlePage.module.css";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium, veritatis itaque, ex impedit illum at, rem officia repellendus laboriosam cum iste! Dolores,
                            iusto. Deserunt eius ipsum neque odio at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam maiores molestiae, obcaecati expedita officiis modi atque sint
                            similique at eos. Minima quae et earum reprehenderit omnis maiores asperiores itaque cum!
                        </p>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium, veritatis itaque, ex impedit illum at, rem officia repellendus laboriosam cum iste! Dolores,
                            iusto. Deserunt eius ipsum neque odio at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam maiores molestiae, obcaecati expedita officiis modi atque sint
                            similique at eos. Minima quae et earum reprehenderit omnis maiores asperiores itaque cum!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium, veritatis itaque, ex impedit illum at, rem officia repellendus laboriosam cum iste! Dolores,
                            iusto. Deserunt eius ipsum neque odio at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam maiores molestiae, obcaecati expedita officiis modi atque sint
                            similique at eos. Minima quae et earum reprehenderit omnis maiores asperiores itaque cum!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium, veritatis itaque, ex impedit illum at, rem officia repellendus laboriosam cum iste! Dolores,
                            iusto. Deserunt eius ipsum neque odio at! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam maiores molestiae, obcaecati expedita officiis modi atque sint
                            similique at eos. Minima quae et earum reprehenderit omnis maiores asperiores itaque cum!
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default SinglePage;
