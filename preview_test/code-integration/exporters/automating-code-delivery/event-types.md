
# Event types

---

## Event types

Every time the event specified in the hook happens inside the design system, your exporter will run. The following types of events can be watched for in the design system:

### Version released

The exporter will run every time a new version of a design system is released.

> This is a recommended setting when you use Supernova in production environments and you have a more mature design system with semantic versioning, to always keep your codebase up to date with the stable, polished version.

### Head changed

Supernova will run the exporter every time anything changes in your design system, with a short buffer window so you don't get overwhelmed with updates.

> This is useful for cases where you are experimenting with a design system, and you want to be pushing updates constantly to be always up to date with your design system data.

### Source updated

The exporter will run every time the source is updated and there is new data — for example, if a Figma file is published.