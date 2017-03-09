# sampleSpringLeaf
Thymeleaf environment for frontend

## start server
```sh
mvn spring-boot:run

java -jar target/sampleSpringLeaf.jar --server.port=8090
```

```sh
mvn package
```


## url
[http://localhost:8090/](http://localhost:8090/)

## dir
### i18n properties file
```sh
├── src
│   ├── main
│   │   ├── i18n
```

### templates file
```sh
├── src
│   ├── main
│   │   ├── ...
│   │   └── resources
│   │       ├── ...
│   │       └── templates
```

### static files
#### src
```sh
├── static
│   ├── js
│   └── scss
```

#### dist 
```sh
├── src
│   ├── main
│   │   ├── ...
│   │   └── resources
│   │       ├── ...
│   │       ├── css
│   │       ├── js
```

## doc
- [構築手順](./doc/create.md)
