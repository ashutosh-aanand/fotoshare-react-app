import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {

    const { docs } = useFirestore('fotos');
    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map( doc => (
                <div className="img-wrap">
                    <img src={doc.url} alt="image"/>
                </div>
            )) }
        </div>
    );
}
 
export default ImageGrid;