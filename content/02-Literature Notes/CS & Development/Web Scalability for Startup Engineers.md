---
title: Web Scalability for Startup Engineers
author: Artur Ejsmont
year: "2015"
tags:
  - Software
finished:
---
---

# The Book in 3 Sentences
---

# Top Quotes
---

>**Scalability** is an ability to adjust the capacity of the system to cost-efficiently fulfill the demands. Scalability usually means an ability to handle more users, clients, data, transactions, or requests without affecting the user experience.

Scalability should allow us to scale down as much as scale up and that scaling should be relatively cheap and quick to do.


# Summary & Reflection
___

> Scalability or performance?
> 
> Performance measures how long it takes to process a request or to perform a certain task, whereas scalability measures how much we can grow (or shrink).

## Vertical scale

Vertical scale means upgrading the hardware or network throughput, it is simple without any architectural changes, e.g. upgrade memory from 8GB to 32GB or 128GB by just replacing the hardware.

### Isolation of services

Install each type of service (web server, db server, cache) on a separate physical machine. Isolating services to separate servers is just a slight evolution from a single-server setup. At least you can distribute the load among more machines than before and scale each of them vertically as needed.

_The core concept behind isolation of services is that you should try to split your monolithic web
application into a set of distinct functional parts and host them independently. The process of
dividing a system based on functionality to scale it independently is called **functional partitioning**. (This sounds like microApp??)_

Functional partitioning can distribute the load among even more servers. Each part of the application would typically use a different subdomain so that traffic would be directed to it based simply on the IP address of the web server.

### CDN (content delivery network)

_A content delivery network is a hosted service that takes care of global distribution of static files like images, JavaScript, CSS, and videos. It works as an HTTP proxy. Clients that need to download images, JavaScript, CSS, or videos connect to one of the servers owned by the CDN provider instead of your servers. If the CDN server does not have the requested content yet, it asks your server for it and caches it from then on. Once the file is cached by the CDN, subsequent clients are
served without contacting your servers at all._

By integrating your web application with a CDN provider, you can significantly reduce the amount of bandwidth your servers need. You will also need fewer web servers to serve your web app’s static content. Finally, your clients may benefit from better resource locality, as CDN providers are usually global companies with data centers located all around the world.

This is indeed scaling with third party service, it's powerful and simple without having to add more servers or learn how to scale HTTP proxies.

## Horizontal scale

All the ideas above are rather simple modifications to the single-server configuration. Horizontal scalability, on the other hand, is much harder to achieve and in most cases it has to be considered before the application is built. Systems that are truly horizontally scalable do not need strong servers—quite the opposite; they usually run on lots and lots of cheap “commodity” servers rather than a few powerful machines.

### Infrastructure & architecture
![[Screenshot 2026-03-05 113853.png]]
Above: infrastructure
Below: architecture 
Architecture is the perspective of the software designer; infrastructure is the perspective of the system engineer. Each perspective shows a different view of the same problem—building scalable software.
![[Screenshot 2026-03-07 010032.png]]

The application architecture should not revolve around a framework or any particular technology. Architecture should evolve around the business model. (domain driven design)

A **domain model** is created to represent the core functionality of the application in the words of business people, not technical people. The domain model explains key terms, actors, and operations, without caring about technical implementation.

### Draw diagrams
With diagrams, you document the system, share knowledge, and help yourself fully understand your own designs. Three types of diagrams are especially useful in documenting and understanding large-scale systems: use case, class, and module diagrams.

#### Use case diagrams
Use case diagrams are not concerned with technical solutions, but with business requirements. It maps out who the users are, and what operations are allowed.
https://www.lucidchart.com/pages/tutorial/uml-use-case-diagram

#### Class diagrams
Class diagrams present the structure of individual modules. A class diagram typically includes interfaces, classes, key method names, and relationships between different elements.
https://www.lucidchart.com/pages/uml-class-diagram

#### Module diagrams
The module diagram is similar to a class diagram because it displays structure and dependencies. The only difference between module and class diagrams is that module diagrams focus on the higher level of abstraction.

## Building the front-end layer
Front-end applications built with scale in mind are mostly **stateless**; they depend heavily on caching; and, most importantly, they allow horizontal scalability by simply adding more hardware.

> Statelessness is a property of a service, server, or object indicating that it does not hold any data (state). As a consequence, statelessness makes instances of the same type interchangeable, allowing better scalability. By not having any data, service instances are identical from the client’s point of view. Instead of holding data themselves, stateless services delegate to external services any time that client’s state needs to be accessed.

A load balancer is a software or hardware component that distributes traffic coming to a single IP address over multiple servers, which are hidden behind the load balancer. Load balancers are used to share the load evenly among multiple servers and to allow dynamic addition and removal of machines. Since clients can only see the load balancer, web servers can be added at any time without service disruption.

------
*Reflected on: 2026-03-04*