import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import KeepService from "../../../services/keep.service"
import { Keep } from "../../../interfaces/keep";

export function KeepEdit() {
    const [keep, setKeep] = useState<Keep>(KeepService.getEmptyKeep());
    // const { id } = useParams()
    // const keep = await KeepService.getKeepById(id)
    // var keep
    const { keepId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        async function getSingleKeep(id: any) {
            try {
                const data = await KeepService.getKeepById(id)
                // const data = await keep.json();
                setKeep(data)
            }
            catch (error) {
                console.error(error);
            }
        }
        getSingleKeep(keepId)
    }, [keepId])

    async function keepSaved(event: any) {
        event.preventDefault();
        try {
            if (keep._id) {
                keep._id = keep._id.toString();
            }
            await KeepService.saveKeep(keep)
            navigate('/keep')
        }
        catch (error) {
            console.log(error);

        }
    }

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setKeep(prevKeep => ({
            ...prevKeep,
            [name]: value,
        }));
    };

    //now switch for types or smth

    if (!keep) return <div>loading</div>
    return (
        <div>
            <div>
                <form onSubmit={keepSaved}>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={keep.title}
                        onChange={handleInputChange}
                        placeholder="title" />

                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={keep.description}
                        onChange={handleInputChange}
                        placeholder="description" />

                    <button>Save</button>
                </form>
            </div>
        </div>
    )
}