import React from "react";

const Typography = (props) => {
  const { type, className, label } = props;
  return (
    <>
      {
        {
          h1: (
            <h1 className={`${className} text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl`}>{label}</h1>
          ),
          h2: <h2 className={`${className} text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl`}>{label}</h2>,
          h3: <h3 className={`${className} text-2xl font-extrabold tracking-tight sm:text-3xl`}>{label}</h3>,
          h4: <h4 className={`${className} text-lg leading-6 font-medium`}>{label}</h4>,
          p: <p className={`${className} text-base`}>{label}</p>,
        }[type]
      }
    </>
  );
};

export default Typography;
