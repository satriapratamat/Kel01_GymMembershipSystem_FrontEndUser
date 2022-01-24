import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClassesCardListGrid from "../../src/components/Card/ClassesCardListGrid";
import styles from "../../styles/classes/Index.module.css";
import FeaturedClassesCardSlides from "../../src/components/Card/FeaturedClassesSlides";
import { parseCookies } from "nookies";
import { useState } from "react";
import FilterClass from "../../src/components/Modal/FilterClass";

export default function Classes() {
  const { token } = parseCookies();
  const [openModal, setOpenModal] = useState(false);
  const handleOnClick = () => {
    setOpenModal(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Classes on CalFit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.pagetitle}>
          <h1>Classes</h1>
          {token && (
            <Link href="/account">
              <Image
                src="/dummy-pp.png"
                className={styles.ppdummy}
                alt="Profile Picture Dummy"
                height={65}
                width={65}
              />
            </Link>
          )}
        </div>
        <div className={styles.description}>
          <h3>Featured Classes</h3>
        </div>
        {/* <FeaturedClassesCardSlides/> */}
        <div className={styles.description}>
          <h3>Explore All Classes</h3>
          <FilterAltIcon
            className={styles.filtericon}
            onClick={() => handleOnClick()}
          />
        </div>
        {openModal && <FilterClass setOpenModal={setOpenModal}></FilterClass>}
        <ClassesCardListGrid />
      </main>
    </div>
  );
}
