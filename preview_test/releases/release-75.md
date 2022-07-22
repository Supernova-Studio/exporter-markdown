
# Release #75

---

_This version was released on June 30, 2022**_

With this version, we are making it *much easier on our Enterprise teams to bring people into Supernova*! We have also fixed some of the most annoying bugs you reported recently, including issues with login to the documentation not persisting and the ability to use SVGs inside documentation (content & settings) properly.

## SSO Auto-invitations

Workspace with Single-Sign-On (SSO) can now activate certain domains for auto-inviting new users. This means that if the new user logs in with the given SSO provider for the first time, they are automatically invited to your Workspace as well. No need to create the new user and then invite them to your Workspace too!

### How to set it up

First, make sure your SSO integration is enabled properly. This can be checked from SSO settings tab. If you haven't yet enabled your SSO and want it done, contact us!

First, make sure your SSO integration is enabled properly. This can be checked from SSO settings tab. If you haven't yet enabled your SSO and want it done, contact us!

![Img](https://studio-assets.supernova.io/design-systems/6475/995aab2c-2011-4351-a045-dbbc696128aa.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1Lzk5NWFhYjJjLTIwMTEtNDM1MS1hMDQ1LWRiYmM2OTYxMjhhYS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=i~EP5RsD1WIfc-xnfjkN181V1UZnFpvg73lGTlpBvx96k9zzMMN7JjFPkZF7aXFmpesUl77F1q4njYCf6kqPFFegEHgyQxvY0Jqk7L05~hiWUEgQSa0WEHOcETyrjCEitkJHIc~q3LNGrtP8dyPFMfSgRaBgjbfTPZRG4V1NM-6BjaK~Ilkj3qyzIhB1onyYK35ZPCE6fvhwvB2lI2I~vOcDuzIbjw8cKiGvbdOcje0iwx8Jfb-vU3N9XGdNOFZeCWqTuhL-5jQNim43QXiw7lPzF7lmvECTWtSW8q46e9EtsAdW6Xu10gEpy01lbuQnxvaR4sgGo-5v0xkuJFoDhw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

Once SSO was activated for you, you can then configure the auto-invite from the same settings by enabling domains which users should be auto-invited from (note that our engineering team will ask you for the preferred settings when you setup SSO with us for the first time). For providers with multiple domains, you can selectively say which domains should allow auto-invite, and which ones should require adding people manually.

![Img](https://studio-assets.supernova.io/design-systems/6475/8a600cba-392a-4f20-a4db-709707e38ddf.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzhhNjAwY2JhLTM5MmEtNGYyMC1hNGRiLTcwOTcwN2UzOGRkZi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=feTjJ3Z~atxggqdnABKwV-DKYCWRi-RHagxZLEZ2mH7~3js8Pwamk2CwB6PjDnBdOwfHt0a6wV7CC6aujiu~jkjX8UAUHC3EuAue7Cxs2vfDuWBxUFbDkXFVU5e0myhWjgow2X~EEvVlyFQVLNJGLYWxpfy9jcG~8GxCBPWz5CtPJ7~lEBkY47UmyjWFvG6sioqsoSuLUR16TzTKXhRW-fUw5WzbevLsFSBDYEvF60EbvYQRlMh9ZTfcB9KA3GKy1J0HgzkOg7ylkkCfYpmzjy9JCbq7GVk3OKyFf2NA4A5SlShQum4iGL0L9xMODkDzFD3egO5f~qlFz6JHLSs9YA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

We hope this will help you a lot by not having to invite every single person manually! Please note that *everyone will be added as reviewer without the ability to edit workspace*, you still need to change team members to editors manually in the team settings, *giving you a full control over how you distribute your editor seats*.

## Context-aware floating style panel

What might be seen as a small thing was actually immense technical challenge (and a long standing UX pain point of ours) due to the way we are building the editor experience, but the floating, editing bar for styling of the documentation will now properly snap to the nearest text and will follow the text as you write. Finally!

![Img](https://studio-assets.supernova.io/design-systems/6475/e0c8f88a-4d43-4209-aaee-f9b32212ca8c.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2UwYzhmODhhLTRkNDMtNDIwOS1hYWVlLWY5YjMyMjEyY2E4Yy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=Uj3BI0b7peuAKspeeSReXU5tdioDLWaOO2LZsRRgdZZ-lv8emYf8bjd7oxz2JkWXCvB0PtEEuuewiNNuxRGDGfO7EF~bf4Bx3VpZrkwXqlR6luH9vXcPd18wGj8VfxwM64Gf1wRma62cbgbRWpyBXSw035zD4qBWBhqSpCR9nslD8eNclu91L74E5fLbmSWAGjpqZtW2Y9ldIw-rLd7A57aeQu0DAlvk64SbY1AWOXthHseuTABTVCTEYk0icp7jgelMd-quMuXbGty6z82VD1O2RZgXoltP8t1pPRAAVgzDZSCANX8W92hY~PzVVlUeYcQu7uF27xbrF~pYJ3JULg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## *Improvements*

- It is now possible to select read-only token values manually and copy them.

- `Header` blocks were renamed to `Heading`.

- Clicking on `reset to default` buttons in the Docs settings now requires an additional confirmation to prevent undoing changes by accident.

## *Bugfixes*

- *It is now possible to remove your Components again.*

- You don’t have to sign up to the Docs every day anymore; authentication token now lasts much longer.

- SVG images can now be uploaded into the settings properly.

As always, if you would like see something new, fixed or improved, join our [Discord community](https://community.supernova.io/) - we are always there. Thank you for your support!