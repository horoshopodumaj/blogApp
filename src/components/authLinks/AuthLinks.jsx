"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const status = "notauth";
    return (
        <>
            {status === "notauth" ? (
                <Link href="/login" className={styles.link}>
                    Login
                </Link>
            ) : (
                <>
                    <Link className={styles.link} href="/write">
                        Write
                    </Link>
                    <span className={styles.link}>Logout</span>
                </>
            )}
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Homepage</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    {status === "notauth" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span className={styles.link}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default AuthLinks;
