
# GitLab

---

# GitLab

There are two options for integrating with GitLab. You can use OAuth to authenticate with your account once, or you can authenticate using one or more personal access tokens. 

Personal access tokens can be used as an alternative to OAuth, instead of a password. 

> Some extra info:  
> See the GitLab documentation for how to [Create a personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)

---

## Authenticate with OAuth

### Sign in to GitLab

1. Navigate to *Profile settings -> Integrations*

1. Under *GitLab*, click *`Sign in`* 

1. Authorize Supernova through GitLab

1. You can now use this GitLab account to automate pull requests using [Hooks](https://learn.supernova.io/code-integration/exporters/automating-code-delivery/hooks.html)

### Remove GitLab integration

1. Navigate to *Profile settings -> Integrations*

1. Under *GitLab*, click *`Remove`* to remove the integration from Supernova

1. In the dialog, click *`Confirm`* to proceed

### Change GitLab OAuth access

If you try to sign in again after removing the GitLab integration from Supernova, you will automatically be signed in with the same access as before. If you would like to change the access, you need to uninstall the Supernova app from GitLab.

> Some extra info:  
> See [Authorized applications](https://docs.gitlab.com/ee/integration/oauth_provider.html#authorized-applications) in the GitLab docs

---

## Authenticate with a personal access token

1. Navigate to *Profile settings -> Integrations*

1. Under *GitLab*, click *`Authenticate using a personal access token`*

1. In the dialog, enter the *name*, *server URL* (optional), and *personal access token*

1. Click *`Confirm`*

  
![GitLab access token](https://studio-assets.supernova.io/design-systems/6475/9b756c92-8f07-4051-8ed6-736e3d23121b.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzliNzU2YzkyLThmMDctNDA1MS04ZWQ2LTczNmUzZDIzMTIxYi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=PiUWzmA5L~07YKOYNe0NQW6XUulgnjRRFZw87vA3B8OzAtEHaU2~N-6~3in102ZFGDOWgm3pFwevGjowUf7RmfV4ghxC~pz5vGxgc9lk-FSMzMf3CfRbtEMfi1Ml5ng526yCHH9~saHwZFYScyYIb9MQ5cB57hgKjw1p3xwiYQkMDie5JYdRDMDiZWpyHqR7d~nNlNCBGu01DGaSmy~C~KqNey8BsImyh6A5Gchk~247KK~~D3CKtQsPUg84oUt7cV93nU6ZtYqVYbIHtWsa7zVFfvQxpKcHyNU5LPT1~IhNSLTeZjhg9tIsFjDvNAn1Cb6KGTDV7mtjuSbGyCZk8g__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
GitLab access token  


> Some extra info:  
> If you do not specify a server URL, it will default to `*gitlab.com*`

### Create personal access token

If you have not already created a personal access token and you would like to use one now with Supernova, you will first need to create one in GitLab. 

> Some extra info:  
> See [Create a personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#create-a-personal-access-token) in the GitLab docs for more detailed information

*In GitLab:*

1. Navigate to *Access Tokens* in the left sidebar

1. Enter a name and optional expiry date for the token

1. Select the desired scopes — in this case, select the scope `api` and if applicable, the role `Developer` or `Maintainer`

1. Click `*Create personal access token*`

### Remove personal access token

1. Navigate to *Profile settings -> Integrations*

1. Under *GitLab*, find the token you would like to remove and click *`Remove`* 

1. In the dialog, confirm you would like to remove the token

  
![Remove GitLab access token](https://studio-assets.supernova.io/design-systems/6475/263ec279-fc1c-49a9-b068-2fbf4e7fce43.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzI2M2VjMjc5LWZjMWMtNDlhOS1iMDY4LTJmYmY0ZTdmY2U0My5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=lh3rpBbMzQH7-ZFlfeOyDJMQ0~lo41XyzoznYZi16pCWit97gJgiKB6VXI0GIkaUpFw8qB6ftWv0wLrydmex32yaJ72JYACzPgb9JciC-Qomh-VAqmi0REy8WDehzOjwdw2nQ6y~aeaCaq30L8jyzTPaRULGvuYJv0G8lwOgQDzqf5mIIqs~4HK58FpwwhcawqjeVyvnnE6eqUn~OG5xXhh55Oj4W-6YkqZ7NnZ79MkMHjdPdrYDKj-GDSI2oeOF1ZAYpO7xu6rSVnkUIzBecEaDYYDXE3f4Mh0mX8WVsO5OTuFUxcGeXGW0CyhyNoPLheiN2gJh8iiuByUwqO8Xlg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Remove GitLab access token  


---

## Using the GitLab integration

When creating a [hook](), you can specify to *Open a GitLab pull request*. 

If you have previously set up the GitLab integration, you will be able to select one of these methods (either an OAuth connection or a personal access token) as a *Connection*. This will create a pull request using the specified connection for authentication. 

There is also the option in the hook dialog to create a new authentication. 

  
  
