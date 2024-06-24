import Link from "next/link";
import React from "react";

export type AlgoTypes = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const Card = ({
  title,
  description,
  image,
  link,
}: AlgoTypes): React.JSX.Element => {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <img src={image} alt="algoType" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={link} className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
