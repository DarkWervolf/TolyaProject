import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useFormInputValidation } from "react-form-input-validation";

const fileTypes = ["MP4"];

function AddInterface() {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // You can pass formData as a fetch body directly:
        fetch("/some-api", { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

    return (
        <p>
            <h3>Upload your video using the box below</h3>
            <center>
                <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                    minSize="1"
                />
                <p>
                    {file
                        ? `File name: ${file[0].name}`
                        : "no files uploaded yet"}
                </p>
            </center>

            <h3>Upload your additional data using the box below</h3>
            <center>
                <FileUploader
                    handleChange={handleChange}
                    name="additionalFiles"
                    multiple={true}
                />
            </center>

            <form method="post" onSubmit={handleSubmit}>
                <p>
                    <label>
                        Title: <input name="title" required />
                    </label>
                </p>
                <p>
                    <label>
                        Task{" "}
                        <select name="task" required>
                            <option value="someOption">Some option</option>
                            <option value="otherOption">Other option</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <div>Description: </div>
                        <textarea
                            name="descrioption"
                            rows={4}
                            cols={40}
                            required
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Number in montage:{" "}
                        <input name="numberInMontage" required />
                    </label>
                </p>
                <button type="reset">Reset form</button>
                <button type="submit">Submit form</button>
            </form>
        </p>
    );
}

export default AddInterface;
