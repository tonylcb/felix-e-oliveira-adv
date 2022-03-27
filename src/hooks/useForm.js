import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Insira um email válido",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [err, setErr] = React.useState(null);

  function validate() {
    if (type === false) return true;
    if (value.length === 0) {
      setErr("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setErr(types[type].message);
      return false;
    } else {
      setErr(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (err) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    err,

    validate: () => validate(value),

    onBlur: () => validate(value),
  };
};

export default useForm;
