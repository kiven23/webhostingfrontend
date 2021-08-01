<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
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
            <q-tab-panel name="features">
              <div class="text-h4 q-mb-md">Features</div>
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
            <q-tab-panel name="pricing">
              <div class="text-h4 q-mb-md">Pricing</div>
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
            <q-tab-panel name="login">
              <div class="text-h4 q-mb-md" style="text-center">
                  <div class="q-pa-md" style="max-width: 400px">
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                  <q-input
                    filled
                    v-model="name"
                    label="Your name *"
                    hint="Name and surname"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type something',
                    ]"
                  />

                  <q-input
                    filled
                    type="number"
                    v-model="age"
                    label="Your age *"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') || 'Please type your age',
                      (val) =>
                        (val > 0 && val < 100) || 'Please type a real age',
                    ]"
                  />

                  <q-toggle
                    v-model="accept"
                    label="I accept the license and terms"
                  />

                  <div>
                    <q-btn label="Submit" type="submit" color="primary" />
                    <q-btn
                      label="Reset"
                      type="reset"
                      color="primary"
                      flat
                      class="q-ml-sm"
                    />
                  </div>
                </q-form>
                </div>
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
      name: null,
      age: null,

      accept: false,
    }
    
  },
   methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
   }
};
</script>