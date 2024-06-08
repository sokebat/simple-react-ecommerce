
const UserProfile = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Profile</p>
      </div>

      {/* Main Content Wrapper */}
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        {/* Sidebar */}
        <div className="col-span-3">
          <div className="px-4 py-3 shadow flex items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src="../assets/images/avatar.png"
                alt="profile"
                className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="text-gray-600">Hello,</p>
              <h4 className="text-gray-800 font-medium">John Doe</h4>
            </div>
          </div>

          {/* Sidebar Links */}
          <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
            {/* Sidebar Link Groups */}
            {/* Each group starts with a div containing multiple links */}
            {/* Example Group */}
            <div className="space-y-1 pl-8">
              <a
                href="#"
                className="relative text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-address-card"></i>
                </span>
                Manage account
              </a>
              {/* Additional links... */}
            </div>
            {/* Repeat for additional groups */}
          </div>
        </div>

        {/* Info Section */}
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
          <h4 className="text-lg font-medium capitalize mb-4">
            Profile Information
          </h4>
          <form>
            <div className="space-y-4">
              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first">First name</label>
                  <input
                    type="text"
                    name="first"
                    id="first"
                    className="input-box"
                  />
                </div>
                <div>
                  <label htmlFor="last">Last name</label>
                  <input
                    type="text"
                    name="last"
                    id="last"
                    className="input-box"
                  />
                </div>
              </div>
              {/* Additional form fields... */}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
