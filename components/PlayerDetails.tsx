import React from 'react';

interface PlayerDetailProps {
  title: string;
}

const PlayerDetails: React.FC<PlayerDetailProps> = (props) => {
  return (
    <div className="flex p-5">
      <h3 className="text-white text-4xl">{props.title}</h3>
    </div>
  );
};

export default PlayerDetails;
