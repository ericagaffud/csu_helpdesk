<template>
  <b-container>
      <b-row>
          <b-col></b-col>
          <b-col cols="6">
            <div class="enclose headerbg">
            <Header /> 
            </div>
            <div class="enclose sidebg">
                <br><h5> Thank you! We'll get back to you.</h5><br>
            </div>
            <div>
                <b-row>
                    <b-col></b-col>
                    <b-col cols="5">
                        <br>
                        <b-button variant="warning" to="/" @click="reloadpage()">
                            Submit Another Response
                        </b-button>
                    </b-col>
                    <b-col cols="3">
                        <br>
                        <b-button variant="warning" @click="datapage()">
                            See All Data
                        </b-button>
                    </b-col>
                    <b-col></b-col>
                </b-row>
                <br><br>
            </div>
          </b-col>
          <b-col></b-col>
      </b-row>
  </b-container>
</template>

<script>
import Header from './Header.vue'

export default {
    name: 'SubPage',
    components: {
        Header
    },
    methods: {
        reloadpage() {
            window.location.reload()
        },
        datapage() {
            setTimeout( () => this.$router.push({ path: '/datapage'}),1000)
            this.submitIssue()
        }
    }
}
</script>

<style scoped>
.enclose {
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  padding: 25px 25px;
}

.headerbg {
    border: solid maroon;
    border-width: 20px 1px 1px;
}

.sidebg {
    border:1px solid maroon;
}

h5 {
    text-align: center;
}
</style>