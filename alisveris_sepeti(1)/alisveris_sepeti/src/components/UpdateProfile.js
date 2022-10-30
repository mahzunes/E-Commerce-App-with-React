import React, { useState } from "react";
import "../App.css";
import { update } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../store/auth";

function UpdateProfile() {
  const [displayName, setDisplayName] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.prevenetDefault();
    await update({
      displayName,
    });

    dispatch(login(auth.currentUser));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto grid gap-y-4 py-4"
      >
        <h1 className="text-xl font-bold">Update Profile</h1>
        <hr />
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Display Name
        </label>

        <div class="relative mt-1 rounded-md shadow-sm">
          <div className="mt-1">
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="John Wick"
            />
          </div>
        </div>
        <div>
          <button
            className="inline-block disabled:opacity-20 cursor-pointer px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;
