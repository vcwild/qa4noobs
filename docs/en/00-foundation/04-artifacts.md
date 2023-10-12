# **Artifact Review**

*Artifacts*: Types of tangible subproducts produced during software development. All the involved documentation such as use cases, requirements, and documentation describing the design and architecture.

The inspection process involves planning, individuals reviewing each artifact, meetings for discussions and record-keeping, passing defects back to the author, and an overall assessment regarding the need for a new inspection based on changes during the process.

## *Definition of Concepts*

The term defect is often used generically, but it's essential to understand that the interpretation depends on the usage context. Defects found through inspection relate to deficiencies in the reviewed artifact, software faults described in IEEE 830, 1998.

IEEE defines quality attributes that a requirements document must have; the lack of any of these attributes characterizes a defect:

- Omissions 1-5:
  - 1: Important requirement related to functionality, performance, external interface.
  - 2: Software response to all possible input data situations.
  - 3: Lack of sections in requirement specifications.
  - 4: Absence of references like figures, tables, or diagrams; visual representation is common when describing a use case or software specification.
  - 5: Lack of definition of unit measurement terms; in a field, we need to know how many characters it supports, input of text, and a series of components that need unit measurement definition, like a numeral.

- Ambiguity: A requirement with multiple meanings in a term for a specific context, making it challenging to understand functionality, leaving room for defects.

- Inconsistency: More than one conflicting requirement, conflicting instructions for the same context.

- Incorrect Fact: Requirement describing a fact not true considering established system conditions. Asks for A, returns B.

- Extraneous Information: Information provided in the requirement that is unnecessary or won't be used; inefficient description, increasing documentation and opening room for conflicting interpretations.

- Others: Various, like placing a requirement in the wrong section of the document, applying a rule in the wrong place, for example.

These classes can be further subdivided into more specific classifications depending on the need.

## *Benefits of Applying Software Inspections*

Inspections find errors early in the process, aiming to prevent rework in subsequent cycles, as costs and time exponentially increase throughout the development cycle.

This promotes increased productivity in the team, generating more understandable artifacts, facilitating inspection, and benefiting subsequent phases of the cycle, such as the maintenance phase of the documentation.
