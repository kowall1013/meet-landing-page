import GlobalStyles from './globalStyles';
import styled from 'styled-components';
import { COLORS } from './constants';
import { HeaderSection, GallerySection, Footer } from './components';

const Wrapper = styled.div`
  min-height: 100%;
  background-color: ${COLORS.neutral.white};
`;

function App(): JSX.Element {
  return (
    <Wrapper>
      <GlobalStyles />
      <HeaderSection />
      <GallerySection />
      <Footer />
    </Wrapper>
  );
}

export default App;
