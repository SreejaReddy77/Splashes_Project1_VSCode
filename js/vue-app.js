// Simple Vue component example for the project.
// This file can be connected to any page with a #vue-app container.
const SplashesVue = {
  data() {
    return {
      message: 'Every swimmer has a superpower.',
      count: 0
    }
  },
  methods: {
    cheer() {
      this.count++;
      this.message = this.count % 2 ? 'You are making waves! 🌊' : 'Keep swimming! 🏊';
    }
  },
  template: `
    <div class="p-4 text-center" style="background:#e9fbfa;border-radius:20px">
      <h4>{{ message }}</h4>
      <button class="btn btn-splash mt-2" @click="cheer">Give Me A Cheer</button>
    </div>
  `
};