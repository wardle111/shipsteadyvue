
<template>
    <v-app id="inspire" style="
    background: #1976D2;
  ">
        <v-content>
            <v-app-bar app color="#163C81" dark>
                <div class="d-flex align-center">
                    <v-img alt="ShipSteady Logo" class="shrink mr-2" contain :src="require('./assets/logo.jpg')"
                        transition="scale-transition" max-width="50" />
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
            <router-view>
            </router-view>
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
        </v-content>
    </v-app>

</template>

<script>
export default {
    data: () => ({
        e1: 1,
    }),
}
</script>