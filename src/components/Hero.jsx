import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <div className="hero min-h-screen bg-base-100 overflow-hidden">
        <div className="hero-content text-center flex flex-col items-center justify-center w-full">
          <div className="max-w-md">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              The Confident Woman Africa
            </motion.h1>
            <motion.p
              className="py-6 text-base sm:text-lg md:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Helping young African ladies with Self-Discovery, Self-Development
              and Self-Maximization for Global Opportunities.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
