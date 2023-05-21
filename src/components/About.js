import React from 'react'
export default function About(props) {
    return (
        <div className="container">
            <h1 className="my-3" >About Notebok</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Upload your notes on cloud</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            Our notebook gives you a way to upload your site quickly and efficently on the server.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus mollitia officia odit tempore aperiam. Natus eligendi id quis quae rerum? Doloribus voluptas, necessitatibus voluptatum incidunt obcaecati quam earum architecto?
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, alias earum fugit aperiam, libero commodi sunt animi sequi possimus nihil eum aliquam rerum qui quod, debitis consequatur rem tenetur? Placeat.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}