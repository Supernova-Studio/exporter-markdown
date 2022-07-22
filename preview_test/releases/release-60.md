
# Release #60

Authentication improvements, heavy performance optimizations and a completely new SSO for our enterprise clients - because sometimes polish is worth 20 new features!

---

_This version was released on March 16, 2022**_

With this version, *we have completely reworked how authentication works* - to make it more performant, more secure and finally, more easy to use especially for our enteprise clients with completely new SSO (Single Sign-On) integration that supports all commonly used authentication providers. 

Additionally, we have also squashed several annoying bugs, which will make using docs even easier for you!

## New Authentication & SSO

We have greatly improved the underlaying infrastructure that provides for secure authentication when you access Supernova and all your workspace data. This results in state-of-the-art security layer, powered by world's leading authentication service with SOC 2 / SOC 3 certifications. 

We have also added SSO (Single Sign-On) that can now be accessed easily through the sign in page when you haven't logged in into the application just yet. The new SSO implementation allows integration with all commonly used authentication providers, and is available on all enterprise plans. 

![Img](https://studio-assets.supernova.io/design-systems/6475/5667ed94-ed69-4ad1-a6b7-6823dab5c7af.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzU2NjdlZDk0LWVkNjktNGFkMS1hNmI3LTY4MjNkYWI1YzdhZi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=E8P6R0AmYVbjIe7p~DqcSY3xq1qvKh1h~YaiJUylBWV07r~t7jFGW5re2HpKEiWZ5GPScXiRQkR9CpYUh8mj577HDy4uqW8YPzvkLAYfFLGhriPJUvabU6kvDDWCYK4kRxNUZQKDU-Ok~uRFP1NaveYfjIClT9dbekpn~890L4p-p8Nw~CwuDihsUmhof01Nh7oMeVLVVUtyNgC~Sr5qazAyhSNtDL0s6H-luqV-Hp0Sx4~KTqVrWzrRkIsKU5X9QYeOITdEodt6HAiLGFXkdHLDKah8vAyTWwXaW4OSps4gXFAipJd0fYg2P3Yxo6H7B3bWAKrDK4Kfz7Zrsdcuog__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

## Performance updates

We have significantly improved to speed of the cloud loading, especially when loading it for the first time in a while! And because we know just how important it is to have a snappy experience, this is but one of many performance improvements planned for the near future - stay tuned!

## *Additional Improvements*

- Documentation settings are now merged together with the rest of the settings.

- Docs block type selector is wider now.

- The `Integrations` page now contains an information block at the top which explains the necessary re-authorization steps for cases when you want to remove the integration.

- `Add frame` tile does not contain the `Add file` button anymore. 

- Supernova now provides the correct error status when accessing Figma with an invalid token.

- It is now possible to use the same Figma account for multiple Supernova accounts.

- We have added the ability to select Docs pages as target for links.

- Documentation settings are automatically saving all changes now.

## *Bugfixes*

- `Background color` option for Docs blocks is no longer shortened to `Background c...`

- Switching Docs branch to the branch that is already selected no longer triggers a confirmation dialog.

- Editing and saving new values on `Search Engines` page saves the values properly now.

- Right clicking on certain Docs blocks no longer triggers two menus at the same time.

As always, if you would like see something new, fixed or improved, join our [Discord community](https://community.supernova.io/) - we are always there. Thank you for your support!

- If there are no sources, it opens the import dialog automatically

- Additionally, source files can be added from inside the dialog. 

- It is also possible to refresh Figma files from the dialog.