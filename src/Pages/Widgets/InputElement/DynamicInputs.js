import { Col, FormGroup, Label, Row } from "reactstrap";
import InputElement from "./InputElement";

const DynamicInputs = () => {
  const dataObj = [
    "NUMI",
    "TXTI",
    "TXTA",
    "CLDR",
    "SLST",
    "MLST",
    "CHKB",
    "FLPB",
    "FLPA",
    "RDBN",
  ];

  const generatedElem = dataObj.map((type, index) => (
    <Row form key={index}>
      <Col md={6}>
        <FormGroup>
          <Label for="companyName">
            {index + 1}. Type: {type}
          </Label>
          <br />
          <InputElement
            type={type}
            name={"name_" + index}
            placeholder={"dummy" + index}
          />
        </FormGroup>
      </Col>
    </Row>
  ));

  return (
    <div>
      <p>Customized Inputs on the basis of Type(s)</p>
      {generatedElem}
    </div>
  );
};
export default DynamicInputs;
