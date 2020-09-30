/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// Styled elements
import * as React from 'react';
import {Link} from './styled-components.js';
import {withWrapper} from '../styles/index.js';
import {isFocusVisible, forkFocus, forkBlur} from '../utils/focusVisible.js';

function LinkFocus(props) {
  const [focusVisible, setFocusVisible] = React.useState(false);
  const handleFocus = (event: SyntheticEvent<>) => {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  };
  const handleBlur = (event: SyntheticEvent<>) => {
    if (focusVisible !== false) {
      setFocusVisible(false);
    }
  };
  return props.children({focusVisible, handleFocus, handleBlur});
}

export const StyledLink = withWrapper(
  Link,
  Styled =>
    function StyledLink({animateUnderline, ...restProps}) {
      return (
        <LinkFocus>
          {focusProps => (
            <Styled
              data-baseweb="link"
              $isAnimateUnderline={animateUnderline}
              $isFocusVisible={focusProps.focusVisible}
              onFocus={forkFocus(restProps, focusProps.handleFocus)}
              onBlur={forkBlur(restProps, focusProps.handleBlur)}
              {...restProps}
            />
          )}
        </LinkFocus>
      );
    },
);
