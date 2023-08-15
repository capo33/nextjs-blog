import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <div>
        © {year}{" "}
        <Link href='https://www.linkedin.com/in/mohamed-capo/'>Mohamed</Link>
      </div>
      <div className={styles.social}>
        <Image
          src='/1.png'
          width={15}
          height={15}
          className={styles.icon}
          alt=''
        />
        <Image
          src='/2.png'
          width={15}
          height={15}
          className={styles.icon}
          alt=''
        />
        <Image
          src='/3.png'
          width={15}
          height={15}
          className={styles.icon}
          alt=''
        />
        <Image
          src='/4.png'
          width={15}
          height={15}
          className={styles.icon}
          alt=''
        />
      </div>
    </div>
  );
};

export default Footer;
