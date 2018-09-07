# React Learnning Notes

## What is React?
  React is a JS library for building User Interfaces:
  ### User Interface coupled the aspects below:
  1. How it looks --> rendering
  2. How it interacts --> event handling
  3. How it's divided into pieces and combined together
    -->inner state, and props, extension, and composition

## Characteristics of React?
  1. Use "Declarative" syntax to describe a "View" for each "Frame"(State) of
the web application.
--> Here declarative is an important concept
--> Declarative v.s. Imperative
Declarative programming **describes** what you **want**, instead of writing
a step-by-step statements on **how** you get it.
  2. It's Component-Based, build encapsulated components that manage their own
state, then compose them to make complex UIs.
  3. ReactJS is all about data flow one-way down

## Essential Concepts of React
  ### JSX and React Element
    a. Why JSX?
      > React embraces the fact that user interface is inherently coupled with
    these matters:
        >> how the UI looks like --> rendering
        >> how events are handled --> events
        >> how the state changes over time --> state management
        >> and how the data is prepared for display --> state and lifecycle
      > Instead of separates technologies by putting markup and logic in
    separate files, JSX itself can express UI(View), Behavior(Events) and
    State(State) altogether. (JSX looks like both HTML and JavaScript).
      > React Components are built on top of JSX.
      > Since JSX contains information on all View / Events / State, JSX codes
    are easily get verbose(It works as both HTML and JavaScript).
        --> therefore, in practice JSX codes are separated into:
          (1) "presentationals": fully controlled components, no inner states
          (2) "containers": work as container, that provide control(props and
        event handlers)to their children.
    b. What is JSX?
      > JSX is a syntax extension to JavaScript
      > JSX can look like both HTML and JavaScript, but it's neither of them.
        e.g.:
        ```JavaScript
        const element = <img src={user.avatarUrl}></img>
        <MyComponent props={props} />
        ```
      > JSX compiles into React.createElement() calls.
      > After compilation, JSX evaluates to JavaScript objects, this means that
      you can use JSX inside of if statements and for loops, assign it to
      variables, accept it as arguments, and return it from functions.
    c. What are React elements?
      > An React Element is created by an JSX expression, and describes what
      you want to see on the screen.
      > Unlike browser DOM elements:
        >> React elements are plain objects, they're cheap to create
        >> ReactDOM takes care of updating the DOM to match the React elements.
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
  ### Component instance variables: State and Props, the Data Flows ONE-WAY Down
    a. What are State and Props
      > Props are the input of a Component, and immutable. Component acts as a
      pure function with respect to the props and returns an React Element.
      > Component "owns" the State. Neither parent nor child components can know
      if a certain component is stateful or stateless, and they shouldn't care
      whether it is defined as a function or a class
        --> this is why state is often called local or encapsulated.
    b. Differences between State and Props
      > Props are immutable, State are mutable
      > Props represents business data, are usually to be saved to database
      > State represents UI data(each state is like a 'Frame' of the app, it
        represents UI interactivities), and are usually NOT to be saved to
        database
    c. The Data Flow in React is often called a "top-down" or "unidirectional"
    data flow. Any state is always owned by some specific component, and any
    data or UI derived from that state can only affect components "below" them
    in the tree.
    d. If you imagine a component tree as a waterfall of props, each
    component's state is like an additional water source that joins it at an
    arbitrary point but also flows down.
    e. Be careful with States
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
  ### Refs and the DOM
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

## Thinking in React
  [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
    This artical worths read a lot of times, and the principles and ideas should
    considered carefully. Here are some key points of it:
  ### Steps(in sequence) to build a React app
  1. Break the UI design into component hirarachies
  2. Build a STATIC VERSION of the app
    --> which will NOT use state but props only
    --> because states are the frames(interactivity) of the app, static app does
     NOT have frames.
  3. Identify the minimal(yet complete) representation(schema) of one UI State
    --> app interactivity are represented by State
    --> React is all about one-way data flow down the component hirarchy, so
    identify which component owns what state is very important.
  4. Add Inverse Data Flow
    --> Remember React is all about one-way data flow down the componet.
    --> Any state is always owned by some specific component, and any data or UI
     derived from that state can only affect components "below" them in the
     tree.
    --> So when an interactivity(or event)of child want to cause state of the
    siblings or parent to change, it needs some "hooks" from components which
    are ancestors of its siblings or parents(thus to maintain the data one-way
    flow down principle).
    --> The "hooks" are functions from the "ancestor" component which mutates
    the state of itself, and calls this.setState() and that causes itself and
    its decedent to re-render.


