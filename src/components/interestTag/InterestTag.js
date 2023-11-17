import React from 'react';
import Interest from './Interests';
// import './style.scss';

export default function InterestTag({ userData }) {
  const temp = {
    user_interest: '관심사가 없습니다.',
  };

  const defaultInterestsArray = temp.user_interest.split(', ');

  const interestsArray = temp.user_interest.split(', ');

  return (
    <div className="interestBox">
      {userData?.userData.user_interest
        ? userData.user_interest
            .split(',')
            .map((interest, index) => (
              <Interest key={index} kind={interest.trim()} />
            ))
        : // {userData?.user_interest
          //   ? userData.user_interest.map((interest, index) => (
          //       <Interest key={index} kind={interest} />
          //     ))
          defaultInterestsArray.map((interest, index) => (
            <Interest key={index} kind={interest} />
          ))}
    </div>
  );
}
