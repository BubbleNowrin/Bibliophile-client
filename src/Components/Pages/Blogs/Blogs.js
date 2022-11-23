import React from 'react';

const Blogs = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100  mb-20">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Blogs</h2>
                <div className="divide-y divide-gray-700">
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">What are the different ways to manage a state in a React application?</h3>
                        <p className="md:pl-0 md:col-span-7">State represents the value of a dynamic properties of a React component at a given instance. React provides a dynamic data store for each component. The internal data represents the state of a React component and can be accessed using this.state member variable of the component. Whenever the state of the component is changed, the component will re-render itself by calling the render() method along with the new state.A simple example to better understand the state management is to analyse a real-time clock component. The clock component primary job is to show the date and time of a location at the given instance. As the current time will change every second, the clock component should maintain the current date and time in it’s state. As the state of the clock component changes every second, the clock’s render() method will be called every second and the render() method show the current time using it’s current state.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">How does prototypical inheritance work?</h3>
                        <p className="md:pl-0 md:col-span-7">When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.While this confusion is often considered to be one of JavaScript's weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented. Although classes are now widely adopted and have become a new paradigm in JavaScript, classes do not bring a new inheritance pattern. While classes abstract most of the prototypical mechanism away, understanding how prototypes work under the hood is still useful.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">What is a unit test? Why should we write unit tests?</h3>
                        <p className="md:pl-0 md:col-span-7">Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.The reasons why we should write unit tests are: To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:

                            1.Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                            2.Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                            3.It simplifies the debugging process.
                            4.Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                            5.Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                            6.Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                            7.In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback. </p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">React vs. Angular vs. Vue?</h3>
                        <p className="md:pl-0 md:col-span-7">Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as:
                            “The modern web developer’s platform”
                            It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.
                            React is considered a UI library. They define themselves as:
                            “A JavaScript library for building user interfaces”
                            Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.
                            Last but not least, Vue.js is, according to its site:
                            “A progressive JavaScript framework”
                            Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.
                            These three frameworks have several things in common, such as each follows a component-based architecture and allows creating UI features quickly. React and Vue.js are mainly declarative, and while Angular could also be declarative, it’s really more imperative. Nevertheless, they present some more differences according to their structure, architecture and way of working, so let’s dive into all these characteristics.
                            Angular is built entirely in Typescript and every project on Angular is structured in modules, components and services. At least, each module must have a root module and a root component.React doesn’t propose a specific structure to be followed, and with only a few lines of code you can have a simple React application. The structure in Vue.js is pretty simple. All pieces are meant to be self-contained, reusable components.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;