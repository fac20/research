# Storybook

---

### What is it and why is it useful?
- Storybook helps you build UI components in isolation from your app's business logic, data, and context. That makes it easy to develop hard-to-reach states. Save these UI states as stories to revisit during development, testing, or QA.

---

### Component-Driven Development
- It’s a process that builds UIs from the “bottom up” starting with components and ending with screens. 
- CDD helps you scale the amount of complexity you’re faced with as you build out the UI.

---

### Get Started

- :exclamation: You cannot run storybook in an empty repo - needs sth like React/Vue
```C=
npx create-react-app <name-of-your-app>
cd <name-of-your-app>
npx sb init
npm run storybook
```
---

DEMO

---


# Styled Components

---

- **Styled components** are a CSS-in-JS tool that bridges the gap between components and styling
- 
- It removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.

 
---

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mDDvpOm3VkQ9Q4MfALDYMgHaHa%26pid%3DApi&f=1" width="100" alt="egg" />

installation:
```
npm i styled-components
```

---

```javascript=
import styled from "styled-components";

// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`;

function Component() {
  // Use it like any other component.
  return <StyledButton> Login </StyledButton>;
}

```

---

Styled components are functional -> so we can easily style elements dynamically

Let’s assume we have two types of buttons on our page, one with a black background, and the other blue.
We do not have to create two styled components for them; we can adapt their styling based on their props.

---

```javascript=
import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  /* The resulting background color will be based on the bg props. */
  background-color: ${props => props.bg === "black" ? "black" : "blue";
`;

function Profile() {
  return (
    <div>
      <StyledButton bg="black">Button A</StyledButton>
      <StyledButton bg="blue">Button B</StyledButton>
    </div>
  )
}
```

---

Other cool features:
- EXTENDING STYLES
```javascript=
const StyledContainer = styled.section`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

// Inherit StyledContainer in StyledSmallConatiner
const StyledSmallContainer = styled(StyledContainer)`
  padding: 0 10px;
`;
```

---

- THE “AS” POLYMORPHIC PROP
- SCSS-LIKE SYNTAX
- ANIMATION
- GLOBAL STYLING
- CSS HELPER
- STYLESHEETMANAGER
- EASIER DEBUGGING
