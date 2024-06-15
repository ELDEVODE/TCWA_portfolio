import { motion } from "framer-motion";
import Logo from "../assets/WhatsApp Image 2024-06-14 at 14.20.56_1757a929.jpg";

export default function About() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <motion.img
            src={Logo}
            className="max-w-sm rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-primary">About Us</h1>
            <motion.p
              className="pt-6 pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              The Confident Woman (TCW) Africa is a 360° Transformational
              Coaching Institute for girls/ladies in Africa. TCW guides these
              ladies through the journey of Self-Discovery, Self-Development and
              Self-Maximization.
            </motion.p>
            <motion.p
              className="py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Our mission is to bring balance to two major stereotyped extremist
              in Africa; The sociocultural norms and practices that limit the
              participation and empowerment of women and the self limiting
              mindset these norms have instilled in the lives of most African
              women resulting to a mediocre way of life.
            </motion.p>
            <motion.p
              className="py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We are achieving our first goal through a three stage growth
              approach; Mindset Reorientation, Skill Acquisition Training, Start
              up kit empowerment and mentorship.
            </motion.p>
            <motion.p
              className="py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              The second goal is achieved by addressing the sociocultural
              limitations from the grassroots. TCW Africa is working closely
              with communities, traditional and religious authorities to change
              sociocultural norms that have limited the participation of girls
              through literal community dialogues, targeted outreaches and
              social media campaigns that will educate the community members on
              the benefits of letting a girl pursue her dreams and empowering
              women.
            </motion.p>
            <motion.p
              className="py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              We have impacted over 10,000 young African girls both directly and
              indirectly. Our closed community has ladies from over 5 African
              countries.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
