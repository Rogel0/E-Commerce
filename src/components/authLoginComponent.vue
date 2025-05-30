<template>
  <el-dialog
    v-model="props.modelValue"
    @close="emit('update:visible', false)"
    align-center
    width="450"
  >
    <el-tabs stretch>
      <el-tab-pane label="Password">
        <el-form style="padding-inline: 20px; padding-top: 10px; padding-bottom: 20px">
          <el-form-item>
            <el-input placeholder="Please enter your Phone or Email" class="input" />
          </el-form-item>
          <el-form-item>
            <el-input placeholder="Please enter your password" class="input" show-password />
            <el-text style="width: 100%; text-align: end"><a href="">Forgot Password?</a></el-text>
          </el-form-item>

          <el-row>
            <el-col align="center">
              <el-button style="width: 100%" class="login-btn">Login</el-button>
            </el-col>
            <el-col style="margin-top: 20px" align="center">
              <el-text style="margin-top: 20px"
                >Don't have an account? <span><a href="" class="signup">Sign up</a></span></el-text
              >
            </el-col>
            <el-col style="padding-top: 40px" align="center">
              <el-text>Or, login with</el-text>
            </el-col>
            <el-row style="width: 100%; margin-top: 20px">
              <el-col :span="12" align="center">
                <el-image
                  :src="Google"
                  alt="Google"
                  style="width: 24px; vertical-align: middle; margin-right: 8px"
                />
                <el-text>Google</el-text>
              </el-col>
              <el-col :span="12" align="center">
                <el-image
                  :src="Facebook"
                  alt="Facebook"
                  style="width: 24px; vertical-align: middle; margin-right: 8px"
                />
                <el-text>Facebook</el-text>
              </el-col>
            </el-row>
          </el-row>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Phone Number"></el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script setup lang="ts">
import Google from '@/assets/svg/google.svg'
import Facebook from '@/assets/svg/facebook.svg'
const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits(['update:visible'])
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

:deep(.el-tabs__active-bar) {
  display: none;
}
:deep(.el-tabs__nav-wrap::after) {
  display: none;
}

:deep(.el-tabs__nav) {
  position: relative;
}
:deep(.el-tabs__nav)::before {
  content: '';
  position: absolute;
  top: 20%;
  bottom: 20%;
  left: 50%;
  width: 1px;
  background: #e5e7ea;
  transform: translateX(-50%);
  z-index: 1;
}

:deep(.is-active) {
  color: #39b97e !important;
  font-weight: 600 !important;
}

:deep(.el-tabs__item) {
  font-family: 'Poppins', sans-serif;
  color: #aeafb3;
  font-weight: 600;
}

.input {
  /* box-shadow: 2px 2px 8px 0 #39b97e33; */
  border-radius: 5px;
  height: 50px;
}

.login-btn {
  height: 45px;
  color: white;
  background-color: #f57224;
  font-size: 1.2em;
  font-weight: 600;
  border-radius: 10px;
}

a {
  text-decoration: none;
  color: #aeafb3;
}

.signup {
  color: #68a0ff !important;
}
</style>
