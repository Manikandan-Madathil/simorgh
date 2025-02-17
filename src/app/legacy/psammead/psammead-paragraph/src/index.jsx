import styled from '@emotion/styled';
import { shape, string, bool } from 'prop-types';
import { C_LUNAR, C_GREY_10 } from '#psammead/psammead-styles/src/colours';
import { GEL_SPACING_TRPL } from '#psammead/gel-foundations/src/spacings';
import { getBodyCopy } from '#psammead/gel-foundations/src/typography';
import { scriptPropType } from '#psammead/gel-foundations/src/prop-types';
import { getSansRegular } from '#psammead/psammead-styles/src/font-styles';

const Paragraph = styled.p`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${({ darkMode }) => (darkMode ? C_LUNAR : C_GREY_10)};
  padding-bottom: ${GEL_SPACING_TRPL};
  margin: 0; /* Reset */
`;

Paragraph.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  darkMode: bool,
};

Paragraph.defaultProps = {
  darkMode: false,
};

export default Paragraph;
