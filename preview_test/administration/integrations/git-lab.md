
# GitLab

---

# GitLab

There are two options for integrating with GitLab. You can use OAuth to authenticate with your account once, or you can authenticate using one or more personal access tokens. 

Personal access tokens can be used as an alternative to OAuth, instead of a password. 

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

> See [Authorized applications](https://docs.gitlab.com/ee/integration/oauth_provider.html#authorized-applications) in the GitLab docs

---

## Authenticate with a personal access token

1. Navigate to *Profile settings -> Integrations*

1. Under *GitLab*, click *`Authenticate using a personal access token`*

1. In the dialog, enter the *name*, *server URL* (optional), and *personal access token*

1. Click *`Confirm`*



Missing parser for block type FigmaFrames

 

> If you do not specify a server URL, it will default to `*gitlab.com*`

### Create personal access token

If you have not already created a personal access token and you would like to use one now with Supernova, you will first need to create one in GitLab. 

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



Missing parser for block type FigmaFrames

 

---

## Using the GitLab integration

When creating a [hook](), you can specify to *Open a GitLab pull request*. 

If you have previously set up the GitLab integration, you will be able to select one of these methods (either an OAuth connection or a personal access token) as a *Connection*. This will create a pull request using the specified connection for authentication. 

There is also the option in the hook dialog to create a new authentication. 



Missing parser for block type FigmaFrames

 