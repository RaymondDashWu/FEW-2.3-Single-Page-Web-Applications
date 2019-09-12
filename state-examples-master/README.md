# React State Examples

Some examples using state and react components.

## Getting started

1. Download or clone this Repo.
1. `npm install`
1. `npm start`

## Challenges

This exercise explores components and state.

The default app defines two components: `Counter` and `Title`.

The `Title` component is defined with a function. It takes a single prop: `text` which it displays. This `props.text` comes from outside and component updates/renders when the value changes _externally._

The `Counter` component contains a `Title` and a button. This component is defined as Class that extends `Component`. This allows `Counter` to hold values on `state` _internally._ When values on state change the component updates/renders.

**Challenge 1** Currently clicking the button increments the count by adding 1. Your job is to get the count to increment by 5 with each click.

**Challenge 2** Components are great because they are reusable. Make two copies of the `<Counter />` component. You should have three counters each of which keeps track of it's own value for `state.count`.

**Challenge 3** While counting in ones is good it would better if each counter counter could increment by _any value._

Make the first `Counter` **increment by 1** with each click.

Make the second `Counter` **increment by 3** with each click.

make the third `Counter` **increment by 5** with each click.

**Solve this problem without making a new component!** use the existing `Counter` component.

> Hint: Use props

**Challenge 4** Display the amount that each counter increments next to the label on the button. Each of the buttons should look something like:

- [ Count 1 ]
- [ Count 3 ]
- [ Count 5 ]

**Challenge 5** While having each button with it's own counter was good the needs of our app have changed. We now need to display a single count with three buttons that each increment the count by 1, 3, and 5.

To do this you'll need to _lift up state_. Previously state existed in each of the Counter components. Now state will have exist in the Component that is the parent of the buttons.

After "lifting state" above the Counter Buttons, you'll want to remove state from these.

### Stretch Challenges

Here are some optional challenges you can try.

**Challenge 6** Make a button that only appears when the count reaches 10 or more. Make this a component. It should say "Buy Factory".

Your app should look something like:

- 23
- [ Count 1 ]
- [ Count 3 ]
- [ Count 5 ]
- [ Buy Factory ]

**Challenge 7**
