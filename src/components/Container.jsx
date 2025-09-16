import styles from "./../style";

function Container({ children }) {
  return (
    <div className={`bg-gray-900 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>{children}</div>
    </div>
  );
}

export default Container;
