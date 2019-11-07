<template>
  <div style="width: 100%;
        height: 100%;" id="app">
    <!-- <router-view/> -->



    <router-view v-if="qwer">
    </router-view>
    
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      qwer: true
    };
  },
  methods: {
    reload() {
      this.qwer = false;
      this.$nextTick(() => {
        this.qwer = true;
      });
    }
  }
};
</script>