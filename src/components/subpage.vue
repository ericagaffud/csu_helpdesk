<template>
  <b-container>
      <b-row>
          <b-col></b-col>
          <b-col cols="6">
            <div class="enclose headerbg">
            <Header /> 
            </div>
            <form @submit.prevent="submit()" ref="myForm" autocomplete="off">
                <div class="enclose sidebg">
                    <b-form-group
                        id="name"
                        label-for="name"
                        v-model="description"
                        >
                    <label> Problem Description <span style="color:red">*</span> </label>
                    <p class="plabel">Describe your problem</p>
                    <b-form-input id="description" name="description" v-model="description" v-model.trim="$v.description.$model" :class="{'is-invalid': validationStatus($v.description)}"></b-form-input>
                    <div v-if="!$v.description.required" class="invalid-feedback">This field is required.</div>
                    </b-form-group>  
                </div>
                <b-row>
                    <b-col cols="4">
                        <b-nav pills fill>
                            <b-button variant="warning" @click="$router.go(-1)" active class="drivebutton"> Back </b-button>
                            <b-nav-item disabled></b-nav-item>
                            <b-button variant="warning" type="submit" active class="drivebutton"> Next </b-button>
                        </b-nav>
                    </b-col>
                    <b-col cols="3">
                        <b-progress height="10px" variant="warning" :value="value" class="mb-3 mt-3"></b-progress>
                    </b-col>
                    <b-col cols="2" class="mt-2"> <span class="page">Page 3 of 4</span> </b-col>
                    <b-col cols="3">
                      <b-button variant="warning" @click="clearForm"> Clear Form </b-button>
                    </b-col>
                </b-row>
            </form>
          </b-col>
          <b-col></b-col>
      </b-row>
  </b-container>
</template>

<script>
import Header from './Header.vue'
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'SubPage',
    components: {
        Header
    },
    data() {
        return {
            value: 75,
            description: ''
        }
    },
    validations: {
        description: { required }
    },
    mounted: function() {
        this.description = this.$store.state.description
    },

    methods: {
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },

        submit() {
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return

            const temp = {
                description: this.description
            }
            this.$store.commit('subStore', temp)

            setTimeout( () => this.$router.push({ path: '/confirmation'}),1000)
        },
        
        clearForm(){
            alert('Clear Form')
            this.$refs.myForm.reset()
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

.progress {
  background-color: white;
}

.row {
  margin: 10px;
}

input {
  outline: 0;
  border-width: 0 0 2px;
  border-color: gainsboro;
}

.plabel {
  font-size: small;
}

.page {
    font-size: small;
    color: rgba(255, 255, 0, 0.637);
}

.drivebutton {
  width: 40%;
}
</style>