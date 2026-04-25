import React from 'react';

interface FileInputProps {
    input: {
      name: string;
      type: string;
      onChange: (value: File | FileList) => void;
    };
    containerClassName: string;
    label: string;
    multiple: boolean;
    acceptedFileInputs: string[];
    labelClassName: string;
  }

export const FileInput: React.FC<FileInputProps> = ({
  input,
  containerClassName,
  label,
  multiple,
  acceptedFileInputs,
  labelClassName,
}) => {
  const [filename, setFilename] = React.useState<string>('');
  const displayFileName = (name: string) => {
    setFilename(name);
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const files = e.target.files;
              if (files) {
                const fileName = files[0].name;
                displayFileName(fileName);
                multiple ? input.onChange(files) : input.onChange(files[0]);
              }
            }}
            accept={acceptedFileInputs.toString()}
            id="file"
            aria-label="File browser example"
          />
          <span className="file-custom" />
        </label>
        <span>{filename}</span>
      </div>
    </div>
  );
};
