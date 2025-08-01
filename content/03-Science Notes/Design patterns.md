Learned from [[Design patterns (Gang of four)]]

Objects are created by instantiating a class, that's why the object is an instance of the class. Instantiating a class allocates storage for the object's internal data and associates the operations with these data.

An **abstract class** has main purpose to define a common interface for its subclasses, an abstract class cannot be instantiated. 

> Program to an interface, not an implementation

Instead of writing code that depends on specific classes (i.e., concrete implementations), you write code that depends on **interfaces** (or abstract types).

Example in Angular, data service abstraction
```typescript
// 1. define an interface
// user-data.service.ts
export interface UserDataService {
  getUsers(): Observable<User[]>;
}

// 2. concrete implementation, call real API
// api-user-data.service.ts
@Injectable({ providedIn: 'root' })
export class ApiUserDataService implements UserDataService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }
}

// 3. easy to do mock test
// mock-user-data.service.ts
@Injectable()
export class MockUserDataService implements UserDataService {
  getUsers(): Observable<User[]> {
    return of([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]);
  }
}
```

Doing so can swap APIs easily to do mock or test
```typescript
// in app.module.ts or specific module
providers: [
  { provide: UserDataService, useClass: ApiUserDataService } // for prod
  // or
  // { provide: UserDataService, useClass: MockUserDataService } // for testing
]
```

> Favour object composition over class inheritance

Inheritance means creating a new class by extending another one. Composition means creating a new class by using other objects or services rather than extending them.

|Inheritance|Composition|
|---|---|
|Tight coupling (hard to change)|Loose coupling (more flexibility)|
|Can only extend 1 class|Can compose many behaviors|
|Harder to test in isolation|Easy to mock and replace parts|
|Forces hierarchy|Encourages reusable, flat structure|

For example, if many classes need pagination feature, instead of extending from `PaginatedComponent` (problem is only possible to extend one class), what if they need sortable behaviour. Instead, extract the logics into a pagination service and inject it into components, possible to reuse across many components. 

# Creational design pattern

## Factory pattern
Defines an interface for creating objects in a superclass, but allows subclasses to decide which class to instantiate.
```typescript
abstract class Car {
	constructor(
		public model: string,
		public productionYear: number
	){}

	abstract displayCarInfo(): void;
	// the abstract displayCarInfo allows subclasses to implement its own method
}

class Sedan extends Car {
	public displayCarInfo(): void {
		console.log(`Sedan. Model: ${this.model}, Production year: ${this.productionYear}`)
	}
}

class Hatchback extends Car {
	public displayCarInfo(): void {
		console.log(`Hatchback. Model: ${this.model}, Production year: ${this.productionYear}`)
	}
}
```

```typescript
class CarFactory {
	public createCar(type: "sedan" | "hatchback", model: string, productionYear: number): Car {
		switch(type) {
			case "sedan":
				return new Sedan(model, productionYear);
			case "hatchback":
				return new Hatchback(model, productionYear);
			default:
				throw new Error("invalid");
		}
	}
}

const carFactory = new CarFactory();
const sedan = carFactory.createCar("sedan", "Camry", 2023);
const hatchback = carFactory.createCar("hatchback", "Corolla", 2023);
```

### When to use factory pattern ?
Often used when a class cannot anticipate the type of objects it needs to create. If you are dealing with a large number of classes that share a common superclass and you often need to instantiate one of these classes.
Pluggable for end users, all to know is just a factory class `CarFactory`, no need to know the Sedan class or Hatchback class etc.
Hide the complexity of object creation.

### When to favour factory more than interface ?
An abstract class has constructor and the interface does not have. If `Car` is just an interface, will have to repeat the Car constructor in all subclasses
## Abstract factory pattern
Provides an interface for creating families of related or dependent objects without specifying their concrete classes