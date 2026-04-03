Decoupling business logic from UI components - GitHub Docs

[Skip to main content](#main-content)

[GitHub Docs](/en)

Version: Free, Pro, & Team

Search or ask Copilot

Search or askCopilot

Select language: current language is English

Search or ask Copilot

Search or askCopilot

Open menu

Open Sidebar

# Decoupling business logic from UI components

Copilot Chat can help you separate your business logic from your user interface code, making it easier to maintain and scale your application.

Copy as Markdown

## In this article

In many front-end frameworks, business logic can become embedded within user interface (UI) components, making the code hard to maintain or extend, especially as the application grows.

Copilot Chat can help you refactor your code to extract business logic into separate services or state management solutions. This allows the business logic to be reused across different UI components. It also makes the code easier to scale by separating concerns and reducing interdependencies, and it simplifies unit testing by allowing business logic to be tested independently from UI components.

## [Example scenario](#example-scenario)

In this JavaScript code, the `Counter` component configures the business logic for the component and also defines UI code for using the component in a web page.

```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count >= 10) {
      alert('Count cannot exceed 10');
      return;
    }
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

## [Example prompt](#example-prompt)

Copilot prompt[](https://github.com/copilot?prompt=import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0A%0Aconst%20Counter%20%3D%20\(\)%20%3D%3E%20%7B%0A%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState\(0\)%3B%0A%0A%20%20const%20increment%20%3D%20\(\)%20%3D%3E%20%7B%0A%20%20%20%20if%20\(count%20%3E%3D%2010\)%20%7B%0A%20%20%20%20%20%20alert\('Count%20cannot%20exceed%2010'\)%3B%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%20%20setCount\(count%20%2B%201\)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20\(%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%3Cp%3ECount%3A%20%7Bcount%7D%3C%2Fp%3E%0A%20%20%20%20%20%20%3Cbutton%20onClick%3D%7Bincrement%7D%3EIncrement%3C%2Fbutton%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20\)%3B%0A%7D%3B%0A%0Aexport%20default%20Counter%3B%0A%0AUse%20Redux%20to%20separate%20the%20UI%20code%20from%20the%20Counter%20component%20in%20this%20code.)

Use Redux to separate the UI code from the Counter component in this code.

import React, { useState } from 'react';

const Counter = () => {
  const \[count, setCount\] = useState(0);

  const increment = () => {
    if (count >= 10) {
      alert('Count cannot exceed 10');
      return;
    }
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;

Use Redux to separate the UI code from the Counter component in this code.

```copilot
Use Redux to separate the UI code from the Counter component in this code.
```

## [Example response](#example-response)

Copilot provides step-by-step instructions for refactoring the code.

The suggested changes refactor the `Counter` component to use Redux for state management. This includes setting up a Redux store with an initial state and a reducer, defining an increment action, and modifying the `Counter` component to connect to the Redux store. Finally, the application is wrapped with a `Provider` component to make the Redux store available to the `Counter` component. This separates the UI logic from state management.

The proposed changes separate the code into five separate files.

Note

Copilot Chat responses are non-deterministic, so you may get a different response from the one described here.

### [actions.js](#actionsjs)

```javascript
export const increment = () => ({
  type: 'INCREMENT'
});
```

### [reducer.js](#reducerjs)

```javascript
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.count >= 10) {
        alert('Count cannot exceed 10');
        return state;
      }
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};

export default counterReducer;
```

### [store.js](#storejs)

```javascript
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;
```

### [counter.js](#counterjs)

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default Counter;
```

### [index.js](#indexjs)

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './counter';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
```

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)