
# Code delivery

---

# Code delivery

## Don't notify, only build

When the hook is triggered, the build will run (without notifying). 

1. In the create a hook dialog, select *Don't notify, only build *as the delivery method

## Open GitHub pull request

Open a GitHub pull request when a hook is triggered.

> Some extra info:  
> See [Manage integrations](https://learn.supernova.io/latest/administration/profile-and-account-settings/integrations.html) for details on configuring your GitHub account

## Open Azure pull request

Open an Azure pull request when a hook is triggered.

1. In the create a hook dialog, select *Open Azure pull request* as the delivery method

1. Select where you would like to open the pull request — choose an *organization*, *project*, *repository*, *branch*, and optionally a *relative path*

1. Click *`Confirm`* to create the hook

> Some extra info:  
> See [Manage integrations](https://learn.supernova.io/latest/administration/profile-and-account-settings/integrations.html) for details on configuring your Azure account

## Open GitLab pull request

Open a GitLab pull request when a hook is triggered.

1. In the create a hook dialog, select *Open GitLab pull request* as the delivery method

1. Select where you would like to open the pull request — choose a *connection*, *group*, *repository*, *branch*, and optionally a *relative path*

1. Click *`Confirm`* to create the hook

> Some extra info:  
> See [Manage integrations](https://learn.supernova.io/latest/administration/profile-and-account-settings/integrations.html) for details on configuring your GitLab account

## Delivery through REST (POST)

Every time the exporter runs (either successfully or with a potential error), your API will be invoked and sent the following JSON payload through `POST`:

```javascript  
{
  "event": "job:updated",
  "workspace": {
    "id": "1",
    "name": "Example workspace"
  },
  "designSystem": {
    "id": "2",
    "name": "Example Design System"
  },
  "designSystemVersion": {
    "id": "3",
    "name": "A version name",
    "version": "v0.1"
  },
  "exporter": {
    "id": "4",
    "name": "Example exporter"
  },
  "hook": {
    "id": "5",
    "name": "Example hook"
  },
  "job": {
    "id": "6",
    "status": "Success",
    "logs": [
      {
        "id": "",
        "time": "2021-03-25T16:13:28.804Z",
        "type": "info",
        "message": "Finished exporting source colors.pr"
      },
    ],
    "urls": [
      "https://example.supernova.io/codegen/job-results/2/example-01234567-89ab-cdef/result.zip"
    ]
  }
}  
```

There are several important pieces to this payload:

*Hook Configuration*

You will get a complete set of the configuration attributes inside the payload, allowing you to precisely identify which event happened, in which design system, and forward the code wherever you want to.

*Job*

Job describes the result of the run:

- `id` uniquely identifies the job / exporter run inside your workspace

- `status` results either to `Success` or `Failure`

- `logs` give you full log of exporter run, using Pulsar logging engine

*URLs*

If the exporter created code successfully, `urls` will be provided as well. At this point, there will always be just one link, but we are reserving this option for more flexibility down the road.

The URL links to a secure, signed `.zip` file that can only be accessed with the URL provided in the payload, containing the structured output of the exporter.

> Some extra info:  
> For detailed information on code delivery, please refer to [Automation](https://developers.supernova.io/automation) in the developer documentation