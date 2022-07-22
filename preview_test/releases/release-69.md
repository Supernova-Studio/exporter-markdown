
# Release #69

We are killing the spreadsheet behind the design system - and replacing it with something much better! Also completely new components! And health statuses! And component lists and design system overviews and data deeplinking and new Figma component pickers and....! Oh my 😱😱😱!

---

_This version was released on May 24, 2022**_

Welcome to MEGA release #69. We are absolutely thrilled to show you what we've been working on recently, and we hope you use it to take your design systems to the next level! ❤️

# Overhauled components!

As you might have seen previously when working with Supernova, components were not exactly involved. Well, that changes today, as we are *introducing a complete overhaul of the component system *- using the new system we invented that reimagines what it means to manage your design system data in one place.

![Img](https://studio-assets.supernova.io/design-systems/6475/419e0511-56a3-471f-a2f8-24bb2c0631dd.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzQxOWUwNTExLTU2YTMtNDcxZi1hMmY4LTI0YmIyYzA2MzFkZC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=MMJDGcfwLcAZjGcYtGHATUS3aVD~sc0n6o3x8idiuD0mXvr9k-~KM8Q4CWIEy-4uZiUw8uophrQqsJ84RU6ByaMd89ASLJkfKJaUteXed0KtRAP~j2DVxG2bC5h6wqH7tQU4lBJgkLyzQFznC3mYYtMu91N9~vpQoX1IDFqHN2WpHZOieCMUXNglcxgPzamSZ6DQH-LIp27ZxKwoonSnvyziiINPgXS8jwbKlhOF049Zg4mteQiJNs8biTdoC0~NEoKoaTlbo6B3W4iapNCFmUt1DzxNVMm2PCrN4ak0WYqM7-7chpPRTfG9Ol7g510vY8EaOgcBZUw6cBwB6rNz6g__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

The Components tab is now the replacement for all of your "design system spreadsheets" - bringing together the constellation of data that represent all of the facets of your components in one place - from design components, to code components, to metadata used to govern processes around them. 

Here are some features that we are launching the components with!

## Semantic Components

With this version, we are introducing semantic components - objects that can hold all pieces of information about your components! Basically, you can now create real components that will link all pieces of design system data together, however different they are. Here are some examples of what data you can link together, which is by no means and exhaustive list!

### Figma Deeplinks

Link components with Figma - and never lose track of where that component is, even if you move it inside Figma! Also, all this is automatically tracked, so if you make change inside Figma - it will automatically update in Supernova for you :)

![Img](https://studio-assets.supernova.io/design-systems/6475/78ac90f5-2262-447d-84df-a0042fb9a5ea.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1Lzc4YWM5MGY1LTIyNjItNDQ3ZC04NGRmLWEwMDQyZmI5YTVlYS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=MsgyewZNJ2lKb-jpwGFLtT7uUmWQk8625HRV5lHe1sgUsIfATUoKj3jRPmK4z5ER00h6kkkexE8-1-vffdfQEX6LnEzZ~f5bqnBs3PiZaQsoo0ilS7Ra-V8R-DNQ3BNHoLmJAMIFOmXPk8tgA~FBCVEnb6IC6NiEFXyAifl2KXSlxSdf1sJ3SLPrgYF~JVlkI31DCqZa72E2NRjO1u9VYadNn81HkpaqhNFEPlJ~IZDoac7wtXRAC~WehtJWrEmOLm3wX3SHxyQ4aZYTUGuPBrZ7bFMEAL0Cxhwv5IW1vq3fkXQYwX7Kl6sLKCuZGJqsOLjVNXTheZug9KaXxor3Ug__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

### Documentation Deeplinks

Link documentation pages together with components - and make those pages as done, work in progress, or any status that you want to. You can also immediately jump to the right page. Of course, if you restructure, change, or rename the page, it will still be tracked - no additional work is needed!

![Img](https://studio-assets.supernova.io/design-systems/6475/9a05b61f-30a9-44ba-b5c8-5cfadcf0b9bf.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzlhMDViNjFmLTMwYTktNDRiYS1iNWM4LTVjZmFkY2YwYjliZi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=WFQUtsyvJpPG3RfIYfbmLyxtI~szxQUpo8ArvHxJ3PW0zHpEoGMheIEIlTCuir4DXwG868hdlhWEGhDExQh9R-7OGjf646RScL1v5or1X5nVbXJCjrf5GutyJa5fcgIUXd~7jogOLCtoaX1SSXgIefCSCdfG26sesDlGpOWTSGPtJWUPHuzSqms9xZZ7CNv40-fd5-k-PcMfPjgm-c-Uqix-n4Y5XNpZmxMOEGyo1eXQxFtdvVGGJV7mCLP2SZT2PGmuwCooICT0NF0lXk8gFvypZ7tnMdC~aJ1XgdVNaJzYRm~rmgztykZ~046oz1XS7XIk7QkOuoiUkZ43RXzKLQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

### Storybook / Codebase Deeplinks

You can link to any kind of codebase / storybook / other visual platform and bind code and developer documentation to the object this way.

![Img](https://studio-assets.supernova.io/design-systems/6475/1c19bd2e-5a0b-450c-a721-1b4dac2e1244.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzFjMTliZDJlLTVhMGItNDUwYy1hNzIxLTFiNGRhYzJlMTI0NC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=RgjOciMW1Ar4W5TitWbdpVcJ4YIAH1ihOGwa4Qlz1pkEj~rkQuprhAPJauS~ZmmAqy7P1qA3Fh0oPjikqLC4OP8SCmqltANzx-EGS55dMu6hJ6pbybsBaVjTmlEHDLmDiAmKEkQ8x2YxVOheUgPQK~-KEdMuaL0j5W-McJc8n-2zCYeNR8bYbaOTQOIxfzpk7Pk7D2tPaZssnDokbReGkzELYk7Si6EV9wjNuEIbRqJc2g6F-T4BX6VuWORJnsxXxygxC80y8xsmq7LwGF7HVJYTxNweTMMnN5-a53Ue2t8ugIz95YFY1B~BEBK1QXbkA8p1ce1qZ4Og1nrU4h8DDw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

### Statuses / Processes

We are super excited to also announce statuses! With statues, you can track all kinds of metadata and the different processes you have inside your design system. In the following example, we are tracking all metadata about component accessibility and some additional features that may or may not be present for each of the components!

![Img](https://studio-assets.supernova.io/design-systems/6475/a2cfc365-9b7c-427d-a113-b4f687386cff.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2EyY2ZjMzY1LTliN2MtNDI3ZC1hMTEzLWI0ZjY4NzM4NmNmZi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=QPLtdjqg5XrB6saFJuOJebAeNY6Wv3wuX1YTyLOK6QuqIeh05YLnZ-0zh48JSCxHn5sl~Kq5owz8jk9eZCye4UT9SisBru4rAG4dLVqQ3O2xV1G2SWktTI6vOR4-X7MtB-3ug-QrLs3oSF2a0Wj-H1YDSY5g~Z2DL-MCyUf67mhs~uE~uu85KcT~ysmQZHQ8VfIocNIHlTi0MpZvVJo1~tiiFcItiaWQ6582zVoxPtAu6GnixdBLsHBCG9aW4u14lQn6epKbTQmMMzLnefYTx2xCHb1Isbtv-sjq3xCtyP12MhpNeFeETLOGr0YFpyOExmFNcYivgT7BBMc7pA-1SA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

### Customizable Fields

The data structure of your component object is unique to your design system, so we are bringing forth complete customization of it. Add/remove data, columns, and components however you like to - always connected to the sources you have pulled in.

![Img](https://studio-assets.supernova.io/design-systems/6475/cfdaec96-31c7-447a-aa16-229ae53452ec.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2NmZGFlYzk2LTMxYzctNDQ3YS1hYTE2LTIyOWFlNTM0NTJlYy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=amyrVTnwU1RpmT~iLkgRAMDkACOej9H3qkv3~WtnbzLHBzlOPgwjRqgHpFu5lYABfxI84XX-Aplv27yBt-EGwkV1e7kqiCh39rpRkk7ycASq7wwE1q78QY9lVR0FnkvMvk12NnAYBPmU~qRRgKTA44hHT3T5qah0Lv9s8JTttYqmJa6oA9QD3-ILz4eNSeFZdQWLFxSulxdNuiwPfCgK2hcGLdkEakdA8Q1x6gISZUgXUQNfn6WFqX8KsKMf43EQXgCo4uLr1Q2jOlgLljrFHkFxNvF5HN-Ox8pBIBG0-DzIBcfzLohskQSXRulvgwT-muuFaAl4siiRF9hgDYCGlA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## New Documentation Options!

Alongside the release of the component overhaul, we are also releasing expanded ways how to document your design system components. You can now use the data that you create to enhance your documentation in many different ways.

### Component Health

First, you are able to create component health blocks that will make your pages stand out, fully connected to the data in your "control dashboard". Simply type `/health` in the documentation and link a new block with the component you'd like to show!

![Img](https://studio-assets.supernova.io/design-systems/6475/a8e18d16-fd47-422d-a885-b099ba127923.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2E4ZTE4ZDE2LWZkNDctNDIyZC1hODg1LWIwOTliYTEyNzkyMy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=GSTMa6IwVteI2xXy3d4NJ79dqAPu0QE0~V6OxOLzxJkSmnij6Z1S0HMNw3QTn5mSdhH5j9v2zjT2RgaDBjOUYHWKLnoSXj5pfHI0XeQxg6C9XrJhsWllhH~-y0pcPo3MB0nacR7xtG42Na1weoUvpxoaZlLlzQQG8axSLpDweIksO8EQU8qkVGcyfXNBDeTogLXGiWwSGavCeMP3rC2j-MFa7-On78PoJ66ZIRgAiXP~sNtpFvacGhhZAKYyj9gxBk19X7d6mLKUB7Z8Fz~3JVtRjIKmvHOxJoFB~lF1EZuDAHyNMDCjOsrTDX851FGWKRjxlqsSJ3lsIa71-DnTtw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

If you create a health status, this is what you get (don't forget to click on it):

### Component Checklists

You can now create component checklists (`/checklist`), allowing you to visually represent your control dashboard in a nice visual way. This can be customized visually as well, enjoy the experimentation! Here is a small preview of what can be done with it!

![Img](https://studio-assets.supernova.io/design-systems/6475/26458568-fee8-4d45-af44-d005f0e4d2a2.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzI2NDU4NTY4LWZlZTgtNGQ0NS1hZjQ0LWQwMDVmMGU0ZDJhMi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=gFDULJClE74ptbvDprFLbDcWQ~eyQvXDWZaAy4IIwmqr4zZ3oOY1LdLxBKAbXTEa3zawRzBlcDI5CyvTXLzRFnSMsFKWVAXdUJHs6paQzkt2Z4WZFOE27JPS43QtISK6xHR5~c90EjqH2sg~TfhLp3M9RtmDaqsZMFzrwteJ7g30Q7VpWMl-SLvvnewxtCvcS56cTmZfa6NXYdTiiuGu2iXdBDshUuIdGlrLXAejZdJOBQaEctVffR2oaKhBdpxKtD4u5riRZc2uEWxjKaYH3ecj6H6~KV8IFQGW4kV29XL6QGPZjA7kycIk8LgvptE5lGTow39Z1V5fxlOnnLcjkQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

### Component Overview

Finally, you can also show overview of all components in your design system, with you in charge of controlling what gets shown, and what not. 

![Img](https://studio-assets.supernova.io/design-systems/6475/20fad961-0d19-4650-8f9d-a1f7a6ef83d8.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzIwZmFkOTYxLTBkMTktNDY1MC04ZjlkLWExZjdhNmVmODNkOC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=AG8HyBtmkrjA0mSbNAyDYbFQ76BtbVuwgOjvaZkq1PL9kVq-~sUYxcE1SHGRg3xN2Uh8T5zfeunYKe-WNz2fiYYjM3E44PYREsduzmqGJUDLI9qCVbx2tHj5vaR2derbtWweEdoBTKjhkVDh7Rjr-jF6pPg2ZGLmjJy9wMaLYLGc19H5tIXADqe3htexrW7uwT21SZocQ4r~Wy0f5XxhpgSMT7kRuWh1JHhYnx32c4pEJFgmLS69wnjn0hwj7G0ywfjgO9vmmuuOaOYjZeR-B4qS2ELzWzVHgH-xrypilwnwPIp4zgq8uIXtjnXNNe~Hl32rV~XF2cJz9SbDye~wng__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## New Figma Component Picker

We have added a new Figma component picker that you can use to select your components - and component views are the first place where this comes to play!

![Img](https://studio-assets.supernova.io/design-systems/6475/89836dc7-adba-47b9-acb8-9ecc99f15d09.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1Lzg5ODM2ZGM3LWFkYmEtNDdiOS1hY2I4LTllY2M5OWYxNWQwOS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=mN-G5FMgQzrDsaDs3QjmJshoOTwrsTNfR3RkvmhBpiq5SZ0YgOACkqKVMm7TBBFdLOv61Jsc65o4fuMUb0ZF4QIRrR4my9pZMLaCcJtTwyBaJ7Wh6WfHWEwFF5dFU6Zu3GZW46ejDWHcX5U5NiKkzkGtmY5s2INBqqgk9~FsU62MsvGOtuibjPplGiVi4aJheg~D4HEYKBCO4DxFAE9v86lS3JcaSCFtjxz2--GsiJds8OtgcUsU57SM9qpXNhnpT9HfJLCwcuzL-w0AZuwU18dJQGdIlh~kW2xxZ3u3JJN4LDb706lyBwZjCGFOAVadQjG6bV2~0ACrEwcXcSbAcQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## This is just a beginning

With the hyper-flexible system that we are announcing today, we are establishing base for all our efforts going forward - and our dream of completely customizable, yet interconnected design systems where all lives at one place. We hope you will enjoy this feature as much as we enjoyed working on it!

Note that this feature is in a *beta/preview release* right now, and will be evolving rapidly in the upcoming sprints - so we would like to join us and comment on what we can do better, and how to improve it! To do so, [Join our community and let us know](https://community.supernova.io)!  

## *Bugfixes*

We have additionally squashed few additional bugs that few of you reported - thank you!

- We have fixed a very rare issue that caused all assets to download as 1 kB big broken `.zip` file.

- We have fixed issue with exporter occasionally not working in docs when you used tokens with aliases

As always, if you would like see something new, fixed or improved, join our [Discord community](https://community.supernova.io/) - we are always there. Thank you for your support!