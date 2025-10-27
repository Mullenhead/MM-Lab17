import { useState, type ChangeEvent } from "react"

type Props ={}

export default function FontForms({} : Props) {
    const[formValues, setFormValues] = useState({
        fontFamily: "Verdana",
        fontSize: "14"

        const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
            setFormValues({
                ...formValues,
                [event?.target.name]: event?.target.value
            })
    })
    const handleCheckChange = value={formValues.fontFamily}
    function handleChangevalue={formValues.fontFamily}
        throw new Error("Function not implemented.")
    }

    return (
        <form>
            <div className="mb-2">
                <label htmlFor="font-family" className="form=label">Font Family</label>
                <select id="font-family" className="form-select"
                name="fontFamily"
                onChange={handleChange}
                value={formValues.fontFamily}
                >
                    <option value="Verdana">Verdana</option>
                    <option value="Arial">Arial</option>
                    <option value="Futura">Futura</option>
                </select>
            </div>
            <div className="mb-2">
                <label htmlFor="font-size" className="form-label">Font Size</label>
                <input id="font-size" type="number" className="form-control"
                 name="fontSize"
                 onChange={handleChange}
                 value={formValues.fontSize}
                />
            </div>    
            <div className="text-end"> 
            <button className="btn btn-secondary me-2">Cancel</button>
            <button className="btn btn-success">Save</button>
            </div>
        </form>
    )
}