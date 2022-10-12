import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CanBeOnRoad from "./canBeOnRoad";
import CheckPlate from "./CheckPlate";

const App = () => {
  const [plate, setPlate] = useState("");
  const [newDate, setnewDate] = useState(new Date());
  const [error, seterror] = useState(false);
  const [show, setshow] = useState(false);
  const [onRoad, setonRoad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (CheckPlate(plate)) {
      seterror(false);
    } else {
      seterror(true);
    }
    console.log(plate);
    console.log(newDate);
  };

  return (
    <form onChange={handleSubmit}>
      <Typography variant="h4" color="primary">
        Pico y Placa Checker
      </Typography>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter the license plate without a hyphen"
        onChange={(e) => {
          setPlate(e.target.value);
        }}
        required
      />

      {error ? (
        <Typography variant="subtitle2" color="red">
          {" "}
          The plate is incorrect{" "}
        </Typography>
      ) : (
        ""
      )}

      <br />
      <br />

      <TextField
        id="datetime-local"
        label="Enter date and time"
        type="datetime-local"
        defaultValue="2022-10-11T10:30"
        onChange={(e) => setnewDate(e.target.value)}
        sx={{ width: 300 }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <br />
      <br />

      <Button
        variant="outlined"
        onClick={() => {
          setonRoad(CanBeOnRoad(plate, newDate));
          setshow(!show);
        }}
      >
        Check
      </Button>
      <br />
      <br />

      {show ? (
        <Typography variant="subtitle2" color="primary">
          {onRoad}
        </Typography>
      ) : (
        ""
      )}
    </form>
  );
};

export default App;
