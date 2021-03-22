<template>
  <div class="total-value" :class="totalComputed">Balance: {{ total }}</div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalComputed: {
      get:function () {
        if (this.total === 0) return 'default';
        if (this.total > 0) return 'success';
        if (this.total < 0) return 'bad';
        return 'default';
      }
    }
  }
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}

.success {
  color: #00de00;
}

.bad {
  color: #ff0034;
}

.default {
  color: #2c3e50;
}
</style>
