"use client";

import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

import FormInput from "./CustomTextField";

function AddressForm({ checkoutToken, next }) {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  // const fetchShippingCountries = async (checkoutTokenId) => {
  //   const { countries } = await commerce.services.localeListShippingCountries(
  //     checkoutTokenId
  //   );
  //   setShippingCountries(countries);
  //   setShippingCountry(Object.keys(countries)[0]);
  // };

  // const fetchSubdivisions = async (countryCode) => {
  //   const { subdivisions } = await commerce.services.localeListSubdivisions(
  //     countryCode
  //   );
  //   setShippingSubdivisions(subdivisions);
  //   setShippingSubdivision(Object.keys(subdivisions)[0]);
  // };

  // const fetchShippingOptions = async (
  //   checkoutTokenId,
  //   country,
  //   region = null
  // ) => {
  //   const options = await commerce.checkout.getShippingOptions(
  //     checkoutTokenId,
  //     { country, region }
  //   );
  //   setShippingOptions(options);
  //   setShippingOption(options[0].id);
  // };

  useEffect(() => {
    // fetchShippingCountries(checkoutToken.id);
    return () => {
      setShippingCountries([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (shippingCountry) return; //fetchSubdivisions(shippingCountry);
    return () => {
      setShippingSubdivisions([]);
    };
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      // fetchShippingOptions(
      //   checkoutToken.id,
      //   shippingCountry,
      //   shippingSubdivision
      // );
      return () => {
        setShippingOptions([]);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shippingSubdivision]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            <FormInput name="firstname" label="First name" />
            <FormInput name="lastname" label="Last name" />
            <FormInput name="address" label="Address" />
            <FormInput name="email" label="Email" />
            <FormInput name="city" label="City" />
            <FormInput name="zip" label="ZIP / Post code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {Object.entries(shippingCountries)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {Object.entries(shippingSubdivisions)
                  .map(([code, name]) => ({
                    id: code,
                    label: name,
                  }))
                  .map((subdivision) => (
                    <MenuItem key={subdivision.id} value={subdivision.id}>
                      {subdivision.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                value={shippingOption}
                fullWidth
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {shippingOptions
                  .map((sO) => ({
                    id: sO.id,
                    label: `${sO.description}-(${sO.price.formatted_with_symbol})`,
                  }))
                  .map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export default AddressForm;
