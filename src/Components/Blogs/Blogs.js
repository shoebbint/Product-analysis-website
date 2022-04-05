import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2> This is blogs</h2>
            <div>
                <h4>  Q1: what is context api?</h4>
                <p>
                    <h4>
                        answer:
                    </h4>
                    context api is an alternative to prop drilling or moving props from grand parents to child.
                    the context api is a feature of react  which enables exchanging unique details and create global variables
                    that can be passes  through the entire site  as an alternative way of prop drilling
                    context api allows  sharing state accross the app.
                </p>
            </div>

            <div>
                <h4>   Q2: what is semantic tag?</h4>
                <h4>         answer:</h4>
                <p>
                    semantic tags are those which  have meaning ful tagname.
                    which can be easily be understood by the browser and the user what is the purpose of that tag.
                    the tag name tells everything about the content.
                    examples: header,footer,table etc.
                </p>
            </div>
        </div>
    );
};

export default Blogs;