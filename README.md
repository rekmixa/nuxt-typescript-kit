# nuxt-typescript-kit

> Nuxt Typescript Kit

## Installation

```bash
make cp-env
```

##### After you must configure your app in .env file

```bash
make install
```

View docker container logs

```bash
make logs
```

## Build Setup

### Production

```bash
make
```

### Building for production

To building for production you need to change `COMPOSE_FILE` param in *.env* to *docker-compose.prod.yml* and follow the above steps

### Development

```bash
make dev
```

## Generate dist and export it to zip-file

```bash
make generate-zip
```

##### For creating zip archieves you need to install *zip* dependency
