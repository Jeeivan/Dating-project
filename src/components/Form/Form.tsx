import React from 'react'

export default function Form() {
  return (
    <div>
        <form>
            <label>
                What is your name?
                <input type="text" name='name'/>
            </label>
            <br />
            <label>
                What is your gender?
                <input type="text" name='gender'/>
            </label>
            <br />
            <label>
                What is your age?
                <input type="number" name='age'/>
            </label>
            <br />
            <label>
                What is your sexuality?
                <input type="text" name='sexulaity'/>
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
