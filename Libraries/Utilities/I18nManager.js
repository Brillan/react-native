/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule I18nManager
 * @flow
 */
'use strict';

type I18nManagerStatus = {
  isRTL: boolean,
  allowRTL: (allowRTL: boolean) => {},
};

const I18nManager : I18nManagerStatus = require('NativeModules').I18nManager || {
  isRTL: false,
  allowRTL: () => {},
};

module.exports = I18nManager;
