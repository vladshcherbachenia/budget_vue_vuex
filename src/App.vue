<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" />
    <BudgetList :list="list" @deleteItem="onDeleteItem" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import { mapGetters } from 'vuex';

export default {
  name: "app",
  components: {
    BudgetList,
    TotalBalance,
    Form
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters('budgetStore', ['listTasks']),
    totalBalance() {
      return Object.values(this.listTasks).reduce(
        (acc, item) => acc + item.value,
        0
      );
    }
  },
  methods: {
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
