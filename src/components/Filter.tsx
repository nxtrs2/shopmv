const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="all">All</option>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="accessories">Accessories</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text=xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text=xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="all">All</option>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="accessories">Accessories</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="all">All</option>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="accessories">Accessories</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="all">All</option>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div className="">
        <select
          name="sortby"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Sort By</option>

          <option value="all">Price (low to high)</option>
          <option value="tops">Price (hig to low)</option>
          <option value="bottoms">Newest</option>
          <option value="accessories">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
