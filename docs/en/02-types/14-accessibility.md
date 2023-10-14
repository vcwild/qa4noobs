# Accessibility Testing

Accessibility testing is defined as a type of testing applied to ensure that the current application is usable by people with conditions such as deafness, color blindness, old age, etc.

It is a subset of Usability Testing.

These people use assistants that help them operate a software product, such as:

1. **Speech Recognition:** Converts spoken language into text, which serves as input for the computer.
2. **Screen Reader Software:** Used to read the text displayed on the screen.
3. **Screen Magnification Software:** Used to enlarge the screen, making reading more comfortable for users with visual impairments.
4. **Adapted Keyboard:** Designed for users with motor problems, making it easier for them to use.

## Reasons to Perform Accessibility Testing

- **Meeting the Market Demand:**
With a significant number of users with limiting conditions, testing is applied to solve any accessibility issues, being a best practice to include this technique as a normal part of the development cycle.

- **Compliance with Relevant Legislation:**
Government agencies worldwide have produced legislation to determine that IT products are accessible to as many users as possible. This makes accessibility testing a fundamental part of the process, also due to legal requirements.

- **Avoiding Potential Lawsuits:**
In the past, Fortune 500 companies were sued for their products not being accessible to the market. It remains in the best interest of the company for its products to be accessible to avoid future lawsuits.

## How to Perform Accessibility Testing?

Accessibility testing can be manual or automated and can be challenging for testers due to their unfamiliarity with possible impairments. It is advantageous to work closely with people with disabilities so that they can expose specific needs, promoting a better understanding of their challenges.

We have different ways to test, depending on each disability, such as:

### 1. Visual Impairment

Here, Screen Reader Software is used, which narrates the content displayed to the user, such as text, links, buttons, images, videos, etc.

In summary, when starting one of these programs and accessing a website, it will narrate all the content, making navigation possible for visually impaired people.

A poorly developed website can conflict with these programs, preventing correct and complete narration, and therefore generating inaccessibility. For example, due to structural errors, the software does not announce a link as such, describing it only as text and making it impossible for the user to recognize it.

It is important to note that in this category, there are also other types of visual impairments, such as low vision or color blindness.

In color blindness, the person is not blind but cannot see specific colors. Red and blue are common cases, making access complex if the website is based on one of these colors.

The design of a website should take this into account. For example, a button in red might be more accessible if it has a black border.

In low vision, the user is not completely blind but has difficulty seeing. The best thing to do is to avoid very small texts, structure the website so that the user can zoom in without breaking the layout, promoting a better experience.

### 2. Other Disabilities

A very important point is to consider access to the site without using the mouse.

A user should be able to have complete access to links, buttons, pop-ups, drop-downs, etc., entirely from keyboard shortcuts.

The focus must be entirely visible so that when pressing tab, the user can see where the control moves, with visible focus, we make access possible for individuals with low vision or color blindness, allowing them to identify the flow on the website and promoting ease of use.

Finally, it is important to observe users with hearing impairments, such as deafness or hearing loss.

Here, the user can access the site and see its content, but encounters problems with audio and video, making alt text imperative. Alternate text is a video supplement. In other words, if the site features a video tutorial for purchasing tickets, it should also offer an alternative in text form, allowing the user to understand the video content.

## Examples of Test Cases

Here are some examples of accessibility test cases:

1. Does the application provide keyboard equivalents for all mouse operations?
2. Are instructions provided as part of documentation or manuals? And are they easy to understand and apply when operating the software?
3. Are tabs logically ordered to ensure smooth navigation?
4. Are keyboard shortcuts available when operating menus?
5. Does the product support all operating systems?
6. Is the response time for each window or page clearly mentioned so users know how long to wait?
7. Are all labels written correctly?
8. Is the application's color palette flexible for all users?
9. Are images and icons used appropriately for easy understanding?
10. Does the application have audio alerts? Or video controls?
11. Can a user change the default font for printing and displaying text?
12. Can the user adjust or disable flashes, rotations, or moving displays?
13. Ensure that color coding is not the only way to convey information or indicate actions.
14. Test the application's colors by adjusting the contrast.
15. Is audio and video content clear for people with disabilities? Test all multimedia pages without speakers.
16. Is training offered to users with disabilities to promote familiarity with the software?

### Accessibility Testing Tools

Some of the most commonly used tools for accessibility testing are:

- Wave
- TAW
- Accessibility Developer Tools
- Quick Accessibility Page Tester
- aDesigner
- WebAnywhere
- Web Accessibility Toolbar
