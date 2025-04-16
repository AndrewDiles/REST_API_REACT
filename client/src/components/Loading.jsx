import washer from "../assets/loading_washer.gif";

const loaderStyles = {
	margin: "auto"
};

const Loading = ({height}) => {
	if (!height) {
		height = "100%"
	}
  return (
    <img style={{...loaderStyles, height}} alt="a tumbling washing machine" src={washer} />
  );
};

export default Loading;
