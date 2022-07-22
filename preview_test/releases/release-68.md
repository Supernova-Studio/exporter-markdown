
# Release #68

Bitbucket integration, editable code and even more speed optimizations!

---

_This version was released on May 12, 2022**_

Another version is here and it brings two features we wanted to do for a long time - BitBucket and Live-editable React code blocks, alongside small but handy improvements to tables and another batch of speed optimizations. Read more below!

## Full BitBucket Integration!

We have added another integration — BitBucket! You are now able to link your BitBucket account in the same way as GitHub, Azure DevOps or GitLab and use your repositories as a destination for builds and hooks:

![Img](https://studio-assets.supernova.io/design-systems/6475/6b4d3ff9-faaf-4ee3-8331-c5fcdd2578c0.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzZiNGQzZmY5LWZhYWYtNGVlMy04MzMxLWM1ZmNkZDI1NzhjMC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=hbanKbSHAITtbrGwcKpcCqjHUy4mAPDT72a0Q2~D0wXBNvU7FF9cbiqpBoviT6dhPCHJAPzvPy-9z4xzUGV9sj8rVu4pLv7sVGuUjPIekIYRSN47~tMLpGzt~lKbdeWTKckqENO5zYpiHlz85p8udA1nRNs0uGcDxTGpr-hAbk03eFa9uqWvTwnnzqw6lIXJlK6QMJgDw-xtJXTx6tgGEMtojy4B5ekxdjJthZ3lb4Kg4cjYDfmnKyiKfqF7Xit9Q~JFY~Yprs6rbEvt3AYxhieKa9MY0wcp4OKz0dFJpjhdUEV40giB7cJOVsAlnmQpL8EveC4qL1hQfiKdvexPWw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

With BitBucket set up, you can automatically deliver your tokens, assets, or even documentation to your BitBucket repositories as pull requests, making your developers really, really happy!

![Img](https://studio-assets.supernova.io/design-systems/6475/2c9e9113-a232-4274-a5bc-3a7220582e9c.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzJjOWU5MTEzLWEyMzItNDI3NC1hNWJjLTNhNzIyMDU4MmU5Yy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=IM9IWT0VsLi26SJcQ4oxUp4~Bw~0eKWBWbCkm8RKQp8BztRHTmbQhuG~8JX5usMm-JoIW1S~Qh0v3qdEjXFQMAej2XEmDIR-AZDlNNvj9vcVVbiZY682RZRy4nGOHDOSmrbJg9frQVJzWeLI-hM3LnLH1xbd-phrlcpSwFqYcPPDi4cM3yF~mYage178abFf5K51J32zis1hpGDhCCdr-XwiDzS6RA3DJzIc7NwrgGMOUPNo1kxvGZFt4ia3BOLLkNKofstCvIAnM7WH1W4UNxaAla9-5QAuBwCqad1U9TrcyIc4u2v~4YzW7XlwoqGtZh7HLWF-bOC6x5UEQVWKCA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

> If are hosting BitBucket yourself on your own server, you are able to authenticate using your personal access token created in your own self-hosted BitBucket.

## Editable React Widgets

Many of you have asked for this, so we are making it into reality - live-editable React widgets are here! You can spawn live widgets using `/react` command. Live widgets are enabled by default, and can be disabled in the settings (alongside another new option, more on that below!).

![Img](https://studio-assets.supernova.io/design-systems/6475/c42cd12e-c41c-47b7-b39b-6b177e71098d.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2M0MmNkMTJlLWM0MWMtNDdiNy1iMzliLTZiMTc3ZTcxMDk4ZC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=fgzIpyYaXH0hyJzFq-HoVmIn8PXXSPV6O5BYxq1jxuvRVIS8HlPcJWE~-ge8H7Z1kxnTxcASa62h728xt-P0jPJEWZLZPHMaNUVthvgUKfhi~tJdvo1zk6VZKywFJsr1lSWjmSzk74clfLrQGfljlQOFLO9T93hcWOwyroLy7fnx-mUf52KCxK02EVyqeVqE64k9TD7SfnLejiqvjl9oQOpXJAYLHFWKuYt8cx-LtqVkGsNjXIlMQJEStjYNMhH~5pOHvcmH5Ye7WkcdNI4u1WuK6hfegBzMlFN8FfATa0rbF4Mx7jswI93tibox6cpye~JdN-eIeCRuZqfUbGOjow__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

With editable widgets, you can give your users option to play around with the code directly in your documentation - so they see how the code changes impact selected component. 

![Img](https://studio-assets.supernova.io/design-systems/6475/86c8ab7f-229f-4774-9596-098e475a746a.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1Lzg2YzhhYjdmLTIyOWYtNDc3NC05NTk2LTA5OGU0NzVhNzQ2YS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=E9MNOTFAxypTS3m1VUh5tK2CVPIgdM~~2RaHc4IxdSxe8O1~fQ8AYEjVoPBohfRI7RrWHSU40q~PqobvMFEwqG2skoX8X51s1fzz5Zh3vjOEML5geVFDQg3ODwda1yEIVOvmnusBCpXTw5UEuZ8Pd3p~z0BAlrvOW4QjM6dJ3EBgDSqyJ8~cSmw3ZTwNoPlWDOaw3KNcgTdxQmfj7lKfK8pP4Hqzy8SgYHzUVmMTQfWhubGhg9TUrXewwZzAqz~Z9Qehg3X5zqnjjktSnjTHqBYt8p1dNBU8krLx5XRuNm4uHD6zv~cEfl0ldA7gwkoUd~uHjeB9Pp6dZq3H7SC-AQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

The following widget has live code enabled, so click the new "Edit" button to see it in action!

Try changing one of the alerts to error message using the following code:



Missing parser for block type Code

 

## Codesandbox.io Integration

We have also added integration with [Codesandbox.io](https://codesandbox.io/) so you can now open any of your React widget directly and continue more sophisticated editing there. Also, if you make any change into the React widget in your docs and then decide to edit it, it will take your edited state instead.

To open Codesandbox, navigate to the widget above and click the Codesandbox button! This will immediately open up configured sandbox with your component showing there.

## *More speed optimizations*

This week we have focused on our *larger clients with medium-to-large design systems* and tried to optimize the experience for you as much as possible. You'll see great improvement in loading speeds of several categories, especially when browsing the documentation editor and your design system data. 

We have also removed, bundled, or cached remaining code libraries, and removed all that is not necessary to only load on demand. This further decreases time you have to wait when loading Supernova. In fact, there is now very little data transfer happening for any action.

## *Additional Improvements*

- It is now possible to make your Tables fit the page with one click.

As always, if you would like to see something new, fixed, or improved, join our [Discord community](https://community.supernova.io/) — we are always there. Thank you for your support!

> If you are using your own documentation exporter, you* must pull upstream changes* from our main exporter and merge them to your project in order to get new features and improvements, such as live editable react code blocks.