import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/social_update.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <Button text='See Our Work' url='/portfolio' />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='Picture of the author' className={styles.img} />
      </div>
    </div>
  );
}
