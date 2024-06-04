import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/CartPage.module.css';
import Image from 'next/image';

const Confirmation = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.confirmationPage}>
        <div className={styles.confirmationContainer}>
          <div className={styles.imageAndText}>
            <div className={styles.imageContainer}>
              <Image
                src="/delivery-picture.png"
                alt="Delivery Picture"
                className={styles.confirmationImage}
                width={300}
                height={300}
              />
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.confirmationHeading}>Your order has been placed!</h1>
              <p className={styles.confirmationSubHeading}>Please do the payment before we send you a real bomb. JK</p>
              <p className={styles.confirmationOrderId}>Order ID: 20240512XXXX</p>
              <button className={styles.confirmationButton} onClick={() => {window.location.href = '/orders';}}>View order status</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Confirmation;
