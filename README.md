# API Gateway

## 🚀 Descripción
API Gateway para el sistema TurnApp, implementando una arquitectura limpia con TypeScript y Express. Este proyecto maneja la autenticación de usuarios, gestión de roles, y administración de recursos del sistema.

## 🛠 Tecnologías
- TypeScript
- Express.js
- TypeORM
- PostgreSQL
- Node.js

## 🏗 Arquitectura
El proyecto sigue los principios de Clean Architecture:

```
src/
├── adapters/         # Adaptadores de infraestructura
├── Dtos/            # Objetos de transferencia de datos
├── Entity/          # Entidades de dominio
├── frameWorks/      # Configuración de frameworks
├── repository/      # Implementación de repositorios
└── useCase/         # Casos de uso de la aplicación
```

## 🚦 Prerrequisitos
- Node.js >= 16
- PostgreSQL >= 13
- pnpm

## 🔧 Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/david123456858/API-GATWAY.git
cd API-GATWAY
```

2. Instalar dependencias
```bash
pnpm install
```

3. Configurar variables de entorno
```bash
cp .env.example .env
# Editar .env con tus configuraciones
```

4. Ejecutar migraciones
```bash
pnpm typeorm migration:run
```

## 🚀 Ejecución

### Desarrollo
```bash
pnpm dev
```

### Producción
```bash
pnpm build
pnpm start
```

## 📝 Scripts Disponibles

- `pnpm dev`: Inicia el servidor en modo desarrollo
- `pnpm start`: Inicia el servidor en modo producción
- `pnpm tsc`: Compila el código TypeScript
- `pnpm test`: Ejecuta las pruebas (por implementar)

## 🔐 Autenticación y Autorización

El sistema implementa autenticación basada en roles con las siguientes características:
- Registro de usuarios
- Login con email y contraseña
- Gestión de roles y permisos
- Middleware de validación de rutas

## 📚 API Endpoints

### Autenticación
- POST /auth/login
- POST /auth/register

### Usuarios
- GET /users
- GET /users/:id
- PUT /users/:id
- DELETE /users/:id

### Roles
- GET /roles
- POST /roles
- PUT /roles/:id
- DELETE /roles/:id

## 🤝 Contribución
1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


## ✨ Autor
David - [@david123456858](https://github.com/david123456858)
