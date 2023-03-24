import { Box, Flex, Heading, Skeleton, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "./Search";
import Weather from "./Weather";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const [WeatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  const SetSearchingValue = (value) => {
    setSearchValue(value);
  };

  const getWeatherData = async () => {
    setLoading(true);
    setError(false);
    try {
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?q=${searchValue}&units=metric&type=accurate&mode=html&APPID=f084515fa40411d2b53388eeb442a951`
      );
      setWeatherData(res.data.list[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  console.log(WeatherData);

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);
  return (
    <div>
      <Search SetSearchingValue={SetSearchingValue} />
      <Flex
        justifyContent={"space-around"}
        alignItems="center"
        w="80%"
        m="auto"
        mt="30px"
        border="1px solid gray"
        p="20px"
        mb="50px"
      >
        <Box>
          {loading ? (
            <Stack>
              <Skeleton height="30px" />
              <Skeleton height="30px" />
              <Skeleton height="30px" />
            </Stack>
          ) : Error ? (
            <Heading color="red">Enter City To See</Heading>
          ) : (
            <Weather WeatherData={WeatherData} />
          )}
        </Box>
        <Box>
          <div className="gmap_canvas">
            <iframe
              title="weather-id-01"
              width="500"
              height="400"
              id="gmap_canvas"
              src={`https://maps.google.com/maps?q=${
                searchValue || "India"
              }&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              frameBorder="1px"
              scrolling="yes"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </Box>
      </Flex>
    </div>
  );
};

export default Main;
