import React from "react";
import "./EditorCanvas.css";
import Draggable from "react-draggable";
import Text from "./components/Text";
import Button from "./components/Button";
import TableButton from "./components/TableButton";
import Dropdownbutton from "./components/Dropdownbutton";

function EditorCanvas({ comps, setComps }) {
  // console.log('comps>>', comps);

  // function handleStop(e, data) {
  //   let dummyPositions = { ...positions };
  //   const itemId = e.target.id;
  //   console.log("ItemIDDDD", itemId);
  //   dummyPositions[itemId] = {};
  //   dummyPositions[itemId]["x"] = data.x;
  //   dummyPositions[itemId]["y"] = data.y;
  //   setPositions(dummyPositions);
  // }

  function updatePos(e, data, id) {
    // const itemId = e.target.id;

    console.log("e.target.id", e);
    console.log("data", data);

    for (let i = 0; i < comps.length; i++) {
      if (comps[i].id === id) {
        const xx = comps[i].pos.x;
        const yy = comps[i].pos.y;
        comps[i].pos.x = data.x;
        comps[i].pos.y = data.y;

        console.log(`comps[${i}].id`, comps[i].pos.x);
        console.log(`comps[${i}].id`, comps[i].pos.y);
        break;
      }
    }

    // const comp = comps.filter((item) => item.id === id);

    // comp[0].pos.x = data.x;
    // comp[0].pos.y = data.y;

    // const filteredComps = comps.filter((item) => item.id !== id);
    // const newComps = [...filteredComps, ...comp];

    // console.log('comps>>', comps);
    // console.log('filteredComps', filteredComps);
    // console.log('newComps>>', newComps);

    // setComps(newComps);
  }

  return comps ? (
    <div className="editor-canvas">
      {comps.map((item, index) => {
        return (
          <Draggable
            axis="both"
            handle=".handle"
            position={null}
            grid={[25, 25]}
            scale={1}
            disabled={false}
            allowAnyClick={Boolean}
            bounds="parent"
            defaultPosition={{ x: item["pos"].x, y: item["pos"].y }}
            onStop={(e, data) => {
              const id = item.id;
              console.log("item.id>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", id);
              updatePos(e, data, id);
            }}
          >
            <div
              className="handle"
              style={{
                marginTop: 49,
                height: "auto",
                width: "auto",
                display: "inline-block",
              }}
            >
              {item.type === "Text" && <Text />}
              {item.type === "Button" && <Button />}
              {item.type === "Dropdown" && <Dropdownbutton />}
              {item.type === "Table" && <TableButton />}
            </div>
          </Draggable>
        );
      })}
    </div>
  ) : null;
}

export default EditorCanvas;
