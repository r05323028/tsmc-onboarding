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

import { UnorderedList, ListItem, Heading, Slide, FlexBox } from "spectacle";

const Tools = (props) => {
  const { fontSize } = props;
  return (
    <>
      <ListItem>Frameworks</ListItem>
      <FlexBox alignItems={"flex-start"}>
        <UnorderedList fontSize={fontSize}>
          <ListItem>Frontend: react, vue (basic)</ListItem>
          <ListItem>Batch: apache spark</ListItem>
          <ListItem>Search: elasticsearch</ListItem>
          <ListItem>API: fastAPI / flask</ListItem>
        </UnorderedList>
      </FlexBox>
      <ListItem>DevOps</ListItem>
      <FlexBox alignItems={"flex-start"}>
        <UnorderedList fontSize={fontSize}>
          <ListItem>Containerize: kubernetes, docker</ListItem>
          <ListItem>IaC: helm charts, ansible</ListItem>
          <ListItem>Workflows: argo workflows, airflow</ListItem>
          <ListItem>VCS/CI: github actions, gitlab ci</ListItem>
        </UnorderedList>
      </FlexBox>
    </>
  );
};

const ML = (props) => {
  const { fontSize } = props;
  return (
    <>
      <ListItem>Machine Learning</ListItem>
      <FlexBox alignItems={"flex-start"}>
        <UnorderedList fontSize={fontSize}>
          <ListItem>Frameworks: tensorflow, spacy, sklearn</ListItem>
          <ListItem>Ensemble methods: GBM, RF</ListItem>
          <ListItem>NLP: embeddings, ner, sentiment analysis</ListItem>
        </UnorderedList>
      </FlexBox>
    </>
  );
};

const Skills = (props) => {
  const fontSize = 28;
  return (
    <>
      <Slide>
        <Heading>Skills</Heading>
        <FlexBox>
          <UnorderedList fontSize={fontSize}>
            <ListItem>
              Languanges: python, javascript, golang (basic), scala (basic)
            </ListItem>
            <FlexBox flexDirection={"column"} alignItems="flex-start">
              <FlexBox alignItems={"flex-start"}>
              <Tools fontSize={fontSize} />
              </FlexBox>
              <FlexBox alignItems={"flex-start"}>
              <ML fontSize={fontSize} />
              </FlexBox>
            </FlexBox>
          </UnorderedList>
        </FlexBox>
      </Slide>
    </>
  );
};

export default Skills;
