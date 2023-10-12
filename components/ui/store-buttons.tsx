'use client';
import {
    GooglePlayButton,
    AppGalleryButton,
    ButtonsContainer,
  } from "react-mobile-app-button";


  export  default function StoreButtons () {
    const APKUrl =
      "https://play.google.com/store/apps/details?id=host.exp.exponent";
    const iOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
    return (
      <ButtonsContainer>
        <GooglePlayButton
          url={APKUrl}
          theme={"dark"}
          className={"custom-style"}
        />
        <AppGalleryButton
          url={iOSUrl}
          theme={"light"}
          className={"custom-style"}
        />
      </ButtonsContainer>
    );
  };