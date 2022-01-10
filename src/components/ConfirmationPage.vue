<template>
  <b-container>
      <b-row>
          <b-col></b-col>
          <b-col cols="7">
            <div class="enclose headerbg">
                <Header />
            </div>
            <div class="enclose sidebg">
                <h4>These are your data.</h4><br>
                <b-row>
                    <b-col>
                        <h6> Name: </h6>
                        <h6> Email: </h6>
                        <h6> College: </h6>
                        <h6> Course and Year </h6>
                        <h6> Phone Number: </h6>
                        <h6> Problem Category </h6>
                        <h6><span style="margin-left:20px"></span> Subject:</h6>
                        <h6><span style="margin-left:20px"></span> Issue:</h6>
                        <h6><span style="margin-left:20px"></span> Description:</h6><br>
                    </b-col>
                    <b-col cols="9">
                        <input disabled type="text" :value="this.$store.state.name"><br>
                        <input disabled type="text" :value="this.$store.state.email"><br>
                        <input disabled type="text" :value="this.$store.state.college"><br>
                        <input disabled type="text" :value="this.$store.state.coyear"><br>
                        <input disabled type="text" :value="this.$store.state.phone"><br>
                        <br><br>
                        <input disabled type="text" :value="this.$store.state.selectProblem">
                        <input disabled type="text" :value="this.$store.state.systemSub || this.$store.state.academicSub || this.$store.state.responseSub"><br>
                        <b-form-textarea plaintext disabled :value="this.$store.state.description"></b-form-textarea><br>
                    </b-col>
                </b-row>
            </div>
            <div>
                <b-row>
                    <b-col></b-col>
                    <b-col>
                        <br>
                        <b-button variant="warning" @click="home()">
                            Edit Response
                        </b-button>
                    </b-col>
                    <b-col>
                        <br>
                        <b-button variant="warning" @click="datapage()">
                            Submit
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
import { myIssue } from './MyMethods'

export default {
    name: 'ConfirmationPage',
    components: {
        Header
    },
    methods: {
        home() {
            setTimeout( () => this.$router.push({ path: '/'}),1000)
        },
        datapage() {
            setTimeout( () => this.$router.push({ path: '/datapage'}),1000)
            this.submitIssue()
        },

        async submitIssue() {
            const newIssue = {
                name: this.$store.state.name,
                email: this.$store.state.email,
                college: this.$store.state.college,
                coyear: this.$store.state.coyear,
                phone: this.$store.state.phone,
                selectProblem: this.$store.state.selectProblem,
                case: this.$store.state.systemSub || this.$store.state.academicSub || this.$store.state.responseSub,
                description: this.$store.state.description,
            }
            const issue = await myIssue(newIssue)
            console.log(issue) 
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

.btn {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}

input, textarea {
    margin: 6px;
    width: 95%;
    cursor: text;
    background-color: gainsboro;
    border: 1px solid gainsboro;
}

h6 {
    margin-bottom: 23px;
}

</style>