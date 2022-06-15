import styles from './styles.module.css'

export const Button: React.FC<{ children: any }> = ({ children }) => {
  return <button className={styles['button']}>{children}</button>
}
