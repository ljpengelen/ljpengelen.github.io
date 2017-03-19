+++
draft = true
date = "2017-03-19T00:18:00+01:00"
title = "JSON Web Tokens"
author = "Luc Engelen"
+++

For a [Java Meetup in Eindhoven](https://www.meetup.com/Eindhoven-Java-Meetup/events/233789984/),
I presented a small example application that demonstrates the use of [JSON Web Tokens](https://jwt.io/) (JWTs) for a single-page application.
The code for this application is available on [Github](https://github.com):

- [Front end](https://github.com/ljpengelen/java-meetup-front-end)
- [Session-based back end](https://github.com/ljpengelen/java-meetup-session)
- [JWT-based back end](https://github.com/ljpengelen/java-meetup-jwt)

## Use case

Suppose you have a small client-side application that communicates with three back-end servers via a single reverse proxy,
as shown in the figure below.
Each of the three back-end servers is connected to a single database.

![Architecture](/img/architecture.svg)

In this example,
[nginx](https://www.nginx.com/) is used to serve the client-side application and functions as a reverse proxy as well.
The three back ends run a [Spring Boot](https://projects.spring.io/spring-boot/) application.
[Postgres](https://www.postgresql.org/) is used to run the database.

The figure below shows communication between the client-side application and the back ends in a situation where session-based authentication is used.
A user authenticates with a username and a password.
On the back end, a session is started, after which the session token is returned to the client-side application.
The client sends the session token along with each following request to the server.
In this naive example,
the session is stored in memory.
Because of this, the session is no longer valid when the server restarts.
Requests sent to the server using the outdated session token will fail.

![Communication in session-based scenario](/img/communication-sessions.svg)

There are many solutions to this problem,
each with its own advantages and disadvantages.
This blog post describes a solution involving JWTs.

## JSON Web Tokens

A JWT has the following form:

<pre style="overflow-wrap: break-word;"><span style="color: red;">eyJhbGciOiJIUzUxMiJ9</span>.<span style="color: fuchsia">eyJleHAiOjE0NzYyOTAxNDksInN1YiI6IjEifQ</span>.<span style="color: blue">mvJEWu3kxm0WSUKu-qEVTBmuelM-2Te-VJHEFclVt_uR89ya0hNawkrgftQbAd-28lycLX2jXCgOGrA3XRg9Jg</span></pre>

It consists of three Base64 encoded strings, joined by periods.

<pre style="color:red">
{
  "alg": "HS512"
}
</pre>

<pre style="color:fuchsia">
{
  "sub": "1",
  "admin": false
}
</pre>

<pre style="color:blue">
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
</pre>

![Communication in JWT-based scenario](/img/communication-jwt.svg)
