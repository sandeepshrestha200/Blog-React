import { useContext, useRef } from "react";
import ThemeContext from "../context/ThemeContext";
import { Editor } from "@tinymce/tinymce-react";

const CreateBlog = () => {
  const { theme } = useContext(ThemeContext);
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <div className="mx-auto space-y-8">
        {/* card div */}
        <div className={`py-4 px-2 w-full ${theme === "dark" ? "bg-[#344955]" : "bg-white"} rounded-md`}>
          <h3 className={`font-bold text-2xl inline-block ${theme === "dark" ? "text-white" : "text-[#344955]"}`}>Create a Blog</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="editor">
              <Editor
                tinymceScriptSrc={"/tinymce/tinymce.min.js"}
                onChange={(evt, editor) => (editorRef.current = editor)}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "preview",
                    "help",
                    "wordcount",
                  ],
                  toolbar: "undo redo | blocks | " + "bold italic forecolor | alignleft aligncenter " + "alignright alignjustify | bullist numlist outdent indent | ",
                  content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
              <br />
              <br />
              <button onClick={log}>Log editor content</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
