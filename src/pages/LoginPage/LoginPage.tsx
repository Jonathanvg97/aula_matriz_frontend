import LogoAulaMatriz from "@/assets/images/logo_final.png";
import { motion } from "framer-motion";
import { ShieldCheckIcon } from "lucide-react";
import { LoginForm } from "../../features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <article className="LoginPage flex flex-col md:grid md:grid-cols-[1fr_1.5fr] min-h-screen">
      <motion.div
        className="flex flex-col items-center justify-center bg-gradient-to-br from-primary to-indigo-600 text-white p-8 text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Efecto de burbujas decorativas */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`${_} ${i}`}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative z-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Bienvenido a <span className="text-yellow-300">Aula Matriz</span>
          </h1>
        </motion.div>

        <motion.img
          src={LogoAulaMatriz}
          alt="logo aula"
          className="w-1/2 md:w-1/3 mx-auto relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        />

        <motion.div
          className="mt-8 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center justify-center gap-2">
            <ShieldCheckIcon className="w-6 h-6 text-yellow-300" />
            <span className="text-sm md:text-base">
              Plataforma segura y confiable
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Columna del Formulario */}
      <div className="flex items-center justify-center bg-gray-300 p-6 md:p-12">
        <div className="w-full max-w-[400px] md:max-w-[750px]">
          <LoginForm />
        </div>
      </div>
    </article>
  );
}
