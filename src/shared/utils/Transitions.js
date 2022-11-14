import { motion } from "framer-motion";

const animationConfig = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0 },
};

const Transitions = ({ children }) => {
  return (
    <motion.div
      variants={animationConfig}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Transitions;
