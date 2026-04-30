const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return {
            KEY_1: "value",
            KEY_2: "",
            KEY_3: "",
            KEY_4: false,
            KEY_5: 0,
            KEY_6: "",
            KEY_7: "",
            KEY_8: false,
            KEY_9: 0,
            KEY_10: "",
            KEY_11: "",
            KEY_12: false,
            KEY_13: () => {
              return this.KEY_1;
            },
          };
        }
        const VAR_6 = FUNCTION_1();
    }
};