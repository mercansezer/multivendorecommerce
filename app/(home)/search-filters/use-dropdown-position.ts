"use client";
import React, { RefObject } from "react";

export const useDropDownPosition = (
  dropdownref: RefObject<HTMLDivElement | null>
) => {
  function getDropDownPosition() {
    if (!dropdownref.current) return { top: 0, left: 0 };

    const rect = dropdownref.current.getBoundingClientRect();
    console.log(rect);

    const dropdownWidth = 240;

    let left = rect.left + window.scrollX;

    const top = rect.bottom + window.scrollY;

    if (left + dropdownWidth > window.innerWidth) {
      left = rect.right + window.scrollX - dropdownWidth;

      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }
    }
    if (left < 0) {
      left = 16;
    }

    return { top, left };
  }

  return { getDropDownPosition };
};
