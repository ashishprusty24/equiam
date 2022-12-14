import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { BsFileEarmarkPlus, BsFileCheck } from "react-icons/bs";
const Texteditor = ({ handleclick }) => {
  const modules = {
    toolbar: [["bold", "italic", "underline", "strike", "align", "list","Image"]],
  };
  const { quill, quillRef } = useQuill();
  const [value, setValue] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const payload = {
    title: title,
    desc: desc,
    value: value,
  };
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        // console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);
  //   console.log(value);
  return (
    <>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
      </div>
      <div style={{ width: 500, height: 300, }}>
        <div ref={quillRef} />
        <div className="publish_button" >
          <BsFileCheck onClick={() => handleclick(payload)} />
        </div>

        {/* <div dangerouslySetInnerHTML={{__html:value }} /> */}
      </div>
    </>
  );
};
// BiHomeAlt
// BsFileEarmarkPlus
// BsFileCheck

export default Texteditor;
