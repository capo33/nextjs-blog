import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return notFound();
  }
  return response.json();
};

const BlogPost = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt='' fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
