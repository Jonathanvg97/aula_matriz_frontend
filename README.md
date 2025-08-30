# Prueba Técnica Frontend - Aplicación de Aula Matriz

Este proyecto es una prueba técnica para desarrolladores frontend que consiste en crear una interfaz moderna y funcional que consume APIs REST autenticadas con JWT. La aplicación permite:

Autenticación de usuarios mediante JWT

Visualización del perfil del usuario

Edición completa del perfil

Actualización de la foto de perfil

## Tabla de Contenidos

- [Instalación](#instalación)
- [Características](#características)
- [Arquitectura](#arquitectura)
- [Tecnologías Usadas](#tecnologías-usadas)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Variables de Entorno](#variables-de-entorno)
- [Despliegue](#despliegue)
- [Licencia](#licencia)

---

## Instalación

Para comenzar con el proyecto, sigue estos pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone <url_del_repositorio>
   cd <carpeta_del_proyecto>
   ```
2. **npm install**:
   ```bash
    npm install
   ```
3. **Configurar las variables de entorno: Crea un archivo .env.local en la raíz del proyecto y agrega las variables necesarias. tomar de guia el .env.example**:
   ```bash
   .env
   ```
4. **Ejecutar el servidor de desarrollo: Para ejecutar la aplicación de manera local**:
   ```bash
    npm run dev
   ```
5. **Visita en tu navegador el puerto**:

   ```bash
    http://localhost:5173
   ```

## Características

1. **Gestión de PerfiL**:
   ```bash
    Edición y visualización de perfil del usuario.
   ```
2. **Formularios Validados**:
   ```bash
   Validación robusta con Zod y React Hook Form.
   ```
3. **Interfaz Responsive**:
   ```bash
   Diseño adaptable para desktop y móvil.
   ```
4. **Gestión de Estado**:
   ```bash
   Estado global con Zustand.
   ```
5. **Navegación SPA**:
   ```bash
   Routing con React Router DOM.
   ```
6. **Arquitectura Limpia**:
   ```bash
   La lógica de negocio y el manejo del estado están separados en módulos bien organizados.
   ```

## Arquitectura

La aplicación sigue un enfoque de arquitectura limpia, donde:

1. **La lógica de negocio está separada en hooks, servicios y tiendas.**
2. **Los componentes de UI se encuentran en la carpeta components.**
3. **El manejo del estado se realiza con Zustand, que gestiona el estado global de la aplicación.**

## Tecnologías Usadas

1. **Vite + React: Proyecto inicializado con Vite para un arranque rápido y optimizado de la aplicación React**
2. **TypeScript: JavaScript con tipado estático para una mejor experiencia de desarrollo.**
3. **Tailwind CSS: Framework de CSS utilitario para el desarrollo rápido de interfaces.**
4. **React-hook-form**
5. **Zustand: Una librería pequeña y rápida para la gestión de estado.**
6. **React: Para la construcción de la interfaz de usuario.**

## Estructura de Carpetas

El proyecto sigue una arquitectura modular basada en funcionalidades (Feature-Based) combinada con componentes reutilizables. Cada funcionalidad principal se organiza dentro de la carpeta features, incluyendo sus propios componentes, hooks, servicios, tipos y validaciones. Los componentes genéricos y layouts se encuentran en components/ui, mientras que las páginas (pages) actúan como contenedores que ensamblan estas features y componentes para construir la interfaz final. Carpetas adicionales como api, store, utils, lib y assets soportan llamadas a APIs, estado global, utilidades y recursos estáticos, manteniendo una separación clara de responsabilidades y facilitando la escalabilidad y mantenibilidad del proyecto.

```
└── 📁src
    └── 📁api
        ├── axiosInstance.ts
    └── 📁assets
        └── 📁images
            ├── logo_final.png
        └── 📁lottiesJson
            ├── LottieLogin.json
        ├── react.svg
    └── 📁components
        └── 📁lotties
            ├── LoginAvatar.tsx
        └── 📁motionAnimate
            ├── MotionAnimate.tsx
        └── 📁sideNav
            ├── SideNav.tsx
        └── 📁skeletons
            ├── DashBoardPageSkeleton.tsx
        └── 📁ui
            └── 📁layouts
                └── 📁mainLayout
                    ├── MainLayout.tsx
            ├── avatar.tsx
            ├── badge.tsx
            ├── button.tsx
            ├── card.tsx
            ├── dialog.tsx
            ├── input.tsx
            ├── label.tsx
            ├── select.tsx
            ├── separator.tsx
            ├── sonner.tsx
            ├── switch.tsx
    └── 📁features
        └── 📁auth
            └── 📁components
                ├── LoginForm.tsx
            └── 📁hooks
                ├── useAuthActions.ts
            └── 📁services
                ├── auth.service.ts
            └── 📁types
                ├── authBody.interface.ts
                ├── authResponse.interface.ts
                ├── index.ts
                ├── routeConfig.interface.ts
            └── 📁validators
                ├── auth.validators.ts
        └── 📁userProfile
            └── 📁components
                └── 📁profileUserForm
                    ├── ProfileUserForm.tsx
                └── 📁updatePhotoProfile
                    ├── UpdatePhotoProfile.tsx
            └── 📁hooks
                ├── useUserProfile.ts
            └── 📁services
                ├── user.service.ts
            └── 📁types
                ├── userResponse.interface.ts
            └── 📁validators
                ├── userProfile.validators.ts
    └── 📁lib
        ├── utils.ts
    └── 📁pages
        └── 📁dashBoard
            ├── DashBoardPage.tsx
        └── 📁LoginPage
            ├── LoginPage.tsx
        └── 📁notFoundPage
            ├── NotFoundPage.tsx
        └── 📁UserProfilePage
            ├── UserProfilePage.tsx
    └── 📁store
        ├── user.store.ts
    └── 📁utils
        └── 📁middleware
            ├── routeGuard.tsx
        └── 📁routesConfig
            ├── privateRoutes.tsx
            ├── publicRoutes.tsx
        ├── envConfig.ts
        ├── paths.ts
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    └── vite-env.d.ts
```

## Variables de Entorno

Crea un archivo .env.local en la raíz del proyecto y agrega la variable:

1. **VITE_BASE_URL**

# Despliegue

**https://aula-matriz-frontend.vercel.app/**

## Licencia

**by Jonathan Vanegas**

Este README proporciona todos los detalles relevantes del proyecto, incluyendo la instalación, uso, características, arquitectura y más, todo en español.
