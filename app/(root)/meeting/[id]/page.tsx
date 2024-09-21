import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  return <div>Meeting Root : # {params.id} </div>;
};

export default Meeting;
