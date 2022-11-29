const { createApp, ref, reactive, computed } = Vue;

const app = createApp({
  setup() {
    const cart = ref([]);
    const premium = ref(true);

    function updateCart(id) {
      cart.value.push(id);
    }

    return { cart, premium, updateCart };
  },
});
