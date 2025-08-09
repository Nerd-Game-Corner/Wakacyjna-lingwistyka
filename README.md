# Wakacyjna lingwistyka

### Running the program
#### Backend:
The only requirement is having a working version of Docker installed.
The code is currently run with the following two commands:

```bash
docker build -t demo-spring-app .
docker run -p 8080:8080 demo-spring-app
```

When the backend is running, you should be able to see a JSON With a message field that says "Hello from backend!" in `localhost:8080/api/hello` in your browser.
#### Frontend:
The only requirement is having a working version of nodejs installed.
To launch the Frontend at your 'localhost:5173' you need to run the following commands:

```bash
npm install
```
to install dependencies
then:
```bash
npm run dev
```
to launch a development server
or:
```bash
npm run build
```
to create a production build

Note: The frontend is built with Vite + React in TypeScript

### Recommended tools for developers

Your IDE/code editor should have tools/extensions for the Java programming language, Docker, Maven, and Spring Boot.
In the case of VS Code, the recommended extensions are the Extension Pack for Java, Docker, and Spring Boot Extension Pack.

### Basic Spring framework concepts

Spring relies a lot on its IoC (Inversion of Control) container.
What that means in practice is that instead of a situation where we have to write all the dependencies of our classes on the Spring classes, it's the Spring architecture that depends on what we create.
For example, instead of us having to explicitly declare that the `Application` class should look for all `@Controller` or `@RestController` annotated classes (which are the things that respond to specific HTTP requests), and then having to keep track of the control flow between them, we just declare the relevant classes and how they behave and rely on Spring's tools to detect all of them and decide when it should call which class in which method.

It is also proposed to use the Thymeleaf HTML template engine.
Its job is to detect when a `@Controller` method returns a `String`, after which it finds the appropriate HTML template in `src/main/resources/templates` and modifies it according to the data passed into a `Model` object in the method.
Using template engines is standard in web development and the Thymeleaf engine has a specific dialect of templates made just for the Spring framework.

Among the Maven dependencies there is also JPA, an ORM (object relational mapping) tool that will apparently allow us to convert the SQL results into Java objects and vice versa much more easily, and H2, a Java-based engine that is used by a tutorial I'm following in order to learn the basics of Spring, it's only temporary and I'm open to replacing it with any other SQL version we prefer.


### Repo Structure 
#### /docs
 - Provides a clear overview of what Software we are creating
 - Oriented on our Software design process
 - Provides a clear path to good implementation in /src

#### /src and /tests
 - Implementation phase 
