app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const product = ref('Camisetas');
    const brand = ref('Vue Sis257');
    const selectedVariant = ref(0);
    const details = reactive(['50% algodón', '30% lana', '20% poliéster']);
    const variants = reactive([
      { id: 2234, color: 'green', image: './assets/images/t-shirt-green-bolivia.jpg', quantity: 50 },
      { id: 2235, color: 'white', image: './assets/images/t-shirt-white-bolivia.jpg', quantity: 0 },
    ]);

    function addToCart() {
      //cart.value += 1;
      emit('add-to-cart', variants[selectedVariant.value].id);
    }
    function updateVariant(index) {
      selectedVariant.value = index;
    }

    const title = computed(() => brand.value + ' ' + product.value);
    const image = computed(() => variants[selectedVariant.value].image);
    const inStock = computed(() => variants[selectedVariant.value].quantity);
    const shipping = computed(() => (props.premium ? 'Gratis' : 2.99));

    return { product, image, inStock, details, variants, addToCart, updateVariant, title, image, inStock, shipping };
  },
  /*html*/
  template: `
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" alt="Camiseta">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">En Stock</p>
        <p v-else>Agotado</p>

        <p>Envío: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
          class="color-circle" :style="{ backgroundColor: variant.color }">
        </div>

        <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" @click="addToCart">
          Agregar al Carro
        </button>
      </div>
    </div>
  </div>
  `,
});
