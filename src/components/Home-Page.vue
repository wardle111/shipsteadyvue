
<template>
        <v-parallax style="height: 90vh; background-color: 
#CFD8DC;">
            <v-responsive class="overflow-y-auto" max-height="600">
                
                <v-lazy v-model="isActive" :options="{
                    threshold: .5
                }" min-height="250" transition="fade-transition">
                    <v-row class="pt-3">
                        <v-card class="mx-auto justify-center" max-width="600" color="#ECEFF1" dark>

                            <div class="text-center">
                                <v-card-title class="text-h4 justify-center font-weight-black">

                                    <v-card class="rounded-xl pt-6 pr-6 pl-6 mx-auto pb-6" max-width="500" color="##BF360C" dark
                                        elevation="10">
                                        <v-row class="justify-center font-weight-black font-weight-black deep-orange--text text--accent-4">
                                            ShipSteady&copy;
                                        </v-row>
                                        <v-row class="justify-center text-h6 font-weight-thin deep-orange--text text--accent-2">
                                            Software Solutionists.
                                        </v-row>
                                    </v-card>
                                </v-card-title>
                            </div>
                            <v-card-subtitle style="background: #FF6E40;">Lorem ipsum dolor sit
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
                }" min-height="200" transition="fade-transition">
                    <v-row class="pa-6">
                        <v-col>
                            <template>
                                <v-card class="rounded-xl mx-auto" max-width="600" color="##BF360C" dark
                                    elevation="10">
                                    <v-card-title class="text-h5 text-center font-weight-black">
                                        What we do...
                                    </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-subtitle style="background: #FF6E40;">Lorem ipsum dolor
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
                                <v-card class="rounded-xl mx-auto" max-width="600" color="##BF360C" dark
                                    elevation="10">
                                    <v-card-title class="text-h5 text-center font-weight-black">
                                        Step by Step...
                                    </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-subtitle style="background: #FF3D00;">
                                        <v-row>
                                            <v-col>
                                                <v-card class="rounded-xl pa-3" max-width="300" color="#FF6E40"
                                                    dark elevation="10">
                                                    <v-timeline>
                                                        <v-timeline-item class="text-left">
                                                            <p class="text-h6 font-weight-light">
                                                            Step.1
                                                            </p>
                                                        </v-timeline-item>
                                                        <v-timeline-item class="text-right">
                                                            <p class="text-h6 font-weight-light">
                                                            Step.2
                                                            </p>
                                                        </v-timeline-item>
                                                        <v-timeline-item class="text-left">
                                                            <p class="text-h6 font-weight-light">
                                                            Step.3
                                                            </p>
                                                        </v-timeline-item>
                                                    </v-timeline>
                                                </v-card>
                                            </v-col>
                                            <v-col>
                                                <v-card class="rounded-xl pa-3" max-width="300" color="#FF6E40"
                                                    dark elevation="10">
                                                    <v-timeline>
                                                        <v-timeline-item class="text-left">
                                                            <p class="text-h6 font-weight-light">
                                                            Step.1
                                                            </p>
                                                        </v-timeline-item>
                                                        <v-timeline-item class="text-right">
                                                            <p class="text-h6 font-weight-light">
                                                            Step.2
                                                            </p>
                                                        </v-timeline-item>
                                                        <v-timeline-item class="text-left">
                                                            <p class="text-h6 font-weight-light">
                                                            Step.3
                                                            </p>
                                                        </v-timeline-item>
                                                    </v-timeline>
                                                </v-card>
                                            </v-col>
                                        </v-row>
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
                                <v-card class="rounded-xl mx-auto" max-width="600" color="##BF360C" dark
                                    elevation="10">
                                    <v-card-title class="text-h5 text-center font-weight-black">
                                        Meet the squad...
                                    </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card class="pa-3" style="background: #FF3D00;">
                                        <v-img src="https://picsum.photos/350/165?random" height="125" contain
                                            style="background-color: #FF6E40"></v-img>
                                        <v-card-subtitle style="background: #FF6E40;">Lorem ipsum
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
                                    <v-card class="pa-3" style="background: #FF3D00;">
                                        <v-img src="https://picsum.photos/350/165?random" height="125" contain
                                            style="background-color: #FF6E40"></v-img>
                                        <v-card-subtitle style="background: #FF6E40;">Lorem ipsum
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

                <v-divider></v-divider>

                <v-lazy v-model="isActive" :options="{
                    threshold: .5
                }" min-height="200" transition="fade-transition">
                    <v-row class="pa-6">
                        <v-col>
                            <template>
                                <v-card class="rounded-xl mx-auto" max-width="600" color="##BF360C" dark
                                    elevation="10">
                                    <v-card-title class="text-h5 text-center font-weight-black">
                                        Another section...
                                    </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-subtitle style="background: #FF6E40;">Lorem ipsum dolor
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

            </v-responsive>
        </v-parallax>

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