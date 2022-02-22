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

import { Slide, Heading, Image } from "spectacle";
import LightGallery from "lightgallery/react";
import styled from "styled-components";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import Img1 from "../assets/img/gallery/1.jpeg";
import Img2 from "../assets/img/gallery/2.jpeg";
import Img3 from "../assets/img/gallery/3.jpeg";
import Img4 from "../assets/img/gallery/4.jpeg";
import Img5 from "../assets/img/gallery/5.jpeg";

const gallery = [
  {
    src: Img1,
    html: "武嶺",
    height: 200,
  },
  {
    src: Img2,
    html: "長城",
    height: 200,
  },
  {
    src: Img3,
    html: "KKMeet",
    height: 200,
  },
  {
    src: Img4,
    html: "Julia & Kimberley",
    height: 200,
  },
  {
    src: Img5,
    html: "比賽首獎",
    height: 200,
  },
];

const Img = styled.img`
  margin: 5px;
`;

const Life = (props) => {
  return (
    <>
      <Slide>
        <Heading>My Life!</Heading>
        <LightGallery margins={5}>
          {gallery.map((obj) => {
            return (
              <a data-src={obj.src} data-sub-html={obj.html}>
                <Img src={obj.src} height={obj.height} width={obj.width} />
              </a>
            );
          })}
        </LightGallery>
      </Slide>
    </>
  );
};

export default Life;
