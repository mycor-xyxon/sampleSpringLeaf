# sampleSpringLeaf
Thymeleaf environment for frontend

## start server
```sh
mvn spring-boot:run
or
java -jar target/sampleSpringLeaf.jar --server.port=8090
```
## url
[http://localhost:8090/](http://localhost:8090/)

## gulp
[実装中]


```sh
gulp watch
```

## dir
### i18n properties file
```sh
├── src
│   ├── main
│   │   └── resources
│   │       ├── i18n
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
- [tymeleaf memo](./doc/howToTymeleaf.md)
