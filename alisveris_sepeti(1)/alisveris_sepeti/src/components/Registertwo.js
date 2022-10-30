<div>
<form
  className="max-w-xl mx-auto grid gap-y-4 py-4"
  onSubmit={handleSubmit}
>
  <label
    htmlFor="email"
    className="block text-sm font-medium text-gray-700"
  >
    Email
  </label>

  <div class="relative mt-1 rounded-md shadow-sm">
    <div className="mt-1">
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="you@example.com"
      />
    </div>
  </div>

  <label
    htmlFor="email"
    className="block text-sm font-medium text-gray-700"
  >
    Password
  </label>

  <div class="relative mt-1 rounded-md shadow-sm">
    <div className="mt-1">
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="****"
      />
    </div>
  </div>

  <br />
  <div>
    <button
      className="inline-block disabled:opacity-20 cursor-pointer px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      type="submit"
      disabled={!email || !password}
    >
      Register
    </button>
  </div>
</form>
</div>