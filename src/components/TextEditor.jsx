import React from 'react'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


const TextEditor = ({ field }) => {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          const fileName = loader.file.name;

          reader.onload = () => {
            const imageDetails = {
              name: fileName,
              dataUrl: reader.result,
            };
            localStorage.setItem("uploadedImage", JSON.stringify(imageDetails));

            resolve({ default: fileName });
          };

          reader.onerror = reject;
          loader.file.then((file) => {
            reader.readAsDataURL(file);
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = function (loader) {
      return uploadAdapter(loader);
    };
  }
  return (
    <CKEditor
      editor={ClassicEditor}
      data={field.value}
      onChange={(event, editor) => {
        const data = editor.getData();
        field.onChange(data);
      }}
      onReady={(editor) => {
        console.log("Editor1 is ready to use!", editor);
      }}
      config={{
        extraPlugins: [uploadPlugin],
      }}
    />
  );
};

export default TextEditor