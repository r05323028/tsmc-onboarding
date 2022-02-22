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
import ReactDOM from "react-dom";

import {
  FlexBox,
  FullScreen,
  Progress,
  Deck,
  Heading,
  Slide,
  Box,
  Text,
} from "spectacle";

import Cover from "./components/Cover";
import SelfIntro from "./components/SelfIntro";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Life from "./components/Life";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Cover />
    <SelfIntro />
    <Skills />
    <Experiences />
    <Life />
    <Slide>
      <FlexBox height="100%" flexDirection={"column"}>
        <FlexBox>
          <Heading>Q&A</Heading>
        </FlexBox>
        <FlexBox>
          <Text>Thank you for yor time!</Text>
        </FlexBox>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
