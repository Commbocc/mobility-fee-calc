<script setup lang="ts">
import { computed, reactive, watch } from "vue";
import { calculatePricing } from "../lib/pricing";
import { district } from "../lib/districts";
import {
  housingTypes,
  mobilityAssessmentDistricts,
} from "../lib/selectOptions";

const props = defineProps<{
  title: string;
  existing?: boolean;
  modelValue: ISubtotal;
}>();

const emit = defineEmits(["update:modelValue"]);

const options = reactive<CalcFormOptions>({
  housingType: null,
  squareFootage: null,
  mobilePark: null,
});

const isMobileHome = computed(() => options.housingType == "Mobile Home");

const subtotals = computed<ISubtotal>(() => calculatePricing(options));

const reset = () => {
  if (
    confirm(
      `Are you sure? This will remove the selections made in "${props.title}"`,
    )
  ) {
    options.housingType = null;
    options.squareFootage = null;
    options.mobilePark = null;
    return true;
  } else {
    return false;
  }
};

watch(
  () => options.housingType,
  () => {
    options.mobilePark = isMobileHome.value ? true : null;
  },
);

watch(subtotals, () => emit("update:modelValue", subtotals.value));
</script>

<template>
  <form class="card" @submit.prevent>
    <div class="card-header d-flex align-items-center justify-content-between">
      <strong>{{ title }}</strong>
      <button @click.prevent="reset" type="button" class="btn btn-danger">
        <span class="fas fa-history" aria-hidden="true"></span>
        Reset
      </button>
    </div>

    <div class="card-body">
      <div class="mb-3">
        <label for="housingType">Housing Type</label>
        <select
          v-model="options.housingType"
          class="form-select"
          name="housing-type"
          id="housingType"
        >
          <option :value="null"></option>
          <option v-for="(option, index) in housingTypes" :key="index">
            {{ option }}
          </option>
        </select>
      </div>

      <div class="mb-3" :class="!isMobileHome ? 'text-muted' : null">
        <label for="mobileHomePark">Mobile Home Park</label>
        <select
          v-model="options.mobilePark"
          class="form-select"
          name="mobile-home-park"
          id="mobileHomePark"
          :disabled="!isMobileHome"
        >
          <option :value="true">In a Park</option>
          <option :value="false">Not in a Park</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="livingAreaSquareFootage">Living Area Square Footage</label>

        <div class="input-group mb-1">
          <input
            type="number"
            v-model="options.squareFootage"
            class="form-control text-right"
            id="livingAreaSquareFootage"
            name="living-area-square-footage"
            :min="0"
            :step="50"
          />

          <span class="input-group-text">
            ft
            <sup>2</sup>
          </span>
        </div>

        <input
          v-if="false"
          type="range"
          v-model="options.squareFootage"
          min="0"
          max="4000"
          step="50"
          class="form-control-range"
          id="livingAreaSquareFootage"
          name="living-area-square-footage"
        />
      </div>

      <div class="mb-3">
        <label for="mobilityAssessmentDistrict"
          >Mobility Assessment District</label
        >
        <select
          v-model="district"
          class="form-select"
          id="mobilityAssessmentDistrict"
          name="mobility-assessment-district"
        >
          <option :value="null"></option>
          <option
            v-for="(option, index) in mobilityAssessmentDistricts"
            :key="index"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>
  </form>
</template>
