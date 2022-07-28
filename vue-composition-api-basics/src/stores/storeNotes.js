import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quasi tempora nisi aut veritatis, magnam sit? Rem eos modi sapiente reprehenderit sint cupiditate dolorum laborum maiores corrupti, dolore, commodi unde!",
        },
        {
          id: "id2",
          content: "This is a shorter note!xxxxxxxxxxxxxxx",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      let note = {
        id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => {
        return note.id !== idToDelete;
      });
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      // console.log(index);
      this.notes[index].content = content;
    },
  },

  // getters
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => {
          return note.id === id;
        })[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
