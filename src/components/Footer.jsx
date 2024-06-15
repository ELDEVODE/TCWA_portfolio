import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <motion.footer
        className="footer items-center p-4 bg-gray-100 text-neutral-content"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 text-primary md:place-self-center md:justify-self-end">
          <motion.a
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="mailto:info@tcwafrica.org"
          >
            <FaEnvelope size={24} />
          </motion.a>
          <motion.a
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="https://www.linkedin.com/company/the-confident-woman-africa/"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="https://www.instagram.com/theconfidentwoman.360balance?igsh=MXRlMWo3aDRkYmZqeA%3D%3D&utm_source=qr"
          >
            <FaInstagram size={24} />
          </motion.a>
          <motion.a
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            href="https://www.facebook.com/profile.php?id=100095483804796&mibextid=LQQJ4d"
          >
            <FaFacebook size={24} />
          </motion.a>
          <motion.a
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            href="https://t.me/TCW_Forum"
          >
            <FaTelegram size={24} />
          </motion.a>
        </nav>
      </motion.footer>
    </>
  );
}
