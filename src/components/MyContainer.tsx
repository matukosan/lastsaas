import React from "react";

const MyContainer = (props: any) => {

  return (
    <main className={'m-4'}>
      {props.children}
    </main>
  );
};

export default MyContainer;
