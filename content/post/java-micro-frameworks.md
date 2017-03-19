+++
draft = false
date = "2017-03-18T16:42:00+01:00"
title = "Java Micro Frameworks"
author = "Luc Engelen"
+++

A few weeks ago,
I helped organize a [Meetup](https://www.meetup.com/Weert-Software-Development-Meetup/events/236607738/) titled "The Battle of the Java Micro Frameworks" hosted at [Kabisa](https://www.kabisa.nl) in Weert.
I came across a number of Java micro frameworks before and wondered how they compared with popular frameworks such as [Spring](https://spring.io/).
To be able to assess a number of these frameworks in a limited amount of time and in a nice environment,
I tried to get more people involved in the evaluation process by organizing a Meetup.

<!--more-->

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

In total, nine people attended the workshop.
Some of them worked as software engineers, some of them were students.
Each of the participants had experience with software development in Java, but none of them had ever worked with the frameworks we tried.

The participants noted the following general impressions, pros, and cons.
You'll see that their findings don't always correspond with my own.
I've copied the responses of the participants straight from the evaluation forms without rephrasing,
to ensure that I didn't influence their answers.

## Ninja

**General impressions:**

- Easy to set up
- Simple
- Mature
- Very specific usage. Many choices made for you
- Too predetermined

**Pros:**

- Good documentation
- If you follow the intended path, you can have results quickly
- Once you get the structure, it's easy to write a web app
- Because many choices are made for you, once you read the getting-started guide, you're good to go
- Uses regular HTML
- If you use the default path, it's OK
- Quick for default usage

**Cons:**

- Not easy to learn quickly
- Router didn't work
- Verbose
- Pushes you to a predefined route
- Very explicit workflow
- Not easy to debug
- Could not get it to work
- Not a lot of documentation available online
- Harder to get started

## Spark

**General impressions:**

 - Not good
 - Easy to get into
 - Quick to get up and running
 - Not bloated with features
 - Clean
 - Simple to use
 - Light weight
 - Customizable
 - Fast
 - Good

**Pros:**

- Easy to set up
- Good documentation, tutorials, and samples
- Lean
- Flexible
- Little overhead
- It's easy to get started with a simple REST server
- Simple setup and structure

**Cons:**

- Bad documentation
- None
- Much boilerplate needs to be written
- Takes more than an hour to set something up

## Pippo

**General impressions:**

- Documentation is immature and sometimes incorrect
- Simple when it works
- Pretty good documentation for such a small framework. Too bad some things were deprecated or abandoned
- Simple
- Accessible

**Pros:**

- Simplicity in general
- Single jar for deployment
- Runnable in IDE
- Simple
- Few dependencies
- User friendly
- Very easy

**Cons:**

- Documentation (incorrect, contains typos and grammatical mistakes)
- Less functionality compared to "established" frameworks
- No feedback while starting the server

## Jodd

**General impressions:**

- Documentation seems like wild goose chase
- Gradle only
- Seems elaborate
- Complex
- Light weight
- You need a lot of Java experience to get an app up and running
- Strange concepts

**Pros:**

- Many different components give the impression of flexibility
- Light weight
- Relatively little code needed

**Cons:**

- Documentation seems incomplete for beginners
- Little Documentation
- Difficult to set up
- Concepts are not always clear
- Bad documentation
