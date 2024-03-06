import { notFound } from "next/navigation";
import { products } from "../data";
import styles from "../styles.module.css";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    notFound();
  }
  return (
  <div className={styles.container}>
    <div className={styles.product}>
      <h1 className={styles.name}>{product?.name}</h1>
      <p className={styles.brand}>{product?.brand}</p>
      <Image src={product?.image} width={400} height={300} />
    </div>
  </div>);
}
