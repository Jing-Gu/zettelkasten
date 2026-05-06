---
title: "Learning \rDomain-Driven \rDesign Aligning Software Architecture\rand Business Strategy"
author: Vlad Khononov
year: "2021"
tags:
  - DDD
finished:
---
---

# The Book in 3 Sentences
DDD is the approach to build the software from the perspective of the business, that is, the domain. 
DDD can be divided into two parts: strategic design and tactical design.
- Strategic: 
	- “what?” and “why?” — what software we are building and why we are building it
	- analyse business domains and strategy, and to foster a shared understanding of the business between the different stakeholders
- Tactical: 
	- “how” — how each component is implemented. 
	- to write code in a way that reflects the business domain, addresses its goals, and speaks the language of the business

# Top Quotes
To design and build an effective solution, you have to understand the **problem**. The problem, in our context, is the software system we have to build. To understand the problem, you have to understand the context within which it exists—the organization’s **business strategy**, and what **value** it seeks to gain by building the software.

# Summary & Reflection

## Strategic design
A business **domain** defines a company’s main **area of activity**, aka. the service the company provides to its clients.

To achieve its business domain’s goals and targets, a company has to operate in multiple
**subdomains**. A subdomain is a fine-grained area of business activity. All of a company’s subdomains form its business domain.

Domain-driven design distinguishes between three types of subdomains: core, generic, and supporting.
#### Core subdomains
- The interesting problems.
- Only core subdomains provide a competitive advantage to a company. 
- Core subdomains are the company’s strategy for differentiating itself from its competitors.
#### Generic subdomains
- The solved problems. 
- These are generic solutions that all companies are doing in the same way. There is no room or need for innovation here; rather than creating in-house implementations, it’s more cost-effective to use existing solutions.

#### Supporting subdomains
- The problems with obvious solutions.
- These are the activities the company likely has to implement in-house, but that do not provide any competitive advantage.

Core subdomains have to be implemented in-house. They cannot be bought or adopted; that would undermine the notion of competitive advantage, as the company’s competitors would be able to do the same. Implementing core subdomains in-house allows the company to make changes and evolve the solution more quickly, and therefore build the competitive advantage in less time.

### Domain knowledge
Domain knowledge belongs to domain experts: it’s their job to specialize in and comprehend all the intricacies of the business domain. By no means should we, nor can we, become domain experts. That said, it’s crucial for us to understand domain experts and to use the same business
terminology they use.

To be effective, the software has to mimic the domain experts’ way of thinking about the problem—their mental models.

Software development is a learning process; working code is a side effect. A software project’s success depends on the effectiveness of knowledge sharing between domain experts and software engineers. We have to understand the problem in order to solve it.

Domain-driven design proposes a better way to get the knowledge from domain experts to software engineers: by using a **ubiquitous language**. The idea is simple and straightforward: if parties need to communicate efficiently, instead of relying on translations (passing by analysis and software requirements), they have to speak the same language.

All stakeholders (domain experts, PO, software engineers, UIUX)  should consistently use the ubiquitous language in all project-related communications to spread knowledge about and foster a shared understanding of the business domain. The language should be continuously reinforced throughout the project: requirements, tests, documentation, and even the source code itself should
use this language.
#### Modeling
A model is not a copy of the real world but a human construct that helps us make sense of real-world systems.

In its essence, a model is an abstraction. The notion of abstraction allows us to handle complexity by omitting unnecessary details and leaving only what’s needed for solving the problem at hand.

How to model the business domains
The model is supposed to capture the domain experts’ mental models—their thought processes about how the business works to implement its function. The model has to reflect the involved business entities and their behaviour, cause and effect relationships, and invariants.

## Tactical design




------
*Reflected on: 2025-12-13*