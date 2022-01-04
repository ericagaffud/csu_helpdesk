<template>
  <b-container>
      <b-row>
          <b-col></b-col>
          <b-col cols="6">
            <div class="enclose headerbg">
                <Header />
            </div>
            <form v-on:submit.prevent="issue()" autocomplete="off" ref="myForm">
                <div class="enclose sidebg">
                    <b-form-group
                    id="name"
                    label-for="name"
                    >
                        <label for="name"> <h6> Name <span style="color:red">*</span></h6> </label><br>
                        <p class="plabel">First Name, Middle Initial, Last Name</p>
                        <b-form-input name="name" id="name" v-model.trim="$v.name.$model" :class="{'is-invalid': validationStatus($v.name)}"></b-form-input>
                        <div v-if="!$v.name.required" class="invalid-feedback">This field is required.</div>
                    </b-form-group>
                </div>
                <div class="enclose sidebg">
                    <b-form-group
                    id="email"
                    label-for="email"
                    >
                        <label for="email"> <h6> Email <span style="color:red">*</span></h6> </label><br>
                        <p class="plabel">Enter valid email</p>
                        <b-form-input name="email" id="email" v-model.trim="$v.email.$model" :class="{'is-invalid': validationStatus($v.email)}"></b-form-input>
                        <div v-if="!$v.email.required" class="invalid-feedback">This field is required.</div>
                        <!-- <div v-if="!$v.email.email" class="invalid-feedback"> Email requires @gmail.com extension </div> -->
                    </b-form-group>
                </div>
                <div class="enclose sidebg">
                    <b-form-group
                    id="college"
                    label-for="college"
                    >
                        <label for="college"> <h6> College <span style="color:red">*</span></h6> </label><br><br>
                        <b-form-select
                        id="college"
                        name="college"
                        v-model.trim="$v.college.$model"
                        :class="{'is-invalid': validationStatus($v.college)}"
                        class="p-2"
                        >
                            <option value="">Select College</option>
                            <option :value="c.name" :key="c.name" v-for="c in colleges">{{ c.name }}</option>
                        </b-form-select>
                        <div v-if="!$v.college.required" class="invalid-feedback">This field is required.</div>
                    </b-form-group>
                </div>
                <div class="enclose sidebg">
                    <b-form-group
                    id="coyear"
                    label-for="coyear"
                    >
                        <label for="coyear"> <h6> Course, Year and Section <span style="color:red">*</span></h6> </label><br>
                        <p class="plabel">Ex. BSCpE 4A</p>
                        <b-form-input name="coyear" id="coyear" v-model.trim="$v.coyear.$model" :class="{'is-invalid': validationStatus($v.coyear)}"></b-form-input>
                        <div v-if="!$v.coyear.required" class="invalid-feedback">This field is required.</div>
                    </b-form-group>
                </div>
                <div class="enclose sidebg">
                    <b-form-group
                    id="phone"
                    label-for="phone"
                    >
                        <label for="phone"> <h6> Phone Number <span style="color:red">*</span></h6> </label><br>
                        <p class="plabel">Enter valid number</p>
                        <b-form-input name="phone" id="phone" v-model.trim="$v.phone.$model" :class="{'is-invalid': validationStatus($v.phone)}"></b-form-input>
                        <div v-if="!$v.phone.required" class="invalid-feedback">This field is required.</div>
                    </b-form-group>
                </div>
                <div class="enclose sidebg">
                    <b-form-radio-group v-slot="{ ariaDescribedby }" v-model="selectProblem">
                        <label for="phone"> <h6> Problem Category <span style="color:red">*</span></h6> </label><br>
                        <p class="plabel">Please select One</p>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.selectProblem.$model" :class="{'is-invalid': validationStatus($v.selectProblem)}" name="Application/System" value="Application/System"><span style="margin-left:10px"></span> Application/System </b-form-radio> <br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.selectProblem.$model" :class="{'is-invalid': validationStatus($v.selectProblem)}" name="Academic Problem" value="Academic Problem"><span style="margin-left:10px"></span> Academic Problem </b-form-radio><br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model.trim="$v.selectProblem.$model" :class="{'is-invalid': validationStatus($v.selectProblem)}" name="COVID Response" value="COVID Response"><span style="margin-left:10px"></span> COVID Response</b-form-radio><br>
                        <div v-if="!$v.selectProblem.required" class="invalid-feedback">This field is required.</div>
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
                    <b-col cols="2" class="mt-2"> <span class="page">Page 1 of 3</span> </b-col>
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
    name: 'Home',
    components: {
        Header
    },
    data: function() {
        return {
            name: '',
            email: '',
            college: '',
            coyear: '',
            phone: '',
            selectProblem: '',
            value: 33.33,
            colleges: []
        }
    },
    validations: {
        name: { required },
        email: { required },
        college: { required },
        coyear: { required },
        phone: { required },
        selectProblem: { required }
    },
    mounted: function() {
        var v = this;
        v.$http.get(`http://localhost:5000/colleges`)
        .then(function(resp) {
            v.colleges = resp.data
        })
        .catch(function(err) {
            console.log(err)
        });
    },
    methods: {
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false
        },

        issue () {
            this.onSelectRad()
        },

        onSelectRad() {
            if(this.selectProblem == 'Application/System'){
                setTimeout( () => this.$router.push({ path: '/problem_system'}), 1000) 
            }
            else if (this.selectProblem == 'Academic Problem'){
                setTimeout ( () => this.$router.push({ path: '/problem_academic'}), 1000) 
            }
            else if (this.selectProblem == 'COVID Response'){
                setTimeout( () => this.$router.push({ path: '/problem_response'}), 1000)
            }
        },

        submit: function() {

            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return

            alert('Data Submit');
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

select {
  width: 100%;
}

.plabel {
  font-size: small;
}

.page {
    font-size: small;
    color: rgba(255, 255, 0, 0.637);
}
</style>