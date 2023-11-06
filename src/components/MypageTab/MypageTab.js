import React, { useState } from 'react';
import './style.scss';

export default function MypageTab({
  tabsData,
  activeTab,
  setActiveTab,
  setProductData,
}) {
  return (
    <div className="mpTabs-Container">
      <ul className="mpTabList">
        {tabsData.map((tab, i) => (
          <li
            key={tab.id}
            className={`mpTab ${activeTab.id === tab.id && 'active'} ${
              i === 0 && 'firstIndex'
            } ${i === tabsData.length - 1 && 'lastIndex'}`}
            onClick={() => {
              setProductData();
              setActiveTab(tab);
            }}
          >
            {tab.title}
          </li>
        ))}
        <div
          className="mpTabBar"
          style={{
            width: `${100 / tabsData.length}%`,
            left: `calc(calc(100% / ${tabsData.length}) * ${activeTab.id - 1})`,
          }}
        />
      </ul>
    </div>
  );
}
