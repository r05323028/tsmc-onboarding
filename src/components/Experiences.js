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

import { Heading, Slide, UnorderedList, ListItem, Link } from "spectacle";

const Projects = (props) => {
  const { fontSize } = props;
  return (
    <>
      <ListItem>Projects (KKBOX/KKLab)</ListItem>
      <UnorderedList fontSize={fontSize}>
        <ListItem>
          Public Opinion Mining System (React.js + Flask + MySQL)
        </ListItem>
        <ListItem>KKMeet (Inhouse Hackathon - 3rd Place)(React Native + Flask + MySQL)</ListItem>
        <ListItem>
          <Link
            fontSize={fontSize}
            href={"https://recorder.custom-voice.cradle.kklab.com"}
            target="_blank"
          >
            Text-to-speech Human Labeling Tool (React.js + FastAPI + MySQL)
          </Link>
        </ListItem>
        <ListItem><Link href="https://patentsearch.kklab.com/" target="_blank" fontSize={fontSize}>Patent Search (FastAPI + ELK Stack + SQLAlchemy ORM + MySQL + SpaCy + Argo Workflows + AWS SQS + Apache Spark)</Link></ListItem>
      </UnorderedList>
    </>
  );
};

const Competitions = (props) => {
  const {fontSize} = props;
  return (<>
  <ListItem>Competitions</ListItem>
  <UnorderedList fontSize={fontSize}>
    <ListItem><Link href="https://imbd2020.thu.edu.tw/" target="_blank" fontSize={fontSize}>IMBD2020 全國智慧製造大數據分析競賽 - 企業組首獎 (教育部)</Link></ListItem>
  </UnorderedList>
  </>)
}

const SideProjects = (props) => {
  const { fontSize } = props;
  return (<>
    <ListItem>Side Projects</ListItem>
    <UnorderedList fontSize={fontSize}>
      <ListItem><Link fontSize={fontSize} href="https://github.com/r05323028/eyes" target="_blank">Eyes (React.js + GraphQL + FastAPI + MySQL + Argo Workflows + Celery)</Link></ListItem>
    </UnorderedList>
  </>)
};

const Experiences = (props) => {
  const fontSize = 26;
  return (
    <>
      <Slide>
        <Heading>Experiences</Heading>
        <UnorderedList fontSize={fontSize}>
          <Projects fontSize={fontSize} />
          <SideProjects fontSize={fontSize} />
          <Competitions fontSize={fontSize} />
        </UnorderedList>
      </Slide>
    </>
  );
};

export default Experiences;
