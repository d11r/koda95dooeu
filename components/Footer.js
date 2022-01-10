import Image from 'next/image'
import styles from './Footer.module.css'

import Logo from './koda95.png'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Image
          src={Logo}
          alt="KODA95 logo"
          placeholder="KODA95 logo"
          height={36}
          width={36}
        />
        KODA95doo. Sva prava zadrzana.
      </footer>
    </>
  )
}
