
# Hooks

---

## Supernova Design Continuous Delivery (DCD)

Supernova brings the very first Design Continuous Delivery system flexible enough to bend to any situation or technological stack.

> Yay:  
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

  
![Configuring Hooks](https://studio-assets.supernova.io/design-systems/6475/2b7d97aa-5df7-4f8c-85d1-db0a791faed0.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzJiN2Q5N2FhLTVkZjctNGY4Yy04NWQxLWRiMGE3OTFmYWVkMC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=QDsgO2txMEiktCr5nfJPJi4ntSWqvwrU~GxVseMzjRkOo3swRHzhTEhDQnadJYr6mxkCcRDYT5roZs-ScIWKRE-wmqOmbBEMEyN50BtKARnHXQFGXL9KXiGw6LuEFvhF2GAVIa35DIMKIixa6legWMJ2wh~ilpFtPWg2z3oZjBDzY7~U8aLWBmFif-26qnc1KN-XS90mwPyamdmCxCIL3UISO3nNfpYije1~T7qqUTXZjwpPzoQHXny0uqAvqk4pCtfsjfh3au9i0gwUsyHnMPy0sNrY8nKlqL4urUkjbrtuXMQaT6rqAQxS0Ncs1xKcg72H4f9Eb-KgpseT~ifvCg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Configuring Hooks  


> Some extra info:  
> For detailed information on code delivery, please refer to [Automation](https://developers.supernova.io/automation) in the developer documentation

---

## Configuring Hooks

  
![Create a new hook - 1](https://studio-assets.supernova.io/design-systems/6475/eb88758c-5dd6-4e6b-96f4-adf84c6b2f2a.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2ViODg3NThjLTVkZDYtNGU2Yi05NmY0LWFkZjg0YzZiMmYyYS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=NV8KVkhku-ylr-kmKQNuyWcI459pd5A8HRRwt5LAeCk0nrMI8VShK4CdT7lTMGQvNWW9ab06xR0E5vbtk9PQ1t2XbLog9sUVQ4jYcphcIDSs56J~bP4npMGnrV3ehk3nBpaWm9VyLdaunojDBJeJqH9Kjeu6pQIPVgQn4uJtUNLUUleEDNxcZCPCvUdaP1HE4NRYefRInuDygMMa0YTVDNppqdeU5V0j46qBP9f0m8JxLg-Nu8SofpFgrEIcCwavJlY8mA6hcrWpSXKOLzqkmZlgac6so5l6qUkSEw6GjgmhlcOPgYWqU7zA2lwHayWq7vFrMoR9nvMJZpK3r6YqMQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Create a new hook - 1  


### Create a new hook

1. Navigate to *Code Integration → Hooks*

1. Click `*+ New*` to show the configuration dialog

1. Fill in the properties (all are required except Notify)

1. Click `*Next*` and select a [delivery option](https://learn.supernova.io/code-integration/exporters/automating-code-delivery/code-delivery.html#code-delivery)

1. The hook will trigger automatically on creation (_default**_). If you would not like to trigger the build right away, turn this setting *OFF*. 

1. Click `*Confirm*` to create and enable the hook

> Some extra info:  
> *Note ->* If the exporter requires brand selection, you will see an option to select the *brand* to use

  
![Create a new hook - 2](https://studio-assets.supernova.io/design-systems/6475/33744faf-bcc8-4040-8e5e-afe890205bda.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzMzNzQ0ZmFmLWJjYzgtNDA0MC04ZTVlLWFmZTg5MDIwNWJkYS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=XOVY2SnSpQb7qsQE8fCzlnCUmeHGneHJ8wEa4oVPJxE6Gyt8mtDZA2MRDkXN0nGtT-ln4iFAvQUFZMcsyxSJaE9-4-i35hTP0KwUfwQ8U-iSR9GWlyuzuyNWrcwC8GPOAcT47OqXYbQE4YC5GYGsmJl7DOOjxXOLhgmvdDbI5~VgMYsjb30zjcHZsbu~VzCQjVapcT98zbBBj2roSYpq6W87GUkhcvxInchdl7IINhVKdjbooyyCQ8fyVP6mj5FPMa6yVljOEh4oNplxHWI6GJP8aBoUOPRheCQqMhHRBEVu~stgcYS0B5gi1RViEU0lpT12waB9dzF7AEAeryGyhg__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Create a new hook - 2  


---

### Enable or disable hooks

1. Navigate to *Code Integration → Hooks*

1. Hover over the hook you would like to delete, and click the `*•••*` icon

1. Select `*Disable*` from the list

1. The hook will be disabled

  
![Enable or disable hooks](https://studio-assets.supernova.io/design-systems/6475/088e0260-1b8b-4d6d-b962-e35e2ee9cac3.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzA4OGUwMjYwLTFiOGItNGQ2ZC1iOTYyLWUzNWUyZWU5Y2FjMy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=T46hMaSmk7RA9xXV-6b3ZCZkyMygxSyB6qNvAVDoxt4pC2gmWS3~Wjy6lc~88AXjJNgmkhrT5j0tnq7JmgFkHYm4RdpGkPeyggiX4YmfODFEjvsmEPJ0Hyx4pXzy3VSBZzABa3RXPVDOQH0wDXP4YMfOg~N7tBHTSFu5D8VfUJ9g09sTRlcRnYQlHNldn5E5rh24FfxeCOBx7rPfKVvo681NNTPxh-VcYwyGcmj8rd1khp5vGUaMxFOOgbCuc8ZoP3yNSNQUaxsbnFf8dMuwI6uWVP0XzVjt3H9j0uvh37nhyKVASpkslAWPVljyE2lsa1ahMItyS34FsCtDynSDiA__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Enable or disable hooks  


---

### Delete a hook

To delete a hook:

1. Navigate to *Code Integration → Hooks* 

1. Hover over the hook you would like to delete, and click the `*•••*` icon

1. Select `*Delete*` from the list

1. In the confirmation dialog, click `*Confirm*`

  
![Delete a hook](https://studio-assets.supernova.io/design-systems/6475/1c415da8-bf3d-4240-9e63-6f985d5a097e.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzFjNDE1ZGE4LWJmM2QtNDI0MC05ZTYzLTZmOTg1ZDVhMDk3ZS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=MIvVGYaM6N6tXpZ5pq3~2XSaihwKd~KdgO13WWWoM0epfPYpicYOBST1unuN8ezk3AmT6OrabklOJykztENtKQ84q8d~LRbcTHb3oJQ6uy774DFtNZobeap7E8pPWZJReraXbe5I5NWfY5ql1v7euXOghw33tU4OUyme~2yRHKhOqKFv4o0cxBgifOnAy8r70h2Z8ELzVw1AUMIWbfQPnWYUPj-VJ0Q1kVU2Ez-THv17DrY6H8BZ3p15netriQ7pqGevqVQkpRA4~AQvhmSjYNqJNmjcNYIgsZJvo1dtbbS-97t1tkyLBewZ3UpmgCLmqBXtxjD2Md3FCTQw0rfk7w__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Delete a hook  


- `name` — human-readable name of the hook

- `design system` — the design system that will be watched

- `event` — the [event](https://learn.supernova.io/code-integration/exporters/automating-code-delivery/event-types.html) upon which this hook will be called

- `exporter` — the exporter that will run when the event happens

- `notify` (_optional**_) — the API URL which should be called when hook finishes