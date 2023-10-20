# Table of Contents

- [Purpose](#Purpose of the Atomic SDK)
	- [Atomic Singularity Integrations vs Atomic SDK](###What's the difference between Atomic Singularity integrations and the Atomic SDK?)
- [Atomic SDK Libraries](#Atomic SDK Libraries)
	- [Modules](###Modules)
	- [Systems](###Systems)
- [Installation](#Installation)
- [Contributing](#Contributing)

# Purpose of the Atomic SDK

The primary goal of the Atomic SDK is to provide a base set of tools that cover the core common use cases that the majority of developers will encounter while developing applications. One such example of this is Authentication and Authorization. The majority of modern applications have some level of authentication and authorization requirement. 

### What's the difference between Atomic Singularity integrations and the Atomic SDK?

**Atomic Singularity integrations** are intended to only **provide a base level of APIs for modules to use for interoperability.** In other words, Atomic Singularity does not fully implement an authentication or authorization layer itself. It is expected that each integration in Atomic Singularity will have an implementation provided to it by a module. The **Atomic SDK** on the other hand intends to provide **full implementations** for each of the corresponding libraries contained within.

In simpler terms, you can think of Atomic Singularity integrations as being the wiring in a house. Following this same analogy, you can think of the Atomic SDK libraries as the appliances that plug into the outlets in the house. You simply plug in your appliances while rarely having to worry about how they communicate with the wiring, and integrate with the rest of your house's electrical. 
# Atomic SDK Libraries

### Modules

- AtomicSDK
	- This default module installs all systems provided by the Atomic SDK libaries. It's intended as a convenience method to get quickly set up with reasonable defaults and no customization required.

### Systems

- Authentication
- Dependency Injection
- Logging
- Lookups
- Reactivity
- Security
- ~~Static~~
- Utility

### What gets included in the Atomic SDK?

Currently there is not a strong guideline. This is on the todo list. Make a strong enough argument for a particular tool/concept/etc and I may consider it. The current one rule is that anything included in the Atomic SDK **cannot make any assumptions about the Nebulas being used**. In other words, all APIs provided by the SDK must be platform agnostic, and use as few dependencies as possible.

Anything that is not platform agnostic, or relies on a specific Nebula should be broken out into another project.

# Installation

### As a package

- Run `npm run install @atomicdesign/atomic-sdk`
- Add the following import to your application's `main.ts` or other initialization file
	- `import { useAtomicSDK } from '@atomicdesign/atomic-sdk'`
- Add the following module installation helper to your `useAtomicAPI()` chain
	- `.use(useAtomicSDK())`

### As a submodule

- Go over git submodule steps
- Disclaimer about making sure you're on the branch you want because of detached head defaults
- Use same way as package
- Optionally can use `atomicdesign:local` condition to use TypeScript imports directly for better work on the tools locally

# Contributing

This is another area on the todo list. Eventually the projects officially owned by Atomic Design will have a unified contribution/style guide, and other relevant recommendations. As of the moment it's anything goes.