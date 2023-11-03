import React, { useState } from 'react';
import './style.scss';
import Screen from '../../Screen';
import MypageMenus from '../../../components/mypageMenu/MypageMenus';
import MypageVinyl from '../../../components/mypageVinyl/MypageVinyl';
import tradeSample from '../../../asset/tradeSample.png';
import TradeCard from '../../../components/common/tradeCard/TradeCard';
import CustomDropdown from '../../../components/common/customDropdown/CustomDropdown';
import MypageTab from '../../../components/MypageTab/MypageTab';
import InfiniteScroll from 'react-infinite-scroller';
import userImg from '../../../asset/profile_default.png';

export default function MypageListingsScreen() {
  const [userData, setUserData] = useState({
    imgSrc: userImg,
    user_grade: 5,
  });
  const tabsData = [
    {
      id: 1,
      title: '상품',
    },
    {
      id: 2,
      title: '재능',
    },
  ];

  const items = ['전체', '판매중', '판매완료'];
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [productData, setProductData] = useState(
    new Array(8).fill({
      title: '텔레캐스터 민트 팝니다',
      date: '1일전',
      price: '1,300,000',
      isLike: false,
      img: tradeSample,
    }),
  );

  return (
    <Screen>
      <div className="MLContainer">
        <div className="MLContent">
          <div className="MpListContainer">
            <div className="MpTopBox">
              <div className="MpTitleBox">
                <h1>판매 내역</h1>
                <div className="postIntro">POST</div>
              </div>
              <div className="vinyl">
                <MypageVinyl userData={userData} />
              </div>
            </div>
            <MypageTab tabsData={tabsData} />

            <CustomDropdown
              showDropdown={showDropdown}
              setShowDropdown={() => setShowDropdown(!showDropdown)}
              items={items}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
            <InfiniteScroll
              pageStart={0}
              loadMore={() => {
                setProductData([...productData, ...productData]);
                console.log(productData);
              }}
              hasMore={true}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
            >
              <div className="MpGridContainer">
                {productData.map((e, i) => {
                  return <TradeCard key={`${i}_${e.title}`} data={e} />;
                })}
              </div>
            </InfiniteScroll>
          </div>
        </div>
        <MypageMenus />
      </div>
    </Screen>
  );
}
