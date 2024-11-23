<template>
  <div>
    <h1 class="text-2xl font-bold mb-4 text-gray-700">Dashboard Overview</h1>
    <!-- Card Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Card 1: Total Users -->
      <div
        class="bg-white rounded-lg shadow p-10 flex items-center space-x-5 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
      >
        <div class="p-4 bg-blue-100 rounded-full text-blue-500">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="users" clip-path="url(#clip0_426_224)">
              <path
                id="Vector"
                d="M13.5 12C13.5 14.206 15.294 16 17.5 16C19.706 16 21.5 14.206 21.5 12C21.5 9.794 19.706 8 17.5 8C15.294 8 13.5 9.794 13.5 12ZM17.5 10C18.603 10 19.5 10.897 19.5 12C19.5 13.103 18.603 14 17.5 14C16.397 14 15.5 13.103 15.5 12C15.5 10.897 16.397 10 17.5 10ZM12 8C14.206 8 16 6.206 16 4C16 1.794 14.206 0 12 0C9.79404 0 8.00004 1.794 8.00004 4C8.00004 6.206 9.79404 8 12 8ZM12 2C13.103 2 14 2.897 14 4C14 5.103 13.103 6 12 6C10.897 6 10 5.103 10 4C10 2.897 10.897 2 12 2ZM6.50004 16C8.70604 16 10.5 14.206 10.5 12C10.5 9.794 8.70604 8 6.50004 8C4.29404 8 2.50004 9.794 2.50004 12C2.50004 14.206 4.29404 16 6.50004 16ZM6.50004 10C7.60304 10 8.50004 10.897 8.50004 12C8.50004 13.103 7.60304 14 6.50004 14C5.39704 14 4.50004 13.103 4.50004 12C4.50004 10.897 5.39704 10 6.50004 10ZM23.971 22.91C24.021 23.46 23.615 23.946 23.065 23.996C23.035 23.998 23.004 24 22.974 24C22.462 24 22.026 23.609 21.979 23.09C21.869 21.871 21.242 20.735 20.258 19.972C20.233 19.952 20.151 19.961 20.098 20.021L18.257 22.154C18.068 22.374 17.772 22.543 17.5 22.501C17.212 22.501 16.938 22.377 16.748 22.161L14.883 20.035C14.832 19.976 14.75 19.965 14.723 19.987C13.737 20.761 13.132 21.863 13.022 23.091C12.979 23.567 12.609 23.911 12.149 23.972C12.12 23.977 12.095 23.994 12.065 23.997C12.034 23.999 12.004 24.001 11.974 24.001C11.964 24.001 11.956 23.996 11.947 23.996C11.943 23.996 11.94 23.998 11.936 23.997C11.925 23.997 11.916 23.989 11.905 23.988C11.424 23.954 11.023 23.586 10.979 23.091C10.868 21.854 10.257 20.747 9.25904 19.973C9.23004 19.952 9.14904 19.962 9.09904 20.022L7.25804 22.155C7.06804 22.376 6.79004 22.504 6.50104 22.502C6.21304 22.502 5.93904 22.378 5.74904 22.161L3.88404 20.035C3.83204 19.977 3.75004 19.966 3.72404 19.988C2.73704 20.762 2.13204 21.864 2.02204 23.092C1.97304 23.642 1.49404 24.04 0.936044 23.998C0.386044 23.948 -0.0199563 23.462 0.0300437 22.912C0.188044 21.155 1.08504 19.516 2.49004 18.413C3.36604 17.727 4.63804 17.861 5.38704 18.716L6.49404 19.978L7.58404 18.715C8.32904 17.85 9.60304 17.708 10.484 18.393C11.092 18.864 11.599 19.44 12 20.078C12.396 19.449 12.893 18.881 13.489 18.413C14.363 17.728 15.637 17.86 16.386 18.717L17.493 19.978L18.583 18.715C19.328 17.85 20.603 17.71 21.482 18.392C22.903 19.494 23.809 21.141 23.969 22.911L23.971 22.91Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_426_224">
                <rect width="24" height="24" fill="currentColor" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-gray-700">Total Users</h2>
          <p class="text-2xl font-bold text-gray-900">12,345</p>
        </div>
      </div>

      <!-- Card 2: Active Users -->
      <div
        class="bg-white rounded-lg shadow p-10 flex items-center space-x-5 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
      >
        <div class="p-4 bg-green-100 rounded-full text-green-500">
          <svg
            class="transform -rotate-90"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow">
              <path
                id="Vector"
                d="M12.0249 4.94189L17.0833 10.0002L12.0249 15.0586"
                stroke="currentColor"
                stroke-width="2.25"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M2.91665 10H16.9417"
                stroke="currentColor"
                stroke-width="2.25"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-gray-700">Active Users</h2>
          <p class="text-2xl font-bold text-gray-900">9,876</p>
        </div>
      </div>

      <!-- Card 3: Total Sales -->
      <div
        class="bg-white rounded-lg shadow p-10 flex items-center space-x-5 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
      >
        <div class="p-4 bg-yellow-100 rounded-full text-yellow-500">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="True">
              <path
                id="Vector 722"
                d="M6 12.375L9.75 16.125L18 7.875"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-gray-700">Total Sales</h2>
          <p class="text-2xl font-bold text-gray-900">$98,123</p>
        </div>
      </div>

      <!-- Card 4: Revenue -->
      <div
        class="bg-white rounded-lg shadow p-10 flex items-center space-x-5 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
      >
        <div class="p-4 bg-red-100 rounded-full text-red-500">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1593_16270)">
              <path
                d="M16.5 0C12.294 0 9 1.977 9 4.5V7.087C8.517 7.03 8.015 7 7.5 7C3.294 7 0 8.977 0 11.5V19.5C0 22.023 3.294 24 7.5 24C10.907 24 13.716 22.703 14.66 20.869C15.258 20.956 15.874 21 16.5 21C20.706 21 24 19.023 24 16.5V4.5C24 1.977 20.706 0 16.5 0ZM22 12.5C22 13.68 19.648 15 16.5 15C15.988 15 15.486 14.965 15 14.897V12.913C15.49 12.97 15.992 13 16.5 13C18.694 13 20.64 12.462 22 11.589V12.5ZM2 14.589C3.36 15.462 5.306 16 7.5 16C9.694 16 11.64 15.462 13 14.589V15.5C13 16.68 10.648 18 7.5 18C4.352 18 2 16.68 2 15.5V14.589ZM22 8.5C22 9.68 19.648 11 16.5 11C15.965 11 15.44 10.962 14.934 10.888C14.741 10.001 14.134 9.204 13.228 8.565C14.212 8.845 15.32 9 16.5 9C18.694 9 20.64 8.462 22 7.589V8.5ZM16.5 2C19.648 2 22 3.32 22 4.5C22 5.68 19.648 7 16.5 7C13.352 7 11 5.68 11 4.5C11 3.32 13.352 2 16.5 2ZM7.5 9C10.648 9 13 10.32 13 11.5C13 12.68 10.648 14 7.5 14C4.352 14 2 12.68 2 11.5C2 10.32 4.352 9 7.5 9ZM7.5 22C4.352 22 2 20.68 2 19.5V18.589C3.36 19.462 5.306 20 7.5 20C9.694 20 11.64 19.462 13 18.589V19.5C13 20.68 10.648 22 7.5 22ZM16.5 19C15.988 19 15.486 18.965 15 18.897V16.913C15.49 16.97 15.992 17 16.5 17C18.694 17 20.64 16.462 22 15.589V16.5C22 17.68 19.648 19 16.5 19Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_1593_16270">
                <rect width="24" height="24" fill="whcurrentColorite" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-gray-700">Revenue</h2>
          <p class="text-2xl font-bold text-gray-900">$45,678</p>
        </div>
      </div>
    </div>
  </div>
</template>
