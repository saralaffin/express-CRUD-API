### Technical Requirements

- Be built using Express and Mongoose.
- Have at least one model.
- Have complete CR functionality implemented with RESTful routes. (You may
  logically distribute CR functionality across models, should you decide to implement more than one. This is only allowed
  when it does not make sense in the context of your application to have full
  CR on one model).
- Have its own repository under your GitHub account (do not fork this repo).
- Be deployed to Heroku (we will have a lesson on this later this week). (THIS IS REQUIRED)
- Have good, clean Javascript code. Only include comments for documentation,
  and don't include any non-functional code. Use the auto-formatter regularly!
- Demonstrate a good commit history.
- Have well-documented API routes. You can do this in your Readme, or using
  Swagger or apidoc (see below).

The above are minimum requirements. If you want some extra inspiration, try one
of these ideas:

- [Swagger](https://swagger.io/tools/swagger-inspector/)
  - Swagger is a fantastic tool that helps you build new APIs or document
    existing ones. It plays nicely with node and express.
- [apidoc](https://github.com/apidoc/apidoc)
  - apidoc is a tool that lets you describe existing APIs using inline comments
    in your code and will generate documentation for them.
- [Artillery](https://artillery.io/)
  - Artillery is a load-testing toolkit, which is a lot of fun to use.
- Authentication w/ JSON web tokens
  - Have your server require an auth token to accept requests.
  - http://jasonwatmore.com/post/2018/08/06/nodejs-jwt-authentication-tutorial-with-example-api
