<template>
  <div class="buffering-3_qfLY svelte-1wxlmwd">
    <svg
      version="1.1"
      id="Ebene_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0"
      y="0"
      viewBox="-60 0 560 500"
      xml:space="preserve"
    >
      <defs>
        <circle id="circle" cx="159" cy="248" r="132"></circle>
        <path id="rect" d="M275 181h221v154H275z"></path>
      </defs>
      <use xlink:href="#circle" id="circle_0"></use>
      <use xlink:href="#circle" id="circle_1"></use>
      <g id="l_DF">
        <clipPath id="clipp"><use xlink:href="#rect" overflow="visible"></use></clipPath>
        <path
          class="st0"
          d="M431 213h44v-21h-53c-28 0-40 16-40 41v3c-4-30-22-44-54-44h-53a131 131 0 10-1 118h55c13 0 25-1 37-10 8-7 14-17 16-29v39h25v-46h59v-21h-59v-8c0-14 4-22 24-22zm-103 76h-28v-76h28c21 0 29 9 29 38s-8 38-29 38z"
        ></path>
      </g>
      <g id="l_Z">
        <path
          id="Z"
          fill="#fff"
          d="M215 241h17c13 0 20-3 20-14s-7-14-21-14h-55v-21h64c33 0 38 23 38 36s-6 35-38 35h-15c-20 0-24 7-24 20v7h73v20h-99v-29c0-25 12-40 40-40z"
        ></path>
      </g>
    </svg>
  </div>
</template>

<style>
@keyframes circle_0_ani {
  0% {
    transform: scale(1.25);
    opacity: 0;
    -webkit-opacity: 0;
    -moz-opacity: 0;
  }
  7% {
    opacity: 0.7;
    -webkit-opacity: 0.7;
    -moz-opacity: 0.7;
  }
  15%,
  to {
    transform: scale(0);
    opacity: 0;
    -webkit-opacity: 0;
    -moz-opacity: 0;
  }
  25%,
  37%,
  84% {
    transform: scale(1);
    opacity: 1;
    -webkit-opacity: 1;
    -moz-opacity: 1;
  }
  35% {
    transform: scale(1.8);
    opacity: 0;
    -webkit-opacity: 0;
    -moz-opacity: 0;
  }
  36% {
    transform: scale(1);
    opacity: 0;
    -webkit-opacity: 0;
    -moz-opacity: 0;
  }
}

@keyframes circle_1_ani {
  0%,
  17% {
    transform: scale(0);
    opacity: 0;
    -webkit-opacity: 0;
    -moz-opacity: 0;
  }
  34%,
  84% {
    transform: scale(1);
    opacity: 1;
    -webkit-opacity: 1;
    -moz-opacity: 1;
  }
  to {
    transform: scale(1.5);
    opacity: 0;
    -webkit-opacity: 0;
    -moz-opacity: 0;
  }
}

@keyframes Z_ani {
  0%,
  29%,
  86%,
  to {
    transform: translate(-20px, 0);
    -ms-transform: translate(-20px, 0);
    -webkit-transform: translate(-20px, 0);
    -o-transform: translate(-20px, 0);
    -moz-transform: translate(-20px, 0);
    opacity: 0;
    -webkit-opacity: 0;
    -moz-opacity: 0;
  }
  42%,
  76% {
    transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    opacity: 1;
    -webkit-opacity: 1;
    -moz-opacity: 1;
  }
}

@keyframes DF_ani {
  0%,
  31%,
  83%,
  to {
    transform: translate(-20px, 0);
    -ms-transform: translate(-20px, 0);
    -webkit-transform: translate(-20px, 0);
    -o-transform: translate(-20px, 0);
    -moz-transform: translate(-20px, 0);
    opacity: 0;
    -webkit-opacity: 0;
    -moz-opacity: 0;
  }
  45%,
  73% {
    transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    opacity: 1;
    -webkit-opacity: 1;
    -moz-opacity: 1;
  }
}

.st0 {
  -webkit-clip-path: url(#clipp);
  clip-path: url(#clipp);
  fill-rule: evenodd;
  clip-rule: evenodd;
}

#circle,
.st0 {
  fill: #fa7d19;
}

#circle_0 {
  transform: scale(0);
  animation: circle_0_ani 6s linear infinite;
  animation-delay: -1s;
  transform-origin: 159px 248px;
}

#circle_0,
#circle_1,
#l_DF,
#l_Z {
  -webkit-opacity: 0;
  -moz-opacity: 0;
  opacity: 0;
}

#circle_1 {
  transform: scale(0);
  transform-origin: 159px 248px;
  animation: circle_1_ani 6s ease-in-out infinite;
  animation-delay: -1s;
}

#l_DF,
#l_Z {
  transform: translate(-20px, 0);
  -ms-transform: translate(-20px, 0);
  -webkit-transform: translate(-20px, 0);
  -o-transform: translate(-20px, 0);
  -moz-transform: translate(-20px, 0);
  animation: Z_ani 6s ease-in-out;
  animation-delay: -1s;
}

#l_DF {
  transform: translate(-20, 0);
  animation: DF_ani 6s ease-in-out infinite;
  animation-delay: -1s;
}
</style>
