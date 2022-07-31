
# Release #58

GitLab integration, custom CSS, custom fonts, more header settings and more!

---

_This version was released on March 3, 2022**_

This new version brings a feature that many of you asked for — integration with GitLab. We have also squashed several annoying bugs, which will make using docs even easier for you!

## GitLab Integration!

We have added another integration — GitLab! You are now able to link your GitLab account in the same way as GitHub or Azure DevOps and use your repositories as a destination for builds and hooks.  This way, you can automatically deliver your tokens, assets or even documentation to your GitLab repositories!

![Img](https://studio-assets.supernova.io/design-systems/6475/64eb30f0-db8d-483b-85de-4b8a761a05e7.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzY0ZWIzMGYwLWRiOGQtNDgzYi04NWRlLTRiOGE3NjFhMDVlNy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=gi0M-c~CIufdjdsgtluWbvJyzuKS6SFnVWDglcPJpO3nbSEellX7op3UOaKYYdY6WW-UXNpV3PCZAkeIcBuo9ed-r08wYD84CtkW0rE7tikpnrJOc10zifNybozDrPNpWnesR4c0s4xow9c93nIRQlrdCXhjMqNyezIhgjA3nsGVepnUIT2AawP0scdLs5NBr0bZtPNHBWRp2s48zESiEQAL5O6n0BlVzsDhi6Qy8vepy~dDnsiWOvTstExNStVJfZhBQ5YyGa6bYW-eFifYzH6XeKEufjURc67EEGUAbGYHiK30V5FH90yp9dksUNLg0825zKC8TsR96vaA2Rd6xA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

> Yay:  
> If are hosting GitLab yourself on your own server, you are able to authenticate using your personal access token created in your own self-hosted GitLab.

## Custom CSS

You can now fully customize the entirety of the documentation site design just by providing CSS that overrides the default definition. In addition to this, we have made sure that all CSS classes that get applied to the site are easy to understand and easy to read, making the customization a walk in the park.

![Img](https://studio-assets.supernova.io/design-systems/6475/81e1bdf8-250a-4b79-b83d-91d67f21dd23.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzgxZTFiZGY4LTI1MGEtNGI3OS1iODNkLTkxZDY3ZjIxZGQyMy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=PNT24PXjy-TD~vbJRTb9ZNYcK6L8rGBKEZk3QaR4h6d3XglJxhYERzqinFiV5LEssvyQxygM-J2aLWL7~gfEFYONN~be7a3jnpTxBOFKCC5LMxI9BzOsUxP7rqjzYcaR3KUisOKR6PMD5LcU1PjkoXWQ0XzZ6dvTKA2aVdYQRJxCeComA1dhbCsVpJjGeTJTpbi71e4EFt99OBy72CNn-WkPin9Uee6SmLowrs1qhsbTWRFwN4AXq4KOQXcCmC570lyMijzkuBOyynR5QgqJyE9Cw0fzQpDC4xlK5KH~0ducKO97VRF~knZMJ77OXBtim~IUtM-qa7lnosfY25z3Wg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

In order to customize the CSS definitions, head to the Documentation Site > Settings > Advanced > CSS and put your CSS code there. We recommend using our [VS Code extension](https://marketplace.visualstudio.com/items?itemName=SupernovaIO.pulsar-vsc-extension) to generate the site locally for easier development!

![Img](https://studio-assets.supernova.io/design-systems/6475/2d00f5ae-be9d-4b61-b8d0-03e474006073.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzJkMDBmNWFlLWJlOWQtNGI2MS1iOGQwLTAzZTQ3NDAwNjA3My5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=DSa3zWpADf-df~4s0QUGLNa2nzGxuvqgblIKlifxFco0FEKPg3XrFYzebdZOfr1H7jUN-mm54GDDHsuGRHB8wPvd2bFsczVB-W-FjK5nGErwtgJMSTx-7vgnhOKTHCAWVsYjo9Drh6pThGgT3P4eNIXuTZJWtFkK4JLhhybllUzsR9QQ0w70QDc7RUpPK-2ShJH8VquLOj6Yg8L59l9~UtEu3~GEMepY6YoKhgYdoXdGtwvnmRMfdhWC6yRZTh9NhDrvRfMFnNuA-uCWIFzgWlbC7-yoth4GmLkRYzEOqJ6yIop2TzpO2na~4anmHLQTZiafmw2J7T7bbII-5xS9sA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## Custom Fonts

In addition to CSS customization, it is now also possible to define custom font definitions and even replace the default font used on the site. Head to the Documentation Site > Settings > Advanced > Fonts and put your font definitions there. You can use Google Fonts CDN or any other source for your fonts without any limitation.

![Img](https://studio-assets.supernova.io/design-systems/6475/f1a525fc-3809-4f2b-8d4d-8489dc41fe48.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2YxYTUyNWZjLTM4MDktNGYyYi04ZDRkLTg0ODlkYzQxZmU0OC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=hOxJzDxnaLHEf-BaG3YAiGCWIc8kSId2YPyFReey1BRczoqLDz1eKpIAeLZnNk8N5BTJ~cteN4vymTOaMeenRXRwK1TkPu7gvnkPluiZ7gviqDhNQe4luu3IRq27ELtuyiyRlxJQRtHG4E~Tqn~tsPiRQQguEUgOd6W8P-e2FG6wYTbfZUCgTM6kgmusswgAqdkJA1CczAmhWtM6HVcXnbOdor6e0Lgic4gFiybYogqILLikDqfFyeJVvYl80MRRocXU~RVJnVbIrZ-kM2yJezb5rnMEQYw9qQeyc9EE24QTzBYnKe0cwTemFLW1sGNm9xL~UP42A3kYW3CQCB1KTQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## Bulk page header settings

So many of you asked us to have global configuration for documentation page headers, so we have added this as well. You can now set all properties you have been able to set previously, but for all page header at the same time. 

You can additionally override this settings per-page, if you need some of them to be a little bit different. Best yet, we have introduced a new system where you can use design system tokens to style your documentation! You can find those options all over the place, and there is much more to come very soon!

![Img](https://studio-assets.supernova.io/design-systems/6475/dde20cf7-26f9-4fdf-bf1b-1a7385f49a65.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2RkZTIwY2Y3LTI2ZjktNGZkZi1iZjFiLTFhNzM4NWY0OWE2NS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=B4UyLra~LTmb2zlUztLLFSlD7JHsWCYULVrhwzn4JTe0Iu0Ld77KPibNqyA22y0a~9mFP7pOkzMo5FG~R~Xh214YtITKPLK7wj4qszN4IXccJ2RD51tLjdUmi6EbWytyv-kcik5XySG50pGjm-wCoYwxVh-A1YIHKCmROShnwHSoT7mVmznlIQxzoICmvsBqp4MA5YVW83AU9bcLMDZAANmDixdA-SjCPIzksOsyUAotGYBjKbqPj04BqiRypPLdyWJhiyHBREPuEktvIqE7TVY47xsvNYD177Eq3ovxoCPXsJRw3LDSySnONmDT9CWjC4YH9zXBxDfpCpN6duc1yg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## *Additional Improvements*

- There is now a better confirmation dialog before switching documentation brands, to make double-sure that you really want to switch the brand, since this operation cannot be undone.

- We have improved the Shortcut block dropdown, which shows different icons for groups and pages and we added a search bar as well.

- Search bar is using fuzzy search now as well!

## *Bugfixes*

- The workspace creation dialog can be confirmed by pressing `Enter` now.

- Pasting text into docs no longer causes unnecessary delays, which sometimes blocked pasting again for several seconds.

- The Figma icon in the Figma frame selection dialog shows up properly again.

- Pressing `Ctrl+A` is properly detected by the Docs Editor every time now.

- The workspace selector no longer differentiates between uppercase and lowercase letters at the beginning of workspace names - they sort in case-insensitive alphabetical order now.

As always, if you would like see something new, fixed or improved, join our [Discord community](https://community.supernova.io/) - we are always there. Thank you for your support!