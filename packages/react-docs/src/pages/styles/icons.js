import React from 'react';
import Content from '../../components/content';
import { Title, Grid, GridItem } from '@patternfly/react-core';
import { iconMap } from '@patternfly/react-icons/icons';
import { css, StyleSheet } from '@patternfly/react-styles';
import {
  global_spacer_md as spacerMd,
  global_FontSize_sm as labelFontSize
} from '@patternfly/react-tokens';

const allIcons = Array.from(iconMap.entries());

const styles = StyleSheet.create({
  iconCell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: spacerMd.var
  },
  label: {
    textAlign: 'center',
    fontSize: labelFontSize.var
  }
});

function Icons() {
  return (
    <Content>
      <Title size="3xl" withMargins>
        Icons
      </Title>
      <Grid>
        {allIcons.map(([id, Icon]) => (
          <GridItem
            key={id}
            className={css(styles.iconCell)}
            sm={6}
            md={4}
            lg={2}
          >
            <Icon size="xl" key={id} title={id} />
            <div className={css(styles.label)}>{id}</div>
          </GridItem>
        ))}
      </Grid>
    </Content>
  );
}

export default Icons;
