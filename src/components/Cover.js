// Copyright 2022 seanchang
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import React from "react";
import { Slide, Heading, FlexBox, Text } from "spectacle";
import ParticleImage from "react-particle-image";
import Background from '../assets/img/background.jpeg'
import Logo from "../assets/img/logo.png"

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.r > 200;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y)
    if (pixel.r > 200 & pixel.g < 50) {
      return 'red'
    }
    return 'black'
  }
};

const Cover = (props) => {
  return (
    <>
      <Slide backgroundImage={'url(' + Background + ')'} backgroundOpacity={0.8}>
        <FlexBox height="100%" flexDirection="column">
          <ParticleImage src={Logo} scale={1.5} entropy={10} particleOptions={particleOptions} backgroundColor={'rgb(0, 0, 0, 0)'} height={200} />
          <Heading>TSMC Onboarding</Heading>
          <FlexBox flexDirection={"column"}>
            <Text margin='0.1em'>Sean Chang</Text>
            <Text margin='0.1em'>{new Date().toDateString()}</Text>
          </FlexBox>
        </FlexBox>
      </Slide>
    </>
  );
};

export default Cover;
