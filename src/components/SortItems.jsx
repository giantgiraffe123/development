import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

export default function SortItems(props) {

  const selectSortType = (event) => {
    console.log(event.target.value);
    props.setSortType(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Sort By</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={props.sortType}
        onChange={selectSortType}
      >
        <FormControlLabel value="price" control={<Radio />} label="Price" />
        <FormControlLabel
          value="calories"
          control={<Radio />}
          label="Calories"
        />
      </RadioGroup>
    </FormControl>
  );
}
