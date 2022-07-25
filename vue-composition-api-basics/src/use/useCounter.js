import {
  ref,
  reactive,
  computed,
  watch,
  onBeforeUpdate,
  onUpdated,
  onMounted,
  nextTick,
} from "vue";

// global constant
const counterData = reactive({
  count: 0,
  title: "My Counter",
});


export function useCounter() {
  /**
   * counter
   */


  watch(
    () => counterData.count,
    (newCount, oldCount) => {
      // console.log('newCount', newCount);
      if (newCount === 20) {
        alert("Way to go! You made it to 20!!");
      }
    }
  );

  // computed property
  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return "even";
    return "odd";
  });

  const increaseCounter = async (amount, e) => {
    counterData.count += amount;
    await nextTick();

    console.log("do something when counter has updated in the DOM! ");
  };
  const decreaseCounter = (amount) => {
    counterData.count -= amount;
  };

  onMounted(() => {
    console.log("Do stuff related to Counter");
  });


  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }
}
