<template>
  <main>
    <h1>
      {{ data.page.value.title }}
    </h1>
    <ContentDoc />
  </main>
</template>
<script lang="ts" setup>
const data = useContent()

const init = () => {
};
</script>
