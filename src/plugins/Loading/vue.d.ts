import Vue from 'vue';

type LoadingFunc = () => () => void;

declare module 'vue/types/vue' {
  interface Vue {
    $loading: LoadingFunc;
  }
}
