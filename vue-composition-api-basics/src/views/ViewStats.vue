<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <!-- table row -->
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <!-- table data cell -->
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <!-- table data cell -->
          <td>Number of Character (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
/**
 * imports
 */
import { useStoreNotes } from "@/stores/storeNotes";

/**
 * store
 */
const storeNotes = useStoreNotes();
</script>
