<template>
  <b-container>
      <b-row>
          <b-col></b-col>
          <b-col cols="6">
            <div class="enclose headerbg">
                <Header />
            </div>
            <form>
                <div class="enclose sidebg">
                    <b-form-group
                    id="name"
                    label-for="name"
                    >
                        <label for="name"> <h6> Name <span style="color:red">*</span></h6> </label><br>
                        <p class="plabel">First Name, Middle Initial, Last Name</p>
                        <b-form-input name="name" id="name" v-model="name"></b-form-input>
                    </b-form-group>
                </div>
                <div class="enclose sidebg">
                    <b-form-group
                    id="email"
                    label-for="email"
                    >
                        <label for="email"> <h6> Email <span style="color:red">*</span></h6> </label><br>
                        <p class="plabel">Enter valid email</p>
                        <b-form-input name="email" id="email" v-model="email"></b-form-input>
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
                        v-model="college"
                        class="p-2"
                        >
                            <option value="none">Select College</option>
                        </b-form-select>
                    </b-form-group>
                </div>
                <div class="enclose sidebg">
                    <b-form-group
                    id="coyear"
                    label-for="coyear"
                    >
                        <label for="coyear"> <h6> Course and Year <span style="color:red">*</span></h6> </label><br>
                        <b-form-input name="coyear" id="coyear" v-model="coyear"></b-form-input>
                    </b-form-group>
                </div>
                <div class="enclose sidebg">
                    <b-form-group
                    id="phone"
                    label-for="phone"
                    >
                        <label for="phone"> <h6> Phone Number <span style="color:red">*</span></h6> </label><br>
                        <p class="plabel">Enter valid number</p>
                        <b-form-input name="phone" id="phone" v-model="phone"></b-form-input>
                    </b-form-group>
                </div>
                <div class="enclose sidebg">
                    <b-form-radio-group v-slot="{ ariaDescribedby }" v-model="selectProblem">
                        <label for="phone"> <h6> Problem Category <span style="color:red">*</span></h6> </label><br>
                        <p class="plabel">Please select One</p>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model="selectProblem" name="" value=""><span style="margin-left:10px"></span> Application/System </b-form-radio> <br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model="selectProblem" name="" value=""><span style="margin-left:10px"></span> Academic Problem </b-form-radio><br>
                        <b-form-radio :aria-describedby="ariaDescribedby" v-model="selectProblem" name="" value=""><span style="margin-left:10px"></span> COVID Response</b-form-radio><br>
                    </b-form-radio-group>
                </div>
                <b-row>
                    <b-col cols="4">
                      <b-nav pills>
                        <b-button variant="warning" type="submit" active :disabled="clicked"> Next </b-button>
                      </b-nav>
                    </b-col>
                    <b-col cols="3">
                        <b-progress height="10px" variant="warning" :value="value" class="mb-3 mt-3"></b-progress>
                    </b-col>
                    <b-col cols="2" class="mt-2"> <span class="page">Page 1 of 3</span> </b-col>
                    <b-col cols="3">
                      <b-button variant="warning"> Clear Form </b-button>
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

export default {
    name: 'Home',
    components: {
        Header
    },
    data: function() {
        return {
            name: '',
            email: '',
            colledge: '',
            coyear: '',
            phone: '',
            selectProblem: '',
            value: 33.33
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
    border-width: 15px 1px 1px;
}

.sidebg {
    border:1px solid maroon;
}

.progress {
  background-color: gray;
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
    color: yellow;
}
</style>