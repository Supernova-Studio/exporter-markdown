
# Bitbucket

---

# Bitbucket

There are two options for integrating with Bitbucket. You can use OAuth to authenticate with your account once, or you can authenticate using one or more personal access tokens. 

Personal access tokens can be used as an alternative to OAuth, instead of a password. 

> Some extra info:  
> See the Bitbucket documentation for how to [Create a personal access token](https://confluence.atlassian.com/bitbucketserver/http-access-tokens-939515499.html)

---

## Authenticate with OAuth

  
![Integrations - bitbucket](https://studio-assets.supernova.io/design-systems/6475/c38e3f60-21b4-4d0a-b28f-25c8a1df4166.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2MzOGUzZjYwLTIxYjQtNGQwYS1iMjhmLTI1YzhhMWRmNDE2Ni5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=WuYLA4Fhgzq6TkjA6peWQk-8iNIWGf94Z2aP8ejfDjUctTOzMqQ6mgfTFx7ZyBtQPygQRxdWOER3vhL-x5vUVyR4EwX7qyGrxfNFgL8Y8XzPMel~PnH0BHsAk~h0a9vKiIB7-uW-MV0sFSiRBGRpX9eYgCL8j50HGBI2pfasOmRye1M10N7uoZdvrac0BEqRKp5GLOM4OEi-Y0kzqD9VuAD-SmaohGRxdaBOesdyMOBGYfDSLZPn5V3cS~4OT4ZHanQrYQ6nf4FuhSkqY1A1D~mFnN1exHaYhrBwXjjW9OXO5xaaDoG9vXJU1pErWXqrFB~oDeoSOrGcfxwCDN~m0A__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Integrations - bitbucket  


### Sign in to Bitbucket

1. Navigate to *Profile settings -> Integrations*

1. Under *Bitbucket*, click *`Sign in`* 

1. Authorize Supernova through the Bitbucket dialog

1. You can now use this Bitbucket account to automate pull requests using [Hooks](https://learn.supernova.io/code-integration/exporters/automating-code-delivery/hooks.html)

### Remove Bitbucket integration

1. Navigate to *Profile settings -> Integrations*

1. Under *Bitbucket*, click *`Remove`* to remove the integration from Supernova

1. In the dialog, click *`Confirm`* to proceed

### Change Bitbucket OAuth access

If you try to sign in again after removing the Bitbucket integration from Supernova, you will automatically be signed in with the same access as before. If you would like to change the access, you need to uninstall the Supernova app from Bitbucket.

---

## Authenticate with a personal access token

1. Navigate to *Profile settings -> Integrations*

1. Under *Bitbucket*, click *`Authenticate using a personal access token`*

*If you are **_not**_** using a custom server URL:*

1. In the dialog, enter the `name`, `username`, and `personal access token`

1. Click *`Confirm`*

  
![Bitbucket access token](https://studio-assets.supernova.io/design-systems/6475/58b9ba1d-bd32-420b-ab70-6a966dfc99b3.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzU4YjliYTFkLWJkMzItNDIwYi1hYjcwLTZhOTY2ZGZjOTliMy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=FcVzSu7wEHa7z5k~STtCFdQyL3pzvsOW23w7rVyg1iZWbecg8cXYIhzXjsklh5lql4b457SK3amma0qRs5CV6zL8G5PnqsBBa5WLBxQ926HLPceTz4JCy4V~09sBeaoAdQI8bnUdO8P58PBbMUeZCsRR45-uL7UK2Tff9r4XmPql85yfmbJpK1UF-miM2BkyIvLnFsXjkm8Y8koaXE6o9~wLMHPFfbTQCfSkAEOxCBbBqG2e0UkuXIPtsjb6Hf8Mic3sv8rlSdbGw8ccq3smlHGlzTZNdxI70f9xOM8D5Xz18tccRWjZM3M5v4X5Ze9SL0Dlrc~ziv9Y90ZOhzILCQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Bitbucket access token  


> Some extra info:  
> If custom server is disabled, the URL will default to `https://bitbucket.org` and a username must be provided

*If you *_*are***_* using a custom server URL:*

1. In the dialog, enter the `server url` and `personal access token`

1. Click *`Confirm`*

  
![Bitbucket access token - custom server](https://studio-assets.supernova.io/design-systems/6475/b31b329f-1a0c-4385-a1a1-59ceb0aa3972.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2IzMWIzMjlmLTFhMGMtNDM4NS1hMWExLTU5Y2ViMGFhMzk3Mi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=Dmhg5t7bZRvAj8vBDGTqhyh6gRvCipGIqyqDr9y1lmMYDAxTRJJm4B7GTGzQacnRG3GvBAdAwoVCph81lWeQ9IyNViUWitCzNrUZ~Ajw0WqGFpnoo23WPtCIzUuKM1TUTJf-lb3xjbDF8HIuDyzG2NulAmeiDrnEg0QI4kmcklmeD7WZsn4-Q8R4xegQnJ1FyXCwQ~YD5Nv46VR69M90fzUCGnsDUSltfvozlrLc6P96xSGEYKpyo59hhpBCAUmIj73jgTAQRSM1cSmqL002sdeY2X0uPd8sC5z06wkxLqbBVsDNO9aZoNbTIpdT3HLxbD-jsZyvpS4pb--fQWTz4w__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Bitbucket access token - custom server  


---

### Create personal access token

If you have not already created a personal access token and you would like to use one now with Supernova, you will first need to create one in Bitbucket. 

> Some extra info:  
> See the Bitbucket documentation for how to [Create a personal access token](https://confluence.atlassian.com/bitbucketserver/http-access-tokens-939515499.html)

### Remove personal access token

1. Navigate to *Profile settings -> Integrations*

1. Under *Bitbucket*, find the token you would like to remove and click *`Remove`* 

1. In the dialog, confirm you would like to remove the token

  
![Remove GitLab access token](https://studio-assets.supernova.io/design-systems/6475/263ec279-fc1c-49a9-b068-2fbf4e7fce43.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzI2M2VjMjc5LWZjMWMtNDlhOS1iMDY4LTJmYmY0ZTdmY2U0My5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=lh3rpBbMzQH7-ZFlfeOyDJMQ0~lo41XyzoznYZi16pCWit97gJgiKB6VXI0GIkaUpFw8qB6ftWv0wLrydmex32yaJ72JYACzPgb9JciC-Qomh-VAqmi0REy8WDehzOjwdw2nQ6y~aeaCaq30L8jyzTPaRULGvuYJv0G8lwOgQDzqf5mIIqs~4HK58FpwwhcawqjeVyvnnE6eqUn~OG5xXhh55Oj4W-6YkqZ7NnZ79MkMHjdPdrYDKj-GDSI2oeOF1ZAYpO7xu6rSVnkUIzBecEaDYYDXE3f4Mh0mX8WVsO5OTuFUxcGeXGW0CyhyNoPLheiN2gJh8iiuByUwqO8Xlg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Remove GitLab access token  


---

## Using the Bitbucket integration

When creating a [hook](), you can specify to *Open a Bitbucket pull request*. 

If you have previously set up the Bitbucket integration, you will be able to select one of these methods (either an OAuth connection or a personal access token) as a *Connection*. This will create a pull request using the specified connection for authentication. 

There is also the option in the hook dialog to create a new authentication. 