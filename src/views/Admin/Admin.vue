<template>
  <div>
    <router-link :to="{name : 'AdminProduct'}">
    <button type="button" class="btn btn-primary btn-lg">Admin Products</button>
    </router-link>
<br/>
    <router-link :to="{name : 'AdminCategory'}">
        <button type="button" class="btn btn-primary btn-lg">Admin Categories</button>
      </router-link>

  </div>
</template>

<script>
    /* eslint-disable */
export default {
    name: "Admin"
}
</script>

<style>

.btn {
    margin-bottom: 20px;
}
</style>