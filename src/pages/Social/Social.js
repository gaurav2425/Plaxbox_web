import React, { useRef, useState } from "react";
import styles from "./Social.module.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

function Social() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className={styles.container}>
      <ScrollContainer>
        <ScrollPage page={0}>
          <div className={styles.container1}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <span
              style={{ fontSize: "100px", marginTop: "350px" }}
              className={styles.txt}
            >
              <Animator animation={MoveOut(-500, 0)}>
                full stack developer
              </Animator>
              <Animator animation={MoveOut(500, 0)}>
                ♥Interface and designs Flavorist of mesmerizing
              </Animator>
            </span>
          </div>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px" }}>
              Let me show you scroll animation 😀
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
          </Animator>
        </ScrollPage>

        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>Done</span>
            <br />
            <span style={{ fontSize: "30px" }}>
              There's FadeAnimation, MoveAnimation, StickyAnimation,
              ZoomAnimation
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default Social;
