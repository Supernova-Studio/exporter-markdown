
# Types of tokens

The types of tokens used for building your design system in Supernova

---

## Color

![Img](https://studio-assets.supernova.io/design-systems/6475/67f83fa1-2272-4826-9629-7dd8fefc078a.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzY3ZjgzZmExLTIyNzItNDgyNi05NjI5LTdkZDhmZWZjMDc4YS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=Zw7unTpdzUbfQQFZnE~0B1~5o6IqguOG7q~dDKdSkskYTFO2oOidAMh5~0QrEOJAmErSRltdJkmw3aGVfDm4i48O-QnabYIBsds2hCoxtA00Dz~RKcP5b0bpblKtum6mNf0cxpaehejJqbAI52Ao6ZLC2u3JTQ4bISpzU4rTT732cZH7d6j9iCEpQ49SkTWTQqt5JhwlG7CKmzFQB2KL842Oai6LYePP5cyPPSVAUCafYsG-4Srn3EseeGsXRucJjU0Xf2gVX6yCwuOfy6TSsYGMVscpxGBnq0S2apF89bZLVZFkpOQNcOargMUxeYodPOJoDvvKNqx8ItWDJbnGsA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

A color token defines a color used in your design system. It can be defined as a `HEX`, `RGB`, or `HSB` value with an optional opacity. These tokens are be used wherever you want to apply a color in your design system — for example, as a property of a component — and can also be used as a part of other token definitions (see token referencing). 

A color token value is the color itself, regardless of format, so multiple formats can be used and displayed in your design system for different purposes (i.e. `HEX` and `RGB`).

> Yay:  
> Color tokens can be imported directly from your Figma design system file

> Be warned:  
> *A note on multi-layer fills — *currently, multi-layer fills imported into Supernova are flattened into a single color / gradient token.

---

## Typography

![Img](https://studio-assets.supernova.io/design-systems/6475/a62e5f87-4203-4c62-ba7d-d7f16541d34b.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2E2MmU1Zjg3LTQyMDMtNGM2Mi1iYTdkLWQ3ZjE2NTQxZDM0Yi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=UfRzExm~eBBQ~Tn~EJYsXjvGHJ49x0JNHvf6SuGqn3OCYS4MMA134TrmkDvM-9WiDEcXOax7g4~sJziv9O2rRgfSvWnoKEDWH91RgnnXGF3-zr5~LDhiS6cinLuHbMQc21if2gpno37MyAuaclvXoevHIP22Y73qEFCL1iDjF4yTDzzoGwUOjCZuQ1aIEjBBV2LjCVCJ9q-2tTGM5G0DmGUma0I2YkGXUqRLjzOP~B~-UYA30VRZhidbumYcIPsP9u6Z5GRa~zjA3N6YD8dUf-eGgo2JyCOinxxZ63-cnTMwxU9Ksw8KrVeewSXqRPQzm0AV3ZXNbwIs9dmwDzSrVA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

Typography tokens contain the information for an entire font style. They are a bit more complex than other tokens, but they can be imported directly from your design editor.

*Required values:*

- `font-family`, `font-weight`, `size`, and `line-height`

*Optional values (if these values are not specified, the default will be used):*

- `paragraph-spacing`, `paragraph-indent`, `letter-spacing`, `case` (transform), and `decoration`

> Yay:  
> Typography tokens can be imported directly from your Figma design system file

---

## Font

![Img](https://studio-assets.supernova.io/design-systems/6475/973a0bf5-827b-486a-a183-2ca1d700b59c.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1Lzk3M2EwYmY1LTgyN2ItNDg2YS1hMTgzLTJjYTFkNzAwYjU5Yy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=aYnDfsUsMFyhCxD67qY-wyE~BzqijYm4mKr6Y7y7LoH97lbfbHelNnZTagT8TN7EVY16O76othAk2UFn9SeiJpqHmdeL8yuNuwGAmNCtBKg0f8cUqW4S9BBtt7PEHFbOneY4AWHbS5U17WxoEjKiNlfI9kX2YuV3QbCAFQ-JGMrmkEhMB8fezMajK8u~~kEPe6aaLZ1OB6s4BDi9YykBYxnaXBfdVwNzdWPC3RklZo-rFJ0qoVSXgfQujqzY19GLI3yrW3bdzVxBlo5ueP7zKMwJTxpjyx80OBzAbhPSpttNT7o2dKGIzJgI~crNMzpiVAIRWkx1trqfGtfoLQULlA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

A font token defines a font family in your design system, with no other design attributes. To learn how it can be used as a part of typography tokens, see [Creating Aliases](https://learn.supernova.io/design-systems/tokens/creating-aliases.html). 

*Example:*

- Token name: `default-system-font`

- Token value: `SF Pro`

---

## Gradient

![Img](https://studio-assets.supernova.io/design-systems/6475/5348dcfc-9fa5-4181-a90a-cf7b5d4c58b2.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzUzNDhkY2ZjLTlmYTUtNDE4MS1hOTBhLWNmN2I1ZDRjNThiMi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=jezaSeOtLZqlBjNlX8U4E0rHnM56qSL9I8fGKoqB~VwsC~3RIiX0J6K2QNh8q6VpjuCc4~4rDwquepvp6pFboHp5Da1JfBKbkDNWTkslhaAWbhcXlUVu77rpQ5dLEy-v7eTmYrwnFJ4bv-k9S7pnlL29QZ0-8xqIMTf~nZi7r9KJRpL79x~236tIs~BLDCqaEjnulTYKBa9XqWoT1MnaikzHIGJ5cSiLgSEoPu639TmaTvtAQ-no52M2kmhKHS6kDpRQyJz~EH~HSC0SyljFaUk9xDFfyuqSALXTwD9sWeEvI9zXYBgNPsl0cSVt3yXFHVUbs0J2vSdRsgGavyUEzQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

A gradient token defines a gradient within your design system. 

*Example:*

- Token name: `overlay-gradient`

- Token value: `radial-gradient(#f69d3c, #3f87a6)`

> Yay:  
> Gradient tokens can be imported directly from your Figma design system file

> Be warned:  
> *A note on multi-layer fills —* currently, multi-layer fills imported into Supernova are flattened into a single color / gradient token.

---

## Border

![Img](https://studio-assets.supernova.io/design-systems/6475/325e242b-d731-4a3c-9654-f6123e9d5198.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzMyNWUyNDJiLWQ3MzEtNGEzYy05NjU0LWY2MTIzZTlkNTE5OC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=SfOwWxTE~PHLBtm34nTXbEQfG~T6SxTdc2mQ32SgJfGcRurFdUbsYLgupDnmf~1f8J6cO0xCymIBZ6mbImL1oZq~OzIXMYuKCQN2iATB5--XL-raR209MeSJ7OnPD7DnL6tZOtAwygJZ~Wpv~SD5m7CLgs9fmJy2IygVMM-MhVrXI8lAhj4QX84NsWsS-crenbv5mL7SGKCgiBWb7DbFjY95-kSRLKELmIxJuCDCpxQ49n0aJTtEpOZLGLieTVzAW3sAXe0kVMS6NYDcl~OStVsGMulqjjPdjFImzAea-I-p-Xl7cZf7lMNrVdAQrDgxM3gQ0q9DdXXs1a2UyH2cbw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

A border token defines a border within your design system. The values required are `color`, `width` and `style`. The color value can optionally refer to a color token, see token referencing for more information. 

*Example:*

- Token name: `accent-border-color`

- Token value: `2px solid blue`

---

## Shadow

![Img](https://studio-assets.supernova.io/design-systems/6475/644f8af2-a02d-488b-899d-caf2ef760c86.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzY0NGY4YWYyLWEwMmQtNDg4Yi04OTlkLWNhZjJlZjc2MGM4Ni5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=SOj9fOZL6a6eMi1hv-Q4w8gVrazhp3e8tTgrwvRmThmiNSGb9BTEshNojUpt-ICSvGTwJfF0QicBfRhPaincLWaWCCipGQuPFECZFteKvasI06U~5VZKch3mAVxSM~uPqx8he6n3D~y1bjYdxqi8bgoUv3D6Obvtjiq~xdDxB7XRcef-wbDl5cSJO7uefiqVNpBeY7xQtW1waDYgmnZEzBodLpPlrqFEn4-8Ar7ZYQyJg0l5J8kybgwf1rMIPUukTdXPzDXZbKTtWQPBxxi25DwYOK4NcTZBNiZLpiJ~Z1Qk9-MiSFd6-wVygv0J9O2cfYo0IP~BrjA9Xb3q9pdGtg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

Shadow tokens have a type (`inner` or `drop`) and can consist of `color`, `x`, `y`, `blur`, and `spread`. The color value can optionally refer to a color token, see token referencing for more information.

*Example:*

- Token name: `tile-shadow-light`

- Token value: `2px 2px 2px 1px rgba(0, 0, 0, 0.2)`

> Yay:  
> Shadow tokens can be imported directly from your Figma design system file

---

## Blur

![Img](https://studio-assets.supernova.io/design-systems/6475/e42bc425-7ff2-4b62-8657-aac8a3f4d8a4.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2U0MmJjNDI1LTdmZjItNGI2Mi04NjU3LWFhYzhhM2Y0ZDhhNC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=gHq38xE6Y~bs4N0-aXLAllNklCKaEeNjVqXMp8-e0xM9dLl4-aZKeoGNSDGx9InoYVBYGG9sEuJHJruRyhdjHTmpLubwYRYW6PlTkEzfrdp4eZ0yf70Pms~4UyUityeGAxeXJwWSpBnUDCXzKUfDhz53~TWjYWMGpzXDD5izHNIwEEUhPzhkXtwcDbY6dvchfxfLOYlTcFO2KCkesh89CrK~AV-pTr1kFzUYHsb-LkjQrSO926FIwdDRS49Dmh4i5-tJ-0PhlRDJRqOKocnDkFErSeXWVge5SpX6TqkqtcON-lVCms~22G7Bw1W~q1Xg72zEoYWQ5JgGWhsraWFBuw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

Blur tokens have a type (`layer` or `background`), and a size (px).

*Example:*

- Token name: `blur-background-dark`

- Token value: `Layer blur, 8px`

---

## Radius

![Img](https://studio-assets.supernova.io/design-systems/6475/57a139e3-e3d6-4ed3-8374-d1fdbcc36c78.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzU3YTEzOWUzLWUzZDYtNGVkMy04Mzc0LWQxZmRiY2MzNmM3OC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=aUfdd9rEXL3kW~f01k79EViDzk7qco246N18NXjeM-f6IElc21HrHV2JAk9WY1oZXdUgIofG4UpLxbYsElJtqNaehMBjjeygHw7IsUlr6E3gnN2XrD38s8YCn2WBZ9e31~1t6iXgE71vMiLVAxB4lK0BwWjCWpYh9N5aQEW8jgilhqHJLLE9z82vTKQIURNCoJMkhhZx8c1rDAi2ac08nOftGA158WIdeXz597vQ8pk6FiD8kR9mPXom7SlQ34u~9DRiCU99mBSauvLcE~8O~XTjznJxhmC5SOr-p~MGmIqj2Pz6hAVPUzdS-lBqh7V-gLa6up5q25n138MtEINDrg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

A radius token is used to define a radius in your design system. The value of a radius token must be a `number`.

*Example:*

- Token name: `tile-corner-lg`

- Token value (px): `10`

---

## Measure

![Img](https://studio-assets.supernova.io/design-systems/6475/03dd31ee-9678-434f-8e99-8067ef89559d.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzAzZGQzMWVlLTk2NzgtNDM0Zi04ZTk5LTgwNjdlZjg5NTU5ZC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=a~epR2O8Ha2ihnXIUVTL2ri9Oa3tfnXDnkhqsmfdLmZTvkEXcKX5-yk3TfSZT8LYT1KbLR56llFLmvmCnGuoTBsbMlku5ZbkUA~ZkA7ipC5LHbL6dkZIPoSAP0K3CnyxCH5ode2DDxkE-JAe8t2gJG-cwumObdVQGMC~RGy-nw0qu9Qfl8BsSrXtratNoQvgydo3K276jYYJddKnWgsXLQAswE4v19Acgs6Us-OpSX0hpZRi4Aa4pGJeNpRezkHNiDRI5JXpOw0ziRp0K9AkrwqZGZ3VsmTU0TGom-Z9h0SxADoHKpE2KeXa~i1zf4pKt6mvZ1BDQ1ylsO9DWYiefQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

Measure tokens are used to define a measurement to be included in your design system. They have no set format (other than a numeric value) and can be used to specify for spacing, size, animation times, etc. 

For example, a developer could create a measure token to define a specific animation transition time.

*Example:*

- Token name: `duration-500`

- Token value (ms): `250`

---

## String

![Img](https://studio-assets.supernova.io/design-systems/6475/ccbab47c-2845-4103-8663-2d0d8d2c8338.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2NjYmFiNDdjLTI4NDUtNDEwMy04NjYzLTJkMGQ4ZDJjODMzOC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=Wk3wf2W77-PDgvfcJalV5it-ZvEA9Wf42h~eFjj~KZv23bv1xDwLAs1kjinrnruGpC0DVzBdaRGpyOneWT2pZZWcY4J6gg1Z29HUIy9O48A0d5yG-4ZInB2I6k3fcVPNaz4~xUExl8UIlSbMlWwvVaW1-gH6pTQs5mptcqKIpEOsem0MZVCGT8tVQrZqrYSMUPRJkQ8jv6qx8Yh9QnUm1G4oU2bpB3cxSDm7-tiWmc2A4RyUxf4g27OqxfKMjEf2SMGrm-9flzTYxuRmCOFjYwrHp-j0dfuSJhUJ1Y-CwrT~vA1wo0-Zr5FZbkYWg4K~W9xwWHT8uQh9qMUDRbcaQA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

String tokens are used for UI labels or can be assigned to component properties.

*Example:*

- Token name: `name-input-label`

- Token value: `Full name`

---

## Other

![Img](https://studio-assets.supernova.io/design-systems/6475/9e34432f-d822-4434-bd79-22245f70d8a8.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzllMzQ0MzJmLWQ4MjItNDQzNC1iZDc5LTIyMjQ1ZjcwZDhhOC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=Bh2pMSkqUK2kjzW3AwrEiT3L-8m2D1pdyTysSy328x0uQ6zNHre0~Gr7XZTkokD0eUcW9-DtYCVoXwu1qsflBCWbWM1HVqYFqq6Y1XIOgmmskL2umbIXBFTTT108LV-cJcXza-kPJ4t534HyUIVdu4v6kprR-fUB7aUmQWzdq995VvEFADcgaAnzT-~Cc2zOcH5NQZgwR1oRatyaFd5rJBvzbwqtxLhXbKIFQxmAfew64Xkzur5qdXl4Qy8Iyouomrf5YTbipHGLNoNTnOhF4Gcti0HQtAc~dBS2Kmiuk4LBaRX3LvaQ2OwA4hiFx2RBsfvOpcxo7FwDiXTwgEvWaw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

Other tokens, or "generic tokens" are a custom type of token whose value might be used in code by developers, but does not directly translate into a design editor style attribute, and differs from the rest of the pre-defined token types.

It is a semantically named string that can be used for any purpose, but is primarily meant to be used programmatically. These tokens are created manually with Supernova, and are not imported from your design editor (i.e a Figma file). For example, the value of a generic token could be a snippet of JSON or CSS, or any other value you want to assign. 

*Example: *

- Token name: `animation-timing-function`

- Token value: `cubic-bezier(0.1, -0.6, 0.2, 0)`

These generic tokens differ from string tokens, which should be used for UI labels or can be assigned to component properties.