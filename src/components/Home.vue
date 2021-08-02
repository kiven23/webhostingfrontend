<template>
  <div class="q-pa-md bg-grey-9">
    <q-layout view="lHh lpr lFf">
      <q-header bordered class="bg-grey-10 text-primary">
        <q-toolbar class="text-center">
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>
            <img
              src="/icon/CLOUDTTPD-BLACK-BACKGROUD.png"
              style="width: 260px"
            />
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
       <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        mini-to-overlay
        :width="155"
        :breakpoint="500"
        content-class="bg-grey-10"
        class="text-white"
      >
        <q-scroll-area class="fit">
          <q-list padding>

            <q-item clickable v-ripple to="/messagecast/branch/index" >
              <q-item-section avatar>
                <q-icon name="fas fa-home" color="orange-1" />
  
              </q-item-section >
                 <q-item-section>DashBoard</q-item-section>
            </q-item>
 

            <q-item clickable v-ripple to="/settings">
              <q-item-section avatar>
                <q-icon name="fas fa-cogs" color="orange-1" />
              </q-item-section>

              <q-item-section>Settings</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page class="q-pa-md">
           
        
        </q-page>
      </q-page-container>
      <q-footer bordered class="bg-grey-10 text-white" style="margin-bottom: 5px">
         <q-label> © Copyright 2021 Cloudttpd.com | Web Hosting | Stevefox_Linux </q-label>
      </q-footer>
    </q-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
       name: null,
      inception: false,
      drawer: false,
      miniState: true,
      showing: false,
      invnty:  false,
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