<template>
    <v-card raised min-height="180px">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>Ziptastic API, returns city</v-card-text>
        <v-card-actions>
            <v-form>
                <v-text-field label="Zip Code" v-model="zip"></v-text-field>
            </v-form>
        </v-card-actions>
        <span>{{ city }}</span>
    </v-card>
</template>

<script>
// import _ from 'lodash'
import axios from 'axios'
import { setTimeout } from 'timers';
export default {
    name: 'ZipAPI',
    data() {
        return {
            title: 'Ziptastic API',
            zip: '',
            city: ''
        }
    },
    watch: {
        zip() {
            this.city = ''
            if (this.zip.length == 5) {
                this.city = "Searching..."
                setTimeout(this.lookupZip(), 500)
            }
        }
    },
    methods: {
        lookupZip() {
            axios.get('http://ziptasticapi.com/' + this.zip)
                .then(response => (this.city = response.data.city + ', ' + response.data.state))
            // .catch(error => {
            //     this.city = "Invalid Zipcode"
            //     console.log(this.city + error)
            //     })
                    
        }
    }
}
</script>