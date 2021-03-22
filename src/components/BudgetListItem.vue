<template>
  <div class="list-item">
    <span class="budget-comment">{{ comment }}</span>
    <span class="budget-value"><i :class="stateIcon"></i> {{ value}}</span>

    <ElPopconfirm
        title="Are you sure to delete this?"
        @confirm="deleteItem(id)"
    >
      <ElButton type="danger" slot="reference" size="mini">Удалить</ElButton>
    </ElPopconfirm>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "BudgetListItem",
  props: ['comment', 'value', 'id'],
  computed: {
    stateIcon: {
      get:function () {
        if (this.value > 0) return 'el-icon-arrow-up';
        if (this.value < 0) return 'el-icon-arrow-down';
        return '';
      }
    }
  },
  data: () => ({

  }),
  methods: {
    ...mapActions('budgetStore', ['deleteTaskBudget']),
    deleteItem(id) {
      this.deleteTaskBudget(id);
    },
    questionDeleteItem(answer) {
      if (answer) this.deleteItem(this.id);
    },
  }
}
</script>

<style scoped>
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
