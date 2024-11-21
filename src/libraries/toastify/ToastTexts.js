import { Text } from 'components';
import styles from './toast.scss';

const ToastTexts = ({ color, title, description }) => (
  <div className={styles.container}>
    <p style={{ color: color }} className={styles.container__title}>
      <Text text={title} />
    </p>
    {description && <span className={styles.container__description}>{description}</span>}
  </div>
);

export default ToastTexts;
