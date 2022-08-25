
<template>
    <v-app id="inspire" style="
    background:#ECEFF1;
  ">
            <v-app-bar app color="blue-grey darken-4" dark>
                <div class="d-flex align-center">
                    <router-link to="/">
                        <v-img alt="ShipSteady Logo" class="shrink mr-2" contain :src="require('./assets/logo.jpg')"
                            transition="scale-transition" max-width="50" />
                    </router-link>
                </div>
                <v-spacer></v-spacer>

                <v-tabs fixed centered class="ml-n9" color="white">
                    <v-tab centered color="white" icon="mdi-home" to="/">
                        Home
                    </v-tab>
                    <v-tab color="white" to="/approach">
                        Approach
                    </v-tab>
                    <v-tab color="white" to="/estimations">
                        Estimations
                    </v-tab>
                    <v-tab centered color="white" to="/about">
                        About
                    </v-tab>
                </v-tabs>
            </v-app-bar>      
            <v-content fill max-size="600">
            <v-container style="height: 100vh; background: #37474F;" fill>
                <v-row style="height: 100vh;" justify="center" max-width="800">
                    <router-view>
                    </router-view>
                </v-row>
            </v-container>
        </v-content>
        <v-footer fixed v-bind="localAttrs" :padless="padless" dark style="
    background: #263238;" class="pa-0">
            <v-row justify="center" no-gutters>
                <v-card flat width="100%" class="text-center" style="
    background: #263238;">
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
        e1: 1,
    }),
}
</script>