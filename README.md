# Wakacyjna lingwistyka

### Running the program

The only requirement is having a working version of Docker installed.
The code is currently run with the following two commands:

```bash
docker build -t demo-spring-app .
docker run -p 8080:8080 demo-spring-app
```

When the program is running, you should be able to see "Hello, World!" in ```localhost:8080/hello``` in your browser.
You should also see something else when you add ```?name=<your_favorite_text>``` after the address.

### Recommended tools for developers

Your IDE/code editor should have tools/extensions for the Java programming language, Docker, Maven, and Spring Boot.
In the case of VS Code, the recommended extensions are the Extension Pack for Java, Docker, and Spring Boot Extension Pack.
### Repo Structure 
#### /docs
 - Provides a clear overview of what Software we are creating
 - Oriented on our Software design process
 - Provides a clear path to good implementation in /src

#### /src and /tests
 - Implementation phase 