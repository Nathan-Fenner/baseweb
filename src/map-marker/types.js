/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import {
  FLOATING_MARKER_ANCHOR_POSITIONS,
  NEEDLE_SIZES,
  PINHEAD_SIZES,
  FLOATING_MARKER_SIZES,
  PINHEAD_TYPES,
  FLOATING_MARKER_ANCHOR_TYPES,
} from './constants.js';

export type PinHeadT = $Values<typeof PINHEAD_TYPES>;

export type AnchorPositionsT = $Values<typeof FLOATING_MARKER_ANCHOR_POSITIONS>;

export type NeedleSizeT = $Values<typeof NEEDLE_SIZES>;

export type PinHeadSizeT = $Values<typeof PINHEAD_SIZES>;

export type FloatingMarkerSizeT = $Values<typeof FLOATING_MARKER_SIZES>;

/* eslint-disable flowtype/generic-spacing*/
export type FloatingMarkerAnchorTypeT = $Values<
  typeof FLOATING_MARKER_ANCHOR_TYPES,
>;

export type NeedlePropsT = {
  size: NeedleSizeT,
  background?: string,
};

export type ItemPropsT = {
  children?: React.Node,
  color?: string,
  size?: number,
};

export type PinHeadPropsT = {
  size?: PinHeadSizeT,
  label?: string,
  startEnhancer?: React.Node | React.AbstractComponent<{}>,
  endEnhancer?: React.Node | React.AbstractComponent<{}>,
  color?: string,
  background?: string,
  type?: PinHeadT,
  anchorType?: FloatingMarkerAnchorTypeT,
};

export type FixedMarkerPropsT = {
  size?: PinHeadSizeT,
  needle?: NeedleSizeT,
  label?: string,
  startEnhancer?: React.Node | React.AbstractComponent<{}>,
  endEnhancer?: React.Node | React.AbstractComponent<{}>,
  color?: string,
  background?: string,
  dragging?: boolean,
};

export type FloatingMarkerPropsT = {
  color?: string,
  background?: string,
  label?: string,
  anchor?: AnchorPositionsT,
  endEnhancer?: React.Node | React.AbstractComponent<{}>,
  startEnhancer?: React.Node | React.AbstractComponent<{}>,
  anchorType?: FloatingMarkerAnchorTypeT,
  size?: FloatingMarkerSizeT,
};

export type DragShadowPropsT = {
  background: string,
  dragging: boolean,
  height: number,
};