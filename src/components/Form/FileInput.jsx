import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClose,
  faCross,
  faFile,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

export const FileInput = ({
  input,
  containerClassName,
  label,
  multiple,
  acceptedFileInputs,
  labelClassName,
}) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);

    const currentFiles = multiple ? [...files, ...newFiles] : [...newFiles];

    setFiles(currentFiles);
    multiple
      ? input.onChange(currentFiles)
      : input.onChange(currentFiles[0]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    input.onChange(updatedFiles.length > 0 ? updatedFiles : null);
  };

  return (
    <div className={containerClassName}>
      <label htmlFor={input.name} className={labelClassName}>
        {label}
      </label>
      <div className="col-md-6 w-100">
        <label className="file">
          <input
            type={input.type}
            name={input.name}
            onChange={handleFileChange}
            accept={acceptedFileInputs.toString()}
            id="file"
            aria-label="File browser example"
            multiple={multiple}
          />
          <span className="file-custom" />
        </label>
        {files.length > 0 && (
          <ul className="list-unstyled ps-0 mt-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="d-flex align-items-center justify-content-between mb-2 p-2 border rounded bg-light"
              >
                <div className="d-flex align-items-center text-truncate">
                  <FontAwesomeIcon icon={faFile} className="me-2" />
                  <span>{file.name}</span>
                </div>
                <button
                  type="button"
                  className="btn btn-sm text-primary"
                  onClick={() => handleRemoveFile(index)}
                >
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
