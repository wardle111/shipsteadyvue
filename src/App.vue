
<template>
  <v-app id="inspire" style="
    background: #90CAF9;
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
    <v-container class="pa-0" fill fluid>
      <v-main>
        <template>
          <v-parallax>
            <v-responsive class="overflow-y-auto" max-height="400">
              <v-responsive height="200vh" class="text-center pa-2">
                <v-responsive min-height="20vh"></v-responsive>


                <v-lazy v-model="isActive" :options="{
                  threshold: .5
                }" min-height="300" transition="fade-transition">
                  <v-card class="mx-auto" max-width="600" color="#163C81" dark elevation="10">
                    <v-card-title class="text-h3 justify-center font-weight-black">
                      <v-img alt="ShipSteady Logo" class="shrink mr-2" contain :src="require('./assets/logo.jpg')" transition="scale-transition" max-width="100" /> 
                         ShipSteady 
                    </v-card-title>
                    <v-card-subtitle class="font-weight-light font-weight-italic">Insert slogan here.</v-card-subtitle>
                    <v-divider></v-divider>
                    <v-card-subtitle>Blah blah blahBlah blah blahBlah blah blah Blah blah blah.</v-card-subtitle>
                  </v-card>
                </v-lazy>


                <v-lazy v-model="isActive" :options="{
                  threshold: .5
                }" min-height="100" transition="fade-transition">
                  <v-row class="pa-6">
                    <v-col>
                      <template>
                        <v-card class="rounded-xl mx-auto" max-width="600" color="blue darken-4" dark elevation="10">
                          <v-card-title class="text-h5 text-center">
                            What we do
                          </v-card-title>
                          <v-divider></v-divider>
                          <v-card-subtitle>Blah blah blahBlah blah blah Blah blah blahBlah blah blah.</v-card-subtitle>
                        </v-card>
                      </template>
                    </v-col>
                  </v-row>
                </v-lazy>
                <v-divider></v-divider>
                <v-lazy v-model="isActive" :options="{
                  threshold: .5
                }" min-height="300" transition="fade-transition">
                  <v-row class="pa-6">
                    <v-col cols="16">
                      <template>
                       <v-card class="rounded-xl mx-auto" max-width="600" color="blue darken-4" dark elevation="10">
                        <v-card-title class="text-h5 text-center">
                            Step by Step
                          </v-card-title>
                          <v-divider></v-divider>
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
                        </v-card>
                      </template>
                    </v-col>
                  </v-row>
                </v-lazy>
                <v-divider></v-divider>
                <v-lazy v-model="isActive" :options="{
                  threshold: .5
                }" min-height="300" transition="fade-transition">
                  <v-row class="pa-6">
                    <v-col>
                      <template>
                        <v-card class="rounded-xl mx-auto" max-width="600" color="blue darken-4" dark elevation="10">
                          <v-card-title class="text-h5 text-center">
                            Meeting the Team
                          </v-card-title>
                          <v-divider></v-divider>
                          <v-card-subtitle>Blah blah blahBlah blah blah Blah blah blahBlah blah blah.</v-card-subtitle>
                        </v-card>
                      </template>
                    </v-col>
                  </v-row>
                </v-lazy>


              </v-responsive>
            </v-responsive>
          </v-parallax>
        </template>
      </v-main>
    </v-container>
    <v-footer v-bind="localAttrs" :padless="padless" fixed dark style="
    background: #163C81;" class="pa-0">
      <v-row justify="center" no-gutters>
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