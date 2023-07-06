import { useRef, useEffect } from 'react';
import { MdPhotoCamera } from 'react-icons/md';

const PickFile = ({ defaultUserImage, setDefaultUserImage, selectedFile, setSelectedFile, defaultProfile }) => {
    const imageRef = useRef();
    const handleChangeImage = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const showOpenFileDialog = () => {
        imageRef.current.click();
    };

    useEffect(() => {
        if (selectedFile) {
            const objectURL = URL.createObjectURL(selectedFile);
            setDefaultUserImage(objectURL);
            return () => URL.revokeObjectURL(objectURL);
        }
    }, [selectedFile]);

    return (
        <div className="relative flex justify-center items-center">
            <input ref={imageRef} type="file" name="image" id="image" className="hidden" onChange={handleChangeImage}>
            </input>
            <div className="relative">
                <img src={defaultUserImage} alt="image" className="w-24 h-24 rounded-full border object-cover" />
                <div onClick={showOpenFileDialog} className="absolute bottom-0 right-0 text-2xl text-sky-500"><MdPhotoCamera className='cursor-pointer animate-bounce hover:animate-none' /></div>
            </div>
        </div>
    )
}

export default PickFile;