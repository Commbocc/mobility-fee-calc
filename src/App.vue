<script setup lang="ts">
import LookupForm from "./components/LookupForm.vue";
import CalcForm from "./components/CalcForm.vue";
import Results from "./components/Results.vue";
import { pricing } from "./lib/pricing";

const containerClass = import.meta.env.DEV
  ? "container my-5"
  : "container-fluid";
</script>

<template>
  <main :class="containerClass">
    <h3 class="mt-3">Mobility/Impact Fee Calculator (Residential Only)</h3>

    <!--  -->
    <LookupForm />

    <!--  -->
    <fieldset>
      <legend>New Construction</legend>

      <div class="form-check">
        <input
          v-model="pricing.isNewConstruction"
          class="form-check-input"
          type="checkbox"
          id="newConstruction"
        />
        <label class="form-check-label" for="newConstruction">
          This estimate is for a site with no existing home.
        </label>
      </div>
    </fieldset>

    <!--  -->
    <fieldset class="mb-3">
      <legend>Home Information</legend>

      <div class="row justify-content-center">
        <div class="col-sm-6">
          <CalcForm title="New Home" v-model="pricing.newPricing" />
        </div>
        <div v-show="!pricing.isNewConstruction" class="col-sm-6">
          <CalcForm
            title="Existing Home"
            existing
            v-model="pricing.existingPricing"
          />
        </div>
        <div class="col">
          <Results />
        </div>
      </div>
    </fieldset>
  </main>
</template>
