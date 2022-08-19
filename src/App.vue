
<template>
  <v-app id="inspire">
        <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h4 font-weight-bold mb-4">
          ShipSteady
        </h1>
      </v-col>
    </v-row>
    <v-card
  elevation="2"
  outlined
></v-card>
    <v-main>
      <template>
      <v-parallax
      dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
       >
        <v-responsive
    class="overflow-y-auto"
    max-height="400"
  >
    <v-responsive
      height="200vh"
      class="text-center pa-2"
    >
      <v-responsive min-height="50vh"></v-responsive>
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
    <template>
      <v-timeline>
      <v-timeline-item>Onboarding</v-timeline-item>
      <v-timeline-item class="text-right">
        Requirements Gathering
      </v-timeline-item>
      <v-timeline-item>Delivery</v-timeline-item>
    </v-timeline>
    </template>
      </v-lazy>
    </v-responsive>
  </v-responsive>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          ShipSteady
        </h1>
      </v-col>
    </v-row>
      </v-parallax>
    </template>
    <template>
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="blue lighten-1 text-center"
      >
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Hoi and Ben</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>