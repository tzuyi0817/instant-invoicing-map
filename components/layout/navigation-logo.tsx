import { motion } from 'framer-motion';

const blackPath = (delay: number) => ({
  open: { fill: 'white', transition: { delay: 0.1 } },
  closed: { fill: '#302C2C', transition: { delay } },
});

const changeBlack = (originColor: string) => ({
  open: { fill: 'black', transition: { delay: 0.1 } },
  closed: { fill: originColor, transition: { delay: 0.8 } },
});

function NavigationLogo() {
  return (
    <svg
      viewBox="0 0 633 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[285px]"
    >
      <motion.path
        d="M105.324 36.1838H118.619V45.1189H86L102.579 27.0871C104.947 24.5034 107.208 20.8433 107.208 17.1292C107.208 14.5456 105.377 11.8542 102.579 11.8542C99.7257 11.8542 98.1648 14.0611 98.1648 16.8063C98.1648 17.3445 98.2186 17.9366 98.3262 18.5287H86.6997C87.0227 9.21675 92.9436 2.91907 102.525 2.91907C111.029 2.91907 118.188 8.51701 118.188 17.3445C118.188 23.1578 115.766 26.5488 111.621 30.3167L105.324 36.1838Z"
        variants={blackPath(0.8)}
      />
      <motion.path
        d="M19.3237 36.1838H32.6188V45.1189H0L16.5785 27.0871C18.9469 24.5034 21.2076 20.8433 21.2076 17.1292C21.2076 14.5456 19.3775 11.8542 16.5785 11.8542C13.7257 11.8542 12.1648 14.0611 12.1648 16.8063C12.1648 17.3445 12.2186 17.9366 12.3262 18.5287H0.699743C1.0227 9.21675 6.9436 2.91907 16.5247 2.91907C25.0293 2.91907 32.1882 8.51701 32.1882 17.3445C32.1882 23.1578 29.766 26.5488 25.6214 30.3167L19.3237 36.1838Z"
        variants={blackPath(0.8)}
      />
      <motion.circle
        cx="59.5"
        cy="24.4191"
        r="22.5"
        variants={changeBlack('#D9D9D9')}
      />
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M143 27.466V37.5969C140.438 37.0375 138.138 35.7766 136.312 34.0255L143 27.466ZM149 21.5814L149.123 21.4609L149 21.3356V10.2412C155.29 11.6146 160 17.2168 160 23.9191C160 30.6213 155.29 36.2235 149 37.5969L149 21.5814ZM143 19.0619L132.928 28.9406C132.328 27.3819 132 25.6888 132 23.9191C132 17.2168 136.71 11.6146 143 10.2412V19.0619ZM146 46.9191C158.703 46.9191 169 36.6216 169 23.9191C169 11.2165 158.703 0.919067 146 0.919067C133.297 0.919067 123 11.2165 123 23.9191C123 36.6216 133.297 46.9191 146 46.9191Z"
        fill="#DD4D2A"
        variants={changeBlack('#DD4D2A')}
      />
      <motion.path
        d="M580.66 2.71997H632.5V45.9391H621.652V45.3681H591.508V45.9391H580.66V2.71997ZM591.508 9.4569V37.8319H621.652V9.4569H591.508ZM610.405 16.4793V17.4499H620.853V21.5605H592.364V17.4499H602.755V16.4793H593.049V10.2562H620.111V16.4793H610.405ZM612.518 13.1108H600.642V14.0814H612.518V13.1108ZM620.682 36.8613H592.478V22.474H620.682V36.8613ZM614.687 25.8425H598.53V33.0932H614.687V25.8425ZM613.659 32.1227H599.5V26.813H613.659V32.1227ZM608.121 28.6971H605.096V30.0673H608.121V28.6971Z"
        variants={blackPath(0.7)}
      />
      <motion.path
        d="M562.105 34.6918C562.904 34.6918 563.456 34.4064 563.761 33.8355C564.065 33.2265 564.218 32.3511 564.218 31.2092C564.218 30.6763 564.199 30.1815 564.161 29.7248C564.122 29.23 564.084 28.8113 564.046 28.4688C567.967 29.8009 571.849 30.6192 575.693 30.9237C575.693 34.768 575.389 37.6797 574.78 39.6589C574.171 41.6381 573.067 43.0654 571.468 43.9408C569.908 44.7782 567.529 45.273 564.332 45.4253C560.297 45.5775 557.386 45.6536 555.597 45.6536C553.465 45.6536 551.391 45.5965 549.374 45.4823C546.062 45.3301 543.626 44.9685 542.066 44.3976C540.543 43.8267 539.554 43.0274 539.097 41.9997C538.678 40.934 538.469 39.3925 538.469 37.3752V19.6194L537.327 19.7336V22.1886H534.929V28.9826L537.441 28.2404C537.099 31.2853 536.927 34.9963 536.927 39.3734C535.329 40.0966 533.14 40.8578 530.362 41.6571C527.583 42.4184 525.128 43.0083 522.997 43.427C522.73 39.4305 522.255 35.5102 521.569 31.6659C522.369 31.5898 523.225 31.4756 524.139 31.3234V22.1886H521.912V11.5694H524.139V3.40511H534.929V11.5694H536.699V9.39983L538.469 9.28565V3.34802H550.173V8.37216L551.543 8.25798V1.80652H562.391V7.45868L576.207 6.43102C576.207 11.1507 576.055 15.071 575.75 18.1921C575.446 21.2751 574.799 23.7681 573.809 25.6712C572.858 27.5362 571.411 28.4688 569.47 28.4688C567.833 28.4688 566.102 28.2594 564.275 27.8407C563.932 26.0138 563.628 24.6055 563.361 23.6159C563.133 22.6263 562.809 21.7699 562.391 21.0467V32.4081H551.543V18.5346L550.173 18.6488V32.922C550.173 33.6832 550.42 34.178 550.915 34.4064C551.41 34.5967 552.152 34.6918 553.142 34.6918H562.105ZM562.391 17.5641V20.4187C563.19 20.3426 563.78 20.1142 564.161 19.7336C564.541 19.3149 564.75 18.5346 564.789 17.3928L562.391 17.5641Z"
        variants={blackPath(0.7)}
      />
      <motion.path
        d="M467.103 10.9985H479.092V10.1992H465.847V3.00549H518.829V10.1992H505.583V10.9985H517.573V21.1609H467.103V10.9985ZM491.253 10.9985H493.423V10.1992H491.253V10.9985ZM480.862 15.1662H478.693V16.251H480.862V15.1662ZM493.423 16.251V15.1662H491.253V16.251H493.423ZM503.814 16.251H505.983V15.1662H503.814V16.251ZM517.915 27.2128H466.646V21.846H517.915V27.2128ZM507.81 34.3493C511.274 35.5292 515.365 36.5188 520.085 37.3181C519.59 37.9652 518.734 39.0119 517.516 40.4582C517.249 40.7627 516.583 41.562 515.518 42.8561C514.452 44.1502 513.614 45.254 513.005 46.1675C510.608 45.4063 508.019 44.1692 505.241 42.4565C502.5 40.7437 500.236 38.9929 498.447 37.204V40.9721C498.447 42.4565 497.99 43.5603 497.077 44.2834C496.201 44.9685 494.698 45.4443 492.566 45.7108C490.435 45.9391 487.162 46.0533 482.746 46.0533L482.404 44.7973C482.366 44.607 482.213 44.0741 481.947 43.1987C481.719 42.3233 481.433 41.543 481.091 40.8579C479.492 41.9997 477.779 43.0464 475.952 43.998C474.163 44.9495 472.47 45.6727 470.871 46.1675C470.262 45.254 469.425 44.1502 468.359 42.8561C467.293 41.562 466.627 40.7627 466.361 40.4582C465.143 39.0119 464.286 37.9652 463.792 37.3181C468.511 36.5188 472.603 35.5292 476.067 34.3493H465.619V27.955H519.057V34.3493H507.81ZM485.601 36.5188V34.3493H482.118L485.601 36.5188ZM498.447 34.3493V36.4047L501.758 34.3493H498.447ZM483.26 39.2022C484.212 39.2022 484.84 39.1261 485.144 38.9738C485.449 38.8216 485.601 38.479 485.601 37.9462V36.9756C484.992 37.6226 484.212 38.3648 483.26 39.2022Z"
        variants={blackPath(0.7)}
      />
      <motion.path
        d="M461.451 2.89124V37.0897C461.451 39.8301 461.222 41.7332 460.766 42.799C460.347 43.8266 459.338 44.5308 457.74 44.9114C456.141 45.292 453.325 45.4633 449.29 45.4252C449.214 42.7228 449.005 40.2679 448.662 38.0603H445.693V45.1968H436.216V38.0603H433.133C432.866 39.6589 432.448 41.0481 431.877 42.228L431.192 43.7124C430.887 44.5879 430.507 45.273 430.05 45.7678C428.299 44.9304 426.681 44.2453 425.197 43.7124C423.751 43.1415 422.285 42.7419 420.801 42.5135V45.4823H409.04V2.89124H434.731V22.5882H420.801V41.7142C422.019 40.8388 422.913 39.8872 423.484 38.8596L423.884 38.0603H421.657V31.1521H424.683V29.896H421.657V23.5017H448.719V29.896H445.693V31.1521H448.719V34.0638C449.1 34.0257 449.347 33.8735 449.461 33.607C449.614 33.3406 449.69 32.8268 449.69 32.0656V22.5882H435.816V2.89124H461.451ZM425.254 9.17142H420.801V10.3133H425.254V9.17142ZM445.236 9.17142V10.3133H449.69V9.17142H445.236ZM425.254 15.9083V14.7094H420.801V15.9083H425.254ZM445.236 15.9083H449.69V14.7094H445.236V15.9083ZM436.216 31.1521V29.896H433.647L433.59 31.1521H436.216Z"
        variants={blackPath(0.7)}
      />
      <motion.path
        d="M401.789 34.4634C402.588 34.3873 404.13 34.178 406.413 33.8354C405.538 35.3198 404.948 36.8994 404.644 38.5741C404.377 40.2488 404.13 42.4754 403.901 45.2539C397.05 45.5204 391.303 45.6536 386.659 45.6536C380.303 45.6536 375.222 45.3491 371.416 44.7401C367.61 44.1311 364.279 43.1415 361.425 41.7713C359.598 42.9893 356.857 44.4737 353.203 46.2245L352.918 45.0827C352.271 42.3042 351.7 40.0585 351.205 38.3457C350.71 36.5949 350.12 34.9392 349.435 33.3787C350.387 33.1503 351.281 32.8458 352.118 32.4652C352.956 32.0846 353.622 31.704 354.117 31.3233V27.1556H350.691L350.748 17.7353H366.277V33.8354C366.582 33.9115 367.686 34.1209 369.589 34.4634C368.409 32.8648 367.438 31.6469 366.677 30.8095C370.75 30.8095 374.537 30.4479 378.038 29.7248H367.305V24.9861H374.385V24.0155H367.705V20.2474H374.385V19.2768H371.53C368.942 19.2768 367.648 18.2872 367.648 16.308V15.3945L367.077 17.1644C361.748 15.6039 356.229 14.3288 350.52 13.3392L353.888 3.46216C359.331 4.75626 363.918 5.99327 367.648 7.17318V2.89124H385.46V12.8824H375.184V13.1108C375.184 13.7579 375.241 14.1385 375.355 14.2527C375.469 14.3288 375.717 14.3668 376.097 14.3668C376.516 14.3668 376.82 14.3668 377.011 14.3668C377.506 14.3668 377.848 14.2907 378.038 14.1385C378.229 13.9862 378.324 13.6627 378.324 13.1679L385.518 14.1956C385.518 16.3651 384.871 17.8495 383.576 18.6488H383.862V20.2474H387.915V18.8772C386.812 18.4585 386.26 17.6021 386.26 16.308V9.68526H395.851V8.71468H386.26V2.89124H404.244V12.8824H393.967V13.1108C393.967 13.6056 393.986 13.9291 394.024 14.0814C394.1 14.2336 394.291 14.3288 394.595 14.3668C394.9 14.3668 395.318 14.3668 395.851 14.3668C396.232 14.3668 396.517 14.2907 396.708 14.1385C396.898 13.9862 396.993 13.6627 396.993 13.1679L404.929 14.1956C404.929 15.9464 404.434 17.2405 403.445 18.0779C402.455 18.8772 401.218 19.2768 399.734 19.2768H397.336V20.2474H404.358V24.0155H397.336V24.9861H404.815V29.7248H393.339C396.765 30.4479 400.571 30.8095 404.758 30.8095C403.73 31.8752 402.741 33.0932 401.789 34.4634ZM377.182 9.68526V8.71468H369.817L369.475 9.68526H377.182ZM387.915 24.0155H383.862V24.9861H387.915V24.0155ZM385.689 32.2939L387.287 29.7248H384.09L385.689 32.2939ZM385.917 35.3769C387.097 35.3769 388.829 35.3389 391.113 35.2627C389.666 34.8441 387.858 34.2731 385.689 33.55C383.481 34.3112 381.673 34.9011 380.265 35.3198C381.407 35.3579 383.291 35.3769 385.917 35.3769Z"
        variants={blackPath(0.7)}
      />
      <motion.path
        d="M329.396 19.7906C332.136 26.5656 338.911 31.0379 349.721 33.2074C347.932 35.2247 346.542 37.2229 345.553 39.2021C344.563 41.1813 343.44 43.8076 342.184 47.0809C338.074 45.8629 334.096 43.7886 330.252 40.8578C326.446 37.889 323.382 34.178 321.06 29.7247C318.738 34.1399 315.655 37.8319 311.811 40.8007C307.967 43.7695 304.008 45.8629 299.936 47.0809C298.68 43.8076 297.557 41.1813 296.567 39.2021C295.578 37.2229 294.189 35.2247 292.4 33.2074C303.171 31.114 309.908 26.6417 312.61 19.7906H295.026V7.17317H314.038L314.095 1.92065L328.083 2.03484L328.025 7.17317H347.094V19.7906H329.396Z"
        variants={blackPath(0.7)}
      />
      <motion.path
        d="M284.121 24.8148C285.301 25.576 286.329 26.166 287.204 26.5847C288.08 27.0034 289.031 27.3269 290.059 27.5553C290.668 30.7144 290.972 33.6642 290.972 36.4046C290.972 39.0689 290.668 41.1052 290.059 42.5135C289.64 43.5031 289.145 44.2263 288.574 44.683C288.004 45.1017 287.509 45.3491 287.09 45.4252C286.671 45.4633 286.158 45.4823 285.549 45.4823H279.896C278.298 45.4823 277.061 45.3491 276.185 45.0827C275.348 44.7782 274.739 44.2834 274.358 43.5983C274.016 42.8751 273.845 41.8284 273.845 40.4582C273.845 40.0776 273.883 39.3163 273.959 38.1745L275.044 24.9861L273.787 25.1003C273.635 30.6192 273.312 34.8631 272.817 37.8319C272.322 40.7627 271.637 43.5031 270.762 46.0533C267.184 44.8353 264.253 43.9599 261.969 43.427L258.544 43.7696L255.461 44.1121C255.232 38.2125 255.118 33.1694 255.118 28.9826L260.942 28.6971C260.942 32.7697 261.094 36.3285 261.398 39.3734C262.16 37.6606 262.769 35.7956 263.225 33.7784C263.682 31.7611 263.987 29.1919 264.139 26.0708L263.111 26.185C262.959 24.2439 262.807 22.6263 262.654 21.3322C262.502 20.0381 262.236 18.4204 261.855 16.4793L264.653 16.308L266.308 12.6541H261.17V7.57285L257.059 12.8254L259.571 12.4828C260.409 16.1367 261.018 19.0104 261.398 21.1038C261.817 23.1591 262.122 25.1954 262.312 27.2127L255.289 28.1262L255.175 26.8701L254.091 27.0414V45.882H243.985V28.1833C241.625 28.4497 239.113 28.6781 236.449 28.8684C236.449 25.4428 236.297 22.6453 235.992 20.4758L240.046 20.3616L241.873 18.4775C240.883 17.4499 239.798 16.4032 238.618 15.3374C237.439 14.2717 236.43 13.4344 235.593 12.8254L239.361 5.00368L240.845 6.20263C241.72 4.98465 242.71 3.25284 243.814 1.0072L252.663 3.06254L251.693 4.37567C249.371 7.61091 247.658 9.91365 246.554 11.2839L247.297 12.0832C249.923 8.65761 252.34 5.19399 254.547 1.69231L262.312 3.91892H269.734V1.8065H280.182V3.91892H290.287V12.6541H286.119C288.175 14.5952 290.363 16.4032 292.685 18.0779C291.581 18.9533 290.42 20.0761 289.202 21.4464C288.023 22.8166 287.052 24.1297 286.291 25.3857L284.806 23.9584L284.178 24.0155L284.121 24.8148ZM276.528 12.6541L275.215 15.6229L277.898 15.4516C277.365 14.6904 276.985 14.1195 276.756 13.7388L280.924 12.6541H276.528ZM253.634 17.2215C252.568 18.5156 251.807 19.4671 251.35 20.0761L254.148 19.9619L253.634 17.2215ZM283.379 33.3787V33.4929C283.379 33.7593 283.436 33.9877 283.55 34.178C283.703 34.3302 283.874 34.4064 284.064 34.4064C284.254 34.4064 284.426 34.3112 284.578 34.1209C284.73 33.9306 284.806 33.6642 284.806 33.3216C284.806 31.4185 284.54 29.0206 284.007 26.1279L283.379 33.3787ZM237.191 29.4964C237.952 29.4964 239.132 29.4583 240.731 29.3822L243.015 29.3251C243.015 32.7126 242.957 35.415 242.843 37.4323C242.767 39.4115 242.501 41.7523 242.044 44.4547C241.778 44.4166 241.054 44.3405 239.874 44.2263C238.733 44.074 237.362 43.9979 235.764 43.9979C236.373 41.4858 236.753 39.2212 236.906 37.2039C237.096 35.1866 237.191 32.6175 237.191 29.4964Z"
        variants={blackPath(0.7)}
      />
      <motion.path
        d="M228.285 30.5241C229.046 31.704 230.017 32.6175 231.196 33.2645C232.376 33.9116 233.842 34.3302 235.593 34.5205C234.755 36.1191 234.032 37.8129 233.423 39.6018C232.852 41.3526 232.262 43.5792 231.653 46.2816C229.522 44.9875 227.619 43.2557 225.944 41.0862C225.982 41.2765 226.001 41.5429 226.001 41.8855C226.001 44.017 224.935 45.1969 222.804 45.4252C220.558 45.5775 218.503 45.6536 216.638 45.6536C214.697 45.6536 212.832 45.5775 211.043 45.4252C209.787 45.3111 208.854 45.0256 208.245 44.5689C207.674 44.074 207.389 43.3699 207.389 42.4564V42.2851C206.019 43.6934 204.287 45.0256 202.193 46.2816C201.546 43.1986 200.88 40.7056 200.195 38.8025L200.538 42.2281L200.652 43.427L197.854 43.7696L195.228 44.1121C195.038 37.5655 194.943 32.5223 194.943 28.9826L199.853 28.6971C199.853 31.2853 199.872 33.1313 199.91 34.2351C202.498 33.6642 204.382 32.4272 205.562 30.5241H200.538V27.2127L195.114 28.0691L195 26.8701L193.915 27.0414V45.882H185.637V28.1833C183.619 28.4497 181.488 28.6781 179.242 28.8684C179.242 25.4428 179.09 22.6453 178.785 20.4758L182.268 20.3616L183.753 18.4775C182.953 17.4879 182.059 16.4603 181.069 15.3945C180.08 14.3288 179.223 13.4724 178.5 12.8254L181.697 5.00368C182.496 5.80298 182.896 6.20263 182.896 6.20263C183.81 4.68016 184.666 2.94835 185.465 1.0072L192.887 3.06254C190.566 6.86871 188.834 9.60915 187.692 11.2839L188.377 12.0832C190.661 8.65761 192.678 5.19399 194.429 1.69231L201.28 4.03311H211.271L211.671 2.71998H221.091L220.691 4.03311H232.738V30.5241H228.285ZM198.711 12.4828L199.738 18.8201C199.967 19.9619 200.233 21.5225 200.538 23.5017V6.77355L196.598 12.8254L198.711 12.4828ZM209.159 10.77V11.8548L211.214 10.9984C212.013 11.4171 212.603 11.7977 212.984 12.1403C213.288 11.7977 213.593 11.341 213.897 10.77H209.159ZM224.231 11.6264V10.77H218.522L218.236 11.6264H224.231ZM209.159 14.8807C210.11 14.462 210.719 14.1766 210.986 14.0243C210.453 13.6056 209.844 13.187 209.159 12.7683V14.8807ZM218.75 16.8219C219.283 16.4412 219.797 15.9464 220.292 15.3374H216.581L218.75 16.8219ZM211.157 19.0485C210.662 18.3253 209.996 17.4879 209.159 16.5364V19.2197L211.157 19.0485ZM193.972 19.9619C193.782 18.744 193.649 17.8876 193.572 17.3928L192.887 18.4204C192.735 18.6488 192.564 18.8962 192.373 19.1626C192.183 19.4291 191.974 19.7336 191.745 20.0761L193.972 19.9619ZM214.012 17.6782C213.441 18.173 212.851 18.6107 212.242 18.9914C213.346 18.8772 214.278 18.7059 215.039 18.4775L214.012 17.6782ZM223.432 20.8183L221.548 23.0449H224.231V18.3063C223.774 18.8772 223.203 19.4862 222.518 20.1332L223.432 20.8183ZM209.159 23.0449H210.586C210.205 22.0553 209.73 21.1038 209.159 20.1903V23.0449ZM219.835 21.9602C219.378 22.2266 218.617 22.5882 217.551 23.0449H220.977L219.835 21.9602ZM179.813 29.4964C180.536 29.4964 181.545 29.4583 182.839 29.3822L184.666 29.3251V31.2663C184.666 33.7784 184.628 36.005 184.552 37.9461C184.476 39.8873 184.285 42.0568 183.981 44.4547C183.676 44.4166 183.029 44.3405 182.04 44.2263C181.088 44.074 179.965 43.9979 178.671 43.9979C179.166 41.4858 179.471 39.2212 179.585 37.2039C179.737 35.1486 179.813 32.5794 179.813 29.4964ZM215.724 30.5241H207.731C209.558 31.6659 211.157 32.5413 212.527 33.1503H213.84C213.536 32.7697 212.965 32.1607 212.128 31.3234L215.724 30.5241ZM222.633 31.8943C223.66 31.4756 224.688 31.0189 225.716 30.5241H220.92C221.871 31.3234 222.442 31.7801 222.633 31.8943ZM218.351 36.633C218.883 36.5949 219.15 36.3856 219.15 36.005C219.15 35.9669 219.074 35.6053 218.922 34.9202L216.01 35.7195L214.64 34.0638L214.354 35.6624C214.316 35.7766 214.297 35.9479 214.297 36.1762C214.297 36.5569 214.487 36.7472 214.868 36.7472C216.847 36.7472 218.008 36.7091 218.351 36.633ZM219.321 34.8631C220.006 34.9773 220.672 35.0344 221.319 35.0344C221.814 35.0344 222.195 35.0154 222.461 34.9773L222.119 34.0638L219.321 34.8631Z"
        variants={blackPath(0.7)}
      />
    </svg>
  );
}

export default NavigationLogo;
