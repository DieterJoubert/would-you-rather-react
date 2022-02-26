import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAddQuestion } from '../actions/questions';

const NewQuestion = () => {
    const [text, setText] = useState({ top: '', bottom: '' })
    const dispatch = useDispatch();

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
    }

    return (
        <div>
            <div>Create New Question</div>
            <form className='new-tweet' onSubmit={handleSubmit} >
                <div>Would you rather:</div>
                <div>
                    <textarea
                        name='top'
                        placeholder='foobar'
                        value={text.top}
                        onChange={handleChange}
                        maxLength={280}
                    />
                </div>
                <div>OR</div>
                <div>
                    <textarea
                        name='bottom'
                        placeholder='foobar'
                        value={text.bottom}
                        onChange={handleChange}
                        maxLength={280}
                    />
                </div>
                <button className='btn' type='submit' disabled={isButtonDisabled()}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default NewQuestion