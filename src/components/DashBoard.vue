<template>
  <div class="q-pa-md bg-grey-9">
    <q-layout view="lHh lpr lFf">
      <q-header bordered class="bg-grey-10 text-primary">
        <q-toolbar class="text-center">
          <q-toolbar-title>
            <img
              src="/icon/CLOUDTTPD-BLACK-BACKGROUD.png"
              style="width: 260px"
            />
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="features" class="bg-grey-9">
              <div class="text-h4 q-mb-md text-white">Features</div>
              <q-carousel
                v-model="slide"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                control-color="black"
                padding
                arrows
                height="350px"
                class="bg-white text-white shadow-1 rounded-borders"
              >
         

                <q-carousel-slide
                  name="style"
                  class="column no-wrap flex-center"
                >
                  <img src="icon/softaculous_logo.png">
                  <div class="q-mt-md text-center text-black">
                   <strong>Glad to introduce Softaculous Auto Installer:</strong><br>
                   Softaculous is one of the best Auto Installers.
                    It has 426 apps like Wordpress, Joomla, PrestaShop, phpBB available 
                    for Vesta Control Panel and still adding more. 
                    
                  </div>
                </q-carousel-slide>
                <q-carousel-slide name="tv" class="column no-wrap flex-center">
                  <img src="icon/Google-Ads-Logo.jpg" style="width: 100px;">
                  <div class="q-mt-md text-center  text-black">
                    <strong>No Forced Ads</strong><br>
                    Your website is your own, we will never force advertisements on your website.
                  </div>
                </q-carousel-slide>
                <q-carousel-slide
                  name="layers"
                  class="column no-wrap flex-center"
                >
                  <img src="icon/domain.jpg" style="width: 100px;">
                  <div class="q-mt-md text-center text-black">
                   <strong>Host Any Domain</strong><br>
                   Bring your own domain name or pick a free subdomain name site Domain *.cloudttpd.com.
                  </div>
                </q-carousel-slide>
                <q-carousel-slide name="map" class="column no-wrap flex-center">
                  <img src="icon/ssl.jpeg" style="width: 400px;">
                  <div class="q-mt-md text-center text-black">
                   Free SSL
                  </div>
                </q-carousel-slide>
     
              </q-carousel>
            </q-tab-panel>
            <q-tab-panel name="pricing" class="bg-grey-9">
              <div class="text-h4 q-mb-md text-white">Pricing</div>
              <q-carousel
                v-model="pricing"
                transition-prev="slide-left"
                transition-next="slide-right"
                swipeable
                animated
                control-color="white"
                padding
                arrows
                height="500px"
                class="bg-grey-9 text-white"
               
              >
                <q-carousel-slide
                  name="style"
                  class="column no-wrap flex-center text-black"
                >
                
                  <div class="q-mt-md text-center text-black" style="width: 400px">
                        <q-card class="my-card" flat bordered style="margin-top: -200px">
                          <q-card-section horizontal>
                            <q-card-section class="q-pt-xs">
                              <div class="text-overline">FREE TIERS</div>
                              <!-- <div class="text-h5 q-mt-sm q-mb-xs">Title</div> -->
                              <div class="text-caption text-black">
                                <q-icon name="check" color="green" size="20px"/> <strong>REMOTE SQL</strong><br>
                                <q-icon name="check" color="green" size="20px"/>  <strong>FREE SSL</strong><br>
                                <q-icon name="check" color="green" size="20px"/>  <strong>1GB STORAGE</strong><br>
                                <q-icon name="check" color="green" size="20px"/>  <strong>1 FTP</strong><br>
                                <q-icon name="check" color="green" size="20px"/>  <strong>1 MAIL</strong><br>
                                <q-icon name="check" color="green" size="20px"/>  <strong>1 SUB DOMAIN</strong><br>
                                <q-icon name="check" color="green" size="20px"/>  <strong>UNLIMITED BANDWIDTH</strong>
                              </div>
                            </q-card-section>

                            <q-card-section class="col-5 flex flex-center">
                              <q-img
                                class="rounded-borders"
                                src="https://cdn.quasar.dev/img/parallax2.jpg"
                              />
                            </q-card-section>
                          </q-card-section>
                          
                      <q-separator />
                        <q-card-actions class="justify-center">
                            <q-btn dense rounded color="teal" @click="pricing = 'map1'">
                              START FOR FREE
                            </q-btn>
                          </q-card-actions>
                        </q-card>
                  </div>
                </q-carousel-slide>
                 <q-carousel-slide name="map1" class="column no-wrap flex-center">
                   
                  <div class="q-mt-md text-center text-black">
                      register
                   </div>
                </q-carousel-slide>
              </q-carousel>
            </q-tab-panel>
            <q-tab-panel name="about">
              <div class="text-h4 q-mb-md">About</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>
            <q-tab-panel dark name="login" class="bg-grey-9">
              <div class="q-pa-md row items-start q-gutter-md justify-center">
                <q-card class="my-card">
                  <q-card-section>
                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="mail"
                        label="Mail *"
                        hint="Email"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please input email',
                        ]"
                      />

                      <q-input
                        filled
                        type="password"
                        v-model="password"
                        label="Your Pass *"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val !== null && val !== '') ||
                            'Please input password',
                        ]"
                      />

                      <q-toggle
                        v-model="accept"
                        label="I accept the license and terms"
                      />

                      <div>
                        <q-btn label="Login" type="submit" color="primary" />
                        <q-btn
                          label="Reset"
                          type="reset"
                          color="primary"
                          flat
                          class="q-ml-sm"
                        />
                      </div>
                    </q-form>
                  </q-card-section>
                </q-card>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        
        </q-page>
      </q-page-container>
      <q-footer bordered class="bg-grey-10 text-primary">
        <q-tabs
          no-caps
          active-color="primary"
          indicator-color="transparent"
          class="text-white"
          v-model="tab"
        >
          <q-tab name="features" label="FEATURES" />
          <q-tab name="pricing" label="PRICING" />
          <q-tab name="about" label="ABOUT" />
          <q-tab name="login" label="LOGIN" />
        </q-tabs>
      </q-footer>
    </q-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: "features",
      mail: null,
      tiers: true,
      password: null,
      accept: false,
      slide: "style",
      pricing: "style",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?",
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },
    register(){

    },

    onReset() {
      this.mail = null;
      this.password = null;
      this.accept = false;
    },
  },
};
</script>