import React, {useState} from 'react';
import ButtonPrimary from "../common/button-primary";
import ButtonSecondary from "../common/button-secondary";

function NewPostModal({onCloseModal, onAddNewPost}) {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    })

    function handleChange(e) {
        const {name, value} = e.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddNewPost({title: formData.title, content: formData.content});
        console.log(formData);
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-152 shadow-lg p-14 rounded">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="self-start font-bold">Title</label>
                    <input type="text" value={formData.title} name="title"
                           className="border border-gray-300 rounded pl-2" onChange={handleChange}/>
                    <label className="self-start font-bold mt-4">Content</label>
                    <textarea value={formData.content} onChange={handleChange} name="content"
                              className="border border-gray-300 h-24 rounded pl-2 resize-none"/>
                    <div className="flex self-end space-x-4 mt-4">
                        <ButtonSecondary onClick={onCloseModal} className="" text="Cancel"/>
                        <ButtonPrimary onClick={handleSubmit} className="" text="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default NewPostModal;