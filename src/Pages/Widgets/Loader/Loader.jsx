import "./Loader.css";

const Loader = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: props.styleMargin ? props.styleMargin : "16%",
      }}
    >
      <span style={{ marginTop: "50%", textAlign: "center" }}>
        <img
          src="/images/loader.svg"
          alt={props?.message ? props.message : "Loading..."}
        />
        {props?.message && (
          <span>
            <br />
            {props?.message}
          </span>
        )}
      </span>
    </div>
  );
};

export default Loader;
