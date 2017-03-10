# sampleSpringLeaf
フロント用のspring boot tymeleaf 検証環境

## start server
gulp task で行う予定

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
### i18n properties files
```sh
├── src
│   ├── main
│   │   └── resources
│   │       ├── i18n
```

### templates files
```sh
├── src
│   ├── main
│   │   ├── ...
│   │   └── resources
│   │       ├── ...
│   │       └── templates
```

### static files
#### _src
```sh
├── _src
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
