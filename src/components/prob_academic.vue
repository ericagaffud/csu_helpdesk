<template>
  <b-container>
      <b-row>
          <b-col></b-col>
          <b-col cols="6">
            <div class="enclose headerbg">
                <Header />
            </div>
            <form @submit.prevent="onSelect(academicSub)" autocomplete="off" ref="myForm">
                <div class="enclose sidebg">
                    <b-form-radio-group v-slot="{ ariaDescribedby }" v-model="academicSub">
                        <label><h5> Academic Problem </h5></label><br>
                        <p class="plabel">Please select One</p>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.academicSub.$model" :class="{'is-invalid': validationStatus($v.academicSub)}" name="Grade" value="Grade"><span style="margin-left:10px"></span> Grade </b-form-radio> <br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.academicSub.$model" :class="{'is-invalid': validationStatus($v.academicSub)}" name="Professor" value="Professor"><span style="margin-left:10px"></span> Professor </b-form-radio><br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.academicSub.$model" :class="{'is-invalid': validationStatus($v.academicSub)}" name="Schedule" value="Schedule"><span style="margin-left:10px"></span> Schedule </b-form-radio><br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.academicSub.$model" :class="{'is-invalid': validationStatus($v.academicSub)}" name="Subject" value="Subject"><span style="margin-left:10px"></span> Subject </b-form-radio> <br>
                        <b-form-radio @change="enableInputOthers()" type="button" :aria-describedby="ariaDescribedby" v-model="academicSub" name="some-radios" value="Others" v-model.trim="$v.academicSub.$model" :class="{'is-invalid': validationStatus($v.academicSub)}"> <span style="margin-left:10px"></span> Others: </b-form-radio>
                        <b-input id="inputOthers" name="inputOthers" ref="inputOthers" type="text"></b-input>
                        <div v-if="!$v.academicSub.required" class="invalid-feedback">Choose one</div>
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
    name: 'prob_academic',
    components: {
        Header
    },
    data: function () {
        return {
            academicSub: '',
            value: 50
        }
    },
    validations: {
        academicSub: { required }
    },
    mounted: function() {
        this.academicSub = this.$store.state.academicSub
    },
    methods: {
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
        },
        onSelect(academicSub) {
            if(academicSub) {
                this.$store.commit('academicStore', {academicSub: this.academicSub}) 
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