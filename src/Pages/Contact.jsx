export const Contact = () => {
    const handleFormSubmit=(formData)=>{
        console.log(formData.entries())
        const formInputData=Object.fromEntries(formData.entries())
        console.log(formInputData);

    }

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="container-wrapper">
                <form action={handleFormSubmit}>
                    <input type="text"
                        className="form-control"
                        required
                        autoComplete="false"
                        placeholder="Enter Your Name"
                        name="username" />

                    <input type="text"
                        className="form-control"
                        required
                        autoComplete="false"
                        placeholder="Enter Your Email"
                        name="email" />

                    <textarea
                        className="form-control"
                        rows="10"
                        autoComplete="false"
                        placeholder="Enter Your Message"
                        name="message" />

                    <button type="submit" value="send">Send</button>


                </form>
            </div>
        </section>
    )
}