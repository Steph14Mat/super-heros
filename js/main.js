const { createApp } = Vue

createApp({
  data() {
    return {
      superHeroName: "",
      allHerosData: [],
      herosData: [],
      selectedHero: null,
    }
  },

  methods: {
    fetchData() {
      fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
        .then(response => response.json())
        .then(data => {
          console.log(this.allHerosData = data);
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la récupération des données de super-héros:', error)
        })
    },
    searchSuperHero() {
      let filteredHeros = this.allHerosData.filter(hero => hero.name.toLowerCase().includes(this.superHeroName.toLowerCase()));
      this.herosData = filteredHeros.slice(0, 10);
    },
    selectHero(hero) {
      this.selectedHero = hero;
    },
    closeNewWindow() {
      this.selectedHero = null;
    }
  },

  watch: {
    superHeroName: function (newSuperHeroName) {
      this.searchSuperHero();
    }
  },

  mounted() {
    this.fetchData()
  }
}).mount('#superHeros')
