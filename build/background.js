// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

const { unstable_renderSubtreeIntoContainer } = require("react-dom");

chrome.runtime.onInstalled.addListener(function () {
  setInterval(function () {
    if (uber.getorderready()) {
      chrome.notifications.create("name-for-notification", {
        type: "basic",
        iconUrl: "default.png",
        title: "Hi there! Your order is ready!",
        message: "Please meet the driver at the designated place."
      });
    }
  }, 3000);
});
