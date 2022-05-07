function LabeledInput({label, type, value, setValue}) {
    return (
        <div>
            {label}: <input className="mx-2 mt-4 border-2 shadow-inner" 
                            value={value}
                            onChange={(event) => {setValue(event.currentTarget.value)}}
                            type={type}/>
        </div>
    )
}

export default LabeledInput;