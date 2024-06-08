const Sidebar = () => {
  return (
    <section className="hidden w-[300px] flex-shrink-0 px-4 lg:block">
      <div className="flex border-b pb-5">
        <div className="w-full">
          <p className="mb-3 font-medium">CATEGORIES</p>

          <div className="flex w-full justify-between">
            <div className="flex justify-center items-center">
              <input type="checkbox" />
              <p className="ml-4">Bedroom</p>
            </div>
            <div>
              <p className="text-gray-500">(12)</p>
            </div>
          </div>

          <div className="flex w-full justify-between">
            <div className="flex justify-center items-center">
              <input type="checkbox" />
              <p className="ml-4">Sofa</p>
            </div>
            <div>
              <p className="text-gray-500">(15)</p>
            </div>
          </div>

          <div className="flex w-full justify-between">
            <div className="flex justify-center items-center">
              <input type="checkbox" />
              <p className="ml-4">Office</p>
            </div>
            <div>
              <p className="text-gray-500">(14)</p>
            </div>
          </div>

          <div className="flex w-full justify-between">
            <div className="flex justify-center items-center">
              <input type="checkbox" />
              <p className="ml-4">Outdoor</p>
            </div>
            <div>
              <p className="text-gray-500">(124)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-b py-5">
        <div className="w-full">
          <p className="mb-3 font-medium">BRANDS</p>

          <div className="flex w-full justify-between">
            <div className="flex justify-center items-center">
              <input type="checkbox" />
              <p className="ml-4">APEX</p>
            </div>
            <div>
              <p className="text-gray-500">(12)</p>
            </div>
          </div>

          <div className="flex w-full justify-between">
            <div className="flex justify-center items-center">
              <input type="checkbox" />
              <p className="ml-4">Call of SOFA</p>
            </div>
            <div>
              <p className="text-gray-500">(15)</p>
            </div>
          </div>

          <div className="flex w-full justify-between">
            <div className="flex justify-center items-center">
              <input type="checkbox" />
              <p className="ml-4">Puff B&G</p>
            </div>
            <div>
              <p className="text-gray-500">(14)</p>
            </div>
          </div>

          <div className="flex w-full justify-between">
            <div className="flex justify-center items-center">
              <input type="checkbox" />
              <p className="ml-4">Fornighte</p>
            </div>
            <div>
              <p className="text-gray-500">(124)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-b py-5">
        <div className="w-full">
          <p className="mb-3 font-medium">PRICE</p>

          <div className="flex w-full">
            <div className="flex justify-between">
              <input
                x-mask="99999"
                min="50"
                type="number"
                className="h-8 w-[90px] border pl-2"
                placeholder="50"
              />
              <span className="px-3">-</span>
              <input
                x-mask="999999"
                type="number"
                max="999999"
                className="h-8 w-[90px] border pl-2"
                placeholder="99999"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-b py-5">
        <div className="w-full">
          <p className="mb-3 font-medium">SIZE</p>

          <div className="flex gap-2">
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
              XS
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
              S
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
              M
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
              L
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
              XL
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-5">
        <div className="w-full">
          <p className="mb-3 font-medium">COLOR</p>

          <div className="flex gap-2">
            <div className="h-8 w-8 cursor-pointer border border-white bg-gray-600 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"></div>
            <div className="h-8 w-8 cursor-pointer border border-white bg-violet-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"></div>
            <div className="h-8 w-8 cursor-pointer border border-white bg-red-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
