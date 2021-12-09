<template>
  <body>
    <div id="smartphone">
      <div id="homeScreen">
        <TopBar />
        <div id="apps">
          <router-link to="/settings">
            <div class="app" id="appSettings">
              <!-- <Icon > -->
              <SettingsTwotone />
              <!-- </Icon> -->
            </div>
          </router-link>
          <div class="app" id="appChargeButton"></div>
          <div class="app" id="appAirplaneButton"></div>
        </div>
        <HotBar />
        <HomeButton />
      </div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style>
</style>