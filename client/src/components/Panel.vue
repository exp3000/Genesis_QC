<template>
    <div class="white elevation-2 panel">
        <v-toolbar flat
                   dense
                   class="cyan">
            <v-toolbar-title class="mr-4">{{title}}</v-toolbar-title>
            <slot name = "action" />

        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
            <slot>No Slot Defined</slot>
        </div>
    </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style>
.panel{
    margin: 10px;
}


</style>
