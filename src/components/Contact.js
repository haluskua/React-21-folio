import React from 'react';



const Contact = () => {

    return (
        <React.Fragment>
            <form

                name="contact v1"
                method="post"
                data-netlify="true"
                onSubmit="submit"
            >
                <input type="hidden" name="form-name" value="contact v1" />
                <div>
                    <label>
                        First name <br />
                        <input type="text" name="first-name" />
                    </label>
                </div>
                <div>
                    <labe thmlFor="email">Email</labe> <br />
                    <input id="email" type="email" name="email" />
                </div>

                <div>
                    <label>
                        Any Comments <br />
                        <textArea name="comments"></textArea>
                    </label>
                </div>

                <button type="text" name="first-name">Send me your email</button>
            </form>

        </React.Fragment>

    );
};

export default Contact;;