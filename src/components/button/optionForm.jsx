import React from 'react'

function OptionForm({ value, text, ...others}) {
    return <option value={value}>{text}</option>
}
export default OptionForm;