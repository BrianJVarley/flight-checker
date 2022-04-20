

# FlightWorkspace

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@flight-workspace/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.






## ☁ Nx Cloud


# NGRX Schematics

Generating feature module state:

```Bash
ng generate @ngrx/schematics:feature flight-booking/+state/flight-booking --module=flight-booking/flight-booking.module.ts --creators --api
```


## Creating Libs

> The publishable (also buildable) switch makes sure the library can be compiled separately which is the key for incremental compilation.
```
ng g lib ui-card --directory luggage --buildable
```


## RxJS

- RxJS decision tree, use to figure out what operators to use - https://rxjs.dev/operator-decision-tree

## Linting - Domain rules

Example eslint error displayed if project or lib imports a lib not tagged correctly in `project.json` tag property. e.g, `"tags": ["domain:luggage", "type:feature"]`

```
➜  flight-checker git:(main) ✗ ng lint luggage-feature-report-loss
> nx run luggage-feature-report-loss:lint
Linting "luggage-feature-report-loss"...

/Users/brianva/Projects/training/flight-checker/libs/luggage/feature-report-loss/src/lib/luggage-feature-report-loss.module.ts
  5:1  error  A project tagged with "domain:luggage" can only depend on libs tagged with "domain:luggage", "domain:shared"  @nrwl/nx/enforce-module-boundaries
  6:1  error  Projects cannot be imported by a relative or absolute path, and must begin with a npm scope                   @nrwl/nx/enforce-module-boundaries

✖ 2 problems (2 errors, 0 warnings)

Lint errors found in the listed files.


 —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 >  NX   Ran target lint for project luggage-feature-report-loss (2s)

    ✖    1/1 failed
    ✔    0/1 succeeded [0 read from cache]

```

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
