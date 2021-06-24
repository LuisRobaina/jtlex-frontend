import React from 'react'
import { Icon, Step, Segment } from 'semantic-ui-react'

const JTLEXSteps = () => (
    <>

        <h1>jTLEX: Java Timeline Extraction</h1>
        <Segment>
            <h2>TLEX Algorithm Process</h2>
            <Step.Group>
                <Step>
                    <Icon name='file' />
                    <Step.Content>
                        <Step.Title>TimeML File</Step.Title>
                        <Step.Description>
                            <p>jTLEX takes as input annotated TimeML Files</p>
                        To learn more about TimeML visit <a><b>google.com</b></a>
                        </Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Icon name='node' />
                    <Step.Content>
                        <Step.Title>TimeML Graph</Step.Title>
                        <Step.Description>
                            <p>TimeML files are
                            parsed and a TimeML
                        </p>
                        graph is constructed from the file.
                    </Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Icon name='info' />
                    <Step.Content>
                        <Step.Title>Analysis</Step.Title>
                        <Step.Description>
                            We extract information about:
                        <p>- timelines</p>
                            <p>- inconcistencies</p>
                            <p>- indeterminancies</p>
                        </Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Icon name='smile' />
                    <Step.Content>
                        <Step.Title>Learn</Step.Title>
                        <Step.Description>
                            Use the output to learn about
                            your TimeML annotated files
                    </Step.Description>
                    </Step.Content>
                </Step>
            </Step.Group>

        </Segment>

        <Segment inverted>
            <h2>TLEX in Detail</h2>
            <p>Here we put some info about TLEX</p>
        </Segment>
    </>
)

export default JTLEXSteps
