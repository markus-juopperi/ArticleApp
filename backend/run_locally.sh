./gradlew clean bootJar
java -jar build/libs/*.jar --spring.config.location=classpath:/test/resources/test.properties