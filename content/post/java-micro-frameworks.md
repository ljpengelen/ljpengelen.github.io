+++
draft = false
date = "2017-03-18T16:42:00+01:00"
title = "Java Micro Frameworks"
author = "Luc Engelen"
+++

A few weeks ago, I helped organize a [Meetup](https://www.meetup.com/Weert-Software-Development-Meetup/events/236607738/) titled "The Battle of the Java Micro Frameworks" hosted at [Kabisa](https://www.kabisa.nl) in Weert.
I came across a number of Java micro frameworks before and wondered how they compared with popular frameworks such as [Spring](https://spring.io/).
To be able to assess a number of these frameworks in a limited amount of time and in a nice environment,

## The Meetup

The idea of the Meetup was to build a number of Twitter-clones in small groups using various micro frameworks,
without any prior experience with any of the frameworks.
Each group worked on a Twitter clone of their own for about an hour and afterwards continued working on the clone built by one of the other groups.

Initially, we were going to look at the following frameworks:

- [Jodd](http://jodd.org/)
- [Jooby](http://jooby.org/)
- [Ninja](http://www.ninjaframework.org/)
- [Pippo](http://www.pippo.ro/)
- [Snow](http://britesnow.com/snow)
- [Spark](http://sparkjava.com/)

Due to the limited number of participants,
we had to drop a few frameworks.
Without any other means to assess the frameworks without going into details,
we dropped the ones that were less popular on [Github](https://github.com/) and ended up looking at [Jodd](http://jodd.org/), [Ninja](http://www.ninjaframework.org/), [Pippo](http://www.pippo.ro/), and [Spark](http://sparkjava.com/).

## Preparation

In an attempt to give the groups a small head start,
I tried to set up a few minimal apps for each of the frameworks.
Doing so already highlighted some differences between the frameworks;
some seemed to be more "micro" than others.

Setting up a small app for Jooby, Spark, and Pippo turned out to be really straightforward.
The end results are available on Github:

- https://github.com/ljpengelen/battle-jooby
- https://github.com/ljpengelen/battle-spark/tree/61de9c95461dfedb7cda7c03d3dada3c89fd4ef6
- https://github.com/ljpengelen/battle-pippo/tree/a1b5339c99068d3fce0959fae31438a61cf04bc6

For each of these frameworks,
a small `pom.xml` and a few lines of Java were enough to get started.

In the limited time I had available, setting up a small app with only a few lines of code for Ninja and Jodd turned out to be too much to ask.
The participants that worked with these two frameworks seem to have ended up running into the same problem I had and used rather large example applications as starting points:

- https://github.com/ljpengelen/battle-jodd
- https://github.com/ljpengelen/battle-ninja

For Ninja,
setting up an app to get started is only a matter of executing a single command:

```
mvn archetype:generate -DarchetypeGroupId=org.ninjaframework -DarchetypeArtifactId=ninja-servlet-archetype-simple
```

The end result itself is not "micro", but at least it's [clearly documented](http://www.ninjaframework.org/documentation/getting_started/create_your_first_application.html) how to get started.

For Jodd,
the situation is a little different.
The main page of [Jodd's documentation](http://jodd.org/doc/) links to pages named [About Jodd](http://jodd.org/about), [Jodd overview in 5 minutes](http://oblac.github.io/jodd), [Jodd micro-frameworks in 30 minutes](http://joddframework.org/), [Quickstart &raquo; instant run](http://jodd.org/doc/quickstart/index.html), and [Web app example &raquo; step-by-step](http://jodd.org/doc/example/index.html).
For someone looking at Jodd for the first time,
each of these pages look like they could describe how to set up a small app with Jodd.
Some of them describe Jodd's features,
however,
and some discuss or link to quite large applications.

## Evaluation by Participants
