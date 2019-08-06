## Accordion

The accordion component delivers large amounts of content in a small space through progressive disclosure. That is, the user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.

### Guidelines

#### Use when



*   
Combining a set of content with expand and collapse functionality.


*   
Allowing a user to hide controls and content so they can better focus on their task.

#### Don’t use when



*   
Providing an introductory element to a set of content which doesn’t need an  expand and collapse functionality. Instead, use a Header.


*   
Creating a set of visibly contained content which doesn’t need an expand and collapse functionality. Instead, use a Module Container.

#### Visual language

**To inform judgment about color, type, space, and more**



*   
The arrow icon acts as an affordance to indicate the functionality of the accordion, as well as a visual marker of the state of the accordion through its rotation and direction.


*   
When stacking multiple accordions, use stack space constants to add margin-bottom to the block element.


<!-- ![alt_text](images/TDS-Guidelines0.png "image_tooltip") -->

<!-- ![alt_text](images/TDS-Guidelines1.png "image_tooltip") -->



#### Behaviors

**To cover how to cope with events, outcomes, and transitions**



*   
When an accordion expands and collapses only its height should change, its width should stay consistent.


*   
Expand and collapse functionality should never be triggered on hover.


*   
The expand and collapse functionality of an accordion is tied to the entire header of the component, with additional actions being triggered only by interaction within the bounds of their related UI components.


<!-- ![alt_text](images/TDS-Guidelines2.png "image_tooltip") -->




*   Avoid “nested” accordions—that is, collapsible content within collapsible content. This type of pattern goes against UX best practices.


#### Editorial

**Voice and tone, advice covering copy and images flowing into each element**



*   
Keep titles to five words, if possible, to avoid wrapping.


*   
Use title case and capitalize prepositions of four letters or more.

### Accessibility
