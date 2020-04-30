const url = "https://api.steinhq.com/v1/storages/5d0374a0e8f87532b83a4e3b/SpAnnouncement_Output";  
const vm = new Vue({
  el: '#SpAnnounce',
  data: {
    announcements: []
  },
  mounted() {
      axios.get(url).then(response => {
        this.announcements = response.data
      })
    }
});

const urll = "https://api.steinhq.com/v1/storages/5d0374a0e8f87532b83a4e3b/OnlineKidsChurchLinks";  
const vml = new Vue({
  el: '#OnlineKidsChurchLinks',
  data: {
    links: []
  },
  mounted() {
      axios.get(urll).then(response => {
        this.links = response.data
      })
    }
});

const urlll = "https://api.steinhq.com/v1/storages/5d0374a0e8f87532b83a4e3b/SpAnnouncement_Output";  
const vmll = new Vue({
  el: '#SpAnnounceB',
  data: {
    announcementsB: []
  },
  mounted() {
      axios.get(urlll).then(response => {
        this.announcementsB = response.data
      })
    }
});
