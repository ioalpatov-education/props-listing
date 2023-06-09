import EtsyCard from "./EtsyCard";

const Listing = ({ items }) => {
  const etsyItems = items
    .filter((item) => item.state !== "removed")
    .map((item) => {
      return <EtsyCard key={item.listing_id} item={item} />;
    });
  return <div className="item-list">{etsyItems}</div>;
};

Listing.defaultProps = {
  items: [],
};

export default Listing;
