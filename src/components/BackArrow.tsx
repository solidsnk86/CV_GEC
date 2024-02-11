import { ArrowBigLeftIcon } from "lucide-react"

export const BackArrow = () => {
    return <ArrowBigLeftIcon onClick={() => history.back} className="my-3 w-5" />
}

export default BackArrow