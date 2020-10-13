const icons = {
  caretUp: {
    path: `M48.048 352h223.895c42.638 0 64.151-51.731 33.941-81.941l-111.943-112c-18.745-18.745-49.137-18.746-67.882 0l-111.952 112C-16.042 300.208 5.325 352 48.048 352zM160 192l112 112H48l112-112z`,
    viewBox: '0 0 320 512'
  },
  arrowAltDown: {
    path: `M400 208h-73.8V80c0-26.5-21.5-48-48-48H169.8c-26.5 0-48 21.5-48 48v128H48.1c-42.6 0-64.2 51.7-33.9 81.9l175.9 176c18.7 18.7 49.1 18.7 67.9 0l176-176c30-30.1 8.7-81.9-34-81.9zM224 432L48 256h121.8V80h108.3v176H400L224 432z`,
    viewBox: `0 0 448 512`
  },
  book: {
    path: `M561.91 0C549.44 0 406.51 6.49 320 56.89 233.49 6.49 90.56 0 78.09 0 35.03 0 0 34.34 0 76.55v313.72c0 40.73 32.47 74.3 73.92 76.41 36.78 1.91 128.81 9.5 187.73 38.69 8.19 4.05 17.25 6.29 26.34 6.58v.05h64.02v-.05c9.09-.29 18.15-2.53 26.34-6.58 58.92-29.19 150.95-36.78 187.73-38.69C607.53 464.57 640 431 640 390.27V76.55C640 34.34 604.97 0 561.91 0zM296 438.15c0 11.09-10.96 18.91-21.33 14.96-64.53-24.54-153.96-32.07-198.31-34.38-15.9-.8-28.36-13.3-28.36-28.46V76.55C48 60.81 61.5 48 78.06 48c19.93.1 126.55 7.81 198.53 40.49 11.63 5.28 19.27 16.66 19.28 29.44L296 224v214.15zm296-47.88c0 15.16-12.46 27.66-28.36 28.47-44.35 2.3-133.78 9.83-198.31 34.38-10.37 3.94-21.33-3.87-21.33-14.96V224l.14-106.08c.02-12.78 7.65-24.15 19.28-29.44C435.4 55.81 542.02 48.1 561.94 48 578.5 48 592 60.81 592 76.55v313.72z`,
    viewBox: `0 0 640 512`
  },
  heart: {
    path: `M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z`,
    viewBox: '0 0 512 512'
  },
  gallina: {
    path: `M89.823 3.191 C 89.211 5.119,83.524 12.242,77.186 19.020 C 70.847 25.798,65.243 33.256,64.731 35.594 C 64.219 37.931,62.046 43.206,59.901 47.315 C 57.190 52.508,55.731 58.369,55.112 66.542 C 54.227 78.247,54.198 78.311,48.353 81.293 C 41.806 84.633,36.349 90.785,34.935 96.420 C 33.606 101.713,34.144 101.871,48.358 100.372 C 66.247 98.485,71.284 106.181,56.361 112.601 C 42.863 118.408,37.986 130.218,45.274 139.453 C 49.575 144.903,51.544 144.903,51.633 139.453 C 51.749 132.397,54.855 127.447,67.289 114.505 L 79.110 102.201 81.892 105.890 C 85.166 110.230,84.723 110.949,70.580 124.219 C 57.116 136.854,57.627 150.603,71.718 154.825 C 87.512 159.557,96.886 150.443,100.788 126.563 C 102.269 117.496,106.184 109.884,114.022 100.828 C 120.549 93.286,121.320 90.212,118.847 81.589 C 117.770 77.832,118.003 74.994,119.726 70.870 C 122.759 63.610,121.796 61.496,114.539 59.481 C 102.259 56.071,88.363 58.114,81.781 64.298 L 78.125 67.732 78.125 64.455 C 78.125 55.205,95.021 45.729,106.783 48.382 C 124.979 52.485,140.696 71.535,166.389 120.626 L 180.047 146.721 200.570 145.815 C 223.755 144.790,237.776 146.433,257.978 152.539 L 271.424 156.604 285.656 150.976 C 300.503 145.105,336.943 134.860,338.267 136.184 C 338.687 136.604,339.214 140.332,339.437 144.470 L 339.844 151.992 314.874 161.178 C 289.026 170.687,284.852 173.044,286.456 177.223 C 287.927 181.057,293.300 180.239,317.189 172.547 C 342.057 164.540,340.855 164.557,339.610 172.229 C 338.705 177.811,338.480 177.963,322.862 183.563 C 304.269 190.230,300.000 192.723,300.000 196.911 C 300.000 201.142,305.441 200.932,320.995 196.101 C 335.559 191.578,335.125 191.441,331.225 199.324 C 326.552 208.769,315.922 219.617,304.896 226.193 L 294.948 232.125 290.052 247.074 C 282.848 269.070,273.698 280.469,255.224 290.463 C 248.835 293.919,247.564 295.392,246.776 300.256 C 245.770 306.460,243.082 311.192,234.711 321.484 L 229.311 328.125 214.043 328.125 L 198.774 328.125 189.991 318.638 C 185.161 313.421,178.375 303.990,174.913 297.681 C 167.512 284.196,167.106 283.804,156.993 280.390 C 119.930 267.875,85.937 217.689,85.938 175.487 L 85.938 165.625 80.078 165.556 C 76.855 165.519,71.479 164.511,68.130 163.318 L 62.041 161.148 62.983 177.058 C 66.133 230.264,98.711 280.783,141.941 299.498 C 150.041 303.004,151.492 304.452,159.267 316.774 C 163.934 324.170,170.799 333.402,174.523 337.288 C 181.824 344.908,181.993 348.759,175.482 359.120 C 172.548 363.790,172.241 363.675,185.509 362.852 L 196.799 362.152 197.792 356.857 L 198.785 351.563 207.986 351.563 C 218.246 351.563,217.993 351.323,215.059 358.253 C 211.057 367.709,207.975 369.131,189.067 370.246 C 175.360 371.054,171.032 371.894,167.680 374.397 C 162.153 378.523,160.926 382.026,165.418 380.851 C 167.253 380.372,168.360 380.616,167.879 381.396 C 167.397 382.175,165.638 382.813,163.970 382.813 C 160.461 382.813,160.444 382.874,162.461 388.180 C 163.299 390.384,164.937 392.188,166.101 392.188 C 167.290 392.187,168.163 393.727,168.093 395.703 C 167.851 402.555,211.757 397.226,220.813 389.304 C 222.532 387.801,225.770 386.998,228.996 387.276 C 236.171 387.894,239.103 382.386,236.068 373.992 C 232.306 363.589,234.889 355.843,246.245 343.468 C 257.365 331.351,264.038 322.091,267.016 314.645 C 268.163 311.776,271.990 307.789,276.282 304.990 C 291.811 294.862,304.847 277.266,311.180 257.883 C 314.284 248.383,315.178 247.227,323.757 241.620 C 349.000 225.122,362.532 196.650,362.847 159.375 C 363.020 138.823,359.898 113.317,356.906 110.833 C 353.333 107.868,315.501 115.992,286.353 125.984 L 270.363 131.465 257.447 128.237 C 240.022 123.881,222.209 121.719,206.486 122.052 L 193.440 122.328 182.596 101.480 C 164.965 67.583,150.229 47.602,134.416 36.147 C 129.068 32.273,128.708 31.579,130.657 28.914 C 133.248 25.369,133.454 16.368,131.097 9.608 C 128.966 3.494,129.433 3.422,121.534 11.087 C 115.060 17.371,114.922 17.420,113.957 13.811 C 110.163 -0.375,106.443 -2.309,101.671 7.422 L 98.031 14.844 95.850 8.631 C 92.985 0.471,91.198 -1.142,89.823 3.191 M103.101 84.574 C 103.114 85.973,101.939 88.082,100.489 89.262 C 98.168 91.150,97.981 91.064,98.926 88.544 C 99.517 86.970,100.011 83.806,100.024 81.513 C 100.043 78.247,100.376 77.852,101.563 79.688 C 102.396 80.977,103.088 83.176,103.101 84.574 M316.406 314.316 C 301.296 322.636,291.659 344.553,295.074 362.833 C 303.127 405.938,363.409 402.952,365.389 359.350 C 366.759 329.190,337.779 302.547,316.406 314.316 M337.041 329.629 C 348.714 336.746,355.064 357.447,349.108 368.965 C 343.591 379.632,326.957 382.199,317.099 373.904 C 297.467 357.386,315.802 316.679,337.041 329.629 M320.426 336.929 C 317.011 341.271,315.549 357.447,318.750 355.469 C 319.609 354.938,320.313 353.489,320.313 352.250 C 320.313 351.011,323.282 347.115,326.912 343.592 C 333.215 337.475,333.377 337.089,330.519 335.000 C 326.226 331.860,324.093 332.268,320.426 336.929 M131.211 370.703 C 125.134 374.821,123.548 378.105,127.604 378.173 C 130.298 378.217,130.306 378.315,127.734 379.813 C 124.435 381.734,124.264 384.333,127.175 388.314 C 129.105 390.954,129.675 391.035,132.253 389.030 C 135.042 386.862,135.049 386.899,132.443 389.970 C 127.121 396.243,136.898 399.053,150.189 395.071 C 156.041 393.318,156.184 393.104,155.282 387.467 C 154.299 381.315,156.012 376.624,161.405 370.703 L 164.607 367.188 150.503 367.188 C 138.456 367.188,135.643 367.700,131.211 370.703 `,
    viewBox: `0 0 400 400`
  }
}
export const getIconViewBox = (name => {
  return icons[name].viewBox
})
export const getIconPath = (name => {
  return icons[name].path
})