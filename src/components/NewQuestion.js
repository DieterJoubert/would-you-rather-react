import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAddQuestion } from '../actions/shared';

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
            <h3 style={{ textAlign: 'center' }}>Create New Question</h3>
            <form className='new-question' onSubmit={handleSubmit}>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <div style={{ textAlign: 'center' }}>Would you rather</div>
                    <textarea
                        name='top'
                        placeholder='option 1'
                        value={text.top}
                        onChange={handleChange}
                        maxLength={280}
                    />
                    <div style={{ textAlign: 'center' }}>or</div>
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
                </div>

            </form>
        </div>
    )
}

export default NewQuestion