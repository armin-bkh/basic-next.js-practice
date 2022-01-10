import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Navbar.module.scss";

const links = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/users",
    title: "Users list",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.hambergure}>
        <p>Armin</p>
        <button
          className={`${styles.hambergureMenuBtn} ${
            open && styles.hambergureMenuBtnOpen
          }`}
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      <nav className={open ? styles.openMenu : null}>
        <ul className={styles.navbar}>
          {links.map((link) => (
            <li
              className={`
                ${router.pathname === link.href && styles.activeLink}
                ${styles.link}
              `}
              key={link.href}
            >
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
