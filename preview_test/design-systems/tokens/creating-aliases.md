
# Creating aliases

Create references between one or more tokens using aliases

---

In Supernova, you can create an alias to link one token to another token definition. When the value of one token changes, any tokens with an alias to it will also change. Aliases can be helpful for communicating the specific application of a token in your designs (i.e. cta-background-color).

![Img](https://studio-assets.supernova.io/design-systems/6475/a4c2bf06-c926-4a6c-8a88-46e5302b1039.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2E0YzJiZjA2LWM5MjYtNGE2Yy04YTg4LTQ2ZTUzMDJiMTAzOS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=ZoxFRVqg8EuHZMuz29DcC4q4g59FT07-JzTNGUjDqsUwsXxg7cQErQT7m0NAYJSbQmbRFry92ubE00a2o2jnt09biVWZY08oSFcs9QnD7jgmI8OQ-Rt7pJbDI4tHypNAS9RiwHh7LYCFIZPJt-w3NcHMkiFQHwxp5kf20PIUGmW6UOPsDoyoXQQfWTtHQlKG7MWHQn0BV7QUTHFcgSeQhedudX5YNY4K~QjUwXimwJahj-HOPdwD9eO9aW03~epeGEXH5f7Yc5WOrwtBMGAspgRfE7oI5sAtiN3CWxsvWaZtk6UMJfyUpo~MeYsHlx4omrGuR2DyK-KdNUMzGrqtsw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

### What is a "reference token"?

> A *reference token* is a single or set of tokens that contain primitive values that other tokens refer to. You may already refer to them as "base" or "global" tokens in your design system.

### What is an "alias"?

> An *alias* links a token value to another token's value (a reference token).

---

## Create token aliases

Create a single token alias:

1. Locate the token you would like to create an alias for and click *`Edit`* from the token menu

1. In the value section, click the `*Create alias*` icon to create an alias

1. Select the token you would like this alias to reference

![Img](https://studio-assets.supernova.io/design-systems/6475/06b45d37-047a-4678-bbfa-500d323f1475.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzA2YjQ1ZDM3LTA0N2EtNDY3OC1iYmZhLTUwMGQzMjNmMTQ3NS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=EmnSX-xEexkhHP3VfjffiaV8oeO9XZOMAX~HxES5xHmhotQeEl0SJh4ZOD7ggZBbkTQACf9lcIK6NFcAZj2yTOhexqI1lF3-~uf55ufCxiz4TUjYnnocjGKr9h7fngRYvPN4P4lJCaJiuWCoNQAXWPCT9AOseSqc-qLdYz~8k6ADNpdtUAzEtLtOlr6NJE1y75LOlbtt0V9cuiPJfxFCnJV6QEEZ1ZdOXLmLiL4yoE92RZA6LcKUCSaAookJ2i0sZS7HPyFVTKDmBrTRfAu9EUUbTSCFnj~FkkNz7Pdq1ErktYqsR2OLieNkRH~cIsTiXw8RZzHlWFXO4Jxkif2ujw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

> If the token is an imported token, you can only reference other imported tokens with the same value

---

## Create multiple aliases

In the case that you would like to create a batch of aliases at once, for example if you use a set of "base tokens" that your design system relies on, you can specify the base token here prefix or path and automatically locate and link all other tokens that match.

For example, if my tokens are located in the group structure `BASE/base-100`, I can specify `BASE` as the path for my reference tokens.

To create multiple aliases at once:

1. On the tokens page, in the lower left corner, click the `*Create aliases*` button

1. In the Create aliases dialog, enter one or more prefixes (or paths) to your reference tokens

1. Click `*Create aliases*` to confirm

![Img](https://studio-assets.supernova.io/design-systems/6475/8cf4e5c4-2e69-47ef-b6e2-e3266e48c519.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzhjZjRlNWM0LTJlNjktNDdlZi1iNmUyLWUzMjY2ZTQ4YzUxOS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=AyKEdhJrqlwVlip7rBqJQDR4q4vZEME6aGJLQ~YDnmOOjEHI0nKou-NZbO0H1BRJrC5ZmzxsoB0dtDnm68U0PN3BpmOWv2YNdLITBjTNe~muQekubMPEzc8mz-JB-NXTEFip0LtopTAlBj12EAPqs~beBwvG0~dU1QOrCzqfluejD7dD17M3pNnPhhiec2CQfmniRGQKFkNWKPAiFwUcVjthFxaPJE7w2LzU7imuN1obnzMwk9q6SqY9oUw4qgu5eSmLxEKwpEjHJdnzhEZwsGOL1AqsHK~e8teYsp4NxgJWmhIISoWuyO3pOrK6hfwUTh7QHx2nLnKFLUmy~3xfvg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

---

## Create an alias to a token in another file

In the case that you have multiple source files for your design system, it is possible to create a token alias that references a token in another of your linked files.

> If an alias to a token in another file is unlinked, the references will be removed