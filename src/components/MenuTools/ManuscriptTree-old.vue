<template>
<div>
            <v-row>
          <v-col align="right">
            <v-btn small text>
              <v-icon>create_new_folder</v-icon>
            </v-btn>
            <v-btn small text>
              <v-icon>note_add</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      <v-list-item link>
          <v-list-item-action>
            <v-icon>import_contacts</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Your Book Title goes in here and can be quite long but proabbly wont be</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

 
</div>
</template>

<script>
export default {
      data: () => ({
           items: [
      {
        id: 1,
        name: "Central League",
        children: [
          { id: 101, name: "Dragons" },
          { id: 102, name: "Tigers" }
        ]
      },
      {
        id: 2,
        name: "Pacific League",
        children: [
          {
            id: 201,
            name: "Lions",
            children: [
              { id: 203, name: "Lions Minor" },
              {
                id: 204,
                name: "Lions third",
                children: [{ id: 2041, name: "Lions Minor Second" }]
              }
            ]
          }
        ]
      }
    ]
      })
}
</script>