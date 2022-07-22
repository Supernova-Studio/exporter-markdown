
# Hooks

---

## Supernova Design Continuous Delivery (DCD)

Supernova brings the very first Design Continuous Delivery system flexible enough to bend to any situation or technological stack.

> *1* hook per workspace is allowed on the *Free* plan.
*5* hooks per workspace is allowed on the *Team* plan.  
Upgrade to the *Company* plan to create unlimited hooks. 

### How it works

- Configure an automatic observer that watches for *events* in the design system

- Select the* exporter you would like to run* when this change happens

- Set a *delivery URL* for the generated code

This configuration is called a *hook*. With a hook in place, the DCD will work automatically:

- Every time the specific event happens inside the design system, your exporter runs

- Once the exporter finishes, *the exported code is delivered to your destination automatically*



Missing parser for block type FigmaFrames

 

> For detailed information on code delivery, please refer to [Automation](https://developers.supernova.io/automation) in the developer documentation

---

## Configuring Hooks



Missing parser for block type FigmaFrames

 

### Create a new hook

1. Navigate to *Code Integration → Hooks*

1. Click `*+ New*` to show the configuration dialog

1. Fill in the properties (all are required except Notify)

1. Click `*Next*` and select a [delivery option](https://learn.supernova.io/code-integration/exporters/automating-code-delivery/code-delivery.html#code-delivery)

1. The hook will trigger automatically on creation (_default**_). If you would not like to trigger the build right away, turn this setting *OFF*. 

1. Click `*Confirm*` to create and enable the hook

> *Note ->* If the exporter requires brand selection, you will see an option to select the *brand* to use



Missing parser for block type FigmaFrames

 

---

### Enable or disable hooks

1. Navigate to *Code Integration → Hooks*

1. Hover over the hook you would like to delete, and click the `*•••*` icon

1. Select `*Disable*` from the list

1. The hook will be disabled



Missing parser for block type FigmaFrames

 

---

### Delete a hook

To delete a hook:

1. Navigate to *Code Integration → Hooks* 

1. Hover over the hook you would like to delete, and click the `*•••*` icon

1. Select `*Delete*` from the list

1. In the confirmation dialog, click `*Confirm*`



Missing parser for block type FigmaFrames

 

- `name` — human-readable name of the hook

- `design system` — the design system that will be watched

- `event` — the [event](https://learn.supernova.io/code-integration/exporters/automating-code-delivery/event-types.html) upon which this hook will be called

- `exporter` — the exporter that will run when the event happens

- `notify` (_optional**_) — the API URL which should be called when hook finishes