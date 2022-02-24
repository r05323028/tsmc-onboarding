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
import Img6 from "../assets/img/gallery/6.jpeg";
import Img7 from "../assets/img/gallery/7.jpeg";
import Img8 from "../assets/img/gallery/8.jpeg";
import Img9 from "../assets/img/gallery/9.jpeg";
import Img10 from "../assets/img/gallery/10.jpeg";
import Img11 from "../assets/img/gallery/11.jpeg";
import Img12 from "../assets/img/gallery/12.jpeg";
import Img13 from "../assets/img/gallery/13.jpeg";
import Img14 from "../assets/img/gallery/14.png";

const height = 150
const width = undefined

const gallery = [
  {
    src: Img1,
    html: "武嶺",
    height: height,
    width: width,
  },
  {
    src: Img2,
    html: "長城",
    height: height,
    width: width,
  },
  {
    src: Img3,
    html: "KKMeet",
    height: height,
    width: width,
  },
  {
    src: Img4,
    html: "Julia & Kimberley",
    height: height,
    width: width,
  },
  {
    src: Img5,
    html: "比賽首獎",
    height: height,
    width: width,
  },
  {
    src: Img6,
    html: "PUBG",
    height: height,
    width: width,
  },
  {
    src: Img7,
    html: "TWDS Sharing",
    height: height,
    width: width,
  },
  {
    src: Img8,
    html: "阿爾宙斯",
    height: height,
    width: width,
  },
  {
    src: Img9,
    html: "首爾車站",
    height: height,
    width: width,
  },
  {
    src: Img10,
    html: "蘭桂芳",
    height: height,
    width: width,
  },
  {
    src: Img11,
    html: "KKMeet 網頁",
    height: height,
    width: width,
  },
  {
    src: Img12,
    html: "黑客松第三名",
    height: height,
    width: width,
  },
  {
    src: Img13,
    html: "KKBOX 輿情分析平台",
    height: height,
    width: width,
  },
  {
    src: Img14,
    html: "Eyes - 台灣輿情分析平台",
    height: height,
    width: width,
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
