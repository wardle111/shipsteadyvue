<template>
    <v-content>
        <v-container class="pa-0" style="
    background: #90CAF9;">
            <v-main>
                <template>
                    <v-parallax>
                        <v-responsive class="overflow-y-auto" max-height="600">
                            <v-responsive height="500vh" class="text-center pa-0">
                                <v-responsive min-height="10vh"></v-responsive>
                                <v-lazy v-model="isActive" :options="{
                                    threshold: .5
                                }" min-height="300" transition="fade-transition">
                                    <v-row class="pa-12">
                                        <v-card class="mx-auto justify-center" max-width="600" color="#1976D2" dark>

                                            <div class="text-center">
                                                <v-card-title class="text-h4 justify-center font-weight-black">

                                                    <v-card class="rounded-xl pa-3 mx-auto" max-width="500"
                                                        color="#163C81" dark elevation="10">
                                                        <v-row class="justify-center pt-3">
                                                            <v-img alt="ShipSteady Logo"
                                                                class="shrink mr-2 justify-center" contain
                                                                :src="require('../assets/logo.jpg')"
                                                                transition="scale-transition" max-width="100" />
                                                        </v-row>
                                                        <v-row class="justify-center pa-3">
                                                            ShipSteady&copy;
                                                        </v-row>
                                                    </v-card>
                                                </v-card-title>
                                            </div>
                                            <v-card-subtitle dark class="text-h6 font-italic font-weight-black">
                                                Software
                                                Solutionists.</v-card-subtitle>
                                            <v-divider></v-divider>
                                            <v-card-subtitle style="background: #163C81;">Lorem ipsum dolor sit
                                                amet,
                                                consectetur adipiscing elit. Nullam vel imperdiet sapien. Vivamus
                                                vitae ex
                                                in massa sodales faucibus. Vestibulum pulvinar orci tellus, et
                                                tincidunt
                                                eros lobortis vitae. Nunc sit amet quam mauris. I</v-card-subtitle>
                                        </v-card>
                                    </v-row>
                                </v-lazy>

                                <v-divider></v-divider>
                                <v-lazy v-model="isActive" :options="{
                                    threshold: .5
                                }" min-height="100" transition="fade-transition">
                                    <v-row class="pa-6">
                                        <v-col>
                                            <template>
                                                <v-card class="rounded-xl mx-auto" max-width="600" color="blue darken-4"
                                                    dark elevation="10">
                                                    <v-card-title class="text-h5 text-center font-weight-black">
                                                        What we do...
                                                    </v-card-title>
                                                    <v-divider></v-divider>
                                                    <v-card-subtitle style="background: #1976D2;">Lorem ipsum dolor
                                                        sit
                                                        amet, consectetur adipiscing elit. Nullam vel imperdiet
                                                        sapien.
                                                        Vivamus vitae ex in massa sodales faucibus. Vestibulum
                                                        pulvinar
                                                        orci tellus, et tincidunt eros lobortis vitae. Nunc sit amet
                                                        quam mauris.</v-card-subtitle>
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
                                                <v-card class="rounded-xl mx-auto" max-width="600" color="blue darken-4"
                                                    dark elevation="10">
                                                    <v-card-title class="text-h5 text-center font-weight-black">
                                                        Step by Step...
                                                    </v-card-title>
                                                    <v-divider></v-divider>
                                                    <v-card-subtitle style="background: #1976D2;">
                                                        <v-card class="rounded-xl pa-3" max-width="300"
                                                            color="blue lighten-1" dark elevation="10">
                                                            <v-timeline>
                                                                <v-timeline-item class="text-left">
                                                                    Step.1
                                                                </v-timeline-item>
                                                                <v-timeline-item class="text-right">
                                                                    Step.2
                                                                </v-timeline-item>
                                                                <v-timeline-item class="text-left">
                                                                    Step.3
                                                                </v-timeline-item>
                                                            </v-timeline>

                                                        </v-card>
                                                    </v-card-subtitle>
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
                                                <v-card class="rounded-xl mx-auto" max-width="600" color="blue darken-4"
                                                    dark elevation="10">
                                                    <v-card-title class="text-h5 text-center font-weight-black">
                                                        Meet the squad...
                                                    </v-card-title>
                                                    <v-divider></v-divider>
                                                    <v-card class="pa-3" style="background: #1976D2;">
                                                        <v-img src="https://picsum.photos/350/165?random" height="125"
                                                            contain class="blue lighten-3"></v-img>
                                                        <v-card-subtitle style="background: #1976D2;">Lorem ipsum
                                                            dolor sit
                                                            amet, consectetur adipiscing elit. Nullam vel imperdiet
                                                            sapien.
                                                            Vivamus vitae ex in massa sodales faucibus. Vestibulum
                                                            pulvinar
                                                            orci tellus, et tincidunt eros lobortis vitae. Nunc sit
                                                            amet
                                                            quam mauris..</v-card-subtitle>
                                                    </v-card>
                                                    <v-divider></v-divider>
                                                    <v-card class="pa-3" style="background: #1976D2;">
                                                        <v-img src="https://picsum.photos/350/165?random" height="125"
                                                            contain class="blue lighten-3"></v-img>
                                                        <v-card-subtitle style="background: #1976D2;">Lorem ipsum
                                                            dolor sit
                                                            amet, consectetur adipiscing elit. Nullam vel imperdiet
                                                            sapien.
                                                            Vivamus vitae ex in massa sodales faucibus. Vestibulum
                                                            pulvinar
                                                            orci tellus, et tincidunt eros lobortis vitae. Nunc sit
                                                            amet
                                                            quam mauris..</v-card-subtitle>
                                                    </v-card>
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
    </v-content>
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