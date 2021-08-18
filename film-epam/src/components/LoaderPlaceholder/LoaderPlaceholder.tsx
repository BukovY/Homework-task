import styles from "./LoaderPlaceholder.module.sass";
import { FC } from "react";

export const LoaderPlaceholder: FC = () => {
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
