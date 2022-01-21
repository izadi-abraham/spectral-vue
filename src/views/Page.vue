<script>
import Content from "../components/Content/index.vue";
import list from "../data/measurements.json";
import assets from "../data/assets.json";
import { useRoute } from "vue-router";

export default {
  name: "Page",
  components: {
    Content
  },
  props: {},

  methods: {
    findAggregate(id) {

      let values = {}

      const convertToTree = (menuItems) => {
        let output = [], magicArr = [{array: output, id: 0}]
        for (let item of menuItems) {
          if (item.parentId === null)
            item.parentId = 0
          let index = magicArr.findIndex(magic => {
            return magic.id === item.parentId
          })
          if (!Array.isArray(magicArr[index].array)) {
            magicArr[index].array = magicArr[index].array.child = []
          }
          let nv = Object.assign({}, item)
          magicArr[index].array.push(nv)
          magicArr[++index] = {array: nv, id: item.id}
        }
        return output
      }

      const tree = convertToTree(assets)

      const findChildren = (nodeId, tree) => {

        const findNode = (tree, nodeId) => {
          let node = tree.find((node) => node.id === nodeId)
          if (!node) {
            for (let i = 0; i < tree.length; i++) {
              if (tree[i].child && nodeId) {
                node = findNode(tree[i].child, nodeId)
              }
            }
          }
          return node
        }

        let results = []

        const findResult = (children) => {
          if (children?.length) {
            children.map((child) => {
              results.push(child.id)
              if (child.child) {
                findResult(child.child)
              }
            });
          }
        }

        const node = findNode(tree, id)

        findResult(node.child);

        return results
      }

      const findValues = (id) => {
        let match = list.find((data) => data.assetId === id)
        if (match) {
          for (let key in match.measurements) {
            values[key] = (values[key] || 0) + match.measurements[key]
          }
        }
      }

      let children = findChildren(id, tree)

      if (children.length) {
        children.forEach((child) => findValues(child))
      }
      else {
        findValues(id)
      }

      return values
    }
  },

  computed: {
    getData() {
      const route = useRoute()
      return this.findAggregate(Number(route.params.id))
    }
},
};
</script>

<template>
  <div class="page">
    <Content :values="getData"/>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
