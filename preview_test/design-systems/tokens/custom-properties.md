
# Custom properties

Extend the definition of tokens in your design system, allowing more possibilities 
for working with tokens in code

---

# Usage

Custom properties are the most useful for storing additional metadata next to design tokens. 

Defined custom properties will be:

1. displayed in documentation,

1. sent as additional parameters to code exporters. (e.g. to be used for conditional rendering).

## Examples of custom properties

There are many ways how to use custom properties. Here is a list of a few examples of how others use custom properties for design tokens.



Missing parser for block type Table

 

# Structure of a property

A custom property consists of the following structure:

- *Name ->* Name of the property

- *Code name ->* The code friendly name that will be used in code generation

- *Type ->* The type of value. We support 4 types of custom properties (Text, Number, Boolean, Generic)

- *Default value ->* The default value of the property

Once a property is defined, everything but the `type` can be edited.

## Available types



Missing parser for block type Table

 

---

# Define custom properties

Custom properties for tokens are applied at the design system level, to all tokens, and can be overridden for each token. You can create, edit and remove custom properties of a design system.

![Img](https://studio-assets.supernova.io/design-systems/6475/d026328c-aeac-4846-a0ca-515ebb8e0a61.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2QwMjYzMjhjLWFlYWMtNDg0Ni1hMGNhLTUxNWViYjhlMGE2MS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=DkUNz9iJ9fcBeXKGS9j2fZxK9xuvK7qYjpGNYKJ5yjqDKjxHt7RYxgXwRVH0~P7CcQCj-G5Be9peBxUb2OAk2n09EBymUxqvWVrRwzqdnUv7VVyWwqRtDI2O84tNRCCDrMPds2-3Oo7NYyh0wYFifKbQOxEcmliSyag9MESveIiswg8aiBs0M98X1r6Q-Um8utp1LPtYLKWrJw2~m4rgY6CS4pEz8nDqHiUDp7dxZ9Ubo5vr~CUm09zSmnlst42J9DagSS01m4NzpiJ-jgVA3fYAxaxiSdKFGyOmSX0enzKhNYB7Hjd~sIcJgawysRXlUsaLL53Wnahd6iSnHfG2aA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

> Only owners and admins can define custom properties.

## Create a custom property

1. In your design system, navigate to *Design System Settings > Properties*

1. Click *`+ New`* to create a new property

1. Enter the details of the property: _name**_, _code name**_, _type**_, and _default value**_

1. Click ✓ to save (or x to cancel)

---

## Edit a custom property

1. In your design system, navigate to *Design System Settings* *>* *Properties*

1. Edit the _name**_, _code name **_or _default value**_ of the property

1. Click *✓* to save

> *Note →* Once the _type**_ has been defined and the property saved, it cannot be changed

---

## Remove a custom property

1. To remove a property, hover and click *`Remove`*

1. In the dialog, type *`DELETE`* to confirm

> Removing a custom property will also remove all token overrides

---

# Override token properties

Custom properties defined at the design system level can be overridden on any token.

1. In your design system, select a token and click to open the edit dialog

1. Under *Custom properties* you will find a list of the properties you have defined

1. Change the value of the property you wish to override

1. Click *`Confirm`* to save

![Img](https://studio-assets.supernova.io/design-systems/6475/79c3aef3-3121-4a4b-8073-8e4e4f6bf020.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1Lzc5YzNhZWYzLTMxMjEtNGE0Yi04MDczLThlNGU0ZjZiZjAyMC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=Pr3Hxjjp455l3k61OGm7~gHjLEBZ0V58DACLeZthLAFUVBqRgfhqRr84gvUSPGZ999ZGXuaa70HZnW6b-lQgeKwop0UJuqzWQ5e-b~g0Z1N5~eiFyyS1i3u4~YvuNCV4iDQKcrdfkoTv13CX~AFEm-4o-4Rnzy3UDpCmFff4Ilwv1LZJmaFjWk1bG5KWr1Io6eivAR5BA5cW~h3onL5LCuHyh8pZBpTksHVRZwMYx5AEabOjc0exWvVLFQJLeKBZmVeMyCkPwYIDKClohZPUKW3b5hUArD~rMmz7EiiscmQJ1kLeAvN8HNuXxQDUHCTz0aa3qKvEesBkB~QxzkuY6Q__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

---

## Remove a token override

1. To remove a token override, click the reset icon in the input to reset it to default

1. Click *`Confirm`* to save

![Img](https://studio-assets.supernova.io/design-systems/6475/89a94420-d6e2-4098-a254-228ee3990ac7.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1Lzg5YTk0NDIwLWQ2ZTItNDA5OC1hMjU0LTIyOGVlMzk5MGFjNy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=l3oIVo05m3MbeI25ud4cLqAREUxLyvjZUJ8zg0uPFlyVKuXvjsx7so-PPWXfiPewbbHzLtisjEI-sZ9L5yeclJWjWzABhViZKg5qp9aNJGWx6~RHwnatsevGIj0Rjet9yTguQh0Rpjfrl-Y~yBajUByMNgBkQwJJ5p7H0zF8R0C94aG-12kRuTAchVHTs6ut7mrb-x0Z2CuIrFMuL8RS9E-BjlqrFrGTtFP6ACrCDO6m5~bpJzCFCiCQpmGNYdKN1P~R7GBUi4KnTH39bEpoYlM6NQvVflju1G95dk39-GCPzCilHKll9zBMH4YHl-0yE0kCFpS9ib1Ja4vXjDiRdQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

---

## Remove all token overrides

1. To remove all overrides for a token, click the *`•••`* icon to open the menu

1. Click *`Reset all overrides`* to reset all to default

1. Click *`Confirm`* to save

*Name*

*Type*

*Description*

Internal token

Boolean

For tokens that are not supposed to be exported as variables to code. These tokens are created only for easier management of our token set. 
For example, for having tokens in Measures for referencing purposes, but not meant to be used in final code components.

CTI structure

Text

For generating variable names based on CTI structure (Category / Type / Item) as defined in [Style Dictionary](https://amzn.github.io/style-dictionary/#/tokens?id=category-type-item) or any other token naming schema (like in [Mineral UI](https://mineral-ui.netlify.app/tokens#formats-tokens-index)). 

Deprecated

Boolean

If the token is not supposed to be used anymore in new components, but still needs to exist in the codebase before removed completely.

Themeable

Boolean

If the token is themeable or not (as seen e.g. [Salesforce Lightning](https://www.lightningdesignsystem.com/design-tokens/)).

Group

Text

For structuring design tokens into groups, so it can be used by exporters for generating Sass maps (like in [this article](https://medium.com/bumble-tech/design-tokens-beyond-colors-typography-and-spacing-ad7c98f4f228) by Cristiano Rastelli).

iOS/Android/Web Platform

Boolean(s)

To define which tokens are supposed to be generated for a specific platform and which to ignore (e.g. tokens for responsive breakpoints only for web, nothing else).

*Custom property type*

*Description*

*In exporters*

Text

A common text value; sent to an exporter wrapped in quotes 

`"key": "text value"`

Number

A numeric value; sent to an exporter as a number

`"key": 123`

Boolean

A true or false value, sent to an exporter as a boolean

`"key": true`

Generic

Similar to text, but sent to an exporter like a constant

`"key": constant`