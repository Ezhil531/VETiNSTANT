import styles from "./navbar.module.scss";
import logo from "../../assets/logo.png";
import dasboard from "../../assets/layout-dashboard.svg";
import appointment from "../../assets/clipboard-clock.svg";
import pet from "../../assets/paw-print.svg";
import inventory from "../../assets/briefcase.svg";
import plan from "../../assets/heart-plus.svg";
import menu from "../../assets/hamburger.svg";
import x from "../../assets/x.svg";

import { useState } from "react";

const Navbar = () => {
  const [showHamburger, setshowHamburger] = useState(false);
  return (
    <div className={styles.container}>
      <img src={logo} height={36} width={36} />
      <nav>
        <ul>
          <li>
            <img src={dasboard} height={10} width={10} />
            <span>Dashboard</span>
          </li>
          <li>
            <img src={pet} height={10} width={10} />
            <span>Pets</span>
          </li>
          <li>
            <img src={appointment} height={10} width={10} />
            <span>Appointments</span>
          </li>
          <li>
            <img src={inventory} height={10} width={10} />
            <span>Inventory</span>
          </li>
          <li>
            <img src={plan} height={10} width={10} />
            <span>Plan</span>
          </li>
        </ul>
      </nav>

      <div className={styles.alignCenter}></div>

      <div
        className={styles.hamburger}
        onClick={() => setshowHamburger(!showHamburger)}
      >
        <img
          src={showHamburger ? x : menu}
          height={30}
          width={30}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Navbar;
