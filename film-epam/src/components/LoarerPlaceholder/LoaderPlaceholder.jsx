import styles from "./LoaderPlaceholder.module.sass";

export const LoaderPlaceholder = () => {
  return (
    <div className={styles.multi_spinner_container}>
      <div className={styles.multi_spinner}>
        <div className={styles.multi_spinner}>
          <div className={styles.multi_spinner}>
            <div className={styles.multi_spinner}>
              <div className={styles.multi_spinner}>
                <div className={styles.multi_spinner}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
