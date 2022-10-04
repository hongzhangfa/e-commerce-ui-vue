<template>
  <div class="adminPanel container">
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
.adminPanel{
  display : flex;
  flex-direction: column;
  align-items: center;
}
.adminPanel button{
  font-size: 30px;
  width: fit-content;
  margin: 55px 0;
}

.btn {
    margin-bottom: 20px;
}
</style>