import Image from "next/image";
import Link from "next/link";
import styles from "./categoryList.module.css";

const getData = async () => {
    const res = await fetch(`${process.env.URL}/api/categories`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

const CategoryList = async () => {
    const data = await getData();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Category</h1>
            <div className={styles.categories}>
                {data?.map((item) => (
                    <Link href={`/blog?cat=${item.slug}`} key={item._id} className={`${styles.category} ${styles[item.slug]}`}>
                        {item.img && <Image src={item.img} alt="" width={32} height={32} className={styles.image} />}
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
