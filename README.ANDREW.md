# UI Engineer Technical Interview
## Results

Thank you very much for allowing me to complete this exercise for you as part of the hiring process. I had a fun couple of hours this evening working on this.

This exercise felt more of a design exercise, so I approached it that way. 

From a design perspective, I was looking to create something that fell within the design parameters of the current branding. The blank page can be freeing (and lets be honest... intimidating), but design typically comes as a solution within contraints.

## Running this project

Rather than build this as a React app - which felt a little overkill for this exercise - I focused instead on the design & assets. As a result, this can be spun up with the [ParcelJS](https://parceljs.org/) build tool:

```
> npm i
> parcel index.html
```
The project will then be available at <http://localhost:1234>

## Content Strategy
I chose to modify some of the content in order to provide a bit more assertion and voice to the content, in keeping with what I interpreted as your mission and ideals.

* ### Mission statement:
>“Our Mission is to connect curious lifelong learners everywhere -- and, in doing so, build a more creative, more generous, and more prosperous world.”

Was changed to:
>"Our mission is to build a more creative, generous, and prosperous world by connecting curious, lifelong learners everywhere."

This flips the "why" and the "how" around slightly to provide a carrot to the reader. By providing the vision first, the reader is then enticed to find out how to achieve the goal.

* ### What it’s like to work at Skillshare:

>"We believe that doing your best work means living a full life. That means different things for everyone, so we optimize for trust, invest to support remote teams, have an unlimited vacation policy (with a required minimum!), and encourage work-life balance."

Again, I felt a carrot was needed here, so this was modified to:

>"Living a full life means doing your best work. That manifests differently in each one of us, so we optimize for trust, invest to support remote teams, encourage a healthy work-life balance."

The final paragraph of this section was turned into more eye-catching broken out items that encourage the reader to learn more about each.

Other items I spent time on was color-blocking to help the eye navigate different content blocks, some simple animations (the button and image collage)

## If I had more time...
- The collage animation has an issue where it does not reset back to `left:0` quite accurately.
- The button micro-animation is okay, but with a little more time could be made more delightful.
- Font selection. The pullquote at the bottom of the page uses a very basic sans-serif. I'd love to have been able to find a more refined font pairing.
- The icons are decent, but some of them feel heavier than others.
- The action button could be duplicated or differentiated at the bottom of the page, as the user may have read all the benefits and then decided to view open positions; we shouldn't make them scroll to the top of the page to find that link.
- Vertical rhythm. Not horrible, but not great in this version. A more thoughtful approach to spacing would make this feel overall better.
- The CSS got a little gnarly. I was reminded how nice it is to work in modules and scope CSS.
- Responsive sizing. This design was done very quickly (Macbook Pro screen) and not optimized for larger or smaller displays.
- A more ambitious design. This wasn't that far out of the box, but given a couple of hours, I felt this approach would be the most achievable.
