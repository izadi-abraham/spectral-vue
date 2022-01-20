<template>
  <div class="sidebar">
    <aside>
      <nav class="sidebar__content" role="navigation">
        <SideBarNode :node="tree"></SideBarNode>
      </nav>
    </aside>
  </div>
</template>

<script>

import SideBarNode from "../SidebarNode";

export default {
  name: "SideBar",
  components: {
    SideBarNode
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
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
    const tree = convertToTree(props.data)
    return {
      tree
    };
  },
}
</script>

<style scoped>

.sidebar {
  width: 300px;
  position: fixed;
  top: 100px;
  left: 0;
  height: 100vh;
  z-index: 999;
  background-color: #2b3940;
  transition: width .3s;
  box-sizing: border-box;
  color: #f2f2f2;
  font-size: 18px;
}

</style>