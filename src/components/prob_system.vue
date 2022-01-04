<template>
  <b-container>
      <b-row>
          <b-col></b-col>
          <b-col cols="6">
            <div class="enclose headerbg">
                <Header />
            </div>
            <form @submit.prevent="onSelect(systemSub)" autocomplete="off" ref="myForm">
                <div class="enclose sidebg">
                    <b-form-radio-group v-slot="{ ariaDescribedby }" v-model="systemSub">
                        <label><h5> Application/System </h5></label><br>
                        <p class="plabel">Please select One</p>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.systemSub.$model" :class="{'is-invalid': validationStatus($v.systemSub)}" name="CSU Portal" value="CSU Portal"><span style="margin-left:10px"></span> CSU Portal </b-form-radio> <br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.systemSub.$model" :class="{'is-invalid': validationStatus($v.systemSub)}" name="Teams" value="Teams"><span style="margin-left:10px"></span> Teams </b-form-radio><br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.systemSub.$model" :class="{'is-invalid': validationStatus($v.systemSub)}" name="Google Meet" value="Google Meet"><span style="margin-left:10px"></span> Google Meet </b-form-radio><br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.systemSub.$model" :class="{'is-invalid': validationStatus($v.systemSub)}" name="Zoom" value="Zoom"><span style="margin-left:10px"></span> Zoom </b-form-radio> <br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.systemSub.$model" :class="{'is-invalid': validationStatus($v.systemSub)}" name="Edmodo" value="Edmodo"><span style="margin-left:10px"></span> Edmodo </b-form-radio><br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.systemSub.$model" :class="{'is-invalid': validationStatus($v.systemSub)}" name="Discord" value="Discord"><span style="margin-left:10px"></span> Discord </b-form-radio><br>
                        <div v-if="!$v.systemSub.required" class="invalid-feedback">Choose one</div>
                        <b-form-radio @change="enableInputOthers()" type="button" :aria-describedby="ariaDescribedby" v-model="systemSub" name="some-radios" value="Others" v-model.trim="$v.systemSub.$model" :class="{'is-invalid': validationStatus($v.systemSub)}"> <span style="margin-left:10px"></span> Others: </b-form-radio>
                        <b-input id="inputOthers" name="inputOthers" ref="inputOthers" type="text"></b-input>
                    </b-form-radio-group>
                </div>
                <b-row>
                    <b-col cols="4">
                      <b-nav pills>
                        <b-button variant="warning" type="submit" active> Next </b-button>
                      </b-nav>
                    </b-col>
                    <b-col cols="3">
                        <b-progress height="10px" variant="warning" :value="value" class="mb-3 mt-3"></b-progress>
                    </b-col>
                    <b-col cols="2" class="mt-2"> <span class="page">Page 2 of 3</span> </b-col>
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
import Header from '../components/Header.vue'
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'prob_system',
    components: {
        Header
    },
    data: function () {
        return {
            systemSub: '',
            value: 66.66
        }
    },
    validations: {
        systemSub: { required }
    },
    methods: {
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },
        onSelect(systemSub) {
            if(systemSub) {
                /* this.$store.commit('connectivityStore', {connectivitySub: this.connectivitySub})  */
                setTimeout( () => this.$router.push({ path: '/subpage'}),1000)
            }
            console.log('No data')
            this.$v.$touch()
            if (this.$v.$pendding || this.$v.$error) return
            this.$v.$reset()
        },
        enableInputOthers: function() {
            this.$refs.inputOthers.focus();
            console.log('Focus on me')
        },
        clearForm(){
            alert('Clear Form')
            this.$refs.myForm.reset()
            window.location.reload()
        },
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
</style>