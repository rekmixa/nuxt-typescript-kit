<template>
  <div>Hello, World!</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'index',
  head: {
    title: 'Hello, World!',
  },
})
export default class extends Vue {}
</script>
