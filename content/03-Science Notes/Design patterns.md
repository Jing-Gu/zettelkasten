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