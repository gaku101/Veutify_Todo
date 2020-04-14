<template>
  <div>
    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="text-center ml-3" promary-title>Add a New Project</v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

            <v-menu max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on" :rules="inputRules"></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>

            <v-btn text class="success mx-0 mt-3" @click="submit">Add project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import db from '../plugins/fb.js'

export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    };
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()){
        console.log(this.title, this.content);
        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), 'do MMM yyyy'),
          person: 'The Net Ninja',
          status: 'ongoing'
        }

        db.collection('projects').add(project).then(() => {console.log('added to db')})
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
    }
  }
};
</script>