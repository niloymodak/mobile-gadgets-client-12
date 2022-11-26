import React from 'react';

const Blog = () => {
    return (
        < div className='mx-10' >
            <title>Take A Trip - Blog</title>
            <h4 className='text-2xl font-bold'>Question:What are the different ways to manage a state in a React application?</h4>
            <h6 className='text-1xl font-semibold'>
                Answer: <br />
                There are four main ways of state you need to properly manage in your React apps: <br />
                1-: Local state,   2-: Global state, <br />  3-: Server state,   4-: URL state <br />
                <br />
                1-: Local state: Local state is data we manage in one or another component.
                <br />
                2-: Global state: Global state is data we manage across multiple components.
                <br />
                3-: Server state: Data that comes from an external server that must be integrated with our UI state.
                <br />
                4-: URL state: Data that exists on our URLs, including the pathname and query parameters.

            </h6>
            <h4 className='text-2xl font-bold'>Question:How does prototypical inheritance work?</h4>
            <h6 className='text-1xl font-semibold'>
                Answer: <br />
                Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.
                Javascript’s version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works.
                <br />
                So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
            </h6>
            <h4 className='text-2xl font-bold'>Question:What is a unit test? Why should we write unit tests?</h4>
            <h6 className='text-1xl font-semibold'>Answer: <br />
                Unit Test: Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                <br />
                <br />
                We Write: Unit testing ensures that all code meets quality standards before it’s deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
            </h6>
            <div className='grid grid-cols-2 gap-4'>
                <h6 className='text-1xl font-semibold'>

                </h6>
            </div>
            <h4 className='text-2xl font-bold'>Question:React vs. Angular vs. Vue?</h4>
            <h6 className='text-1xl font-semibold'>
                Answer: <br />
                ***React: React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.
                <br />
                ***Angular: Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
                <br />
                ***Vue: Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.

            </h6>

        </div >
    );
};

export default Blog;