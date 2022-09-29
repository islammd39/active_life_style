import React from 'react';

const Blog = () => {
    return (
        <div>
            <blockquote>
            <h4>How Does React Actually Work?</h4>
            <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.</p>
            <h4>What is the difference between props and state of components?</h4>
            <p>There are two types of component states: props is the state that transfers between components, and state is internal state of components. Props is used for data transfer from the parent component to the child component. The components also have their own state inside: state which can only be modified inside the component.</p>
            <h4>Why use Use effect?</h4>
            <p>This is why useEffect exists: to provide a way to handle performing these side effects in what are otherwise pure React components. For example, if we wanted to change the title meta tag to display the user's name in their browser tab, we could do it within the component itself, but we shouldn't.</p>
            </blockquote>
        </div>
    );
};

export default Blog;