import React from "react";
import {
  Body,
  Input,
  Label,
  Error,
  Select,
  Span,
  TextAreaContainer,
} from "./style";
import {
  EMPTY_FEILD_REQUIRED,
  INCORRECT_PATTERN,
} from "../../../data/messages";

export const InputGroup = ({
  label,
  placeholder,
  type,
  register,
  error,
  name,
  id,
  extraCssClass,
  isRequired,
  styles,
  defaultvalue,
  disabled,
  oninput,
  value,
  min,
  max,
}) => {
  return (
    <Body className={extraCssClass && extraCssClass}>
      <Label>
        {label}
        {isRequired && <Span>(required)</Span>}
      </Label>
      <Input
        name={name}
        id={id}
        disabled={disabled}
        type={type}
        value={value}
        defaultValue={defaultvalue}
        onInput={oninput}
        {...register}
        placeholder={placeholder}
        style={styles}
      />
      {error && error?.type === "required" && (
        <Error>{EMPTY_FEILD_REQUIRED}</Error>
      )}
      {error && error?.type === "maxLength" && (
        <Error>must be less than {max} characters</Error>
      )}
      {error && error?.type === "minLength" && (
        <Error>must be more than {min} characters</Error>
      )}
      {error && error?.type === "pattern" && <Error>{INCORRECT_PATTERN}</Error>}
    </Body>
  );
};

export const SelectGroup = ({
  label,
  placeholder,
  type,
  register,
  error,
  name,
  id,
  extraCssClass,
  data,
  isRequired,
  isLoading,
  isFetching,
  dataError,
  multiple,
  max,
}) => {
  return (
    <Body className={extraCssClass && extraCssClass}>
      <Label>
        {label}
        {isRequired && <Span>(required)</Span>}
      </Label>
      <Select
        name={name}
        id={id}
        type={type}
        {...register}
        placeholder={placeholder}
        multiple={multiple && true}
      >
        {data !== undefined &&
          data.map((item) => (
            <option key={item._id}>{item.name ? item.name : item.title}</option>
          ))}
      </Select>
      {error && error?.type === "required" && (
        <Error>{EMPTY_FEILD_REQUIRED}</Error>
      )}
      {error && error?.type === "maxLength" && (
        <Error>it should be less than {max}</Error>
      )}
    </Body>
  );
};

export const TextArea = ({
  label,
  row,
  children,
  isRequired,
  placeholder,
  register,
  error,
}) => {
  return (
    <>
      <Label>
        {label}
        {isRequired && <Span>(required)</Span>}
      </Label>
      <TextAreaContainer {...register} placeholder={placeholder} row={row}>
        {children}
      </TextAreaContainer>
      {error && error?.type === "required" && (
        <Error>{EMPTY_FEILD_REQUIRED}</Error>
      )}
    </>
  );
};
