
<template>
  <v-app id="inspire">
   <v-app-bar
      app
      color="white"
      flat
    >
    <v-toolbar-title>ShipSteady©</v-toolbar-title>
      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

    </v-app-bar>
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
      <v-responsive min-height="20vh"></v-responsive>
     <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-card
          class="mx-auto"
          max-width="600"
          colour="light-blue"
          align="left"
        >
            <v-card-title class="text-h5 text-center">
              <div class="text--primary">
              Blah blah blah
              </div>
            </v-card-title>

            <v-card-subtitle>Blah blah blahBlah blah blahBlah blah blahBlah blah blah.</v-card-subtitle>
          </v-card>
      </v-lazy>


      <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="400"
        transition="fade-transition"
      >
    <template>
    <v-timeline>
      <v-timeline-item class="text-left">
        Onboarding
      </v-timeline-item>
      <v-timeline-item class="text-right">
        Requirements Gathering
      </v-timeline-item>
      <v-timeline-item class="text-left">
        Delivery
      </v-timeline-item>
    </v-timeline>
    </template>
      </v-lazy>

 <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="400"
        transition="fade-transition"
      >

      <template>
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-card-text>
            <div>Our Mission</div>
            <p class="text-h4 text--primary">
              Blah blah blah blah blah blah
            </p>
            <div class="text--primary">
                           Blah blah blah blah blah blah<br>
                           Blah blah blah blah blah blah
            </div>
          </v-card-text>
        </v-card>
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
        <h1 class="text-h4 font-weight-thin">
          ShipSteady©
        </h1>
      <p class="font-weight-light font-italic">Software Solution Shipping Specialists.</p>
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
        class="text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Ben W & Hoi C</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-twitter',
        'mdi-facebook',
      ],
      links: [
        'Our Mission',
        'Approach',
        'Estimations',
        'About'
      ],
    }),
  }
</script>