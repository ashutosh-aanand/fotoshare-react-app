import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelImgUrl }) => {

    const { docs } = useFirestore('fotos');
    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map( doc => (
                <div className="img-wrap"
                onClick={()=> setSelImgUrl(doc.url)}
                >
                    <img src={doc.url} alt="image"/>
                </div>
            )) }
        </div>
    );
}
 
export default ImageGrid;