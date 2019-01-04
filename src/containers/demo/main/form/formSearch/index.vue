<template lang="html">
  <div class="demo-form-search">
    <NormalSearch />
    <LinkageSearch />
    <CacheSearch />
    <InnerGetSelect />
    <TimeSearch />
    <ValidateSearch />
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex';
  import TimeSearch from './extends/TimeSearch.vue';
  import CacheSearch from './extends/CacheSearch.vue';
  import NormalSearch from './extends/NormalSearch.vue';
  import LinkageSearch from './extends/LinkageSearch.vue';
  import InnerGetSelect from './extends/InnerGetSelect.vue';
  import ValidateSearch from './extends/ValidateSearch.vue';
  export default {
    beforeMount () {
      if(!this.CACHE_TYPE.length){
        this.getCacheSelect({
          axiosName : 'cacheSelect',
          selectName : 'cacheType'
        })
      }
    },
    components : {
      TimeSearch,
      CacheSearch,
      NormalSearch,
      LinkageSearch,
      InnerGetSelect,
      ValidateSearch
    },
    computed : {
      ...mapGetters([
        'CACHE_TYPE'
      ])
    },
    methods : {
      ...mapActions([
        'getCacheSelect'
      ])
    }
  }
</script>

<style lang="scss">
</style>
