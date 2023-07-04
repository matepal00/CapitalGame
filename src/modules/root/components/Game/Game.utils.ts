import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema, object, string } from "yup";
import { useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { paths } from "../../../../config";
import { GameStep } from "../../../../shared/types";

export interface Country {
  country: string;
  capital: string;
  continent: string;
}
export interface UseSubmitHandlerProps {
  countriesInContinent: Country[];
  reset: () => void;
}
export enum CountriesFormField {
  Capital = "capital",
}

export interface CountriesFormValues {
  [CountriesFormField.Capital]: string;
}

const defaultValues: CountriesFormValues = {
  [CountriesFormField.Capital]: "",
};
const navigate = useNavigate();
export const useValidationSchema = (): ObjectSchema<CountriesFormValues> => {
  return object()
    .shape({
      [CountriesFormField.Capital]: string().required(),
    })
    .required();
};

export const useFormProps = () => {
  const schema = useValidationSchema();
  return useForm<CountriesFormValues>({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
  });
};
export const useDialog = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleDialogClose = () => {
    setOpen(false);
    navigate(generatePath(paths.root.step, { step: GameStep.ChooseContinent }));
  };
  return {
    open,
    setOpen,
    handleDialogClose,
  };
};
export const useSubmitHandler = ({
  countriesInContinent,
  reset,
}: UseSubmitHandlerProps) => {
  const [correctAnswears, setCorrectAnswears] = useState<string[]>([]);
  const [wrongAnswears, setwrongAnswears] = useState<string[]>([]);
  const [currentCountry, setCurrentCountry] = useState<Country>({
    country: "",
    capital: "",
    continent: "",
  });
  const [countriesLeft, setCountriesLeft] =
    useState<Country[]>(countriesInContinent);
  const handleSubmit = (value: CountriesFormValues) => {
    reset();
    if (
      value[CountriesFormField.Capital].toLowerCase() ===
      currentCountry.capital.toLowerCase()
    ) {
      setCorrectAnswears([...correctAnswears, currentCountry.country]);
    } else {
      setwrongAnswears([...wrongAnswears, currentCountry.country]);
    }
    setCountriesLeft(
      countriesLeft.filter((item) => item.country !== currentCountry.country)
    );
  };

  return {
    handleSubmit,
    correctAnswears,
    wrongAnswears,
    currentCountry,
    countriesLeft,
    setCurrentCountry,
    setCountriesLeft,
    setwrongAnswears,
    setCorrectAnswears,
  };
};
