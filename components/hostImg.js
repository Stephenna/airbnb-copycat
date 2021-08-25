import { urlFor } from "../sanity"

const HostImg = ({host}) => {
    return (
        <img src={urlFor(host.image).format(auto)} />
    )
}
    export default HostImg