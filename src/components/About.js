import React from 'react'
import jtlexGraph from '../images/jtlexGraph.png'

const About = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">

          <div className="intro mt-5">
            <h1>
              jTLEX: Java Timeline Extraction
            </h1>
            <p>
              Qualitative temporal graphs that are derived from annotations on text—e.g., TimeML annotations—explicitly reveal only partial orderings of events and times. For many pur- poses, however, a total ordering (i.e., a timeline) is more useful. We adapt prior work on solving point algebra problems to the task of extracting multiple timelines from TimeML annotated texts and demonstrate, for the first time, an exact, end-to-end solution, which we call tlex (TimeLine EXtraction).
            </p>
          </div>

          <div className="algo-steps mt-5">
            <img src={jtlexGraph} alt="" />
          </div>

          <div className="algo-exp mt-5 mb-5">
            <div className="step mt-4">
              <h3>
                TimeML Annotated File
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio repellat quo exercitationem id reprehenderit molestiae.
              </p>
            </div>
            <div className="step mt-4">
              <h3>
                Build TimeML Graph
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio repellat quo exercitationem id reprehenderit molestiae.
              </p>
            </div>
            <div className="step mt-4">
              <h3>
                Partition subordination subgraphs
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio repellat quo exercitationem id reprehenderit molestiae.
              </p>
            </div>
            <div className="step mt-4">
              <h3>
                Transform into Temporal Constraint Satisfaction Problem (TCSP)
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio repellat quo exercitationem id reprehenderit molestiae.
              </p>
            </div>
            <div className="step mt-4">
              <h3>
                Solve TCSP and Extract Timelines
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio repellat quo exercitationem id reprehenderit molestiae.
              </p>
            </div>
            <div className="step mt-4">
              <h3>
                Detect Inconsistencies in TimeML graph
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio repellat quo exercitationem id reprehenderit molestiae.
              </p>
            </div>
            <div className="step mt-4">
              <h3>
                Detect Indeterminacies in TimeML graph
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio repellat quo exercitationem id reprehenderit molestiae.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
