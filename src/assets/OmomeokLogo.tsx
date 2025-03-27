interface ILogoType {
  width?: number;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
}

export const OmomeokLogo = ({ width = 161, onClick }: ILogoType) => {
  return (
    <svg
      onClick={onClick}
      width={width}
      height="40"
      viewBox="0 0 171 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_617_505)">
        <mask
          id="mask0_617_505"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="34"
          height="40"
        >
          <path d="M34 0H0V40H34V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_617_505)">
          <path
            d="M0.165192 24.9298C1.32366 33.5024 11.5166 38.913 20.2903 38.9189L17.5126 29.4882C13.7 29.4882 10.607 26.4466 10.5978 22.6888L0.165192 24.9298Z"
            fill="url(#paint0_linear_617_505)"
          />
          <path
            d="M17.5554 17.0614L17.1154 16.9722C17.381 16.9752 26.8718 9.64926 27.0742 9.47971C27.2767 9.31017 27.0345 16.3976 27.0742 16.1388C27.5523 12.7669 30.4797 10.2589 33.9339 10.2618L31.6547 0.00012207C23.397 1.06363 17.0412 7.71187 16.4544 15.9002C16.4437 16.049 16.4643 16.1983 16.5149 16.3388C16.5655 16.4795 16.6449 16.6082 16.7482 16.7172C16.8515 16.8262 16.9765 16.913 17.1154 16.9722C17.2542 17.0313 17.404 17.0617 17.5554 17.0614ZM32.1228 17.3219L20.0108 27.5836C19.8936 27.6854 19.7997 27.8106 19.7355 27.951C19.6711 28.0913 19.6378 28.2436 19.6378 28.3975C19.6378 28.5516 19.6711 28.7038 19.7355 28.8441C19.7997 28.9844 19.8936 29.1097 20.0108 29.2116L32.1228 39.4895C32.2828 39.6227 32.4781 39.7081 32.6856 39.7358C32.8932 39.7634 33.1046 39.7321 33.2948 39.6455C33.485 39.5589 33.6461 39.4206 33.7593 39.2469C33.8726 39.0732 33.9332 38.8712 33.934 38.6647V18.1468C33.9332 17.9403 33.8726 17.7383 33.7594 17.5645C33.6462 17.3908 33.485 17.2525 33.2948 17.1659C33.1046 17.0793 32.8934 17.048 32.6857 17.0757C32.4781 17.1032 32.2828 17.1887 32.1228 17.3219Z"
            fill="#2684FF"
          />
          <path
            d="M0 22.5258V22.6887H10.5979C10.6069 18.9307 15.9294 4.32434 19.7419 4.32434C11.1036 5.4338 0.105153 13.9398 0 22.5258Z"
            fill="url(#paint1_linear_617_505)"
          />
        </g>
        <path
          d="M63.64 20.908C63.64 22.236 63.472 23.444 63.136 24.532C62.816 25.604 62.32 26.532 61.648 27.316C60.992 28.1 60.152 28.7 59.128 29.116C58.104 29.532 56.888 29.74 55.48 29.74C54.088 29.74 52.872 29.532 51.832 29.116C50.808 28.7 49.96 28.1 49.288 27.316C48.632 26.532 48.136 25.604 47.8 24.532C47.48 23.444 47.32 22.228 47.32 20.884C47.32 19.108 47.608 17.564 48.184 16.252C48.776 14.94 49.672 13.924 50.872 13.204C52.088 12.468 53.632 12.1 55.504 12.1C57.36 12.1 58.888 12.468 60.088 13.204C61.304 13.924 62.2 14.948 62.776 16.276C63.352 17.588 63.64 19.132 63.64 20.908ZM51.184 20.908C51.184 22.092 51.328 23.116 51.616 23.98C51.92 24.844 52.392 25.508 53.032 25.972C53.672 26.42 54.488 26.644 55.48 26.644C56.504 26.644 57.328 26.42 57.952 25.972C58.592 25.508 59.056 24.844 59.344 23.98C59.632 23.116 59.776 22.092 59.776 20.908C59.776 19.116 59.448 17.708 58.792 16.684C58.136 15.66 57.04 15.148 55.504 15.148C54.496 15.148 53.672 15.38 53.032 15.844C52.392 16.308 51.92 16.972 51.616 17.836C51.328 18.684 51.184 19.708 51.184 20.908ZM82.1204 16.156C83.6244 16.156 84.7604 16.532 85.5284 17.284C86.2964 18.036 86.6804 19.26 86.6804 20.956V29.5H83.0804V21.868C83.0804 20.86 82.9124 20.14 82.5764 19.708C82.2404 19.26 81.7364 19.036 81.0644 19.036C80.1364 19.036 79.4804 19.38 79.0964 20.068C78.7124 20.74 78.5204 21.7 78.5204 22.948V29.5H74.8964V21.868C74.8964 21.212 74.8244 20.676 74.6804 20.26C74.5364 19.844 74.3204 19.54 74.0324 19.348C73.7444 19.14 73.3764 19.036 72.9284 19.036C72.2724 19.036 71.7524 19.204 71.3684 19.54C71.0004 19.876 70.7364 20.364 70.5764 21.004C70.4324 21.644 70.3604 22.428 70.3604 23.356V29.5H66.7364V16.396H69.5204L70.0484 18.076H70.1684C70.4244 17.676 70.7364 17.332 71.1044 17.044C71.4884 16.756 71.9284 16.54 72.4244 16.396C72.9204 16.236 73.4724 16.156 74.0804 16.156C75.0564 16.156 75.8644 16.324 76.5044 16.66C77.1604 16.996 77.6724 17.484 78.0404 18.124H78.1604C78.5924 17.468 79.1524 16.98 79.8404 16.66C80.5284 16.324 81.2884 16.156 82.1204 16.156ZM102.223 22.924C102.223 24.012 102.071 24.98 101.767 25.828C101.479 26.676 101.055 27.388 100.495 27.964C99.951 28.54 99.287 28.98 98.503 29.284C97.719 29.588 96.831 29.74 95.839 29.74C94.911 29.74 94.063 29.588 93.295 29.284C92.527 28.98 91.863 28.54 91.303 27.964C90.743 27.388 90.303 26.676 89.983 25.828C89.663 24.98 89.503 24.012 89.503 22.924C89.503 21.468 89.759 20.236 90.271 19.228C90.783 18.22 91.519 17.46 92.479 16.948C93.439 16.42 94.583 16.156 95.911 16.156C97.143 16.156 98.231 16.42 99.175 16.948C100.119 17.46 100.863 18.22 101.407 19.228C101.951 20.236 102.223 21.468 102.223 22.924ZM93.199 22.924C93.199 23.772 93.287 24.5 93.463 25.108C93.655 25.716 93.943 26.18 94.327 26.5C94.727 26.82 95.247 26.98 95.887 26.98C96.511 26.98 97.015 26.82 97.399 26.5C97.799 26.18 98.087 25.716 98.263 25.108C98.439 24.5 98.527 23.772 98.527 22.924C98.527 22.06 98.431 21.332 98.239 20.74C98.063 20.148 97.783 19.7 97.399 19.396C97.015 19.076 96.503 18.916 95.863 18.916C94.935 18.916 94.255 19.26 93.823 19.948C93.407 20.636 93.199 21.628 93.199 22.924ZM120.511 16.156C122.015 16.156 123.151 16.532 123.919 17.284C124.687 18.036 125.071 19.26 125.071 20.956V29.5H121.471V21.868C121.471 20.86 121.303 20.14 120.967 19.708C120.631 19.26 120.127 19.036 119.455 19.036C118.527 19.036 117.871 19.38 117.487 20.068C117.103 20.74 116.911 21.7 116.911 22.948V29.5H113.287V21.868C113.287 21.212 113.215 20.676 113.071 20.26C112.927 19.844 112.711 19.54 112.423 19.348C112.135 19.14 111.767 19.036 111.319 19.036C110.663 19.036 110.143 19.204 109.759 19.54C109.391 19.876 109.127 20.364 108.967 21.004C108.823 21.644 108.751 22.428 108.751 23.356V29.5H105.127V16.396H107.911L108.439 18.076H108.559C108.815 17.676 109.127 17.332 109.495 17.044C109.879 16.756 110.319 16.54 110.815 16.396C111.311 16.236 111.863 16.156 112.471 16.156C113.447 16.156 114.255 16.324 114.895 16.66C115.551 16.996 116.063 17.484 116.431 18.124H116.551C116.983 17.468 117.543 16.98 118.231 16.66C118.919 16.324 119.679 16.156 120.511 16.156ZM134.11 16.156C135.326 16.156 136.374 16.388 137.254 16.852C138.134 17.3 138.806 17.972 139.27 18.868C139.75 19.748 139.99 20.828 139.99 22.108V23.86H131.566C131.598 24.852 131.902 25.636 132.478 26.212C133.054 26.772 133.878 27.052 134.95 27.052C135.766 27.052 136.51 26.972 137.182 26.812C137.854 26.652 138.542 26.412 139.246 26.092V28.804C138.606 29.124 137.926 29.356 137.206 29.5C136.502 29.66 135.622 29.74 134.566 29.74C133.27 29.74 132.118 29.5 131.11 29.02C130.118 28.54 129.334 27.804 128.758 26.812C128.182 25.804 127.894 24.548 127.894 23.044C127.894 21.508 128.15 20.236 128.662 19.228C129.19 18.204 129.918 17.436 130.846 16.924C131.79 16.412 132.878 16.156 134.11 16.156ZM134.206 18.724C133.486 18.724 132.902 18.956 132.454 19.42C132.006 19.868 131.742 20.54 131.662 21.436H136.606C136.606 20.908 136.518 20.444 136.342 20.044C136.166 19.644 135.894 19.324 135.526 19.084C135.174 18.844 134.734 18.724 134.206 18.724ZM154.934 22.924C154.934 24.012 154.782 24.98 154.478 25.828C154.19 26.676 153.766 27.388 153.206 27.964C152.662 28.54 151.998 28.98 151.214 29.284C150.43 29.588 149.542 29.74 148.55 29.74C147.622 29.74 146.774 29.588 146.006 29.284C145.238 28.98 144.574 28.54 144.014 27.964C143.454 27.388 143.014 26.676 142.694 25.828C142.374 24.98 142.214 24.012 142.214 22.924C142.214 21.468 142.47 20.236 142.982 19.228C143.494 18.22 144.23 17.46 145.19 16.948C146.15 16.42 147.294 16.156 148.622 16.156C149.854 16.156 150.942 16.42 151.886 16.948C152.83 17.46 153.574 18.22 154.118 19.228C154.662 20.236 154.934 21.468 154.934 22.924ZM145.91 22.924C145.91 23.772 145.998 24.5 146.174 25.108C146.366 25.716 146.654 26.18 147.038 26.5C147.438 26.82 147.958 26.98 148.598 26.98C149.222 26.98 149.726 26.82 150.11 26.5C150.51 26.18 150.798 25.716 150.974 25.108C151.15 24.5 151.238 23.772 151.238 22.924C151.238 22.06 151.142 21.332 150.95 20.74C150.774 20.148 150.494 19.7 150.11 19.396C149.726 19.076 149.214 18.916 148.574 18.916C147.646 18.916 146.966 19.26 146.534 19.948C146.118 20.636 145.91 21.628 145.91 22.924ZM161.534 19.42C161.534 19.916 161.51 20.412 161.462 20.908C161.43 21.388 161.39 21.876 161.342 22.372H161.39C161.55 22.148 161.71 21.924 161.87 21.7C162.046 21.476 162.222 21.252 162.398 21.028C162.574 20.804 162.758 20.588 162.95 20.38L166.622 16.396H170.654L165.446 22.084L170.966 29.5H166.838L163.07 24.196L161.534 25.42V29.5H157.958V11.26H161.534V19.42Z"
          fill="url(#paint2_linear_617_505)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_617_505"
          x1="867.813"
          y1="-1670.42"
          x2="867.813"
          y2="680.941"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0052CC" />
          <stop offset="1" stop-color="#2684FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_617_505"
          x1="875.91"
          y1="18.6452"
          x2="875.91"
          y2="2369.99"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0052CC" />
          <stop offset="1" stop-color="#2684FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_617_505"
          x1="46"
          y1="20"
          x2="171"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#232F4F" />
          <stop offset="1" stop-color="#2E4469" />
        </linearGradient>
        <clipPath id="clip0_617_505">
          <rect width="171" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
