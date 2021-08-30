<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form class="flex flex-col space-y-6" @submit.prevent="onSubmit">
        <!-- //Todo: Giao dien full name -->
        <div class="row">
          <label class="flex flex-col" for="fullName">Họ và tên</label>
          <input
            id="fullName"
            type="text"
            class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-full"
            placeholder="Lưu Tuấn Hoàng"
          />
        </div>
        <!-- //Todo: Giao dien Email -->
        <div class="row">
          <label class="flex flex-col" for="email">Email</label>
          <input
            id="email"
            type="email"
            autocomplete="username"
            class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-full"
            placeholder="hoanglt.gis@gmail.com"
          />
        </div>
        <!-- //Todo: Giao dien password -->
        <div class="row">
          <label class="flex flex-col" for="passWord">Mật khẩu</label>
          <input
            id="passWord"
            type="password"
            autocomplete="password"
            class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-full"
            placeholder="Mật khẩu"
          />
        </div>
        <div class="row">
          <button
            type="submit"
            class="
              py-3
              text-center
              w-full
              bg-primary
              text-white
              font-bold
              rounded-lg
            "
          >
            Đăng ký
          </button>
        </div>
      </form>

      <div class="w-full text-center mt-6">
        <span class="font-bold">Tôi đã thành viên.</span>
        <router-link
          :to="{ name: 'Login', params: {} }"
          class="
            font-bold
            text-success
            ml-1
            hover:underline hover:cursor-pointer hover:text-primary
          "
          >Đăng nhập</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    function onSubmit() {}
    return { onSubmit };
  },
};
</script>

<style lang="css" scoped></style>
