import React, { useState, useEffect, createContext } from 'react';

// import data from data.js
import { housesData } from '../data';

// Create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  // return all countries 
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // remove duplicates (Fixed whitespace)
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    // set countries states
    setCountries(uniqueCountries);
  }, [houses]); // Added 'houses' dependency

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    // remove duplicates (Fixed whitespace)
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];
    // set properties states
    setProperties(uniqueProperties);
  }, [houses]); // Added 'houses' dependency

  const handleClick = () => {
    // set loading
    setLoading(true);

    // create a function that checks if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    // get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);
    // get second value of price which is the minimum price and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);
    
    const newHouse = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // if all values are selected
      if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
        return true;
      }

      // if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return true;
      }

      // if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      // if property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      // if price is not default 
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }

      // if country & property is not default 
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      // if country & price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        return house.country === country && housePrice >= minPrice && housePrice <= maxPrice;
      }

      // if property & price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        return house.type === property && housePrice >= minPrice && housePrice <= maxPrice;
      }

      // if property & price & country is not default
      if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
        return house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice;
      }

      // Added fallback return to satisfy array-callback-return
      return false;
    });

    setTimeout(() => {
      if (newHouse.length < 1) {
        setHouses([]);
      } else {
        setHouses(newHouse);
      }
      setLoading(false);
    }, 700);
  };

  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
