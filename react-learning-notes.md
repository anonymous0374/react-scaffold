# React Learnning Notes

## What is React?
  React is a JS library for building User Interfaces.

## Characteristics of React?
  1.  Use "Declarative" syntax to describe a "View" for each "Frame"(State) of
the web application.
  2. It's Component-Based, build encapsulated components that manage their own
state, then compose them to make complex UIs.

## Essential Concepts of React
  ### JSX and React Element
    a. Why JSX?
      > React embraces the fact that rendering logic is inherently coupled with
    other UI logic: how events are handled, how the state changes over time,
    and how the data is prepared for display.
      > Instead of separates technologies by putting markup and logic in
    separate files, JSX itself can express UI(View), Behavior(Events) and
    State(State, Props) altogether.
      > React Components are built on top of JSX.
      > Since JSX contains information on all View / Events / State, JSX codes
    are easily get verbose.
    b. What is JSX?
      > JSX has its own syntax to remember, e.g.:
        const element = <img src={user.avatarUrl}></img>
      > JSX compiles into React.createElement() calls.
      > After compilation, JSX evaluates to JavaScript objects, this means that
      you can use JSX inside of if statements and for loops, assign it to
      variables, accept it as arguments, and return it from functions.
    c. What are React elements?
      > An React Element is created by an JSX expression, and describes what
      you want to see on the screen.
      > Unlike browser DOM elements:
        >> React elements are plain objects, they're cheap to create
        >> React DOM takes care of updating the DOM to match the React elements.
        >> React elements are immutable. Once you create an element, you can't
        change its children or attributes. An element is like a single frame in
        a movie: it represents the UI at a certain point in time.
  ### Component and HOC(High Order Components)
    a. Why Components
      > React embraces the fact that rendering logic is inherently coupled with
      UI logic: how events are handled, how the state changes over time, and
      how the data is prepared for display.
      > A Component is not merely a split of what you see on the screen, it
      encapsulates the View(UI), Behavior(Events) and Data(State, Props).
    b. What are components
      > Components help to split the concerns of a Web Application into
      isolated parts.
      > And components can communicate, and be used to composite into
      complicated web applications.
    c. Characteristics of Components
      > Components can be rendered alone or composited with other Components
      and standard DOM elements.
      > All components takes in props, and return React elements.
      > All components must act like pure functions with respect to their
      props.
  ### Component instance variables: State and Props, and the Data Flows Down
    a. What are State and Props
      > Props are the input of a Component, Component outputs an React Element
      based on the Props. Component acts as pure functions with respect to the
      props.
      > State "owns" the State. Neither parent nor child components can know if
      a certain component is stateful or stateless, and they shouldn't care
      whether it is defined as a function or a class --> this is why state is
      often called local or encapsulated.
    b. The Data Flow in React is often called a "top-down" or "unidirectional"
    data flow. Any state is always owned by some specific component, and any
    data or UI derived from that state can only affect components "below" them
    in the tree.
    c. If you imagine a component tree as a waterfall of props, each
    component's state is like an additional water source that joins it at an
    arbitrary point but also flows down.
    d. Be careful with States
      > Do NOT modify State directly --> use setState() instead
      > State Updates MAY be asynchronous --> React may batch multiple
      setState() calls into a single update for performance. --> because
      this.props and this.state may be updated asynchronously, you shouldn't
      rely on their values for calculating the next state.
      > To fix that, use another form of setState:
        this.setState((prevState, props) => newState)
      > State updates ARE merged.
  ### Component Lifecycle, Refs and DOM
    a. A Component has its own lifecycle: birth(construction), growth(update),
    and death(destroy)
    b. Phrases:
      > Mounting
        >> constructor()
      >> static getDerivedStateFromProps()
      >> render()
      >> componentDidMount()
      > Updating
        >> static getDerivedStateFromProps()
      >> shouldComponentUpdate()
      >> render()
      >> getSnapshotBeforeUpdate()
      >> componentDidUpdate()
      > Unmounting
        >> componentWillUnmount()
      > Error handling
        >> componentDidCatch()
  ### Events, Forms(Controlled / uncontrolled components)
    a. Events are described(declaraed) within JSX expressions,just change the
    format a bit: onclick="someHandler" --> onClick={this.props.someHandler}
    b. React form:
      > In HTML, form elements such as <input>, <textarea>, and <select>
      typically maintain their own state and update it based on user input.
      > In React, mutable state is typically kept in the state property of
      components, and update it with setState().
      > React combine the two scenarios by making the React state be the "
      single source of truth". Then the React component that renders a form
      also controls what happens in that form on subsequent user input.
      > An input form element whose value is controlled by React(via setState())
      is called a "controlled component".
      > With a controlled component, every state mutation will have an
      associated handler function.
  ### Lists and Keys, and DOM Comparasions(Diff and Update)
    a. Keys help React identify which items have changed, are added, or are
    removed. Keys should be given to the elements inside the array to give the
    elements a stable identity.
    b. Keys are used for Virtual DOM Comparasion Algorithem, it's critical to
    Virdual DOM update performance.
  ### Optimizing Performances

## Advanced Concepts
  ### Context
  ### Forwarding Refs
  ### HOC --> Higher Order Components
    A HOC composes the original component by wrapping it in a container
    component. A HOC is a pure function with zero side-effects.
  ### getDerivedStateFromProps
    a. Controlled Components vs Uncontrolled Components
    The terms "controlled" and "uncontrolled" refer to where component's data
    lives. Data passed in as props can be thought of as controlled(because the
    parent component controls that data). Data that exists only in internal
    state can be thought of as uncontrolled(because the parent can't directly
    change it).
    b. The most common mistake with derived state is mixing the two: props and
    state. When a derived state value is also updated by setState calls, there
    isn't a single source of truth for the data:
      (1) the state is OVERRIDDEN only when the prop changes, or
      (2) the state is fully managed by the component
    c. Problems arise when any of the two constraints are broken, and they
    typically comes in two forms.
    - Unconditionally copying props to state
      Doing so will cause state udpates to be lost.
    - Modify some OTHER state when prop change --> compare to b(1)
      You have too many prop to watch and compare. Worse is when the prop does
    remain and you want update other state. This design is fundamentally
    flawed, and it's also an easy mistake to make.
    d. The solution?
    -> Fully controlled component
      this remove state from our component entirely.
    -> Fully uncontrolled component with a key
    -> In real world applications, components can contain a mix of controlled
    and uncontrolled behaviors. This is OK if each value has a clear source of
    truth. getDerivedStateFromProps(and derived state in general) is an
    advanced feature and should be used sparingly because of the complexity of
    data flow in real world scenarios.
    -> Specification of the getDerivedStateFromProp function:
      https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops



# React Learnning Notes

## What is React?
  React is a JS library for building User Interfaces.

## Characteristics of React?
  1.  Use "Declarative" syntax to describe a "View" for each "Frame"(State) of
the web application.
  2. It's Component-Based, build encapsulated components that manage their own
state, then compose them to make complex UIs.

## Essential Concepts of React
  ### JSX and React Element
    a. Why JSX?
      > React embraces the fact that rendering logic is inherently coupled with
    other UI logic: how events are handled, how the state changes over time,
    and how the data is prepared for display.
      > Instead of separates technologies by putting markup and logic in
    separate files, JSX itself can express UI(View), Behavior(Events) and
    State(State, Props) altogether.
      > React Components are built on top of JSX.
      > Since JSX contains information on all View / Events / State, JSX codes
    are easily get verbose.
    b. What is JSX?
      > JSX has its own syntax to remember, e.g.:
        const element = <img src={user.avatarUrl}></img>
      > JSX compiles into React.createElement() calls.
      > After compilation, JSX evaluates to JavaScript objects, this means that
      you can use JSX inside of if statements and for loops, assign it to
      variables, accept it as arguments, and return it from functions.
    c. What are React elements?
      > An React Element is created by an JSX expression, and describes what
      you want to see on the screen.
      > Unlike browser DOM elements:
        >> React elements are plain objects, they're cheap to create
        >> React DOM takes care of updating the DOM to match the React elements.
        >> React elements are immutable. Once you create an element, you can't
        change its children or attributes. An element is like a single frame in
        a movie: it represents the UI at a certain point in time.
  ### Component and HOC(High Order Components)
    a. Why Components
      > React embraces the fact that rendering logic is inherently coupled with
      UI logic: how events are handled, how the state changes over time, and
      how the data is prepared for display.
      > A Component is not merely a split of what you see on the screen, it
      encapsulates the View(UI), Behavior(Events) and Data(State, Props).
    b. What are components
      > Components help to split the concerns of a Web Application into
      isolated parts.
      > And components can communicate, and be used to composite into
      complicated web applications.
    c. Characteristics of Components
      > Components can be rendered alone or composited with other Components
      and standard DOM elements.
      > All components takes in props, and return React elements.
      > All components must act like pure functions with respect to their
      props.
  ### Component instance variables: State and Props, and the Data Flows Down
    a. What are State and Props
      > Props are the input of a Component, Component outputs an React Element
      based on the Props. Component acts as pure functions with respect to the
      props.
      > State "owns" the State. Neither parent nor child components can know if
      a certain component is stateful or stateless, and they shouldn't care
      whether it is defined as a function or a class --> this is why state is
      often called local or encapsulated.
    b. The Data Flow in React is often called a "top-down" or "unidirectional"
    data flow. Any state is always owned by some specific component, and any
    data or UI derived from that state can only affect components "below" them
    in the tree.
    c. If you imagine a component tree as a waterfall of props, each
    component's state is like an additional water source that joins it at an
    arbitrary point but also flows down.
    d. Be careful with States
      > Do NOT modify State directly --> use setState() instead
      > State Updates MAY be asynchronous --> React may batch multiple
      setState() calls into a single update for performance. --> because
      this.props and this.state may be updated asynchronously, you shouldn't
      rely on their values for calculating the next state.
      > To fix that, use another form of setState:
        this.setState((prevState, props) => newState)
      > State updates ARE merged.
  ### Component Lifecycle, Refs and DOM
    a. A Component has its own lifecycle: birth(construction), growth(update),
    and death(destroy)
    b. Phrases:
      > Mounting
        >> constructor()
      >> static getDerivedStateFromProps()
      >> render()
      >> componentDidMount()
      > Updating
        >> static getDerivedStateFromProps()
      >> shouldComponentUpdate()
      >> render()
      >> getSnapshotBeforeUpdate()
      >> componentDidUpdate()
      > Unmounting
        >> componentWillUnmount()
      > Error handling
        >> componentDidCatch()
  ### Events, Forms(Controlled / uncontrolled components)
    a. Events are described(declaraed) within JSX expressions,just change the
    format a bit: onclick="someHandler" --> onClick={this.props.someHandler}
    b. React form:
      > In HTML, form elements such as <input>, <textarea>, and <select>
      typically maintain their own state and update it based on user input.
      > In React, mutable state is typically kept in the state property of
      components, and update it with setState().
      > React combine the two scenarios by making the React state be the "
      single source of truth". Then the React component that renders a form
      also controls what happens in that form on subsequent user input.
      > An input form element whose value is controlled by React(via setState())
      is called a "controlled component".
      > With a controlled component, every state mutation will have an
      associated handler function.
  ### Lists and Keys, and DOM Comparasions(Diff and Update)
    a. Keys help React identify which items have changed, are added, or are
    removed. Keys should be given to the elements inside the array to give the
    elements a stable identity.
    b. Keys are used for Virtual DOM Comparasion Algorithem, it's critical to
    Virdual DOM update performance.
  ### Optimizing Performances

## Advanced Concepts
  ### Context
  ### Forwarding Refs
  ### HOC --> Higher Order Components
    A HOC composes the original component by wrapping it in a container
    component. A HOC is a pure function with zero side-effects.
  ### getDerivedStateFromProps
    a. Controlled Components vs Uncontrolled Components
    The terms "controlled" and "uncontrolled" refer to where component's data
    lives. Data passed in as props can be thought of as controlled(because the
    parent component controls that data). Data that exists only in internal
    state can be thought of as uncontrolled(because the parent can't directly
    change it).
    b. The most common mistake with derived state is mixing the two: props and
    state. When a derived state value is also updated by setState calls, there
    isn't a single source of truth for the data:
      (1) the state is OVERRIDDEN only when the prop changes, or
      (2) the state is fully managed by the component
    c. Problems arise when any of the two constraints are broken, and they
    typically comes in two forms.
    - Unconditionally copying props to state
      Doing so will cause state udpates to be lost.
    - Modify some OTHER state when prop change --> compare to b(1)
      You have too many prop to watch and compare. Worse is when the prop does
    remain and you want update other state. This design is fundamentally
    flawed, and it's also an easy mistake to make.
    d. The solution?
    -> Fully controlled component
      this remove state from our component entirely.
    -> Fully uncontrolled component with a key
    -> In real world applications, components can contain a mix of controlled
    and uncontrolled behaviors. This is OK if each value has a clear source of
    truth. getDerivedStateFromProps(and derived state in general) is an
    advanced feature and should be used sparingly because of the complexity of
    data flow in real world scenarios.
    -> Specification of the getDerivedStateFromProp function:
      https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops



