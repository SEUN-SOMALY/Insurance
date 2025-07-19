<template>
  <section id="testimonial" class="py-5 px-3">
    <div class="container px-5">
      <h2 class="text-center text-blue mb-5 fw-bold">ចំណាប់អារម្មណ៍របស់អតិថិជន</h2>
      <div class="position-relative overflow-hidden">
        <!-- Slide Track -->
        <div
          class="d-flex transition-transform"
          :style="{ transform: `translateX(-${(100 / visibleSlides) * currentIndex}%)`, transition: 'transform 0.5s ease-in-out' }"
          ref="track"
        >
          <div
            v-for="(testimonial, idx) in testimonials"
            :key="idx"
            class="flex-shrink-0 mx-2"
            :class="slideWidthClass"
          >
            <div
              class="bg-white text-dark rounded shadow-sm h-100 d-flex flex-column align-items-center p-4 hover-shadow"
              style="transition: transform 0.3s ease;"
              @mouseover="hoveredIndex = idx"
              @mouseleave="hoveredIndex = null"
              :style="{ transform: hoveredIndex === idx ? 'translateY(-5px)' : 'none' }"
            >
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="rounded-circle mb-3 border-blue"
                style="width: 80px; height: 80px; object-fit: cover;"
              />
              <h5 class="fw-bold text-blue mb-1">{{ testimonial.name }}</h5>
              <p class=" mb-3 text-center flex-grow-1">{{ testimonial.quote }}</p>
              <div class="text-warning">
                <i
                  v-for="n in 5"
                  :key="n"
                  class="bi"
                  :class="n <= testimonial.rating ? 'bi-star-fill' : 'bi-star'"
                ></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Previous Button -->
      <button
        @click="goPrev"
        type="button"
        class="btn btn-secondary position-absolute top-50 start-0 translate-middle-y rounded-circle shadow"
        style="width: 40px; height: 40px;"
        aria-label="Previous"
      >
        <i class="fas fa-arrow-left"></i>

      </button>

      <!-- Next Button -->
      <button
        @click="goNext"
        type="button"
        class="btn btn-secondary position-absolute top-50 end-0 translate-middle-y rounded-circle shadow"
        style="width: 40px; height: 40px;"
        aria-label="Next"
      >
        <i class="fas fa-arrow-right"></i>
        
      </button>

      </div>

      <!-- Pagination Dots -->
      <div class="d-flex justify-content-center mt-4 gap-2">
        <button
          v-for="n in maxIndex + 1"
          :key="n"
          @click="goToSlide(n - 1)"
          type="button"
          :class="['btn', 'btn-sm', 'rounded-circle', currentIndex === n -1 ? 'btn-blue' : 'btn-secondary']"
          style="width: 12px; height: 12px; padding: 0;"
          :aria-label="`Go to slide ${n}`"
        />
      </div>
    </div>
  </section>
</template>

<script>
import person1 from '../../assets/HeroFire2.png';
import person2 from '../../assets/HeroFire2.png';
import person3 from '../../assets/HeroFire2.png';

export default {
  name: 'TestimonialCarousel',
  data() {
    return {
      currentIndex: 0,
      hoveredIndex: null,
      windowWidth: window.innerWidth,
      testimonials: [
        {
          image: person1,
          name: 'Neil McCarthy',
          quote: 'We found that they were invaluable to kickstart our web app and quickly get us to a customer ready product.',
          rating: 4
        },
        {
          image: person2,
          name: 'Jane Doe',
          quote: 'Their expertise and support were crucial for our project success. Highly recommended!',
          rating: 5
        },
        {
          image: person3,
          name: 'Peter Smith',
          quote: 'Fantastic service and great results. We are very happy with their work.',
          rating: 3
        },
        {
          image: person1,
          name: 'John Doe',
          quote: 'This service truly transformed our workflow. Absolutely outstanding!',
          rating: 5
        },
        {
          image: person2,
          name: 'Emily White',
          quote: "I've never experienced such dedicated support. A game-changer for my business.",
          rating: 4
        },
        {
          image: person3,
          name: 'Michael Brown',
          quote: 'Efficient, reliable, and incredibly user-friendly. Highly recommend to anyone.',
          rating: 5
        }
      ]
    };
  },
  computed: {
    visibleSlides() {
      if (this.windowWidth >= 1024) return 3;
      if (this.windowWidth >= 768) return 2;
      return 1;
    },
    maxIndex() {
      return this.testimonials.length - this.visibleSlides;
    },
    slideWidthClass() {
      if (this.visibleSlides === 3) return 'col-lg-4';
      if (this.visibleSlides === 2) return 'col-md-6';
      return 'col-12';
    }
  },
  methods: {
    goPrev() {
      if (this.currentIndex <= 0) {
        this.currentIndex = this.maxIndex;
      } else {
        this.currentIndex--;
      }
    },
    goNext() {
      if (this.currentIndex >= this.maxIndex) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    goToSlide(idx) {
      this.currentIndex = idx;
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
      if (this.currentIndex > this.maxIndex) {
        this.currentIndex = this.maxIndex >= 0 ? this.maxIndex : 0;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }
};
</script>

<style scoped>
.transition-transform {
  transition: transform 0.5s ease-in-out;
}

.hover-shadow:hover {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  transform: translateY(-0.25rem) !important;
}
</style>
