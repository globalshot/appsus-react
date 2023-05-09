import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import KeepService from "../../../services/keep.service"
import { Keep } from "../../../interfaces/keep";

export function KeepEdit() {
    const [keep, setKeep] = useState<Keep>();
    // const { id } = useParams()
    // const keep = await KeepService.getKeepById(id)
    // var keep
    const { keepId } = useParams()

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

    if (!keep) return <div>loading</div>
    return (
        <div>
            <div>
                hehe im edit page
            </div>
            <div>
                {keep._id}
            </div>
            <div>
                {keep.title}
            </div>
        </div>
    )
}