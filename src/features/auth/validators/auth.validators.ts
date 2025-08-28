import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, { message: "El usuario es requerido" }),
  password: z.string().min(1, { message: "La contraseña es requerida" }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
