
<template>
  <v-app id="inspire" style="
    background: #163C81;
  ">
    <v-app-bar app color="#163C81" dark>
      <div class="d-flex align-center">
        <v-img alt="ShipSteady Logo" class="shrink mr-2" contain :src="require('./assets/logo.jpg')" transition="scale-transition" max-width="60" />
      </div>
      <v-tabs centered class="ml-n9" color="white">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>

    </v-app-bar>
    <v-container class="indigo darken-3 pa-0">
      <v-main>
        <template>
          <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <v-responsive class="overflow-y-auto" max-height="400">
              <v-responsive height="200vh" class="text-center pa-2">
                <v-responsive min-height="20vh"></v-responsive>
                <v-lazy v-model="isActive" :options="{
                  threshold: .5
                }" min-height="300" transition="fade-transition">
                  <v-card class="mx-auto" max-width="600" color="blue darken-4" dark elevation="20">
                    <v-card-title class="display-6">
                      <v-img alt="ShipSteady Logo" class="shrink mr-2" contain :src="require('./assets/logo.jpg')" transition="scale-transition" max-width="100" /> Our Mission Statement
                    </v-card-title>
                    
                    <v-divider></v-divider>
                    <v-card-subtitle>Blah blah blahBlah blah blahBlah blah blah Blah blah blah.</v-card-subtitle>
                  </v-card>
                </v-lazy>


                <v-lazy v-model="isActive" :options="{
                  threshold: .5
                }" min-height="300" transition="fade-transition">
                  <v-row>
                    <v-col cols="16">
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
                    </v-col>
                    <v-col cols="6">
                      <template>
                        <v-card class="mx-auto" max-width="600" color="blue darken-4" align="left" dark elevation="20">
                          <v-card-title class="text-h5 text-center">
                            What we do
                          </v-card-title>
                          <v-divider></v-divider>
                          <v-card-subtitle>Blah blah blahBlah blah blahBlah blah blahBlah blah blah.</v-card-subtitle>
                        </v-card>
                      </template>
                    </v-col>
                  </v-row>
                </v-lazy>
                <v-lazy v-model="isActive" :options="{
                  threshold: .5
                }" min-height="400" transition="fade-transition">
                  <v-row no-gutters>
                    <v-col cols="12" sm="4">
                      <v-card class="mx-auto" max-width="600" color="blue darken-4" dark elevation="20">
                        Blah blah
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-card class="mx-auto" max-width="600" color="blue darken-4" dark elevation="20">
                        Extra blah blah
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-card class="mx-auto" max-width="600" color="blue darken-4" dark elevation="20">
                        Extra extra blah blah
                      </v-card>
                    </v-col>
                  </v-row>
                </v-lazy>
              </v-responsive>
            </v-responsive>
            <v-row align="center" justify="center">
            </v-row>
          </v-parallax>
        </template>
      </v-main>
    </v-container>
    <v-footer v-bind="localAttrs" :padless="padless" fixed dark style="
    background: #163C81;">
      <v-row justify="center" no-gutters>
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin">
            ShipSteady©
          </h1>
        </v-col>
        <v-card flat width="100%" class="text-center" style="
    background: #163C81;">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-row>
    </v-footer>
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
    e1: 1,
  }),
}
</script>