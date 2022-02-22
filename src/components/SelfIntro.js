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

import { Slide, Heading, UnorderedList, ListItem, FlexBox, Image } from "spectacle";

const Items = (props) => {
  const { fontSize } = props;
  return (
    <>
      <UnorderedList fontSize={fontSize}>
        <ListItem>Sean Chang (張詠翔)</ListItem>
        <ListItem>Experiences</ListItem>
        <UnorderedList fontSize={fontSize}>
          <ListItem>KKLab - Sr. Data Scientist</ListItem>
          <ListItem>KKBOX - Data Scientist</ListItem>
        </UnorderedList>
        <ListItem>Education</ListItem>
        <UnorderedList fontSize={fontSize}>
          <ListItem>NTU - Master of Economics</ListItem>
        </UnorderedList>
        <ListItem>Interests: #photography, #car, #game, #stock</ListItem>
      </UnorderedList>
    </>
  );
};

const Photo = (props) => {
  return (<>
  <Image maxWidth="300px" src="./src/assets/img/photo.jpg" />
  </>)
}

const SelfIntro = (props) => {
  const fontSize = 30;
  return (
    <>
      <Slide>
        <Heading>Who Am I ?</Heading>
        <FlexBox>
          <FlexBox flexGrow={2}>
            <Items fontSize={fontSize} />
          </FlexBox>
          <FlexBox flexGrow={1}>
            <Photo />
          </FlexBox>
        </FlexBox>
      </Slide>
    </>
  );
};

export default SelfIntro;
