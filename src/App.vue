
<template>
  <v-app id="inspire" style="background: #163C81; background: -webkit-linear-gradient(to right, #163C81, #D76D77, #3A1C71);
    background: linear-gradient(to right, #163C81, #D76D77, #163C81);
  ">
    <v-app-bar app color="#163C81" dark absolute>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-img alt="ShipSteady Logo" class="shrink mr-2" contain :src="require('./assets/logo.jpg')"
          transition="scale-transition" max-width="50" />
      </div>
      <v-spacer></v-spacer>
      <v-tabs centered class="ml-n9" color="white">
        <v-tab>
          <router-link to="/about">Test_About</router-link>
        </v-tab>
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <router-view>
        <template>
          <v-parallax class="ma-0">
            <v-responsive class="overflow-y-auto" max-height="400">
              <v-lazy v-model="isActive" :options="{
                threshold: .5
              }" min-height="100" transition="fade-transition">

                <v-row class="pa-10">
                  <v-card class="mx-auto" max-width="600" color="#163C81" dark elevation="20">
                    <v-card-title>
                      <div class="text-center">
                        <v-img alt="ShipSteady Logo" class="shrink mr-2" contain :src="require('./assets/logo.jpg')"
                          transition="scale-transition" max-width="100" />
                      </div>
                    </v-card-title>
                  </v-card>
                </v-row>
              </v-lazy>
              <v-lazy v-model="isActive" :options="{
                threshold: .5
              }" min-height="300" transition="fade-transition">
                <v-row class="pa-10">
                  <v-card class="mx-auto" max-width="600" color="blue darken-4" dark elevation="20">
                    <v-card-title style="background: #163C81;">
                      <v-spacer />
                      <div class="text-center">
                        <h3 class="display-1 white--text text--accent-2">Our Mission</h3>
                      </div>
                      <v-spacer />
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="text-h5 font-weight-bold">
                      "Blah blah blah blah blah blah."
                    </v-card-text>

                  </v-card>
                </v-row>
              </v-lazy>


              <v-lazy v-model="isActive" :options="{
                threshold: .5
              }" min-height="300" transition="fade-transition">
                <v-row>
                  <v-col cols="16">
                    <template>
                      <v-timeline>
                        <v-timeline-item class="text-left" color="#163C81">
                          Onboarding
                        </v-timeline-item>
                        <v-timeline-item class="text-right" color="#163C81">
                          Requirements Gathering
                        </v-timeline-item>
                        <v-timeline-item class="text-left" color="#163C81">
                          Delivery
                        </v-timeline-item>
                      </v-timeline>
                    </template>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <template>
                      <v-card class="mx-auto" max-width="600" color="blue darken-4" dark elevation="20">
                        <v-spacer />
                        <div class="text-center">
                          <h3 class="display-1 white--text text--accent-2">What we do</h3>
                        </div>
                        <v-spacer />
                        <v-divider></v-divider>
                        <v-card-text class="text-h5">Blah blah blahBlah blah blahBlah blah blahBlah blah blah.
                        </v-card-text>
                      </v-card>
                    </template>
                  </v-col>
                </v-row>
              </v-lazy>

              <v-lazy v-model="isActive" :options="{
                threshold: .5
              }" min-height="300" transition="fade-transition">
                <v-row>
                  <template>
                    <v-card class="mx-auto" max-width="600" color="blue darken-4" dark elevation="20">
                      <v-card-title class="display-1 font-weight-bold" style="background: #163C81;">
                        What we do
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text class="text-h5">Blah blah blahBlah blah blahBlah blah blahBlah blah blah.
                      </v-card-text>
                      <v-card-text class="text-h5">Blah blah blahBlah blah blahBlah blah blahBlah blah blah.
                      </v-card-text>
                      
                    </v-card>
                  </template>
                </v-row>
              </v-lazy>


              <v-lazy v-model="isActive" :options="{
                threshold: .5
              }" min-height="300" transition="fade-transition">
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
          </v-parallax>
        </template>
      </router-view>
    </v-main>
    <v-footer class="mx-auto" v-bind="localAttrs" padless fixed dark style="
    background: #163C81">
      <v-row justify="center" no-gutters>
        <v-col cols="12" sm="6">
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
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>

<script>
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/about', component: About },
]

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