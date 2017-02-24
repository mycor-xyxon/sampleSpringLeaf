# sampleSpringLeaf
Thymeleaf environment for frontend

## start server
```sh
mvn spring-boot:run

java -D spring.profiles.active=production -jar /home/ec2-user/1.0.0-SNAPSHOT.jar &
java -D spring.profiles.active=production -jar target/1.0.0-SNAPSHOT.jar

java -jar target/sampleSpringLeaf.jar
java -jar target/original-sampleSpringLeaf.jar


jar cvf target/sampleSpringLeaf-1.0.0-SNAPSHOT.jar target/**/*.class
jar cvfm target/sampleSpringLeaf-1.0.0-SNAPSHOT.jar target/MANIFEST.MF target/**/*.class


```

## url
[http://localhost:8090/](http://localhost:8090/)

## doc
- [構築手順](./doc/create.md)



[THYMELEAF][http-nio-8090-exec-2]
Exception processing template "hello": Error resolving template "header", template might not exist or might not be accessible by any of the configured Template Resolvers (hello:8)

ERROR 4025 --- [nio-8090-exec-2] o.s.boot.web.support.ErrorPageFilter     : Forwarding to error page from request [/hello/] due to exception [Error resolving template "header", template might not exist or might not be accessible by any of the configured Template Resolvers (hello:8)]