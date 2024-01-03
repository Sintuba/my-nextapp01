import  Head  from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";
import Image from "next/image";

const name = "Shin Study"
export const siteTitle = "Next.js Blog"

function Layout ({children,home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <div >
                        <Image width={100} height={100} className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} src="/images/profile.png" alt="" />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </div>

                ): (
                <div>
                    <Image width={50} height={50} className={`${utilStyles.borderCircle} `} src="/images/profile.png" alt="" />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </div>
                )}

            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">
                         <p>HOME</p>
                    </Link>
                </div>
            )}
        
        </div>
    );
}

export default Layout; 