<div align="center">
    <img width="80" src="https://skillicons.dev/icons?i=express" alt="Express Logo"/>

# Micro Mailer

Microservice dedicated to sending transactional emails (passwords, notifications) for the POS systems ecosystem.

</div>

#

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,express,ts,pnpm" />
    <img src="https://skills.syvixor.com/api/icons?i=nodemailer,render" />
  </a>
  <br />
  <img src="https://img.shields.io/badge/Express_5-000000?logo=express&logoColor=fff" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff" />
  <img src="https://img.shields.io/badge/Nodemailer-22B573?logo=gmail&logoColor=fff" />
  <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=fff" />
  <img src="https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=fff" />
</p>

## 📋 Tabla de contenidos

- [Micro Mailer](#micro-mailer)
- [](#)
  - [📋 Tabla de contenidos](#-tabla-de-contenidos)
  - [📖 Descripción](#-descripción)
  - [🛠️ Tecnologías](#️-tecnologías)
  - [✅ Requisitos previos](#-requisitos-previos)
  - [🚀 Instalación](#-instalación)
  - [⚙️ Configuración](#️-configuración)
  - [💻 Uso](#-uso)
  - [📡 Endpoints](#-endpoints)
  - [📁 Estructura del Proyecto](#-estructura-del-proyecto)
  - [📄 Licencia](#-licencia)

---

## 📖 Descripción

Microservicio backend desarrollado con Express y TypeScript enfocado en el envío de correos transaccionales por medio de Nodemailer. Implementa autenticación por API key, límite de peticiones (Express Rate Limit) y plantillas HTML reutilizables para cada tipo de correo enviado.

---

## 🛠️ Tecnologías

| Capa / Componente           | Tecnología                  |
| --------------------------- | --------------------------- |
| Core Framework              | Express 5                   |
| Lenguaje                    | TypeScript                  |
| Envío de correo             | Nodemailer                  |
| Seguridad y Middleware      | API Key, Express Rate Limit |
| Entorno de Ejecución en Dev | tsx (TypeScript Execute)    |
| Administrador de Paquetes   | pnpm                        |
| Hosting                     | Render                      |

---

## ✅ Requisitos previos

Antes de inicializar el proyecto, asegúrate de contar con los siguientes elementos instalados en tu entorno de desarrollo:

- Node.js
- pnpm
- Una cuenta SMTP (Gmail u otro proveedor) con contraseña de aplicación habilitada

---

## 🚀 Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/EricV29/micro-mailer.git

# 2. Dirígete a la carpeta raíz del proyecto
cd micro-mailer

# 3. Instala las dependencias declaradas
pnpm install

# 4. Prepara el archivo de configuración local
cp .env.example .env
```

---

## ⚙️ Configuración

Crea un archivo `.env` en la raíz del proyecto con tus credenciales:

```env
# SMTP (Nodemailer)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="465"
SMTP_USER="tu_correo@gmail.com"
SMTP_PASS="tu_app_password"
SMTP_FROM="POS Soporte <tu_correo@gmail.com>"

# Servicio
PORT="3000"

# Seguridad
API_KEY="KEY FOR YOUR SERVICE ACCESS"

# Plantillas
NOMBRE_EMPRESA="Tu Empresa"
LOGO_URL="URL pública del logo"
```

---

## 💻 Uso

```bash
# Iniciar el servidor en modo desarrollo
pnpm dev

# Transpilar el código TypeScript hacia código JavaScript listo para producción
pnpm build

# Ejecutar el build de JavaScript nativo
pnpm start
```

Accede a la app en `http://localhost:3000`.

---

## 📡 Endpoints

| Método | Ruta               | Descripción                                            | Auth               |
| ------ | ------------------ | ------------------------------------------------------ | ------------------ |
| POST   | `/enviar-password` | Envía por correo la contraseña generada por el sistema | Header `x-api-key` |

**Body de ejemplo:**

```json
{
  "sistemaPOS": "Mi POS",
  "correo": "usuario@correo.com",
  "password": "1234abcd"
}
```

---

## 📁 Estructura del Proyecto

```
├── src/
│   ├── middlewares/            # API key y rate limiting
│   ├── routes/                 # Definición de endpoints
│   ├── types/                  # Interfaces compartidas
│   ├── utils/                  # Envío de correo (sendEmail)
│   └── server.ts               # Punto de arranque principal
├── templates/                  # Plantillas HTML de correo
├── .env.example                # Plantilla de variables de entorno del servidor
├── package.json
├── tsconfig.json                # Configuración interna del compilador de TypeScript
└── README.md
```

---

## 📄 Licencia

Este proyecto es de código abierto. Consulta el archivo `LICENSE` para más detalles.
