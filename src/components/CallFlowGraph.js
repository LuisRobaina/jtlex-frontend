import React from 'react';
import ReactFlow from 'react-flow-renderer';

const CallFlowGraph = (data) => {
    
    return (
        <div style={{ height: 1000 }}>
            {console.log("This", data.data)}
            <ReactFlow elements={data.data} />
        </div>
    );

}

export default CallFlowGraph;