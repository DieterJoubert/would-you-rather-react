import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAddQuestion } from '../actions/shared';
import { useNavigate } from 'react-router-dom';

const NewQuestion = () => {
    const [text, setText] = useState({ top: '', bottom: '' })
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (e) => {
        const value = e.target.value
        const foo = e.target.name

        setText({ ...text, [foo]: value })
    }

    const isButtonDisabled = () => {
        return text.bottom === '' || text.top === ''
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleAddQuestion(text.top, text.bottom))
        setText({ top: '', bottom: '' })
        navigate('/')
    }

    return (
        <div className='new-question-body'>
            <div className='text-container'>
                <h2>Create New Question</h2>
            </div>
            <form className='new-question-container center-vertically' onSubmit={handleSubmit}>
                <div className='text-container'>Would you rather</div>
                <textarea
                    name='top'
                    placeholder='option 1'
                    value={text.top}
                    onChange={handleChange}
                    maxLength={280}
                />
                <div className='text-container'>or</div>
                <textarea
                    name='bottom'
                    placeholder='option 2'
                    value={text.bottom}
                    onChange={handleChange}
                    maxLength={280}
                />
                <button className='btn large-btn' type='submit' disabled={isButtonDisabled()}>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default NewQuestion