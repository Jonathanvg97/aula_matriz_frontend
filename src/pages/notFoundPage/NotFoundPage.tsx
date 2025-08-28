import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RocketIcon, HomeIcon, FrownIcon } from "lucide-react";

export const NotFoundPage = () => {
  //Hooks
  const navigate = useNavigate();
  //UI
  return (
    <motion.section
      className="NotFoundPage min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Animated 404 number */}
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
          }}
        >
          <span className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
            404
          </span>
          <motion.div
            className="absolute top-0 right-0"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <FrownIcon className="w-16 h-16 text-red-500" />
          </motion.div>
        </motion.div>

        {/* Main message */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-800"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ¡Ups! Página no encontrada
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La página que buscas podría haber sido eliminada, cambiado de nombre o
          no existe.
        </motion.p>

        {/* Animated illustration */}
        <motion.div
          className="my-8"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        >
          <RocketIcon className="w-24 h-24 mx-auto text-purple-500" />
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            onClick={() => {
              navigate("/");
            }}
            className="gap-2 text-secondary font-bold cursor-pointer"
          >
            <HomeIcon className="w-5 h-5" />
            Volver al inicio
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
