
# Release #67

Speeeeeeeeeeeeeeeed!!!!!! And new table options! Rejoice!

---

We are proud to reveal the first real fruits of what we have been doing over the last few weeks and months - focusing on improving general performance of the Cloud application, so one day the platform will perform like this beastly machine:

![Img](https://studio-assets.supernova.io/design-systems/6475/eb7f31ce-2101-4083-84ec-1df282c5dc8b.gif?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2ViN2YzMWNlLTIxMDEtNDA4My04NGVjLTFkZjI4MmM1ZGM4Yi5naWYiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=cIax6GiKRtrhKgN2buC8wIyXFe151Hm8Dp9QI9CEas7v-VUQ56~EiXXR6q3IsSTLxwdCpMreypNmC~CCEZdz4WJsJaajAKITjvJDhDCU~HUfvShw7oPY6rxbvIkf05X3pGWDgN8d6UixnYe91zRFnFmXvGtM1ZZINnRR5zvL3dRFT8UIINjikGR1SJDpBZkmDczCBlZejcK76rlMnrjUxAt-yQTVF-QtEdNc5cqI4~a8-YniEZ8~7PfRe6Apm1r~8gwQSunj76q5mqsg4YHFH~tOfBJ8MTAFRPw4I6FIoalNEhpbaefb1oN2cyuCwW5-aP5hDQvP1Fj1ZsMjTaAyrQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## Is performance important?

In short, *yes, very, because time is the most valuable resource we have*. Every task that is not efficient and every page that loads slowly means lost time that over time adds to a very significant amount. Of course, waiting for something is about the worst thing to be doing on any given day, so that makes it an even more important area to focus on. 

Because of the complexity of the system we are creating, the complexity of the underlaying architecture grows as well - and with it, cost in terms of performance to everyone using Supernova. 

We decided that it is time to heavily improve upon it and so with this release, *you'll see some really significant improvements to how the cloud loads*, how quickly you will see your data and in general it should be much more responsive than before, twice as much on slower machines and bad internet connection.

## Some real statistics

We've prepared some statistics that show you what we are talking about. We have measured performance with old and new version of Supernova, and the differences are staggering already:

![Img](https://studio-assets.supernova.io/design-systems/6475/143588a6-c1e9-4d7f-9b85-bd746595d772.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzE0MzU4OGE2LWMxZTktNGQ3Zi05Yjg1LWJkNzQ2NTk1ZDc3Mi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=BEKVsPaU-5ci8FrhnuekqWmH3lzcwEhe3aLfpJ9fX8XEl9sBO3r6wgK1g0RKn2zJfr1yom427iNLVRYh47gCs7qe5uXn3UHavidIAHf6lnkoMRII-5Y7cxvVX04zR2aiKYv3YFes-stWXxlom56kDWtsCNYp7GWa5hA6bg3fETac7LtDrnuYd-Y0zoSKl-ogDSYjPbZW3Ym8FgLfhlQk3FA9A6mONH9jAWPN7kokvyChOqIGoDlWb1bX0zwEjl05gvqYqeeS-zvWdvF7RvoZR9LivMwkZmkWT7F1qmwDdYNPoId3FXYnpKT1FAK8cwNIPBA73vRXj1qnldoHJkesVg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

![Img](https://studio-assets.supernova.io/design-systems/6475/35385414-dc8c-4232-b89e-2a757b417bdb.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzM1Mzg1NDE0LWRjOGMtNDIzMi1iODllLTJhNzU3YjQxN2JkYi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=EWZah68W8LIIxQCyeVL0X9o0Gqgw0FAs4Qai1OOP-J1REMT7AvjcShpOAgYVHYOuE4OXoBTQoRd0-2R-8vUhSiCsKnPXBKjpEuT9kFMQHxBh-F5i5P7aoK5jz6WYuQhgqqgTyKLX5NlsJNPlnopDqPfhXEOLiMKAGzvAze4bnBckdTOWyLJBeAhzaz3yiIyqlidaX9zNyhV5B3iBAvsd2yiDHUNayechkj1KslYJ6d1l29LmFp0BP0iv6ouJEBLUMrB8qAiiN3ITyi2Gzx2-M~yseIUO0ouEGJU8YNzCoGOnOyG4sMiaMkhtnG5MlXZiMOpqV5AaWfX6iFJziNb9Jg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

![Img](https://studio-assets.supernova.io/design-systems/6475/488823e7-5158-43fc-9df9-49bea4696b25.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzQ4ODgyM2U3LTUxNTgtNDNmYy05ZGY5LTQ5YmVhNDY5NmIyNS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=Iw~8Lm20aVre-EexyrGZh09VkPrrJV34pzotD4RT0UT-4TtlHgnnWdlWtDk4rxBqXKhLNDQRliFKPx9bMaNgc~U-aUGDy1N3~cUYSFiqWqRp09ch6gxjnpW6OGic~kDdfRWHorZBgi5SN~B7slBO7eJfndV8foewFYVwk4mQBKCI64jaRnWsLOhA~qSMYFrWSu3TRjHrvOSjw9il8bd1KMTzw-71bukFl8lZztbCgLRocgzUXta5SY7Px52qRBb0aCEdxgUcvncvp8XLbc6uiX5yqRbin9nwD49evjlNYN6AfMQD~7XC5Wl2uRf3FTu8tc81giq2dlOOVSailFGsjQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

As you can see, we made improvements across the board to the speed of loading and smaller payloads, and we have also added caching mechanisms so that for our regular users the data transfer is negligible and only data needed to show the design system are transfered.

But we are not stopping there - there is *still so much ahead of us and we are on a crusade to create the most performant platform you have ever experienced*, so everyone's time in Supernova is as delightful as possible. If you have problems with performance in a meantime, please let us know at *support@supernova.io* or join our community and tell us everything about it.

But we know you love our constant flurry of features - so here are few you asked for - thank you for your feedback! :)

## New Table Options

Last week we have released [table blocks](), and this week we are adding several important improvements that didn't make it to the release - option to disable borders, cell alignments and row and column headers.

![Img](https://studio-assets.supernova.io/design-systems/6475/6dd503f4-a98f-445a-b5f9-4b9e56b3cb14.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzZkZDUwM2Y0LWE5OGYtNDQ1YS1iNWY5LTRiOWU1NmIzY2IxNC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=G6QIpngS9OXAuTblAOKjX~JpUSzS4Tmg5u76XEL-94p2TzBjigzZR9736ru9MD84Xzm8AqclCMJPzWULnUaeLOhRpaGLsXz5whekRrvPL-gdP59exiQRm9LvURfwVrPTDiL4sY3Nunn294S02KYbc4sBxrY1C7ship-y7SRKQE7s115K3TAfTU0HS1trjqfmtgj2GVyvN3FMV05NjWPXrcpwfH4LSRJGekk~L9Zb0GsVpAGXA8RHvbwcdx8htd2CwyZuPXD1WlqLY8PIzJha5gSoGsMeUaGMKs3KeYeI37mmGSmvMBNNJoUB6j~srS7cZSyYWQKEjwKTdIEMVBSieA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

You can also use tables without border as simulation of layout (for now) if you want to structure your page little bit different. We have prepared few examples of what you can do with them, based on excellent [Adobe Spectrum design system](https://spectrum.adobe.com/) documentation!

---

### Design Checklist



Missing parser for block type Table

 

### Side by side descriptions



Missing parser for block type Table

 

### Do and don't



Missing parser for block type Table

 

---

We hope this new options will give you lot of new opportunities to make your documentation closer than ever before to the dreamy state you wanted to achieve.

## New Share Window

We have also made it easier for you to share documentation with others, and also easily switch between public and private mode.

![Img](https://studio-assets.supernova.io/design-systems/6475/9b93e7a1-2ba3-416d-83a6-52f8bb7fdc8a.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzliOTNlN2ExLTJiYTMtNDE2ZC04M2E2LTUyZjhiYjdmZGM4YS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=Eb8RzsLM5Cqqiz6xZBq0XboEiLgwy2dwNbnpYhj2pEmx3xJ71-~p6o-22mbRJZzkuSWW1OtTqvSlfGV-hOuLNnbsB93vl0CpHkH2-UVi8tVmUQK4WG1khcGYfbF6k2CPej0atFDsiP7zYCoCBZgFva2QQWqBBQ-MMblGs5B4coL4Lw3mZChi6CYEMvFcS4CVtLj2Ng0XBwYFsPP5YpfBlF5RGF7N-EyFlZklZo41QCjcOfAFaFfoLyBGX0BgiXn5nteRFkKkan2iQNS~L3f2oZAWF5KzUvhvv7520ChF4TTlV7IxFg2P8mvjqm7RJn8JFbf49m7E8f744AwlxQYF3Q__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

As always, if you would like to see something new, fixed or improved, join our [Discord community](https://community.supernova.io/) — we are always there. Thank you for your support!

> If you are using your own documentation exporter, you* must pull upstream changes* from our main exporter and merge them to your project in order to get new features and improvements, such as new table visual options.

![Img](https://studio-assets.supernova.io/design-systems/6475/d4df21cd-d3b7-4169-8aa3-b98c999d0161.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2Q0ZGYyMWNkLWQzYjctNDE2OS04YWEzLWI5OGM5OTlkMDE2MS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=ZQAojJ9waNs6iuWwbY1SXlg0-bJpl-UZ6BPGI~IomMZ5gRKP4K1RDKFqrhZOcYzH6jBPutnqONUk~tJdD4v1Ih3ecT-slGZ5fYgppqCa-5fsdjdy7lSdNiLMNX~bfSPVj0rgvh0V2uFZzoREmSDKGnfLVpwvKo8OyeXgKqt2CqzZipxARqXX6~2Q8qIfMNFlOpRsd3dTWQXz5eg8oJMkw8CJDjTkVqizDaOOcaa0Y91XwLiTjTlKk2db6Rksq5ILtWyOeWOWhBAGJ-n-BgUGJfL7rra5~Mib9j2rcJPA98Y6yoij8PWqyj-xSroK7D5gWxuAWnzDysEiw-pJAZGG8Q__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

*All interactive states*

Includes all interactive states that are applicable (hover, down, focus, keyboard focus, disabled).

![Img](https://studio-assets.supernova.io/design-systems/6475/c8d13754-5016-4049-9058-c877802690e7.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2M4ZDEzNzU0LTUwMTYtNDA0OS05MDU4LWM4Nzc4MDI2OTBlNy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=QjMnCqtcAKB6YezzkJ2NSImbPrTOAdE61H0kHFgJzmAXSN77cvoznEa6XjKszE8BRYLA8dzrQpHAqU1b138zjy1QS02y2IP~s4U5ztXiV8Ls98OK8ZhZMvIqLlGf2F~2m2uLPEocDQ-pJUVY6vf~U4D72v1aKRO2cb1WTWT-6XSAJ~kJBe6z6wDigKbZwJgJIe2YlS5EtEX3yxynNNZWtQ6KQUulUDHuEFKkqH7fOW2V2MpGZDs~C~KdtCXeD24HrG6A96gUGqDK2F2jANirEiUj1W9pR6LRK3dFNcQ4cXVcdoFoV1KLEd~vUfcRHQK2fhTA36ANVhDP~YtaCcnedg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

*Usage Guidelines*

Includes a list of dos and don'ts that highlight best practices and common mistakes.

![Img](https://studio-assets.supernova.io/design-systems/6475/89a99b60-ee71-4914-a449-9ca61dbdef1c.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1Lzg5YTk5YjYwLWVlNzEtNDkxNC1hNDQ5LTljYTYxZGJkZWYxYy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=iOPNS7nOIkFTrQmo~9GxS4n0pVbG-0FDELuMj8xfQYJR7V00ql-YrLmsANSk148oJRBr~lGrqv8U1uY8jYp7hkDYcboEKwxZyg2Ub6ZpPgUtAgB8rDGVKOeuZfEnoBOU7SJeje482XsvBOs0pe3TMRc-ze1Fj5RFq-HhxJedMvBbadauxk-VJSjHCTWCs-dESJ64XV4ueAEoRNPg0A7-GXACbLQvoeX2YMy~Gz~0vV0NpBelR3kJiXEM8fzKUW6-srydrB1FdQsQbjcYG36W2rTynAp9tDel24~dhnkxZb48CGzOYhyGAgd8tBtswpXnM5MSejNrNrx~Kpe32A1jxw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

*All color themes*

Works properly across all four color themes (lightest, light, dark, darkest).

![Img](https://studio-assets.supernova.io/design-systems/6475/bad2b711-048a-472c-a8d9-d5108c2ea3a1.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2JhZDJiNzExLTA0OGEtNDcyYy1hOGQ5LWQ1MTA4YzJlYTNhMS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=MZbzWlN4edTdDhtkYi8UHeIG5uhcewfBGkf7Q-GogVnMmBYn1rmjMQrZjbEY1EpT~Lx9TnCVFUY-WYkFR6sABpOjVuQwRoFNy0WXWNNn8MhEVI5Uv5-yLeMwCUSefIbWJzlATpzZBNYNgkeDNG1Ol0F6gBmFZ-voAJjAqpe~fclezaePNXltbcuVhmLGXTTNFpD3UYurMywtta1GIkZ1VzPfFl~VkbVCvQfrpyjxmZca~6f2E24k8jgNhSGBCu2aTV8sAP9Z2sDjb0pGOUaiZMqQ-sQu1feSNw~R7tu86Q54J~Pm-AJgvd9-WJItqqyoHuf44Bonl6Fv4UTwHbJx8A__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

*Writing Guidelines*

Includes content standards or usage guidelines for how to write or format in-product content for the component.

![Img](https://studio-assets.supernova.io/design-systems/6475/ded4b304-b4e0-4db8-8330-9a03c15783d0.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2RlZDRiMzA0LWI0ZTAtNGRiOC04MzMwLTlhMDNjMTU3ODNkMC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=EyqZbrbJNXdNwqx4vfWpr3uj8PhsL7asjHVJbYlnUDxuqlzOnriRME-tpXsT1ATnXiYQbum0Rey8r1LdVFlss91ZsOKcESegwGwwlYQaHHyfGiOpnLtzPuvLNyeIeA89Us54Ew7PpxyaNbTOwAzbPyXxRX1DWosDjV50x2k3oz8MOZX60sK18gRzTn8PSbKeMJ5rbmwixoV2fYzl5UhLkuW1469VHKfaWsQgZZ6bEw3QrwJ4q27abh06jExqXIyF~mHXDKvZdLpM~Z7nVvcr133eouu2vGwMort9ZdOAqGeRTDpAwppLjRw-Cxfqx4xpPnOdhdKvG91O8bpyk6oJIg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

*All platform scales*

Includes a desktop scale (UWP, macOS, web desktop) and a mobile scale (iOS, Android, web mobile).

![Img](https://studio-assets.supernova.io/design-systems/6475/d0767523-6061-4bda-a833-a92e4be9fbbb.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2QwNzY3NTIzLTYwNjEtNGJkYS1hODMzLWE5MmU0YmU5ZmJiYi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=d~rtn9DDHU9MPPS4XItBsv0OzPLasc4JQBDvdjl0s2oovfv86bef9HUQR2AtrPnBO-UUGONcaXDwTKAu4RqBP7vYoUVIah8B1wbvL~2zXSrOvL4ggze-~QqgrRrRx8cBwP9yzb6wc6VwMSELoHz1RVoRciZ7jQFBRpLUaYgDtgNrZYFrvFaOIG~tVraErTr9txbH08hvVAp5iteG7tLwRCOJXCr1UYS7zc7zTdz7sJz9lPKp7izA~XYtSeg-usgSBns1tPPwfxYibr3fGfYC8~MBmnb03fZ8UESP1fu4JzQdP69j8jq5UvMnkeF-u9PJ304shjI~vXkQaK~at9gnSA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

*Internationalization Guidelines*

Works properly across various locales and includes guidelines for bi-directionality (RTL).

![Img](https://studio-assets.supernova.io/design-systems/6475/bc07ff72-c8e8-4156-9a23-631285da50af.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2JjMDdmZjcyLWM4ZTgtNDE1Ni05YTIzLTYzMTI4NWRhNTBhZi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=UCJsbl~CffMkPklNDfy~jYN-teg0va5FMluVuIWTA24P8xgor~-q5PnS7EJnkukUmeugHQ4fFwIKOsWcDXScIv6KEibWxszKb39rac48kLHTtnJHsANjeLCc19VNyWQU9MzMckPscQsSVRfnd3xAh-dyJXJG3xay~4-Ru8AX9pj066HXmzO1jFiYARlLVB7xaqFLDk6K3HFIuGDAKOq-5uXrCqeX~dC1OHXLGozek4z~pP~4hNUbqFEoMWx5hn9hJ9gymERZYY90ryUOlPZnRZ7WGXQ95mBfWjk86eiEIp8d9FQ~Ge1b--33n0gI2w9f68t6z-gqYP1HMhe7gcGmmw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

*Buttons*

Buttons in Spectrum for CC Express have indigo as the color for the accent button and higher contrast for primary and secondary buttons. 

Spectrum for CC Express also uses a different icon set. Other attributes stay the same across themes.

*Be concise*

Button text should be concise: 1 or 2 words, no longer than 4 words, with fewer than 20 characters including spaces. Don’t use punctuation marks such as periods or exclamation points.

![Img](https://studio-assets.supernova.io/design-systems/6475/3a41973c-63cd-448b-a62e-75c0378b9547.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzNhNDE5NzNjLTYzY2QtNDQ4Yi1hNjJlLTc1YzAzNzhiOTU0Ny5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=E4x66Gu1JRIUbFbFpOSXHaTjsOpjgdjJt9UeELAY11r8umXn-V0fyWSD~p6KLgDXpkxmWADDbFIMUzZOHbFRlF8CaFluFhaDKbMTE0VgnkerLZyyFwQ2P1d1RFG8QHQdVcgKeBhZaYoskCDo4I-GB9yuyef-~hPp2Q0p2Q55VgcrlylFX0NhMpwGQj~s3jp5v0Awkxa3t-B35f8lPZLQ-loKaqhzdanXsTXfSKog~gHPS7xqYAanzX1UKqXOXi~0BbhnjynDq73zL93QWXTawgrW~hwtrvLh4RGwGn7bVjKUEB4mhO39vZk4566Fj22Y~qguy8nLmya6M03JSWCK0w__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

![Img](https://studio-assets.supernova.io/design-systems/6475/0b82da30-4c75-4ace-99a8-24b26d2a6ff7.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzBiODJkYTMwLTRjNzUtNGFjZS05OWE4LTI0YjI2ZDJhNmZmNy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=Fysww40uI66cLqs5RAwxxzV2Xs0hF0UdsuAm9bofQ081Ss346Vv2ivDgJ44IFE0kuQXoE0RwTiiMID0pBF55E7iXSZbLDxRF4IPLYvKf-TWnLZV8p8F3mN1UzlRXSqIM5Wb2kKZ8pszo3rwBswg4gXaSv54Y0sCR969eG7b~Q902PXJOQMJKOg0y9akw0mWxyFSt6v6MRJIaOviKD2Q8pwO7P92ZsQ7OTPadFRkKJkEqGYtxOUpKbJpVEVbgUlpJbZFn43WD97x5qu2XaeDO45U1zgvbvUKvdbiF9CfyGiVK-sFP2JF8jsxhOaClhvj72IqkxNCJAL95Y8XZ3Kthxg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)