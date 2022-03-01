
import React from 'react'

const Contact = () => {
    return (
      <>
        <div className="container">
          {/* <h2>Contact Me</h2> */}
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button"
                 
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                 Contact Me
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                               Created by <strong>Rakesh Charpe</strong>
                                <p>You can contact me on my email:<code>rakescharpe99@gmail.com</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Contact