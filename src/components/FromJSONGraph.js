
import CallFlowGraph from "../components/CallFlowGraph";
import { useEffect, useState } from "react";
import userEvent from "@testing-library/user-event";
import { Input, Form, Segment, TextArea, Menu } from "semantic-ui-react";

const FromJSONGraph = () => {

    const [input_json, setInputJson] = useState("");
    const [input_json_object, setInputJsonObj] = useState([]);
    const [visualizeOn, setVisualizeOn] = useState(false);
    const [nodes, setNodes] = useState([]);
    const [activeItem, setActiveItem] = useState("About")

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const mapCFGNodeToFlowNode = () => {

        // merge into one big list.
        var cfg_objects = Array(input_json_object.flat())

        const flow_nodes = new Array()

        const adj_per_id = new Map()

        cfg_objects[0].forEach(element => {

            const prev_val = adj_per_id.get(element.previous_sibling_id)
            if (prev_val == undefined) {
                adj_per_id.set(element.previous_sibling_id, 0)
            }
            else {
                adj_per_id.set(element.previous_sibling_id, prev_val + 1)
            }


            flow_nodes.push({
                id: element.id,
                type: 'input',
                data: {
                    label: (
                        <>
                            <b>{element.id + "." + element.command_type}</b>
                            <p>{"root:" + element.root}</p><p>{"ctor:" + element.ctor}</p>
                            <p>{"orig:" + element.originator_url}</p>
                            <p>{"urls:" + element.urls}</p>
                        </>
                    ),
                },
                position: {
                    x: (element.previous_sibling_id != element.id ? element.previous_sibling_id * 250 + 200 : element.previous_sibling_id * 200),
                    y: adj_per_id.get(element.previous_sibling_id) * 200
                },
                style: {
                    border: '1px solid #222138',
                    width: 300,
                }
            })

            flow_nodes.push({
                // edge.
                id: 'e3-4',
                source: element.previous_sibling_id,
                target: element.id,
                animated: true,
                arrowHeadType: 'arrowclosed'
                //label: 'animated edge',
            })
        });
        return Array(flow_nodes)[0]

    }
    const handle_json_change = (e) => {
        const json = (e.target.value)
        setInputJson(json)
    };
    const handleMenuChange = (e) => {
        console.log(e.target.innerText)
        const item_name = (e.target.innerText)
        setActiveItem(item_name)
    };

    const handleSubmit = (e) => {
        const cfg_obj = JSON.parse(input_json)
        setInputJsonObj(cfg_obj.events)
        setVisualizeOn(!visualizeOn)
        // handle invalid json...
    };


    return (
        <>
            <Form>
                <TextArea placeholder='Insert jTLEX JSON output' value={input_json} onChange={handle_json_change} />
            </Form>
            <button class="ui secondary button" onClick={handleSubmit}>
                Analyze!
            </button>
            {visualizeOn && (
                <>
                    <h3>Graph</h3>
                    <Segment inverted>
                        <CallFlowGraph data={mapCFGNodeToFlowNode()}></CallFlowGraph>
                    </Segment>
            )
            </>)}
        </>
    );
}

export default FromJSONGraph;