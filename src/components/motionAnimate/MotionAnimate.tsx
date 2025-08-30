import { motion } from "framer-motion";
import { JSX } from "react";
type Props = {
  Icon: JSX.Element;
};

export const MotionAnimate = (props: Props) => {
  return (
    <article className="MotionAnimate">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0, 1, 0], // Opacidad va de 0 a 1 y vuelve a 0
          scale: [0.9, 1, 0.9], // Escala va de 0.9 a 1 y vuelve a 0.9
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex justify-center w-full "
      >
        {props.Icon}
      </motion.div>
    </article>
  );
};
