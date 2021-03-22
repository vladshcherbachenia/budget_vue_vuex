<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <BudgetListItem v-for="(item, prop) in listFilter"
                        :key="prop"
                        :comment="item.comment"
                        :value="item.value"
                        :id="item.id"/>
      </template>
      <template>
        <ElButton @click="sortList('INCOME')" type="success">ДОХОДЫ</ElButton>
        <ElButton @click="sortList('OUTCOME')" type="primary">РАСХОДЫ</ElButton>
        <ElButton @click="sortList('ALL')" type="primary">ВСЕ</ElButton>
      </template>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";
import { mapGetters } from 'vuex';

export default {
  name: "BudgetList",
  components:{
    BudgetListItem
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    header: "Вас бюджет",
    emptyTitle: "Пустой лист",
    state: 'ALL',
  }),
  computed: {
    ...mapGetters('budgetStore', ['listTasks']),
    isEmpty() {
      return !Object.keys(this.listTasks).length;
    },
    listFilter: {
      get: function () {
        if (this.state === 'ALL') return this.listTasks;

        const list = Object.values(this.listTasks);
        const listFilter =  list.filter((item) => {
          return item.type === this.state;
        })

        return listFilter;
      },
    },
  },
  methods: {
    sortList(type) {
      this.state = type;
    }
  }
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
</style>
