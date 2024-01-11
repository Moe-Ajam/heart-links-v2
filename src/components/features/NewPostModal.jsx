import React, {useState} from 'react';
import ButtonPrimary from "../common/button-primary";
import ButtonSecondary from "../common/button-secondary";

function NewPostModal({onCloseModal, onAddNewPost}) {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    const [anonymousCheck, setAnonymousCheck] = useState(false);
    function handleChange(e) {
        const {name, value} = e.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleOnCheck = () => {
        setAnonymousCheck(!anonymousCheck);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddNewPost({title: formData.title, content: formData.content});
        console.log(formData);
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-152 shadow-lg p-14 rounded">
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <label>Say your heart out!</label>
                    <input type="text" value={formData.title} placeholder="Title" name="title"
                           className="border border-gray-300 rounded pl-2" onChange={handleChange}/>
                    <textarea value={formData.content} onChange={handleChange} placeholder="Content" name="content"
                              className="border border-gray-300 h-24 rounded pl-2 resize-none"/>
                    <div className="flex self-end space-x-4">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" checked={anonymousCheck} onChange={handleOnCheck}/>
                            <p>Anonymous</p>
                        </div>
                        <ButtonSecondary onClick={onCloseModal} text="Cancel"/>
                        <ButtonPrimary onClick={handleSubmit} text="Post"/>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default NewPostModal;