
type TextBoxProps = {
  type?: string;
  location?: string;
  price?: string;
  setLocation?: (location: string) => void;
  setPrice?: (price: string) => void;
}
export default function TextBox({ type, location, price, setLocation, setPrice }: TextBoxProps) {
  if (type === "price") {
    return (
      <div className="w-full mt-1">
        <div className="relative focus:outline-none">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-lg"></span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full text-lg rounded-md pl-12 pr-2 border-transparent focus:outline-none focus:border-transparent focus:ring-0"
            placeholder="Price Range"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          {/* <div className="absolute inset-y-0 right-0 flex items-center border-none text-lg pr-2">
            <span className="text-lg">KES</span>
          </div> */}
        </div>
      </div>
    );
  }

  if (type === "location") {
    return (
      <div className="w-full">
        <div className="relative focus:outline-none">
          <input
            type="text"
            name="location"
            id="location"
            className="block w-full text-lg rounded-md pl-2 pr-2 border-transparent focus:outline-none focus:border-transparent focus:ring-0"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </div>
      </div>
    );
  }
}
