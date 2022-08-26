
<template>
    <v-app id="inspire" style="
    background:#ECEFF1;
  ">
        <v-app-bar app fixed style="
    background: ##BF360C;" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="deep-orange accent-4">
            </v-app-bar-nav-icon>
            <v-toolbar-title class="font-weight-black deep-orange--text text--accent-4">ShipSteady<sup>&copy;</sup>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-navigation-drawer bottom v-model="drawer" absolute temporary style="background: #263238;" dark>
            <v-list nav>
                <v-list-item-group v-model="group" active-class="deep-orange--text text--accent-4">
                    <v-list-item to="/">
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/approach">
                        <v-list-item-title>Approach</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/estimations">
                        <v-list-item-title>Estimations</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/about">
                        <v-list-item-title>About</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="##BF360C" dark v-if="!$vuetify.breakpoint.xsOnly">
            <div class="d-flex align-center">
                <v-toolbar-title class="font-weight-black font-weight-black deep-orange--text text--accent-4">
                    ShipSteady<sup>&copy;</sup>
                </v-toolbar-title>
            </div>
            <v-spacer></v-spacer>

            <v-tabs fixed centered class="ml-n9" color="#BF360C">
                <v-tab centered color="blue" icon="mdi-home" to="/">
                    Home
                </v-tab>
                <v-tab color="blue" to="/approach">
                    Approach
                </v-tab>
                <v-tab color="blue" to="/estimations">
                    Estimations
                </v-tab>
                <v-tab centered color="blue" to="/about">
                    About
                </v-tab>
            </v-tabs>
        </v-app-bar>

        <v-content>
            <v-container style="background: #263238;height: 100vh;">
                <v-row justify="center" max-width="800">
                    <router-view>
                    </router-view>
                </v-row>
            </v-container>
        </v-content>
        <v-footer fixed v-bind="localAttrs" :padless="padless" dark style="
    background: ##BF360C;" class="pa-0">
            <v-row justify="center" no-gutters>
                <v-card flat width="100%" class="text-center" style="
    background: ##BF360C;">
                    <v-card-text>
                        <v-btn class="mx-4" icon to="/">
                            <v-icon color="blue" size="24px">
                                mdi-home
                            </v-icon>
                        </v-btn>
                        <v-btn class="mx-4" icon href="https://twitter.com" target="_blank">
                            <v-icon color="blue" size="24px">
                                mdi-twitter
                            </v-icon>
                        </v-btn>
                        <v-btn class="mx-4" icon href="https://facebook.com" target="_blank">
                            <v-icon color="blue" size="24px">
                                mdi-facebook
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
        drawer: false,
        e1: 1,
        collapseOnScroll: true,
    }),
}
</script>