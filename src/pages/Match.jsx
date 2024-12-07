// Match.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import tempImage from "../images/ppotto.png";

// 글로벌 스타일 설정
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`;

function Match() {
  const [Click, setClick] = useState([]);

  const wantOption = (value) => {
    if (Click.includes(value)) {
      setClick(Click.filter((filter) => filter !== value));
    }
    else {
      setClick([...Click, value]);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Explain>원하는 Roomie의 특징을 한 개 이상 선택해주세요! <br></br>
          그럼 저희가 딱 맞는 Roomie를 Matching해줄게요 <br></br>
          원하는 만큼 선택해도 좋아요.
        </Explain>
        <Filter>
          <FilterGroup>
            <FilterLabel><br></br>기숙사 생활 기간</FilterLabel>
            <FilterValues>
              <FilterValue
                onClick={() => wantOption('4개월')}
                selected={Click.includes('4개월')}
              >4개월
              </FilterValue>
              <FilterValue
                onClick={() => wantOption('6개월')}
                selected={Click.includes('6개월')}
              >6개월
              </FilterValue>
              <FilterValue
                onClick={() => wantOption('12개월')}
                selected={Click.includes('12개월')}
              >12개월
              </FilterValue>
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
          <FilterLabel>단과대</FilterLabel>
            <FilterValues>
              {[
                '전자정보공과대학',
                '인공지능융합대학',
                '공과대학',
                '자연과학대학',
                '경영대학',
                '인문사회과학대학',
                '정책법학대학',
                '인제니움학부대학',
              ].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >
                  {item}
                </FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>학번</FilterLabel>
            <FilterValues>
              {['16학번', '17학번', '18학번', '19학번', '20학번', '21학번', '22학번', '23학번', '24학번'].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >{item}</FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>기상시간</FilterLabel>
            <FilterValues>
              {['07:00', '08:00', '09:00', '10:00'].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >{item}</FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>취침시간</FilterLabel>
            <FilterValues>
              <FilterValue
                onClick={() => wantOption('21:00')}
                selected={Click.includes('21:00')}
              >21:00
              </FilterValue>
              <FilterValue
                onClick={() => wantOption('22:00')}
                selected={Click.includes('22:00')}
              >22:00
              </FilterValue>
              <FilterValue
                onClick={() => wantOption('23:00')}
                selected={Click.includes('23:00')}
              >23:00
              </FilterValue>
              <FilterValue
                onClick={() => wantOption('새벽')}
                selected={Click.includes('새벽')}
              >새벽
              </FilterValue>
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>소등시간</FilterLabel>
            <FilterValues>
              <FilterValue
                onClick={() => wantOption('21:00 ')}
                selected={Click.includes('21:00 ')}
              >21:00
              </FilterValue>
              <FilterValue
                onClick={() => wantOption('22:00 ')}
                selected={Click.includes('22:00 ')}
              >22:00
              </FilterValue>
              <FilterValue
                onClick={() => wantOption('23:00 ')}
                selected={Click.includes('23:00 ')}
              >23:00
              </FilterValue>
              <FilterValue
                onClick={() => wantOption('24:00 ')}
                selected={Click.includes('24:00 ')}
              >24:00
              </FilterValue>
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>샤워시간</FilterLabel>
            <FilterValues>
              {['외출 전', '귀가 후', '둘 다'].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >{item}</FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>흡연 여부</FilterLabel>
            <FilterValues>
              {['흡연자', '비흡연자'].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >{item}</FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>잠버릇</FilterLabel>
            <FilterValues>
              {['코골이', '이갈이', '몽유병', '잠꼬대'].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >{item}</FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>생활패턴</FilterLabel>
            <FilterValues>
              {['아침형', '저녁형', '새벽형'].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >{item}</FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>알람소리</FilterLabel>
            <FilterValues>
              {['민감', '둔감'].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >{item}</FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>물건 공유 여부</FilterLabel>
            <FilterValues>
              {['공유해요', '공유하기 싫어요'].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >{item}</FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>방에서 게임</FilterLabel>
            <FilterValues>
              {['PC 게임', '모바일 게임', '가끔 이해할 수 있어요', '아예 안돼요'].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >{item}</FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>방 안 공부</FilterLabel>
            <FilterValues>
              {['스탠드 켜고 하면 가능해요', '불 켜고 해도 돼요', '공부 안돼요'].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >{item}</FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>방 안 음식물 섭취</FilterLabel>
            <FilterValues>
              {['음료', '간단한 간식', '식사', '배달음식', '섭취 안돼요'].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >{item}</FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>청소 주기</FilterLabel>
            <FilterValues>
              {['매일 항상 깨끗이', '2~3일에 한 번씩', '일주일에 한 번', '한 달에 한 번', '아예 안해요'].map(item => (
                <FilterValue
                  key={item}
                  onClick={() => wantOption(item)}
                  selected={Click.includes(item)}
                >{item}</FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>MBTI</FilterLabel>
            <FilterValues>
              {['ESTJ', 'ESTP', 'ESFJ', 'ESFP', 'ENTJ', 'ENTP', 'ENFJ', 'ENFP', 'ISTJ', 'ISTP', 'ISFJ', 'ISFP', 'INTJ', 'INTP', 'INFJ', 'INFP'].map((value) => (
                <FilterValue key={value} onClick={() => wantOption(value)} selected={Click.includes(value)}>
                  {value}
                </FilterValue>
              ))}
            </FilterValues>
          </FilterGroup>
        </Filter>
        <Explain> 아래는 ㅇㅇ님과 딱 맞는 루미들이에요. <br></br>
          프로필을 눌러 세부사항도 확인해보세요.
        </Explain>

        <HorizonLine text="Roomie" />

        <ProfileContainer>
          <Profile onClick={() => navigate('/roomie')}>
            <ProfileImage src={tempImage} alt="Roomie Profile" />
            <RoomieBox>
              <Roomietext>김소정</Roomietext>
              <Roomietext>21학번</Roomietext>
              <Roomietext>인공지능융합대학</Roomietext>
            </RoomieBox>
          </Profile>
          <Profile onClick={() => navigate('/roomie')}>
            <ProfileImage src={tempImage} alt="Roomie Profile" />
            <RoomieBox>
              <Roomietext>정주연</Roomietext>
              <Roomietext>22학번</Roomietext>
              <Roomietext>인공지능융합대학</Roomietext>
            </RoomieBox>
          </Profile>
          <Profile onClick={() => navigate('/roomie')}>
            <ProfileImage src={tempImage} alt="Roomie Profile" />
            <RoomieBox>
              <Roomietext>최현서</Roomietext>
              <Roomietext>20학번</Roomietext>
              <Roomietext>인공지능융합대학</Roomietext>
            </RoomieBox>
          </Profile>
          <Profile onClick={() => navigate('/roomie')}>
            <ProfileImage src={tempImage} alt="Roomie Profile" />
            <RoomieBox>
              <Roomietext>황인규</Roomietext>
              <Roomietext>21학번</Roomietext>
              <Roomietext>인공지능융합대학</Roomietext>
            </RoomieBox>
          </Profile>
          <Profile onClick={() => navigate('/roomie')}>
            <ProfileImage src={tempImage} alt="Roomie Profile" />
            <RoomieBox>
              <Roomietext>황인규</Roomietext>
              <Roomietext>21학번</Roomietext>
              <Roomietext>인공지능융합대학</Roomietext>
            </RoomieBox>
          </Profile>
          <Profile onClick={() => navigate('/roomie')}>
            <ProfileImage src={tempImage} alt="Roomie Profile" />
            <RoomieBox>
              <Roomietext>황인규</Roomietext>
              <Roomietext>21학번</Roomietext>
              <Roomietext>인공지능융합대학</Roomietext>
            </RoomieBox>
          </Profile>
          <Profile onClick={() => navigate('/roomie')}>
            <ProfileImage src={tempImage} alt="Roomie Profile" />
            <RoomieBox>
              <Roomietext>황인규</Roomietext>
              <Roomietext>21학번</Roomietext>
              <Roomietext>인공지능융합대학</Roomietext>
            </RoomieBox>
          </Profile>
        </ProfileContainer>
      </Container>
    </>
  )
}

export default Match;



const Container = styled.div`
  width: 100%;
  padding: 20px; /* 내부 여백 */
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 모든 콘텐츠를 중앙 정렬 */
`;

const Explain = styled.div`
text-align: center;
padding : 30px;
width: 60%; /* 부모 컨테이너의 전체 너비를 차지 */
font-size:20px;

`;

const Filter = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
width:60%;
align-items: flex-start; /* 내부 요소 왼쪽 정렬 */
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%; /* 그룹 전체 너비 */
`;

const FilterLabel = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const FilterValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  justify-content: flex-start; /* 선택 옵션 왼쪽 정렬 */
`;

const FilterValue = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#a72b0c' : 'white')};
  border: 1px solid ${({ selected }) => (selected ? '#a72b0c' : '#ddd')};
  color: ${({ selected }) => (selected ? '#FFFFFF' : 'black')};

  &:hover {
    background-color: ${({ selected }) => (selected ? '#a72b0c' : '#f0f0f0')};
  }
`;

const HorizonLineContainer = styled.div`
  width: 60%;
  text-align: center;
  border-bottom: 1px solid #aaa;
  line-height: 0.1em;
  margin-bottom : 20px;
`;

const HorizonLineText = styled.span`
  background: #fff;
  padding: 0 10px;
`;

const HorizonLine = ({ text }) => (
  <HorizonLineContainer>
    <HorizonLineText>{text}</HorizonLineText>
  </HorizonLineContainer>
);


const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 한 줄에 3개씩 배치 */
  justify-items: center; /* 각 아이템을 중앙에 정렬 */
  width: 60%;
  padding: 10px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center; /* 가로 중앙 정렬 */
  padding: 20px;
  border: 1px solid #a72b0c;
  border-radius: 10px;
  background-color: white;
  gap: 10px;
  width: 300px; /* 각 프로필의 고정된 너비 설정 */
  margin : 15px 0 15px;

  &:hover {
    background-color: #f08a77;
  }
`;

const RoomieBox = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  gap: 10px; /* 각 항목 간의 간격 */
  width: 140px;
  
`;

const Roomietext = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%; /* 원형 이미지 */
  object-fit: cover; /* 이미지 비율 유지 */
`;