import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const Weather = ({ WeatherData }) => {
  const [date, setDate] = useState();

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <Box>
        <Badge
          color={"ThreeDHighlight"}
          variant={"outline"}
          fontSize={"20px"}
          m="20px"
        >
          {date?.getHours() > 12 ? date?.getHours() - 12 : date?.getHours()} :{" "}
          {date?.getMinutes() <= 9
            ? `0${date?.getMinutes()}`
            : date?.getMinutes()}{" "}
          :{" "}
          {date?.getSeconds() <= 9
            ? `0${date?.getSeconds()}`
            : date?.getSeconds()}{" "}
          {date?.getHours() > 12 ? "PM" : "AM"}
        </Badge>
      </Box>
      <Flex
        direction={["column", "row"]}
        alignItems={"center"}
        textAlign="center"
        m="20px"
      >
        <IoLocationSharp size="40px" />{" "}
        <Heading>
          {WeatherData?.name}, {WeatherData?.sys?.country}
        </Heading>
      </Flex>
      <Card>
        <Flex alignItems={"center"}>
          <Image
            src={
              date?.getHours() > 12
                ? "https://cdn4.iconfinder.com/data/icons/weather-102/512/Weather_7-256.png"
                : "https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-3.png"
            }
            w="30%"
            p="10px"
          />
          <Box>
            <Heading>{WeatherData?.main?.temp} °C</Heading>
            <Heading size={"md"} fontWeight={"500"} m="10px">
              Min : {WeatherData?.main?.temp_min}°C
              {"   "} Max :{WeatherData?.main?.temp_max} °C
            </Heading>
            <Heading size={"md"} fontWeight={"500"} m="10px">
              Feels Like : {WeatherData?.main?.feels_like}°C
            </Heading>
          </Box>
        </Flex>
      </Card>
      <SimpleGrid columns={[1, 2, 3]} gap="10px" m="10px">
        <Card p="10px">
          <Text fontSize="20px">Pressure : {WeatherData?.main?.pressure}</Text>
        </Card>
        <Card p="10px">
          <Heading size={"md"} fontWeight={"500"}>
            Wind
          </Heading>
          <Text fontSize="20px">Speed : {WeatherData?.wind?.speed}</Text>
          <Text fontSize="20px">Deg : {WeatherData?.wind?.deg}</Text>
        </Card>
        <Card p="10px">
          <Text fontSize="20px">Rain : {WeatherData?.rain || "NO"}</Text>
        </Card>
        <Card p="10px">
          <Text fontSize="20px">Snow : {WeatherData?.snow || "NO"}</Text>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default Weather;
