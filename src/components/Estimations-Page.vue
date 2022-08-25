<template>
  <v-row class="pa-12">
    <v-card class="mx-auto justify-center" max-width="600" color="#1976D2" dark>

      <div class="text-center">
        <v-card-title class="text-h4 justify-center font-weight-black">

          <v-card class="rounded-xl pa-3 mx-auto" max-width="500" color="#163C81" dark elevation="10">
            <v-row class="justify-center pt-3">
              <v-img alt="ShipSteady Logo" class="shrink mr-2 justify-center" contain
                :src="require('../assets/logo.jpg')" transition="scale-transition" max-width="100" />
            </v-row>
            <v-row class="justify-center pa-3">
              Estimations
            </v-row>
          </v-card>
        </v-card-title>
      </div>
      <v-card-subtitle style="background: #163C81;">Lorem ipsum dolor sit
        amet,
        consectetur adipiscing elit. Nullam vel imperdiet sapien. Vivamus
        vitae ex
        in massa sodales faucibus. Vestibulum pulvinar orci tellus, et
        tincidunt
        eros lobortis vitae. Nunc sit amet quam mauris. I</v-card-subtitle>
    </v-card>
  </v-row>
</template>

<script>
  export default {
    name: 'Estimations-Page',
  }
</script>
