# Proyecto Final – TechLab

API REST en Node.js para gestionar productos, con autenticación por JWT y datos almacenados en Firestore (Firebase).

## Requisitos

- Node.js 18+
- Cuenta de Firebase con Firestore habilitado

## Variables de entorno

Crear un archivo `.env` en la raíz con:

- `PORT`
- `JWT_SECRET_KEY`
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

## Instalación y ejecución

```bash
npm install
npm run start
```

Servidor por defecto en: `http://localhost:3000`

## Endpoints principales

- `POST /auth/login`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products/create` (requiere Bearer token)
- `DELETE /api/products/:id` (requiere Bearer token)
