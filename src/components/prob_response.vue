<template>
  <b-container>
      <b-row>
          <b-col></b-col>
          <b-col cols="6">
            <div class="enclose headerbg">
                <Header />
            </div>
            <form @submit.prevent="onSelect(responseSub)" autocomplete="off" ref="myForm">
                <div class="enclose sidebg">
                    <b-form-radio-group v-slot="{ ariaDescribedby }" v-model="responseSub">
                        <label><h5> COVID Response </h5></label><br>
                        <p class="plabel">Please select One</p>
                        <p class="category"> <strong> Health Protocol </strong></p>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.responseSub.$model" :class="{'is-invalid': validationStatus($v.responseSub)}" value="No Social Distancing"><span style="margin-left:10px"></span> No Social Distancing </b-form-radio> <br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.responseSub.$model" :class="{'is-invalid': validationStatus($v.responseSub)}" value="Improper use of face mask"><span style="margin-left:10px"></span> Improper use of face mask </b-form-radio><br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.responseSub.$model" :class="{'is-invalid': validationStatus($v.responseSub)}" value="Not using face shield"><span style="margin-left:10px"></span> Not using face shiled </b-form-radio><br>
                        <p class="category"> <strong> COVID Status (symptoms) </strong></p>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.responseSub.$model" :class="{'is-invalid': validationStatus($v.responseSub)}" value="Classmate with symptoms"><span style="margin-left:10px"></span> Teacher with symptoms </b-form-radio> <br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.responseSub.$model" :class="{'is-invalid': validationStatus($v.responseSub)}" value="Teacher with symptoms"><span style="margin-left:10px"></span> Classmate with symptoms </b-form-radio><br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.responseSub.$model" :class="{'is-invalid': validationStatus($v.responseSub)}" value="Student with symptoms"><span style="margin-left:10px"></span> Schoolmate with symptoms </b-form-radio><br>
                        <p class="category"> <strong> Others </strong></p>
                        <b-form-radio @change="enableInputOthers()" type="button" :aria-describedby="ariaDescribedby" v-model="responseSub" name="some-radios" value="Others" v-model.trim="$v.responseSub.$model" :class="{'is-invalid': validationStatus($v.responseSub)}"> <span style="margin-left:10px"></span> Please specify: </b-form-radio>
                        <b-input id="inputOthers" name="inputOthers" ref="inputOthers" type="text"></b-input>
                        <div v-if="!$v.responseSub.required" class="invalid-feedback">Choose one</div>
                    </b-form-radio-group>
                </div><br>
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
                    <b-col cols="2" class="mt-2"> <span class="page">Page 2 of 4</span> </b-col>
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
    name: 'prob_response',
    components: {
        Header
    },
    data: function () {
        return {
            responseSub: '',
            value: 50
        }
    },
    validations: {
        responseSub: { required }
    },
    mounted: function() {
        this.responseSub = this.$store.state.responseSub
    },
    methods: {
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },
        onSelect(responseSub) {
            if(responseSub) {
                this.$store.commit('responseStore', {responseSub: this.responseSub}) 
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

.category {
    font-style: italic;
}

.page {
    font-size: small;
    color: rgba(255, 255, 0, 0.637);
}

.drivebutton {
  width: 40%;
}
</style>