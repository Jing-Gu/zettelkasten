# SOLID design principles

## SRP - single responsibility principle

> A class should have only one reason to change.

To make sure only one reason to change, the class should have only one job.

This seems controversial to the "deep module" from [[A Philosophy of Software Design]], as Ousterhout argues: **make modules deep** — meaning:
- **simple interface** (small surface area)
- **complex, powerful functionality hidden behind it** (large internal functionality)

This makes the module easy to use yet powerful — “deep” in functionality but “shallow” in how much the user needs to know. **His criticism of “thin” modules** is that they don’t really hide much complexity, so they don’t buy you a lot of leverage, and you end up with many small, shallow modules that are hard to manage.

SRP promotes small, narrowly focused classes. Are they in conflict ? They can coexist if you see it this way: SRP defines a _cohesive responsibility_ but not necessarily minimal functionality.

- **SRP** is about _cohesion of purpose_.  
    _“Does this class do more than one _conceptual job_?”_  
    If yes, split.
    
- **Deep modules** are about _hiding complexity_ behind a simple interface.  
    _“Is the module powerful yet easy to use?”_  
    If not, redesign.

The sweet spot is:
- Define a cohesive responsibility (SRP)
- Implement it as a deep module (Ousterhout)
That's to say, you can write a **deep module with a single cohesive responsibility**

## OCP - Open-closed principle

> Software entities (classes, modules, functions) should be open for extension but closed for modification.

Open for extensions: be able to add new features or behaviour in an elegant way

Close for modifications: Once the entity is developed, reviewed and tested, the code should not be touched to correct the behaviour.

That's to say, whenever adding new features, instead of modifying the existing code (possible introduce new bugs), write new code that extends the old code. 

## LSV - Liskov substitution principle

> If S (child) is a subtype of T (parent), then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program.

In simpler terms:

> **You should be able to use a child class or implementation wherever a parent or interface is expected — and it should _just work_.**

**LSP** in Angular = swap in different implementations (subclasses or services) that obey the same contract/interface

```typescript
// Define a common interface
export interface ProductDataSource {
  getProducts(): Observable<Product[]>;
}

// implement API version
@Injectable()
export class ApiProductService implements ProductDataSource {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
}

// implement mock version
@Injectable()
export class MockProductService implements ProductDataSource {
  getProducts(): Observable<Product[]> {
    return of([
      { id: 1, name: 'Mock Product A' },
      { id: 2, name: 'Mock Product B' },
    ]);
  }
}

```

What is flexible is that Angular can use the interface in the component
```typescript
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  providers: [
    { provide: ProductDataSource, useClass: MockProductService }
  ],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  products$!: Observable<Product[]>;

  constructor(private productSource: ProductDataSource) {}

  ngOnInit() {
    this.products$ = this.productSource.getProducts();
  }
}

```

However, **TypeScript interfaces don’t exist at runtime**, so Angular doesn’t _magically know_ how to instantiate it.  **You have to tell Angular**, through `providers` array.

This line:
```typescript
constructor(private productSource: ProductDataSource) {}`
```

Only works **because you registered a mapping** like this:
```typescript
providers: [   { provide: ProductDataSource, useClass: ApiProductService } ]`
```

Otherwise, Angular would throw:

`NullInjectorError: No provider for ProductDataSource!`

Because again, **interfaces don’t exist in JavaScript** — only classes do.

Again, this is exactly programming to the interface, Angular injects the appropriate `subtype` at the runtime, which allows you to swap the implementations for various purposes. This enables loose coupling and substitutability (Liskov). 

Where to put `providers` ? There are 3 ways.

1. In the main.ts providers. This is the **global root provider**, equivalent to the old `AppModule.providers`.
2. Inside a standalone component. This is **component-scoped DI** — useful for testing or feature encapsulation.
3. Provide services at the route level. Great for **feature-based dependency override**.

```typescript
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./product-list.component').then(m => m.ProductListComponent),
    providers: [
      { provide: ProductDataSource, useClass: ApiProductService }
    ]
  }
];

```

| Scope       | Where to declare `providers`                                        | Use Case                                       |
| ----------- | ------------------------------------------------------------------- | ---------------------------------------------- |
| Root        | `bootstrapApplication(..., { providers: [...] })`                   | Global services (HTTP, APIs, auth, etc.)       |
| Component   | `@Component({ ..., providers: [...] })`                             | Scoped services for a specific component       |
| Route-based | Inside route config `{ path: ..., providers: [...] }` (Angular 17+) | Per-feature overrides (e.g. mock data in demo) |

### Interface vs abstract class
```typescript
// base abstraction
export abstract class Logger {
  abstract log(message: string): void;
}

// console logger
@Injectable()
export class ConsoleLogger extends Logger {
  log(message: string): void {
    console.log(`[Console] ${message}`);
  }
}

// server logger
@Injectable()
export class ServerLogger extends Logger {
  log(message: string): void {
    // Imagine this sends to an API
    console.log(`[Server] sending "${message}" to /api/logs`);
  }
}
```

Same as interface, the component can use just the abstract class without knowing specific logger implementation.

Why this follows LSP ?
- `AppComponent` depends only on the **base abstraction** `Logger`
- You can **substitute any subclass** (e.g., `ConsoleLogger`, `ServerLogger`, `FirebaseLogger`, etc.)
- As long as they honour the contract (`log(message: string): void`), everything works — **Liskov Substitution Principle upheld**

So what's the difference between interface and abstract class ? as both interfaces and abstract classes let the component rely only on the contract, not the implementation.

|Property|Interface|Abstract Class|
|---|---|---|
|Can define a contract|✅|✅|
|Can be injected via DI (Angular)|✅ _(with provider)_|✅ _(with provider)_|
|Promotes Liskov Substitution|✅|✅|
|Supports polymorphism|✅|✅|
|Used as constructor type|❌ _(TS only)_|✅|
So both can be used in Angular to **achieve the same design effect** when you just want to **inject a behaviour** (LSP-style). However the difference is:
- Interfaces are purely structural (no runtime presence)
  They're completely removed at compile time and thus cannot be passed as constructor arguments at runtime.
- Abstract classes exist at runtime
  They can include default behaviour 

```typescript
// interface
export interface AuthStrategy {
  login(username: string, password: string): Observable<User>;
}

// abstract class
export abstract class AuthStrategy {
  abstract login(username: string, password: string): Observable<User>;

  protected formatUsername(name: string): string {
    return name.trim().toLowerCase();
  }
}


```

Interface:
- stateless
- pure contract
- Swap freely between `JwtAuthStrategy`, `OAuthStrategy`, `FakeAuthStrategy`

Abstract class:
- You want **default utility** (`formatUsername`)
- Force children to use it
- Subclasses benefit from shared internal logic

As a conclusion, they both support SOLID, LSP, and dependency injection, how to choose ?
If you need shared utility methods, default implementations between subclasses -> use abstract class
If you just want to enforce shape or type -> use interface