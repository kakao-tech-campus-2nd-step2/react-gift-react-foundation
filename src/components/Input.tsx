import { InputProps } from "../types/PropsType";
import InputStyle from "../styles/InputStyle";

export default ({disabled, invalid, sizeI, inputProps}: InputProps) => {
    return(
        <InputStyle disabled={disabled} invalid={invalid} sizeI={sizeI} {...inputProps}>
        </InputStyle>
    )
}