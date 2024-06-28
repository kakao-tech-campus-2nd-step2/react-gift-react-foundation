import 'reset-css';
import GoodsItem from './components/GoodsItem';
import Grid from './components/Grid';
import Container from './components/Container';

export default function App() {
  return (
    <Container>
      <h1>Goods List</h1>
      <Grid>
        <GoodsItem
          imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
          subtitle="카카오 프렌즈 특별 한정판"
          title="[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션"
          amount={100000000000}
          rankingIndex={1}
        />
        <GoodsItem
          imageSrc="https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png"
          subtitle="카카오 프렌즈 특별 한정판"
          title="[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션"
          amount={100000000000}
          rankingIndex={2}
        />
      </Grid>
    </Container>
  );
}
