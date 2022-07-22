
# Custom domain

Personalize your documentation website even further with a custom domain

---

# Set up your custom domain

If you would prefer your project have a domain of your choosing, you can set up a Custom Domain under *Documentation > Settings > General > Custom Domain*.

> Upgrade to a *Company* plan to enable custom domains



Missing parser for block type FigmaFrames

 

1. In your documentation settings, click the `*Connect a Domain*` button

1. Set up an ALIAS DNS record pointed at the domain we provided you

1. Input your chosen domain name

1. Hit `*Confirm*`* *to enable this functionality

1. Wait for the SSL cerificate to be provisioned on our behalf (Note: this action can take a few seconds)

1. When "Domain Configuration successful" appears, click `*View Website*`* *to* *test your custom domain connection

> You can only enable this feature after you published the documentation at least once.



Missing parser for block type FigmaFrames

 

> *Note:* Only *Admin* roles can edit the custom domain feature



Missing parser for block type FigmaFrames

 

---

# Set up a DNS ALIAS record

In the domain manager of your hosting provider, you’ll first need to create a new record. Usually, you need to input the following information:



Missing parser for block type Table

 

If the DNS ALIAS is set up correctly, the SSL certificate should take a few seconds to be generated and you can check if your documentation is working on your new custom domain.

---

# Confirm if SSL and DNS ALIAS are set up correctly

When "Domain Configuration Successful" appears on the Documentation Settings you can click *View Website *to* *test your custom domain connection. On the navigation bar of your browser click on the padlock icon next to your website address and check if the connection is secure. You can also check if your address has `https://` on the navigation bar.

![Img](https://studio-assets.supernova.io/design-systems/6475/bb1c9950-73b5-40c2-bf6f-a6a7a2178211.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2JiMWM5OTUwLTczYjUtNDBjMi1iZjZmLWE2YTdhMjE3ODIxMS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=VGxizGYH7mw70P-Fr56WCvfN6QQc6s1XMrgYu6z-qf~2Sw9bDMLFwWpSXh5uF5GfTgTNvUuJRjxhpe9sVtIuEUyXYmCXaF8LpFqXy~co6mRmUWezzzYvFqd--7F8wxMWWTuJ2bwTSB64sVWfbm3YbNnJL33dN9O~GMXYLqarKcT6fVG2C-uJr3WlvtadHtH49-KgE5azEEm-OIC-5WWax6K3f97e9cRNiuvJQE-s2S1yOD65Pmeej09iO3ZyulRYvKNfDYX3dzM90UXKTL6T1lkHESy4ptbFbvCGyRLjQ7vStS0py4v5LLeGE18JH3s3ybHnHxgvqiTvQvYCmNFRJA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)

> *Note:* SSL certification can take a few seconds after you connect your DNS ALIAS record

If the connection is secure and your documentation appears when you navigate to your custom domain, you are all set!

---

## Learn more



Missing parser for block type Link

 

Record Type

Host

Value

TTL

ALIAS

@

b83dd3ee9e.docs-custom-domain.supernova.io

(set to default / 1300 seconds)