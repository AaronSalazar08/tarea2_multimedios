# API Copa Mundial FIFA

API REST construida con Node.js y Express que expone información histórica sobre las ediciones de la Copa Mundial de la FIFA.

## Requisitos

- Node.js 22.5 o superior (usa el módulo `node:sqlite` nativo)
- pnpm

## Instalación

```bash
pnpm install
```

## Poblar la base de datos

Ejecuta el script de seed para crear la base de datos SQLite con los datos de las ediciones:

```bash
pnpm run seed
```

## Ejecutar el servidor

```bash
pnpm run dev
```

El servidor queda disponible en `http://localhost:4321`.

## Rutas disponibles

| Método | Ruta              | Descripción                                      |
|--------|-------------------|--------------------------------------------------|
| GET    | `/`               | Información general del API                      |
| GET    | `/mundiales`      | Lista todas las ediciones (slugs por defecto)    |
| GET    | `/mundiales?include=full` | Lista completa con todos los campos      |
| GET    | `/mundial/:slug`  | Detalle de una edición por su slug               |
| GET    | `/campeon/:pais`  | Slugs de ediciones ganadas por ese país          |
| GET    | `/random`         | Una edición aleatoria                            |
| GET    | `/search/:text`   | Búsqueda por texto (mínimo 3 caracteres)         |
| GET    | `/imagenes/*`     | Archivos de imagen de las ediciones              |

## Ejemplos con xh

```bash
xh GET :4321/mundiales
xh GET :4321/mundiales include==full
xh GET :4321/mundial/qatar-2022
xh GET :4321/mundial/inexistente
xh GET :4321/campeon/Argentina
xh GET :4321/random
xh GET :4321/search/final
xh GET :4321/search/ab
```
