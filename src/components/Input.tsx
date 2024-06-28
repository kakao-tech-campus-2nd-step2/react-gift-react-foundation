import { InputProps } from "../types/PropsType";
import InputStyle from "../styles/InputStyle";

export default ({disabled, invalid, sizeI}: InputProps) => {
    return(
        <InputStyle disabled={disabled} invalid={invalid} sizeI={sizeI}>
        </InputStyle>
    )
}