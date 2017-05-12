# 20 minute app

Quick little app testing how fast you can get up and running with react using steal. This application renders data from an endpoint hosted on [runkit](https://ccutch.runkit.io/quick-endpoint/branches/master). Which generates fake people, that data is then fed into a d3 react library and rendered (how ever far i get).
In this app i am testing new libraries, styled-components, steal and rd3.

### Styled Components
<a href="https://github.com/styled-components/styled-components">
  <img alt="styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="150px" />
</a>
<br/>
Styled components seem like an awesome logical next step to css modules. As css classes are more and more only used once and only really serve as a mapping from a css file to a react component it makes sense to start writing styles inline in javascript. while this can be accomplished with `style` attributes on html elements this library reinforces the use of components over html elements and IS css so actions and media queries can be used. I do still need to learn how these should be organize: One component per file? seems like many small files. Put styled components in the component/container file for the component/container they are used in? Seems logically confusing and inhibits sharing components. Maybe a mix of the two? Seems less opinionated and for large projects or projects with many people seems like a pain to maintain best practices.

### Steal
<a href="https://stealjs.com/">
    <img src="https://stealjs.com/docs/static/node_modules/bit-docs-docjs-theme/static/img/StealJS-Logo-V2.svg" alt="StealJS Logo" width="337" style="margin: 36px 0">
</a>
Amazing transpilation library. Really does work out of the box. Handles common.js mapping, a problem i oftem had and stopped me from using system.js and gives you tools to test productions builds. Seems like a great library for new comers to frameworks like React and Angular which required compilation or transpolation. Because you use import statements and there is no configuration needed for es6 node developers and other "backend language" developers should feel more at home rather than trying to manage script tags.


### rd3
<a href="https://github.com/yang-wei/rd3">
    <h1>RD3 (no image given)</h1>
</a>
Sadly I did save the worst for last. While this is the most up to date implementation of d3 in react that i could find it still did have some implementation concerns. First off, the library is still using the `React.createClass` function which has been depricated -- as the console will tell you evertime you render a component. Some build files seem to be missing (following the pattern node_modules/rd3/build/cjs/{filename}.js ) though i am not ruling out this being an issue with steal or bad path mapping. Overall i would love to see a fresh approach to d3 in react as most of the libraries are from the 0.12 era and, while being verbose and editable, gave me trouble implementing resulting in me doing a lot of data massagin with lodash and copy pasting a snippet from the rd3 website.