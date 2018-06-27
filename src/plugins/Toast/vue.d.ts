import Vue from 'vue';

type ToastFunc = (msg: string, options?: {}) => void;

declare module 'vue/types/vue' {
  interface Vue {
    $toast: ToastFunc;
  }
}
