
# Guide to design systems

Now that you've created your first design system, read all about what a design system contains, how it works and what you can do with Supernova

---

  
[Open Youtube Video](https://www.youtube.com/embed/r0RkrarSgZI)  


A *design system* is a set of reusable components, styles, and tokens guided by standards that are used to build products or applications, and instruction for how they should be used in design.

But a design system is more than just a style guide, pattern library, or snippets of code kept to be reused when needed. It is a dynamic system designed to ensure consistency across different products. It is also a rallying point for all product teams, and team members across disciplines, to share common design truth in a way that minimizes errors in translating design into products.

  
![Your design system in Supernova](https://studio-assets.supernova.io/design-systems/6475/075729db-b48a-47e0-a7e3-e17778b6a8d0.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzA3NTcyOWRiLWI0OGEtNDdlMC1hN2UzLWUxNzc3OGI2YThkMC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=V6Zjfq2-VMGKsfaJdQVFQ7CL9NLnlXfX21JUTxU8TkrZp9AbKTZ488dtKOlhiA6p9t~byuPZnAJ2W9tjVl5NUpD3ptq7QId6l5ZKBiY8qAqQZyNEyRJ3ojfOsBF0VIDqmR0CXLr1dzQkMLwcVuV-YAd6H-RclwfsusGv~TUvnv7IUpXRtbuS81A1UIxfpg-eipCsU7s~qAzcyuUj93P-Soaha8RUOVJrjLnR1h6KFD3pX2kQuYcb6bqV9QTwut45q33pHJ1VtHg-m9msqlxUrkfo4LXH~nZy7o2sADucI18FophypphycnexDH4OS78fM9~M5JT2tqjMDbLYEzgHEw__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)  
Your design system in Supernova  


In Supernova, a design system is a central store of design truth in the form of a data model that represents the elements in your design system across the entire product design lifecycle — from design to code.

This data can be imported from your design editor environment (such as Figma), and maintenance of the design system can be fully managed in the design editor, and re-imported upon change. Developers can choose how to transform and export this design system data in the form of code in any way they require, and can automate to fit seamlessly into existing product development workflows.

In this way, the idea of "handoff" is eliminated, and changes made to designs simply flow naturally into the code, and developers are in control of how this process works.

---

### In this section

  
[![Import from Figma](https://studio-assets.supernova.io/design-systems/6475/0560b05d-f918-406b-8031-76131afc1212.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzA1NjBiMDVkLWY5MTgtNDA2Yi04MDMxLTc2MTMxYWZjMTIxMi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=PCKpYlxf1iZxiAvTftt71Oye6erK4v3u0Q~cI563AmJGcuH70fb36NbqR85fi0HaeOdirYVbFzplW78SdVGHr8utL4Ka1YrM1uip3KGx4aluAXKYLD-3lSaFNB74yiOrEVwQ-uhKAV9LQbVVWvV1tRcM6WQW5W-G5xS~V2ibSpWZFCc~KgnXuDFTYrpPLo4HpKgUDlvJXi~F51HkuZLCYBGPg~50HCvMtUKiDGIzJrX1mlwBtMrOWVY2bVRHT62WfsKsGLu8BBSAS5yO9qEJwiG68pvTEzuQVLLZSqcLMjaHINR2O0R4hVvQfsdhAHNYbJ1cvbuqbSihmMLECaYn~w__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)](#)  
Import from Figma  
  
[![Tokens](https://studio-assets.supernova.io/design-systems/6475/90958e67-db7b-4162-99bc-e8d3c08c912b.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1LzkwOTU4ZTY3LWRiN2ItNDE2Mi05OWJjLWU4ZDNjMDhjOTEyYi5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=j2kKCE0kW-rRcHtzhl3QrHVxNgrn7vu0EBkaWjuZ1qp94hEamNO0UAlF45pMeWj1BQTnUN58NrnlggujvB2erhOMpg307K~ijzL6jZin8qWB4i0SebtZD-TAC-mlgAWMb6u95gqumPb2VQWiedHybi~8TxnMePYo2Di3gFDlqfGCJBI4V7WMqCFSBRJTp3CvjVGqg576N6vmgTv9VmnFvpofDhZcX1CwD4zZ0gjgI09ufiuhJBejBOhcBc1whYHV52OOZx68dob13tMF9QbxJGfbbT2fmbQMc~5feixC6WTkwKFjnur~d0QS50ZFUjCo3J60qWcXOlRrK0Lw5bIu0A__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)](#)  
Tokens  
  
[![Assets](https://studio-assets.supernova.io/design-systems/6475/c4ad619e-5dbc-4eaa-a09e-ad20eb555f98.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1L2M0YWQ2MTllLTVkYmMtNGVhYS1hMDllLWFkMjBlYjU1NWY5OC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=c845QCGiH644lZKpO4tdg79rJI5irCaSUAw1-PHQTcq9OrOx~BxRxzyXkjCGcOVc2tMGpprPyUPKowJM~RPw4hNsK-R~-PcFYr4TvoTIQoYOGa1lZZkkYGDHBSeI220BNfTggIAPiYlVg4b8Ng9iwvvbeQFCbCLuW8OeCpGCLm6pBfqdwnJ-QdFV7b75hCerVspEe46NreNiGFVKSepuE9fWwJ5w~O0RuGKVkwtlpQkPuCOOVU9tdD1p~xl4QMdGYadmsNiEVe4jmK~01kzz7pcGsmUaBFaESvdo4xN6nGLaIg1WH4Jl2zpjB8ojrU3r1t-J~zHPzFUvBmU4GAUt4Q__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)](../design-systems/assets-1.md)  
Assets  
  
[![Resources](https://studio-assets.supernova.io/design-systems/6475/75f7fa7e-6452-4ffa-9bd3-b2e380c3d4ea.png?Expires=1972252800&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdHVkaW8tYXNzZXRzLnN1cGVybm92YS5pby9kZXNpZ24tc3lzdGVtcy82NDc1Lzc1ZjdmYTdlLTY0NTItNGZmYS05YmQzLWIyZTM4MGMzZDRlYS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE5NzIyNTI4MDB9fX1dfQ__&Signature=U7NrY3ZauVHPjIWjAjJK0rR8lqELoRkoVcjOWlfGfb-Pq6z~CVQhk3oXPJdKReyLWnArZ-kvecOQjq7vFLz5xtajsF1p7b8lOkpZTO5b7D58gDZ-638QwwZs~3NpTwJ9aaGiHLLXlNcGOks2TFwwFYNsA-02W8l9r8Tk57o0Dez-0QRPRFt4gZwpxTntGVZz3LsxsnIJ3icvBkZSlJsl26QCcx~IEMDyBiWn1NMj2tiXZetp48tp6BwcLZ-3z4zGYocZUJ62qRCcLmxlOEwGMY3a9iskYGHrx5-Ir8mW9lCFfUHI5g1bpF0zvGtENYEZB-bYA9vr5--ZqpOhINYXUQ__&Key-Pair-Id=APKAJGK34LCCAUR7N6LA)](../design-systems/assets-1.md)  
Resources  
  
