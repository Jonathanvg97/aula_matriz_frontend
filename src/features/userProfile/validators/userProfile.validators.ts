import { z } from "zod";

export const userProfileSchema = z.object({
  user: z.object({
    first_name: z
      .string()
      .min(1, { message: "El nombre de usuario es requerido" })
      .min(4, { message: "Debe tener al menos 4 caracteres" }),
    last_name: z
      .string()
      .min(1, { message: "El apellido de usuario es requerido" })
      .min(4, { message: "Debe tener al menos 4 caracteres" }),
  }),
  telefono: z.string().min(1, { message: "El telefono es requerido" }),
  tipo_usuario: z
    .string()
    .min(1, { message: "El tipo de usuario es requerido" }),
  biografia: z
    .string()
    .optional()
    .refine(
      (v) =>
        !v ||
        (v.length >= 10 &&
          v.length <= 250 &&
          /^[A-Za-z0-9\sñÑáéíóúÁÉÍÓÚüÜ,.;:¿?¡!()'"-]+$/.test(v)),
      { message: "Debe tener entre 10-250 caracteres válidos" }
    ),
  documento: z.string().min(1, { message: "El documento es requerido" }),
  esta_verificado: z.boolean(),
  redes_sociales: z.object({
    linkedin: z.string().url().or(z.literal("")).optional(),
    twitter: z.string().url().or(z.literal("")).optional(),
    github: z.string().url().or(z.literal("")).optional(),
    sitio_web: z.string().url().or(z.literal("")).optional(),
  }),
});

export type UserProfileFormValues = z.infer<typeof userProfileSchema>;
