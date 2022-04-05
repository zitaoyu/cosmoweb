import "./photo.css";

const Photo = ({link, img, caption}) => {
  return (
    <a href={img} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
    </a>
  );
};

export default Photo;