# Diary Project Server
Este proyecto


## Arquitectura
La estructura del proyecto sigue una organización modular para separar responsabilidades.

Este sigue el siguiente flujo: 
Request -> Route -> Controller -> Service -> Response

```bash
/backend
│ 
├──data
|    └── database.db
|
├── src 
│    │ 
│    ├── config/
│    │   └── db.ts 
│    │   └── env.ts
│    │ 
│    ├── controllers/
│    │    └── media.controller.ts 
│    │    └── users.controller.ts
│    │ 
│    ├── routes/
│    │   └── media.routes.ts 
│    │   └── users.routes.ts
│    │ 
│    ├── services/
│    │    └── media.service.ts
|    |    └── users.service.ts
│    │  
│    └── index.ts 
│ 
├── .env 
├── .gitignore 
├── package.json 
├── package-lock.json
└── tsconfig.json
```

## Descripción de carpetas

## Instalación

## Endpoints principales

## Manejo de errores

## Middleware global de errores

## Notas