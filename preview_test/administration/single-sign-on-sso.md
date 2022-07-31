
# Single sign-on (SSO)

---

# Overview

Supernova uses Security Assertion Markup Language (SAML), which is an open standard used for securely exchanging data. Single sign-on (SSO) utilizes this standard for securely logging into applications. 

With SSO, your team members will log in to the workspace with the specific *identity provider* used by your organization. Supernova acts as the *service provider*, and never stores or manages any credentials.

> Yay:  
> Upgrade to *Company* plan to use single sign-on (SSO)

## Configure single sign-on

The process for configuring SSO depends on your specific identity provider. [Contact us](sales@supernova.io) to enable SSO in your Company workspace and note the following information we will request from you. 

What information you'll need to provide:

- a *workspace URL*

- a verified *email domain*

- an *identity provider configuration* — depending on your specific identity provider, you will need to provide a configuration method either in the format of:

> Some extra info:  
> Note that *NameID* property must contain user email, otherwise Supernova won't be able to create a valid user profile

You will need some information from us to begin configuring SSO on your identity provider side. We will provide you with:

- an *Assertion Consumer Service (ACS) URL*

- an *Entity ID*

- `metadata.xml` that contains all of the information described above, OR

- *Sign in URL* the *X509 signing certificate* and an optional *sign out URL*