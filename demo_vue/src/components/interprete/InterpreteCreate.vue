<script setup lang="ts">
import { ref } from "vue";
import http from "@/plugins/axios";
import router from "@/router";

const props = defineProps<{
  ENDPOINT_API: string;
}>();

const ENDPOINT = props.ENDPOINT_API ?? "";
const nombre = ref("");
const nacionalidad = ref("");

async function crearInterprete() {
  await http
    .post(ENDPOINT, { nombre: nombre.value, nacionalidad: nacionalidad.value })
    .then(() => router.push("/interpretes"));
}

function goBack() {
  router.go(-1);
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/interpretes">Intérpretes</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Intérprete</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearInterprete">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="nombre"
            placeholder="Nombre"
            required
          />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="nacionalidad"
            placeholder="Nacionalidad"
            required
          />
          <label for="nacionalidad">Nacionalidad</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">Crear</button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
